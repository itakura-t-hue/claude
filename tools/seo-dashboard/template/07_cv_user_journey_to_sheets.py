"""
CV遷移経路（ユーザー単位）→ Google Spreadsheet 同期スクリプト

GA4ローデータからCVユーザーの全セッション遷移を抽出し、
ユーザー単位の情報（初回訪問日・訪問回数・CV到達セッション番号）を付与して
スプレッドシートの「User Journey」タブに書き込む。

全日付データを横断するため、毎回フルリビルド。

Usage:
  初回認証:  python 07_cv_user_journey_to_sheets.py --auth-only
  通常実行:  python 07_cv_user_journey_to_sheets.py
"""

import argparse
import json
from collections import defaultdict
from datetime import datetime, timedelta
from pathlib import Path

from google.auth.transport.requests import Request
from google.cloud import bigquery
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

SCOPES = [
    "https://www.googleapis.com/auth/bigquery",
    "https://www.googleapis.com/auth/spreadsheets",
]

TOKEN_PATH = Path(__file__).parent / "token_sheets.json"

# ★ サイトごとに書き換え: CVとして計測するGA4イベント名
CV_EVENTS = ("YOUR_CV_EVENT_1", "YOUR_CV_EVENT_2")

TAB_NAME = "User Journey"


def load_config():
    config_path = Path(__file__).parent / "config.json"
    if not config_path.exists():
        config_path = Path(__file__).parent / "config_sample.json"
    with open(config_path, encoding="utf-8") as f:
        return json.load(f)


def get_credentials(config):
    creds = None
    if TOKEN_PATH.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_PATH), SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                config["ga4"]["oauth_client_secret_path"], SCOPES
            )
            creds = flow.run_local_server(port=0)
        with open(TOKEN_PATH, "w") as f:
            f.write(creds.to_json())
    return creds


def fetch_cv_user_journeys(bq_client, dataset_id, cv_events):
    """CVしたユーザーの全セッション・全ステップを取得"""
    cv_list = ", ".join(f"'{e}'" for e in cv_events)
    event_list = f"'page_view', {cv_list}"

    query = f"""
    WITH all_events AS (
      SELECT
        user_pseudo_id,
        (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'ga_session_id') AS session_id,
        event_date,
        event_timestamp,
        event_name,
        REGEXP_REPLACE(
          (SELECT value.string_value FROM UNNEST(event_params) WHERE key = 'page_location'),
          r'\\?.*', ''
        ) AS page_url
      FROM `{bq_client.project}.{dataset_id}.events_*`
      WHERE event_name IN ({event_list})
    ),
    session_source AS (
      SELECT
        user_pseudo_id,
        (SELECT value.int_value FROM UNNEST(event_params) WHERE key = 'ga_session_id') AS session_id,
        IFNULL(collected_traffic_source.manual_source, traffic_source.source) AS source,
        IFNULL(collected_traffic_source.manual_medium, traffic_source.medium) AS medium
      FROM `{bq_client.project}.{dataset_id}.events_*`
      WHERE event_name = 'session_start'
    ),
    cv_users AS (
      SELECT DISTINCT user_pseudo_id
      FROM all_events
      WHERE event_name IN ({cv_list})
    )
    SELECT
      ae.user_pseudo_id,
      ae.session_id,
      ae.event_date,
      ae.event_timestamp,
      ae.event_name,
      ae.page_url,
      IFNULL(ss.source, '(direct)') AS source,
      IFNULL(ss.medium, '(none)') AS medium
    FROM all_events ae
    INNER JOIN cv_users cu
      ON ae.user_pseudo_id = cu.user_pseudo_id
    LEFT JOIN session_source ss
      ON ae.user_pseudo_id = ss.user_pseudo_id
      AND ae.session_id = ss.session_id
    ORDER BY ae.user_pseudo_id, ae.event_timestamp
    """
    result = bq_client.query(query).result()
    rows = [dict(row) for row in result]
    print(f"  {len(rows)}行取得（CVユーザーの全イベント）")
    return rows


def build_user_journeys(rows):
    """生データをユーザー > セッション > ステップの構造に変換"""
    users = defaultdict(lambda: defaultdict(lambda: {
        "events": [],
        "source": "(direct)",
        "medium": "(none)",
        "date": "",
        "has_cv": False,
        "cv_event": None,
    }))

    for row in rows:
        uid = row["user_pseudo_id"]
        sid = row["session_id"]
        session = users[uid][sid]
        session["events"].append({
            "event_name": row["event_name"],
            "page_url": row["page_url"],
            "event_timestamp": row["event_timestamp"],
        })
        session["source"] = row["source"]
        session["medium"] = row["medium"]
        ed = row["event_date"]
        session["date"] = f"{ed[:4]}-{ed[4:6]}-{ed[6:8]}"
        if row["event_name"] in CV_EVENTS:
            session["has_cv"] = True
            session["cv_event"] = row["event_name"]

    return users


def pivot_user_journeys(users):
    """ユーザー単位のデータを横展開レコードに変換"""
    all_records = []
    max_steps = 0

    for uid, sessions in users.items():
        sorted_sessions = sorted(
            sessions.items(),
            key=lambda x: min(e["event_timestamp"] for e in x[1]["events"])
        )

        total_sessions = len(sorted_sessions)

        first_session = sorted_sessions[0][1]
        first_events = sorted(first_session["events"], key=lambda e: e["event_timestamp"])
        first_visit_date = first_session["date"]
        first_visit_page = ""
        for e in first_events:
            if e["event_name"] == "page_view":
                first_visit_page = e["page_url"]
                break

        for session_idx, (sid, session) in enumerate(sorted_sessions):
            session_no = session_idx + 1
            events = sorted(session["events"], key=lambda e: e["event_timestamp"])

            steps = []
            cv_event = ""
            for e in events:
                if e["event_name"] in CV_EVENTS:
                    steps.append(f"【CV】{e['event_name']}")
                    cv_event = e["event_name"]
                else:
                    steps.append(e["page_url"])

            total_steps = len(steps)
            if total_steps > max_steps:
                max_steps = total_steps

            record = [
                session["date"],
                uid,
                first_visit_date,
                first_visit_page,
                total_sessions,
                session_no,
                "○" if session["has_cv"] else "",
                cv_event,
                session["source"],
                session["medium"],
                total_steps,
            ] + steps

            all_records.append(record)

    fixed_cols = [
        "date", "user_pseudo_id", "first_visit_date", "first_visit_page",
        "total_sessions", "session_no", "is_cv", "cv_event",
        "source", "medium", "total_steps",
    ]
    header = fixed_cols + [f"step{i}" for i in range(1, max_steps + 1)]

    return header, all_records, max_steps


def col_index_to_letter(index):
    result = ""
    while index >= 0:
        result = chr(ord("A") + index % 26) + result
        index = index // 26 - 1
    return result


def ensure_tab_exists(sheets_service, spreadsheet_id):
    """User Journeyタブがなければ作成"""
    spreadsheet = sheets_service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
    tabs = [s["properties"]["title"] for s in spreadsheet["sheets"]]
    if TAB_NAME not in tabs:
        sheets_service.spreadsheets().batchUpdate(
            spreadsheetId=spreadsheet_id,
            body={"requests": [{"addSheet": {"properties": {"title": TAB_NAME}}}]},
        ).execute()
        print(f"  「{TAB_NAME}」タブを作成しました")


def expand_sheet_columns(sheets_service, spreadsheet_id, needed_columns):
    """シートの列数を必要数まで拡張"""
    spreadsheet = sheets_service.spreadsheets().get(spreadsheetId=spreadsheet_id).execute()
    for sheet in spreadsheet["sheets"]:
        if sheet["properties"]["title"] == TAB_NAME:
            current_cols = sheet["properties"]["gridProperties"]["columnCount"]
            sheet_id_num = sheet["properties"]["sheetId"]
            break
    else:
        return

    if current_cols >= needed_columns:
        return

    sheets_service.spreadsheets().batchUpdate(
        spreadsheetId=spreadsheet_id,
        body={"requests": [{
            "appendDimension": {
                "sheetId": sheet_id_num,
                "dimension": "COLUMNS",
                "length": needed_columns - current_cols,
            }
        }]},
    ).execute()
    print(f"  シート列数を {current_cols} → {needed_columns} に拡張")


def get_or_create_spreadsheet(sheets_service, config):
    """スプレッドシートIDをconfigから取得。なければ新規作成"""
    sheet_id = config.get("cv_journey_sheet_id")

    if sheet_id:
        try:
            sheets_service.spreadsheets().get(spreadsheetId=sheet_id).execute()
            return sheet_id
        except Exception:
            print("[WARN] 設定済みのスプレッドシートにアクセスできません。新規作成します。")

    spreadsheet = sheets_service.spreadsheets().create(
        body={
            "properties": {"title": f"CV遷移経路"},
            "sheets": [{"properties": {"title": TAB_NAME}}],
        }
    ).execute()
    sheet_id = spreadsheet["spreadsheetId"]
    print(f"  スプレッドシート新規作成: https://docs.google.com/spreadsheets/d/{sheet_id}")

    config["cv_journey_sheet_id"] = sheet_id
    config_path = Path(__file__).parent / "config.json"
    with open(config_path, "w", encoding="utf-8") as f:
        json.dump(config, f, indent=2, ensure_ascii=False)
    print(f"  config.json に cv_journey_sheet_id を保存しました")

    return sheet_id


def write_to_sheet(sheets_service, spreadsheet_id, header, records):
    """タブをクリアしてヘッダー + データを書き込み"""
    sheets_service.spreadsheets().values().clear(
        spreadsheetId=spreadsheet_id,
        range=TAB_NAME,
    ).execute()

    body = {"values": [header] + records}
    sheets_service.spreadsheets().values().update(
        spreadsheetId=spreadsheet_id,
        range=f"{TAB_NAME}!A1",
        valueInputOption="RAW",
        body=body,
    ).execute()
    print(f"  {len(records)}行 書き込み完了")


def main():
    parser = argparse.ArgumentParser(description="CV遷移経路（ユーザー単位）→ Google Sheets 同期")
    parser.add_argument("--auth-only", action="store_true", help="認証のみ実行")
    args = parser.parse_args()

    config = load_config()
    creds = get_credentials(config)

    if args.auth_only:
        print("認証完了。token_sheets.json が生成されました。")
        return

    print("=== CV遷移経路（ユーザー単位）→ Google Sheets 同期 ===")

    bq_client = bigquery.Client(
        project=config["gcp_project_id"],
        credentials=creds,
        location=config["bigquery_location"],
    )
    sheets_service = build("sheets", "v4", credentials=creds)

    print("\n[1/3] スプレッドシート準備...")
    spreadsheet_id = get_or_create_spreadsheet(sheets_service, config)
    ensure_tab_exists(sheets_service, spreadsheet_id)

    print("\n[2/3] BigQueryからCVユーザーの全セッションデータ取得中...")
    ga4_dataset = f"analytics_{config['ga4']['property_id'].replace('properties/', '')}"
    rows = fetch_cv_user_journeys(bq_client, ga4_dataset, CV_EVENTS)

    if not rows:
        print("  CVデータがありません。")
        return

    users = build_user_journeys(rows)
    header, records, max_steps = pivot_user_journeys(users)
    print(f"  CVユーザー数: {len(users)}人")
    print(f"  総セッション数: {len(records)}行")
    print(f"  最大ステップ数: {max_steps}")

    print("\n[3/3] スプレッドシートに書き込み中...")
    needed_columns = len(header)
    expand_sheet_columns(sheets_service, spreadsheet_id, needed_columns)
    write_to_sheet(sheets_service, spreadsheet_id, header, records)

    print(f"\n=== 完了 ===")
    print(f"スプレッドシート: https://docs.google.com/spreadsheets/d/{spreadsheet_id}")


if __name__ == "__main__":
    main()
