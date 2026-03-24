# SEO統合ダッシュボード 要件定義書 v3.0

| 項目 | 内容 |
|------|------|
| **バージョン** | v3.0 |
| **作成日** | 2026-03-23 |
| **ステータス** | 承認待ち |
| **対象読者** | 開発チーム / WEB事業部長 / 社長 |

> **この資料の読み方**
> 本書は **2種類の読者** を想定して作成しています。
> - **ビジネス解説（青い囲み）**: 技術用語を使わず、「なぜこの機能が必要か」「ビジネスにどう効くか」を平易に説明。承認判断にお役立てください。
> - **技術仕様（グレーの囲み）**: エンジニアが実装に着手できるレベルの詳細仕様。API名、DB定義、コード例を含みます。
>
> 全体像を把握したい方は **ビジネス解説だけ** を読み進めていただければ、30分程度でプロジェクト全体を理解できます。

---

## 目次

1. なぜ作るのか（背景・課題・目的）
2. 誰が使うのか（ユーザー定義）
3. 何のデータを使うのか（データソース詳細）
4. サービスパッケージ・プラン設計
5. データベース設計（全テーブル定義）
6. 画面仕様（全画面の詳細）
7. API設計（エンドポイント一覧）
8. バッチ処理設計（データ同期）
9. アラート・通知設計
10. レポート自動生成設計
11. ナレッジベース
12. 連絡手段一元化
13. 技術構成・インフラ
14. セキュリティ・権限設計
15. 非機能要件
16. データ分析基盤強化 + BigQuery連携
17. 開発ロードマップ・工数見積
18. 費用対効果・ROI試算
19. リスクと対策
20. 用語集

---

## 1. なぜ作るのか（背景・課題・目的）

> **💼 ビジネス解説：なぜこのツールが必要なのか**
> 現在のチーム体制は **コンサルタント6名（1人あたり20〜30案件 = 総計120〜180案件）、エンジニア3名、新卒4名入社予定** です。案件数に対して人員が足りず、対応品質が落ちることで解約が発生しています。
> このツールの最大の目的は **「解約の阻止」** です。効率化はその手段にすぎません。クライアントが「このツールを使い続けたい」「解約したらデータが消えてもったいない」と感じる **ロックイン構造** を設計し、さらにコンテンツ制作プロセスの効率化で炎上→解約を防ぎます。

### 1.1 チーム規模と現状

| 項目 | 現状 |
|------|------|
| **チーム規模** | コンサルタント6名（+新卒4名入社予定）、エンジニア3名 |
| **1人あたり案件数** | 20〜30案件 |
| **総案件数** | 約120〜180案件 |
| **最も時間がかかる工程** | データ分析 → 所感考察 + 月2案の改善提案 |
| **クライアント連絡手段** | Chatwork / メール / Backlog（バラバラ。一元化したい） |
| **ライター管理** | クラウドワークス + パートナー会社。都度公募 |
| **エンジニア工数** | 実装案件で手一杯。社内ツール開発には強い提案が必要 |
| **CMS** | WP中心だが MT / Shopify / AWS等も混在 |

### 1.2 現場の課題（解約に直結する問題）

> **⚠️ 主な解約理由**
> (1) **対応不良**（案件過多で回らない）  (2) **成果不良**（分析・ナレッジに時間が取れない）

| # | 課題 | 影響 | ツール導入後 |
|---|------|------|------------|
| 1 | **1人あたり案件が多すぎて対応品質が低下** | コンサルタントの疲弊・離職、クライアントへの対応遅延 → 解約 | レポート・データ収集を自動化し、分析・提案に時間を使える |
| 2 | **分析・ナレッジに時間が取れず、コンサルティング品質が低下** | 改善提案の質が下がり、成果が出ない → 解約 | AI改善提案、ナレッジベースで品質を底上げ。新卒も即戦力化 |
| 3 | **クライアントとの連絡手段がバラバラ** | Chatwork/メール/Backlogに散在。連絡の見落とし → 対応漏れ → 不信感 | ダッシュボード内チャットに一元化。段階的にChatwork API連携 |
| 4 | **コンテンツレビュープロセスが炎上を引き起こす** | 大量記事発注でクライアントの細かいチェック対応が回らない → 炎上 → 解約 | クライアント直接承認、自動リマインダー、ライター直接フィードバック |
| 5 | **予算都合の解約に対するロックインがない** | 「一旦止めます」と言われたら引き止める材料がない | 保守プラン提案 + データロックイン（解約したら全履歴データを失う） |

### 1.3 プロジェクト目的

> **💼 ビジネス解説：このツールの目的は「解約阻止」**
> 効率化は手段であって目的ではありません。このツールの最大の目的は **「クライアントが解約しない仕組みを作ること」** です。年間5件の解約を防げれば、月額30万 x 12ヶ月 x 5件 = **年間1,800万円の売上維持** に直結します。

**最優先: 解約阻止**
- コンテンツ管理の炎上防止
- 保守プランによるロックイン
- データ蓄積で「やめたらもったいない」構造
- 年間解約5件防止 = 年間1,800万円維持

**社内効率化**
- レポート作成工数 60%削減
- データ収集の完全自動化
- 担当可能クライアント数 30%増
- 新卒の戦力化を6ヶ月→3ヶ月に短縮

### 1.4 解決すべき課題TOP2

| 優先度 | 課題 | 解決策 | 期待効果 |
|--------|------|--------|----------|
| **1位** | **コンテンツ進捗管理の一元化（炎上→解約防止）** | コンテンツ管理 + クライアントポータル + チャット（Phase 1） | 大量記事発注の炎上→解約を防止 |
| **2位** | **保守プラン提案による解約阻止（ロックイン）** | データロックイン + 保守プランUI + 比較画面（Phase 3） | 予算都合の解約に「保守プラン」という選択肢を提示 |

### 1.5 段階的リリース計画（4フェーズ）

| フェーズ | 期間目安 | 何ができるようになるか | ビジネスインパクト |
|---------|---------|---------------------|------------------|
| **Phase 1 解約阻止** | 3ヶ月 | コンテンツ進捗管理 + クライアントポータル + チャット + ライターポータル | 炎上→解約の防止。クライアントが「自分で確認できる」状態を実現 |
| **Phase 2 スケール** | 2ヶ月 | GSC/GA4/Ahrefs/CMS連携 + 概要ダッシュボード（120案件スケール） + 通知設計 | データ収集作業ゼロ。120案件を1画面で俯瞰管理 |
| **Phase 3 ロックイン** | 2ヶ月 | レポート自動生成 + AI改善提案 + 保守プラン設計 + ナレッジベース | レポート工数削減 + 保守プランによる解約阻止ロックイン |
| **Phase 4 分析基盤** | 1ヶ月 | Site Audit深度統合 + BigQuery連携 + 高度分析機能 | データ分析基盤の強化。BigQueryによる深い分析が可能に |

### 1.6 前提条件

> **⚠️ 開発開始前に必要な準備**
> - **Ahrefs Advancedプラン（$449/月）のツール専用アカウント契約が必要** — 120社の日次同期で現行アカウントのユニット上限を超過するため
> - 自社GCPプロジェクトの作成（Cloud Run, Cloud SQL, BigQuery, Memorystore, Cloud Storage）
> - Google Ads APIの既存アカウントでの有効化（Keyword Planner利用）
> - **GA4の管理者権限への昇格依頼** — 現行の共有用Gmailアカウントの権限を「閲覧者」→「管理者」に変更してもらう（BigQueryエクスポート設定を自社で代行するため）

> **💼 データ管理方針：全データを自社GCPに集約**
> 本ツールが扱う全てのデータは **自社GCPプロジェクト内で完結** して管理します。
> - **GA4のローデータ（イベント単位の生データ）**: GA4のBigQueryエクスポート機能を使い、エクスポート先を自社GCPのBigQueryに設定。ユーザー行動ログが毎日自動で自社BQに蓄積される
> - **GSC/Ahrefs等の集計データ**: 各APIで取得 → 自社BigQueryにINSERT
> - **保守プランのロックイン**: GA4ローデータ含む全データが自社管理下にあるため、解約時にはこの蓄積データへのアクセスが全て失われる。特にGA4ローデータはGA4本体では14ヶ月で消えるが、自社BQなら永久保持

> **🎯 GA4ローデータ蓄積のメリット（コンサルの提案幅が大幅拡大）**
> GA4 Data API（集計データ）だけでは「2月のSSは40,600」止まりです。BigQueryにローデータを蓄積すると：
> - **CVユーザーの行動パス分析** — どの記事→どのサービスページ→CVした？
> - **コンテンツ品質の定量評価** — ページ滞在時間×スクロール深度で「ちゃんと読まれてる記事」を特定
> - **内部リンクのクリック率** — どのCTAが踏まれているか、改善すべきリンクはどれか
> - **フォーム離脱分析** — CVフォームのどの項目で離脱しているか
> - **デバイス×ページ別CVR差異** — モバイルだけCVRが低いページの特定
> - **時間帯・曜日別の行動パターン** — 最適な記事公開タイミングの提案
> - **新規 vs リピーターの行動差異** — リピーター向けコンテンツ戦略

> **🔧 認証方式・データ取得方式の詳細**

| サービス | 権限 | データ取得方式 | BQ蓄積データ | クライアント側の作業 |
|---------|------|--------------|------------|-------------------|
| **GA4（ローデータ）** | 共有Gmailに**管理者権限**（現行「閲覧者」から昇格依頼） | GA4管理画面のBigQueryエクスポート機能を**自社が設定代行**。エクスポート先を自社GCPのBigQueryデータセットに指定。毎日自動送信 | 全イベントの生データ（page_view, scroll, click, purchase等） | GA4権限を「閲覧者→管理者」に変更（1回のみ） |
| **GA4（集計データ）** | 同上（管理者権限に包含） | GA4 Data API（OAuth 2.0）で日次バッチ取得 → 自社BQにINSERT | セッション数、ユーザー数、CV数、チャンネル別、LP別等 | なし |
| **GSC** | 共有Gmailに閲覧者権限（現行通り） | Search Console API（OAuth 2.0）で日次バッチ取得 → 自社BQにINSERT | クエリ別クリック/表示/CTR/順位、ページ別データ | なし |
| **GTM** | 現行通り | 本ツールでは不使用（GA4ローデータに包含） | - | なし |
| **Ahrefs** | ツール専用アカウント | API v3で日次/週次バッチ取得 → 自社BQにINSERT | DR、被リンク数、参照ドメイン、KD | なし |
| **Keyword Planner** | 既存Google Adsアカウント | Google Ads APIで月次バッチ or 手動CSV | 検索Vol（月間） | なし |

**GA4 BigQueryエクスポートの設定フロー:**
1. クライアントにGA4の権限を「閲覧者」→「管理者」に変更してもらう（1回のみの作業）
2. 自社ディレクターがGA4管理画面にログインし、[管理] → [BigQueryリンク] からエクスポートを設定
3. エクスポート先に自社GCPプロジェクトのBigQueryデータセットを指定（`client_{id}_ga4`）
4. エクスポート頻度: 「毎日」を選択
5. 設定完了後、翌日からローデータが自動で自社BQに蓄積開始

**移行計画:**

| 対象 | 対応 |
|------|------|
| **新規クライアント** | 契約時にGA4管理者権限の付与を標準オンボーディングに組み込む |
| **既存クライアント（重要案件）** | Phase 2開始時に上位20社から順次、権限昇格を依頼 |
| **既存クライアント（その他）** | 段階的に依頼。権限昇格前はGA4 Data API（集計データ）で運用継続 |

GA4管理者権限が未取得のクライアントについては、GA4 Data APIでの集計データ取得にフォールバックする。

---

## 2. 誰が使うのか（ユーザー定義）

> **💼 ビジネス解説**
> このツールは **自社（SEO事業部）のメンバー** だけでなく、**クライアント企業の担当者** や **外部ライター** も使います。それぞれ見える範囲と操作できる範囲が違うので、ログインする人の「役割」に応じて画面を出し分けます。

### 組織構成

```
WEB事業部
└ SEO事業部
  ├ 事業部長（部長）: 1名
  ├ セールス（新規営業）: 4-6名
  ├ プリセールス（既存営業）: 3-4名
  ├ ディレクター（SEO施策ディレクション）: 6名
  ├ エンジニア（実装対応）: 3名
  └ コンテンツ担当（ライターとのコミュニケーション）: 5名
```

### 外部関係者
- **パートナーライター会社**: 3社
- **フリーランスライター**: 案件ごとに1名起用（クラウドワークス等で都度公募）
- **フリーランスディレクター**: 随時起用
- **フリーランスエンジニア**: 随時起用

### 承認チェーン
**ツール導入承認者**: WEB事業部長 + 社長

### ツールのユーザーロール

| ロール | 対応する社内ポジション | 人数目安 | ツールでの権限 | フェーズ |
|--------|---------------------|---------|--------------|--------|
| **管理者** | 事業部長 | 1名 | 全権限。ユーザー管理、設定変更、全クライアントの閲覧 | P1 |
| **メンバー（セールス）** | 新規営業 | 4-6名 | 担当クライアントの全データ閲覧・編集、コンテンツ管理、レポート生成・編集・DL、タスク管理、KW追加・削除、チャット送受信（全チャンネル）。**3職種とも同一権限** | P1 |
| **メンバー（プリセールス）** | 既存営業（クライアント窓口） | 3-4名 | ↑同上 | P1 |
| **メンバー（ディレクター）** | SEO施策ディレクション | 6名 | ↑同上 | P1 |
| **コンテンツ担当** | コンテンツ担当（ライター管理） | 5名 | コンテンツカンバン管理、ライターアサイン・連絡、KW選定支援。担当案件のコンテンツ操作に特化 | P1 |
| **エンジニア** | 実装エンジニア | 3名 | 技術SEO画面、施策タスクのステータス更新、Site Audit閲覧、API連携設定 | P1 |
| **外部ライター** | フリーランスライター / パートナー会社ライター | 案件ごと | ライターポータル（アサイン記事の閲覧・原稿提出・フィードバック確認のみ） | P1 |
| **クライアント** | クライアント企業担当者 | 各社1-3名 | クライアントポータル（自社データ閲覧・コンテンツ承認・チャット） | P1 |
| **フリーランス協力者** | 外部ディレクター/エンジニア | 随時 | ディレクター or エンジニアと同等権限（プロジェクト単位でアサイン） | P2 |

### ロール・権限モデル（RBAC）

```typescript
// 肩書（表示用）は User.title で管理。権限はRoleで判定
enum Role {
  ADMIN           = 'admin',           // 事業部長
  MEMBER          = 'member',          // セールス / プリセールス / ディレクター（同一権限）
  CONTENT_MANAGER = 'content_manager', // コンテンツ担当
  ENGINEER        = 'engineer',        // エンジニア
  WRITER          = 'writer',          // 外部ライター
  CLIENT          = 'client',          // クライアント
  FREELANCER      = 'freelancer',      // フリーランス協力者
}

// 肩書（プロフィール表示用、権限には影響しない）
enum Title {
  SALES           = 'セールス',
  PRESALES        = 'プリセールス',
  DIRECTOR        = 'ディレクター',
  CONTENT_MANAGER = 'コンテンツ担当',
  ENGINEER        = 'エンジニア',
  MANAGER         = '事業部長',
}

// 権限マトリクス
const permissions: Record<Role, Permission[]> = {
  admin:           ['*'],  // 全リソース全アクション
  member:          [
    'client:read:assigned',    // 担当クライアントのデータ閲覧
    'client:write:assigned',   // 担当クライアントのデータ編集
    'content:*:assigned',      // コンテンツ全操作
    'report:*:assigned',       // レポート生成・編集・DL
    'keyword:*:assigned',      // KW追加・削除・編集
    'task:*:assigned',         // タスク作成・ステータス変更
    'chat:*:assigned',         // チャット送受信（全チャンネル）
    'backlink:read:assigned',  // 外部リンク閲覧
    'techseo:read:assigned',   // 技術SEO閲覧
  ],
  content_manager: [
    'content:*:all',           // 全案件のコンテンツ管理
    'keyword:read:all',        // KW閲覧
    'writer:assign:all',       // ライターアサイン
    'chat:rw:content_channels',// コンテンツ関連チャンネルのみ
  ],
  engineer:        [
    'techseo:read:all',        // 技術SEO画面の閲覧
    'task:update_status:assigned', // 施策タスクのステータス更新
    'siteaudit:read:all',      // Site Audit閲覧
    'settings:api:write',      // API連携設定の編集
  ],
  writer:          [
    'content:read:assigned',   // アサインされた記事のみ閲覧
    'content:submit:assigned', // 原稿提出
    'content:read_feedback:assigned', // フィードバック確認
  ],
  client:          [
    'dashboard:read:own',      // 自社ダッシュボードのみ
    'content:approve:own',     // 自社コンテンツ承認・差し戻し
    'content:comment:own',     // 自社コンテンツへのコメント
    'report:read:own',         // 自社レポートの閲覧・DL
    'chat:rw:own',             // 自社チャット（#general, #report）
  ],
  freelancer:      [
    // プロジェクト単位でアサインされた範囲でMEMBER or ENGINEER相当の権限を付与
    // ProjectAssignment.role で個別に制御
  ],
};
```

---

## 3. 何のデータを使うのか（データソース詳細）

> **💼 ビジネス解説：6つのデータの仕入れ先**
> - **Google Search Console（GSC）** → 「どんなキーワードで何位に表示されて、何回クリックされたか」
> - **Google Analytics（GA4）** → 「サイトに何人来て、何ページ見て、お問い合わせは何件か」
> - **Ahrefs** → 「他のサイトからリンクがいくつ貼られているか、競合と比べてどうか、KWの難易度」
> - **Google Keyword Planner** → 「キーワードの月間検索ボリューム（Google公式データ）」
> - **WordPress** → 「クライアントのサイトにどんな記事が公開されているか」
> - **PageSpeed Insights** → 「サイトの表示速度は速いか遅いか」

### 3.1 Google Search Console（GSC）

| 項目 | 仕様 |
|------|------|
| **API** | Search Console API v1 — `searchanalytics.query` |
| **認証** | OAuth 2.0。共有用GmailアカウントでリフレッシュトークンをPostgreSQLに暗号化保存 |
| **スコープ** | `https://www.googleapis.com/auth/webmasters.readonly` |
| **同期頻度** | 日次（毎日 03:00 JST）。`date = today - 3` を取得 |
| **レートリミット** | 1プロパティあたり1,200リクエスト/分 |
| **データ保持期間** | GSC側は16ヶ月。当システムでは無期限保持 |

**取得データ詳細:**

| データ項目 | APIパラメータ | ダッシュボードでの用途 | 取得方法 |
|-----------|-------------|--------------------|---------|
| **クエリ別パフォーマンス** | `dimensions: ['query']` | KW順位一覧、KWフォーカスデータ | 全クエリ取得（rowLimit: 25000） |
| **ページ別パフォーマンス** | `dimensions: ['page']` | ランディングページTOP20 | 全ページ取得、SS数降順ソート |
| **クエリ×ページ** | `dimensions: ['query','page']` | 記事ごとのKW紐づけ | コンテンツ管理画面で使用 |
| **デバイス別** | `dimensions: ['device']` | PC/モバイル別パフォーマンス比較 | デバイスフィルタ用 |
| **インデックスカバレッジ** | URL Inspection API | 技術SEOタブ | 主要ページのみ個別チェック（600リクエスト/分） |

### 3.2 Google Analytics 4（GA4）

| 項目 | 仕様 |
|------|------|
| **API** | GA4 Data API v1beta — `runReport` / `batchRunReports` |
| **認証** | OAuth 2.0。共有用Gmailアカウント（**GA4管理者権限**に昇格依頼済み） |
| **スコープ** | `https://www.googleapis.com/auth/analytics.readonly` |
| **同期頻度** | 日次（毎日 03:30 JST） |
| **レートリミット** | プロパティあたり: 同時10リクエスト、日10,000トークン |

> **⚠️ 現状：GA4データはLooker Studioに接続済み**
> 本ダッシュボードではGA4 Data APIから直接データを取得する方式を採用。Looker Studioは引き続き併用可能。段階的に移行。

**取得レポート一覧（batchRunReportsで一括実行）:**

| # | レポート名 | ディメンション | メトリクス | 用途 |
|---|-----------|-------------|----------|------|
| R1 | **チャンネル別サマリー** | `sessionDefaultChannelGroup`, `date` | `sessions`, `totalUsers`, `newUsers`, `conversions` | KPIカード、チャンネル別流入グラフ |
| R2 | **ランディングページ別** | `landingPage`, `date` | `sessions`, `bounceRate`, `averageSessionDuration`, `conversions` | LP TOP20、CV貢献ページ |
| R3 | **セグメント別（magazine配下）** | `pagePath`, `date` | `sessions`, `totalUsers` | magazine配下 vs その他の比較 |
| R4 | **CV詳細** | `eventName`, `date` | `eventCount` | イベント別CV数 |
| R5 | **日次サマリー** | `date` | `sessions`, `totalUsers`, `newUsers`, `screenPageViews`, `conversions` | 日次推移グラフ、アラート判定用 |

### 3.3 Ahrefs API

> **⚠️ 要対応：本ツール専用のAhrefsアカウント新規契約が必要**
> **Advancedプラン、$449/月** の新規契約が必要。
> 理由：
> 1. 120社の日次同期で月間約57万ユニットを消費（現行アカウントの上限50万を超過）
> 2. 現行アカウントはディレクターの日常業務に使用中
> 3. ツールの自動同期と手動調査が競合すると、月末にユニット枯渇リスク

**APIユニット消費見積（120社規模・週次最適化後）:**

| API呼び出し | 計算 | 月間ユニット |
|------------|------|------------|
| **DR取得** | 120社 × 30日 × 1ユニット | 3,600 |
| **被リンク統計** | 120社 × 30日 × 1ユニット | 3,600 |
| **参照ドメイン一覧** | 120社 × 7回/月 × 100行 | 84,000 |
| **オーガニックKW** | 120社 × 7回/月 × 50行 | 42,000 |
| **Site Audit Issues** | 120社 × 4回/月 × 50行 | 24,000 |
| **KD調査（オンデマンド）** | 月500回 × 10KW | 5,000 |
| **合計** | | **162,200** |
| **バッファ込み（×1.5）** | | **243,300** |

Advancedプランの50万枠内の **約48%** で運用可能。

**取得データ:**

| 取得データ | APIエンドポイント | 主なレスポンス | 用途 |
|-----------|-----------------|--------------|------|
| **DR** | `site-explorer/domain-rating` | `domain_rating`, `ahrefs_rank` | DR推移グラフ |
| **被リンク統計** | `site-explorer/backlinks-stats` | `live`, `all_time`, `live_refdomains` | 被リンク数推移 |
| **参照ドメイン一覧** | `site-explorer/referring-domains` | `domain`, `domain_rating`, `backlinks`, `first_seen` | 新規リンク元一覧 |
| **オーガニックKW** | `site-explorer/organic-keywords` | `keyword`, `position`, `volume`, `traffic` | KW一覧補完 |
| **競合分析** | `site-explorer/organic-competitors` | `domain`, `common_keywords`, `organic_traffic` | 競合ダッシュボード |
| **KW調査** | `keywords-explorer/overview` | `keyword_difficulty`, `cpc`, `global_volume` | KW選定支援画面 |

### 3.4 CMS（WordPress）

| 取得方法 | エンドポイント | 取得データ | タイミング |
|---------|-------------|-----------|----------|
| **REST API（プル型）** | `GET /wp-json/wp/v2/posts?per_page=100&page=N` | title, slug, status, date, modified, categories, tags, excerpt, meta | 日次フル同期（04:00 JST） |
| **Webhook（プッシュ型）** | WP側にWebhookプラグイン → `POST /api/webhooks/cms` | 記事の公開・更新・削除イベント | リアルタイム |

### 3.5 PageSpeed Insights（PSI）

| 項目 | 仕様 |
|------|------|
| **API** | PageSpeed Insights API v5 |
| **認証** | APIキー（GCPで発行） |
| **対象ページ** | クライアントごとに主要ページを最大20URL登録 |
| **同期頻度** | 週次（毎週日曜 02:00 JST） |
| **レートリミット** | 25,000リクエスト/日（無料枠で十分） |
| **取得データ** | LCP (ms), INP (ms), CLS (スコア), Performance Score (0-100), strategy: mobile/desktop |

### 3.6 Google Keyword Planner（Google Ads API）

| 項目 | 仕様 |
|------|------|
| **API** | Google Ads API — `KeywordPlanIdeaService` |
| **認証** | Google Ads account（既存のAdsアカウントを使用） |
| **取得データ** | 月間検索ボリューム（完全一致）、競合性レベル、CPC |
| **同期頻度** | 月次自動取得（毎月1日 05:00 JST）OR 手動CSVアップロード |
| **補足** | Googleの公式データソースのため、Ahrefsの推定値より正確。KDは引き続きAhrefsから取得 |

---

## 4. サービスパッケージ・プラン設計

> **💼 ビジネス解説：営業が提案しやすいパッケージ体系**
> 本ツールを軸に、コンサルティングサービスを明確なパッケージに体系化。また、フルコンサル契約が終了しても **保守プランで月額5-8万の継続課金** を実現し、解約を防ぎます。

### 4.1 コンサルティングプラン体系（新規契約向け）

| | ミニマム | ミドル | LLMO付き | 大型 |
|---|---------|--------|---------|------|
| **月額** | ¥300,000 | ¥500,000 | ¥700,000 | ¥800,000〜 |
| **コンテンツ量** | 標準文字数 | 中規模文字数 | 中規模文字数 | 大規模・カスタム |
| **対応優先度** | 通常 | 優先 | 優先 | 最優先 |
| **ダッシュボード** | 全プラン共通：全機能利用可能 | ← | ← | ← |
| **GA4ローデータ蓄積** | 全プラン共通：管理者権限取得済みの場合、ローデータをBQに蓄積 | ← | ← | ← |
| **LLMO（AIO対策）** | - | - | AIO対策施策の実施 | 要相談 |
| **AI定点観測** | オプション追加 ¥100,000/月（全プラン共通） | ← | ← | ← |
| **コンサルタント稼働** | 標準 | 標準+ | LLMO専任対応含む | フルカスタム |

> **🎯 ダッシュボード機能は全プラン共通**
> プラン間の差はコンサルタントの稼働量・優先度・コンテンツ量・LLMO対応の有無です。

### 4.2 オプションサービス（ショット/月額）

| オプション | 課金形態 | 料金 | 内容 |
|-----------|---------|------|------|
| **Site Audit（単発）** | ショット | ¥50,000/回 | Ahrefs Site Auditを実行し、全カテゴリのIssueレポートを提供。改善優先度の提案書付き |
| **Site Audit（定期クロール）** | 月額 | ¥80,000/月 | 週次でSite Auditを自動実行。技術SEO画面にHealth Score・Issue推移を常時表示 |
| **LLMO（単体追加）** | 月額 | ¥200,000/月 | 既存ミニマム/ミドルプランにLLMO対応を追加 |
| **AI定点観測** | 月額 | ¥100,000/月 | 主要AIサービス（ChatGPT, Gemini, Perplexity等）に対するカスタムプロンプトでの応答を定期観測 |

### 4.3 保守プラン（解約抑止用）

> **💼 ビジネス解説：「解約」を「保守プラン移行」に変える**
> 月額5-8万でも年間60-96万の売上維持。さらに保守プランからフルコンサルへの復帰も期待できます。

| | 保守ライト | 保守プロ | 解約 |
|---|----------|---------|------|
| **月額** | ¥50,000 | ¥80,000 | ¥0 |
| **ダッシュボード閲覧** | 全画面閲覧可 | 全画面閲覧可 | アクセス不可 |
| **データ同期** | GSC + GA4集計データの日次同期を継続 | 同左 + **GA4ローデータのBigQuery蓄積を継続** | 全停止 |
| **レポート自動生成** | 月次レポート自動生成（AI所感付き） | 同左 | 不可 |
| **コンテンツ管理** | 閲覧のみ | 同左 | 不可 |
| **チャット** | 閲覧のみ | 同左 | 不可 |
| **蓄積データ** | 保持（永久） | 保持（永久）+ ローデータ蓄積継続 | **全データ消失** |
| **コンサルタント稼働** | なし | なし | - |
| **Site Audit** | ショット追加のみ（¥50,000/回） | ショット追加のみ | 不可 |
| **GA4管理者権限** | 維持 | 維持 | 返却 |

### 4.4 データロックイン設計

| 蓄積データ | 解約時の影響 | ロックイン効果 |
|-----------|------------|--------------|
| **順位履歴の長期蓄積** | GSCは16ヶ月で消えるが、自社BQなら永久保持 | 契約期間が長いほど「年次比較」のデータが貴重になる |
| **GA4ローデータ** | GA4本体は14ヶ月で消える | 保守プロ契約中は蓄積継続。解約すると空白期間が発生 |
| **競合比較データの履歴** | Ahrefsの競合分析履歴が消える | 長期比較分析が不可能に |
| **施策の因果記録** | 「この施策→この結果」の記録が消える | ナレッジベースの過去データが全て失われる |
| **レポートアーカイブ** | 過去の月次レポート全てにアクセス不可 | 社内報告の仕組みがゼロに |
| **ポータルURL** | ダッシュボードURLが無効に | 社内報告の仕組みがゼロに |

### 4.5 プラン管理のUI設計

| UI要素 | 仕様 |
|--------|------|
| **クライアント詳細にプランバッジ** | ミニマム / ミドル / LLMO / 大型 / 保守ライト / 保守プロ のバッジ表示 |
| **全案件一覧でプランフィルタ** | プラン別にフィルタ・ソート可能 |
| **「保守プランへの切替」提案画面** | 「解約 vs 保守ライト vs 保守プロ」の3択比較。蓄積データ量を具体数値で表示 |
| **Site Auditオプション発注画面** | ショット or 定期クロール選択 |
| **保守プラン時の権限制御** | 全画面が閲覧モードに切替 |

### 4.6 既存クライアントの移行方針

| 対象 | 対応 |
|------|------|
| **既存クライアント（月額10-80万）** | 現行契約のまま継続。本ツール運用開始時に改めてプラン紐づけ |
| **新規クライアント** | 新プラン体系（ミニマム30万〜）で契約。ダッシュボードアクセスを標準付帯 |
| **解約予定クライアント** | 保守プラン（ライト¥50,000 or プロ¥80,000）を提案 |

> **🔧 技術仕様：プラン管理**

```prisma
enum ConsultingPlan {
  MINIMUM           // ミニマム（¥300,000/月）
  MIDDLE            // ミドル（¥500,000/月）
  LLMO              // LLMO付き（¥700,000/月）
  ENTERPRISE        // 大型（¥800,000〜/月）
  LEGACY            // 旧契約（既存クライアント、個別単価）
}

enum ToolStatus {
  ACTIVE            // フルコンサル契約中（全機能）
  MAINTENANCE_LITE  // 保守ライト（¥50,000/月、集計データ同期）
  MAINTENANCE_PRO   // 保守プロ（¥80,000/月、集計+ローデータ同期）
  CHURNED           // 解約（アクセス不可、データ保持30日後に削除）
}
```

---

## 5. データベース設計（全テーブル定義）

> **⚠️ PostgreSQL + BigQuery ハイブリッド構成**
>
> **PostgreSQL（Cloud SQL）に格納するテーブル**（操作系・マスタデータ）：
> User, Client, Project, ProjectAssignment, Keyword, Content, ContentKeyword, ContentVersion, Task, ChatChannel, ChatChannelMember, ChatMessage, ChatAttachment, AlertRule, AlertHistory, AuditLog, SyncLog, WriterProfile, KnowledgeBase, NotificationPreference, CwvSnapshot
>
> **BigQuery に格納するテーブル**（分析系・履歴データ、日付パーティション、追記専用）：
> - `rank_history` — 日次キーワード順位データ
> - `traffic_snapshot` — 日次プロジェクト別トラフィックデータ
> - `content_traffic_history` — 日次コンテンツ別トラフィック
> - `backlink_snapshot` — 日次被リンクメトリクス
> - `ga4_events` — GA4 BigQueryエクスポートによるイベント単位の生データ
> - `ga4_daily_summary` — GA4 Data APIで取得した日次集計レポート（フォールバック用）

### Prisma Schema（PostgreSQL側 完全定義）

```prisma
// ========================================
// 組織・ユーザー管理
// ========================================

model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String
  role          Role      @default(MEMBER)
  title         String?                          // 肩書: "セールス", "プリセールス", "ディレクター" 等
  avatarUrl     String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  projectAssignments  ProjectAssignment[]
  contentAssignments  Content[]          @relation("assignedWriter")
  taskAssignments     Task[]
  auditLogs           AuditLog[]
}

enum Role {
  ADMIN            // 事業部長
  MEMBER           // セールス / プリセールス / ディレクター（同一権限）
  CONTENT_MANAGER  // コンテンツ担当
  ENGINEER         // エンジニア
  WRITER           // 外部ライター
  CLIENT           // クライアント
  FREELANCER       // フリーランス協力者
}

// ========================================
// クライアント・プロジェクト管理
// ========================================

model Client {
  id              String    @id @default(cuid())
  companyName     String
  contractPlan    ContractPlan @default(FULL)
  contractStartAt DateTime
  contractEndAt   DateTime?
  isActive        Boolean   @default(true)
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  projects        Project[]
  clientUsers     User[]    @relation("clientUsers")
}

model Project {
  id              String    @id @default(cuid())
  clientId        String
  client          Client    @relation(fields: [clientId], references: [id])
  siteUrl         String
  siteName        String
  gscPropertyUrl  String?
  ga4PropertyId   String?
  ahrefsDomain    String?
  cmsType         CmsType   @default(WORDPRESS)
  cmsApiUrl       String?
  cmsApiKey       String?
  googleAccessToken   String?   @db.Text
  googleRefreshToken  String?   @db.Text
  googleTokenExpiry   DateTime?
  magazinePath    String?   @default("/magazine/")
  cvEventNames    String[]  @default([])
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  assignments       ProjectAssignment[]
  keywords          Keyword[]
  contents          Content[]
  tasks             Task[]
  trafficSnapshots  TrafficSnapshot[]
  backlinkSnapshots BacklinkSnapshot[]
  cwvSnapshots      CwvSnapshot[]
  syncLogs          SyncLog[]
}

enum CmsType { WORDPRESS  SHOPIFY  WIX  CUSTOM  NONE }

model ProjectAssignment {
  id        String   @id @default(cuid())
  projectId String
  userId    String
  role      ProjectRole  @default(MEMBER)
  project   Project  @relation(fields: [projectId], references: [id])
  user      User     @relation(fields: [userId], references: [id])
  @@unique([projectId, userId])
}

enum ProjectRole { OWNER  MEMBER  VIEWER }

// ========================================
// キーワード管理 + 順位履歴
// ========================================

model Keyword {
  id            String    @id @default(cuid())
  projectId     String
  project       Project   @relation(fields: [projectId], references: [id])
  keyword       String
  category      KwCategory @default(ARTICLE)
  targetUrl     String?
  targetRank    Int?
  searchVolume          Int?
  searchVolumeSource    String?  @default("api") // 'api' | 'manual'
  searchVolumeUpdatedAt DateTime?
  difficulty            Int?                    // Ahrefs KD (0-100)
  isTracking            Boolean   @default(true)
  createdAt             DateTime  @default(now())
  rankHistories RankHistory[]
  contents      ContentKeyword[]
  @@unique([projectId, keyword])
  @@index([projectId, isTracking])
}

enum KwCategory { BRAND  SERVICE  ARTICLE  OTHER }

model RankHistory {
  id            String    @id @default(cuid())
  keywordId     String
  keyword       Keyword   @relation(fields: [keywordId], references: [id])
  date          DateTime  @db.Date
  rank          Float?
  clicks        Int       @default(0)
  impressions   Int       @default(0)
  ctr           Float?
  url           String?
  @@unique([keywordId, date])
  @@index([keywordId, date(sort: Desc)])
  @@index([date])
}

// ========================================
// コンテンツ管理
// ========================================

model Content {
  id              String    @id @default(cuid())
  projectId       String
  project         Project   @relation(fields: [projectId], references: [id])
  title           String
  slug            String?
  url             String?
  cmsPostId       String?
  cmsStatus       String?
  cmsModifiedAt   DateTime?
  pipelineStatus  PipelineStatus @default(PLANNING)
  assignedWriterId String?
  assignedWriter  User?    @relation("assignedWriter", fields: [assignedWriterId], references: [id])
  deadline        DateTime?
  publishedAt     DateTime?
  targetMonth     String?
  rewriteScore    Float?
  rewriteReasons  String[]  @default([])
  lastRewriteAt   DateTime?
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  keywords        ContentKeyword[]
  trafficHistories ContentTrafficHistory[]
  @@unique([projectId, cmsPostId])
  @@index([projectId, pipelineStatus])
}

enum PipelineStatus {
  PLANNING          // 企画作成中
  KW_SELECTED       // KW選定済
  WRITING_REQUESTED // 執筆依頼中
  WRITING           // 執筆中
  REVIEWING         // 校正中
  READY_TO_PUBLISH  // 公開待ち
  PUBLISHED         // 公開済み
  REWRITE_CANDIDATE // リライト候補
}

model ContentKeyword {
  id          String   @id @default(cuid())
  contentId   String
  keywordId   String
  isPrimary   Boolean  @default(false)
  content     Content  @relation(fields: [contentId], references: [id])
  keyword     Keyword  @relation(fields: [keywordId], references: [id])
  @@unique([contentId, keywordId])
}

model ContentTrafficHistory {
  id          String    @id @default(cuid())
  contentId   String
  content     Content   @relation(fields: [contentId], references: [id])
  date        DateTime  @db.Date
  sessions    Int       @default(0)
  users       Int       @default(0)
  conversions Int       @default(0)
  @@unique([contentId, date])
  @@index([contentId, date(sort: Desc)])
}

// ========================================
// 施策タスク管理
// ========================================

model Task {
  id          String     @id @default(cuid())
  projectId   String
  project     Project    @relation(fields: [projectId], references: [id])
  title       String
  description String?    @db.Text
  category    TaskCategory @default(TECHNICAL)
  status      TaskStatus   @default(TODO)
  priority    TaskPriority @default(MEDIUM)
  assigneeId  String?
  assignee    User?      @relation(fields: [assigneeId], references: [id])
  dueDate     DateTime?
  completedAt DateTime?
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
  @@index([projectId, status])
}

enum TaskCategory { TECHNICAL  CONTENT  EXTERNAL  OTHER }
enum TaskStatus   { TODO  IN_PROGRESS  DONE  BLOCKED }
enum TaskPriority { LOW  MEDIUM  HIGH  URGENT }

// ========================================
// 時系列スナップショット（サイト全体）
// ========================================

model TrafficSnapshot {
  id              String    @id @default(cuid())
  projectId       String
  project         Project   @relation(fields: [projectId], references: [id])
  date            DateTime  @db.Date
  organicSessions Int       @default(0)
  totalSessions   Int       @default(0)
  totalUsers      Int       @default(0)
  newUsers        Int       @default(0)
  conversions     Int       @default(0)
  channelBreakdown Json?    // {"organic":40969,"paid":16834,...}
  magazineSessions Int?
  otherSessions    Int?
  @@unique([projectId, date])
  @@index([projectId, date(sort: Desc)])
}

model BacklinkSnapshot {
  id                String    @id @default(cuid())
  projectId         String
  project           Project   @relation(fields: [projectId], references: [id])
  date              DateTime  @db.Date
  domainRating      Float?
  totalBacklinks    Int       @default(0)
  referringDomains  Int       @default(0)
  topRefDomains     Json?
  @@unique([projectId, date])
  @@index([projectId, date(sort: Desc)])
}

model CwvSnapshot {
  id              String    @id @default(cuid())
  projectId       String
  project         Project   @relation(fields: [projectId], references: [id])
  url             String
  date            DateTime  @db.Date
  strategy        String    @default("mobile")
  performanceScore Int?
  lcpMs           Int?
  inpMs           Int?
  clsScore        Float?
  @@unique([projectId, url, date, strategy])
  @@index([projectId, date(sort: Desc)])
}

// ========================================
// 運用系テーブル
// ========================================

model SyncLog {
  id          String    @id @default(cuid())
  projectId   String
  project     Project   @relation(fields: [projectId], references: [id])
  source      String    // "gsc" | "ga4" | "ahrefs" | "cms" | "psi"
  status      String    // "success" | "error" | "partial"
  recordCount Int?
  errorMessage String?  @db.Text
  startedAt   DateTime
  completedAt DateTime?
  durationMs  Int?
  @@index([projectId, source, startedAt(sort: Desc)])
}

model AuditLog {
  id          String    @id @default(cuid())
  userId      String
  user        User      @relation(fields: [userId], references: [id])
  action      String
  resource    String
  resourceId  String?
  metadata    Json?
  createdAt   DateTime  @default(now())
  @@index([userId, createdAt(sort: Desc)])
  @@index([resource, resourceId])
}

model AlertRule {
  id          String    @id @default(cuid())
  projectId   String?
  type        String    // "rank_drop" | "traffic_drop" | "cv_zero" | ...
  config      Json
  channels    String[]  @default(["slack"])
  isEnabled   Boolean   @default(true)
  createdAt   DateTime  @default(now())
}

model AlertHistory {
  id          String    @id @default(cuid())
  ruleId      String
  projectId   String
  message     String    @db.Text
  severity    String    // "critical" | "warning" | "info"
  metadata    Json?
  isRead      Boolean   @default(false)
  notifiedAt  DateTime  @default(now())
  readAt      DateTime?
  @@index([projectId, notifiedAt(sort: Desc)])
  @@index([isRead])
}

// ========================================
// チャット機能
// ========================================

model ChatChannel {
  id          String    @id @default(cuid())
  projectId   String
  name        String    // "general", "content", "technical", "report"
  type        ChannelType @default(DEFAULT)
  isArchived  Boolean   @default(false)
  createdAt   DateTime  @default(now())
  messages    ChatMessage[]
  members     ChatChannelMember[]
  @@unique([projectId, name])
  @@index([projectId])
}

enum ChannelType { DEFAULT  CUSTOM }

model ChatChannelMember {
  id          String    @id @default(cuid())
  channelId   String
  userId      String
  lastReadAt  DateTime?
  joinedAt    DateTime  @default(now())
  @@unique([channelId, userId])
}

model ChatMessage {
  id          String    @id @default(cuid())
  channelId   String
  senderId    String
  body        Json      // リッチテキストブロック配列
  plainText   String    @db.Text
  parentId    String?   // スレッド返信
  isPinned    Boolean   @default(false)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
  deletedAt   DateTime?
  attachments ChatAttachment[]
  @@index([channelId, createdAt(sort: Desc)])
  @@index([channelId, parentId])
  @@index([senderId])
}

model ChatAttachment {
  id          String    @id @default(cuid())
  messageId   String
  fileName    String
  fileUrl     String
  fileSize    Int
  mimeType    String
  createdAt   DateTime  @default(now())
  @@index([messageId])
}

// ========================================
// 契約プラン enum
// ========================================

enum ContractPlan {
  FULL          // フルコンサルティング
  MAINTENANCE   // 保守プラン
  CHURNED       // 解約済み
}

// ========================================
// ライター評価
// ========================================

model WriterProfile {
  id              String    @id @default(cuid())
  userId          String    @unique
  genres          String[]  @default([])   // ["介護", "不動産", "金融"]
  qualityScore    Float     @default(0)    // 品質スコア (0-5)
  responseSpeed   Float     @default(0)    // 対応速度スコア (0-5)
  totalArticles   Int       @default(0)
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}

// ========================================
// ナレッジベース（施策→実施→効果の因果記録）
// ========================================

model KnowledgeBase {
  id              String    @id @default(cuid())
  projectId       String
  title           String
  proposal        String    @db.Text
  implementation  String?   @db.Text
  effect          String?   @db.Text
  industry        String?
  tacticType      String?
  tags            String[]  @default([])
  status          String    @default("proposed") // "proposed" / "implemented" / "measured"
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  @@index([projectId])
  @@index([industry, tacticType])
}

// ========================================
// 通知設定（案件ごと）
// ========================================

model NotificationPreference {
  id              String    @id @default(cuid())
  userId          String
  projectId       String?
  frequency       String    @default("normal")
  channels        String[]  @default(["slack", "email"])
  isMuted         Boolean   @default(false)
  snoozedUntil    DateTime?
  createdAt       DateTime  @default(now())
  @@unique([userId, projectId])
}

// ========================================
// コンテンツバージョン管理
// ========================================

model ContentVersion {
  id              String    @id @default(cuid())
  contentId       String
  versionNumber   Int
  title           String
  body            String?   @db.Text
  submittedUrl    String?
  submittedBy     String?
  changesSummary  String?   @db.Text
  createdAt       DateTime  @default(now())
  @@unique([contentId, versionNumber])
  @@index([contentId, createdAt(sort: Desc)])
}
```

---

## 6. 画面仕様（全画面の詳細）

### 画面 1: ログイン (`/login`) — Phase 1

| 項目 | 仕様 |
|------|------|
| **概要** | Google OAuth 2.0によるシングルサインオン |
| **UI要素** | ロゴ、「Googleでログイン」ボタン、利用規約リンク |
| **認証フロー** | Googleログイン → メールアドレスでUser検索 → 登録済みならセッション発行 → 未登録なら「管理者に連絡」表示 |
| **セッション管理** | NextAuth.js使用。JWTトークン、有効期限24時間、リフレッシュトークン30日 |

### 画面 2: 全案件ダッシュボード (`/dashboard`) — Phase 2

**対象ユーザー:** 管理者、コンサルタント

**テーブルビュー設計（120+案件対応）:**

| カラム | 表示内容 | データソース |
|--------|---------|------------|
| **会社名** | クライアント名（クリックで詳細へ） | `Client.companyName` |
| **担当者** | アサインされたコンサルタント名 | `ProjectAssignment` → `User.name` |
| **ヘルススコア** | 0-100のリングアイコン（80+緑, 50-79青, 50未満赤） | 算出値 |
| **オーガニックSS** | 当月値 + 前月比% | `TrafficSnapshot` |
| **CV数** | 当月値 + 前月比% | `TrafficSnapshot.conversions` |
| **契約更新日** | 更新日（60日以内は黄、30日以内は赤） | `Client.contractEndAt` |
| **契約プラン** | フル / 保守 / 解約 バッジ | `Client.contractPlan` |
| **最終対応日** | 最後にコンサルタントが操作した日時 | `AuditLog` |
| **未読チャット数** | 赤バッジ | `ChatChannelMember.lastReadAt` |
| **「要対応」フラグ** | 未返信チャット + 期限超過タスク + 順位急落の統合表示 | 複合算出 |

**フィルタ:** 担当者、契約プラン、ヘルススコア帯、契約更新月、テキスト検索、「自分の案件のみ」トグル

**ヘルススコア算出ロジック（Phase 3）:**

```typescript
function calculateHealthScore(data: ProjectMetrics): number {
  const scores = {
    traffic: clamp((data.organicSessionsMoM - 0.8) / 0.3 * 30, 0, 30),      // 流入 (0-30)
    ranking: (data.kwInTop10 / data.totalTrackedKw) * 50,                     // 順位 (0-25)
    conversion: clamp(data.conversionsMoM * 25, 0, 25),                       // CV (0-25)
    taskProgress: (data.completedTasks / data.totalTasks) * 20,               // 施策進捗 (0-20)
  };
  return Math.round(scores.traffic + scores.ranking + scores.conversion + scores.taskProgress);
}
```

### 画面 3: クライアント概要ダッシュボード (`/clients/[id]`) — Phase 1

**対応する現行レポート:** スライド4「全体概要」、スライド9-15「成果状況総括」

| コンポーネント | 表示内容 | データソース |
|-------------|---------|------------|
| **指標切替タブ × 4** | (1) オーガニックSS (2) ユーザー数 (3) CV数 (4) 被リンク数 | GA4 / Ahrefs |
| **推移グラフ（指標連動）** | 選択中の指標の折れ線+エリアチャート | 各指標の時系列 |
| **期間切替タブ × 6** | 24時間/7日/30日/3ヶ月/6ヶ月/12ヶ月（デフォルト） | - |
| **チャンネル別流入棒グラフ** | Organic / Paid / Social / Direct / Referral | GA4 channelBreakdown |
| **magazine配下 vs その他** | 2本のプログレスバー + 比率表示 | GA4 セグメント |

### 画面 4: キーワード管理 (`/clients/[id]/keywords`) — Phase 1

**対応する現行レポート:** スライド17-20「KWフォーカスデータ」

- **順位分布カード × 4**: 「1-3位」「4-10位」「11-20位」「21位以下」
- **KW一覧テーブル**: キーワード / 現在順位 / 前日比 / 前月比 / 前年比 / 検索Vol / クリック数 / 表示回数 / CTR / 流入ページTOP3
- **流入ページTOP3（ホバー展開）**: GSCの `dimensions: ['query','page']` でKW×ページ組み合わせ、クリック数降順TOP3抽出
- **順位推移グラフ**: 最大5KW同時比較、Y軸反転
- **KWフォーカスビュー**: 「前年プラス」「前年マイナス」「前月プラス」「前月マイナス」の4タブ

### 画面 5: コンテンツ管理 (`/clients/[id]/contents`) — Phase 1

**カンバンビュー:** 企画作成中 → KW選定済 → 執筆依頼中 → 執筆中 → 校正中 → 公開待ち → 公開済み → リライト候補

**カード内表示:** 記事タイトル / 対象KW+検索Vol / 担当ライター / 〆切日+残日数 / 検索順位 / 月間SS / SS推移スパークライン / 順位推移スパークライン / ミニKPIカード

**タブ2: ガントチャートビュー** — 月間公開スケジュール俯瞰

**タブ3: バルク操作** — 複数選択、一括ステータス変更、一括ライターアサイン、一括〆切設定

**ボトルネック検知:** 「校正中で3日以上滞留」→通知、「クライアント承認待ち5日超過」→自動リマインダー、「〆切まで3日以内 & 未着手」→催促通知

**クライアント直接参加型ワークフロー:** 差し戻し理由テンプレート、自動リマインダーメール、ライターへの直接フィードバック転送、修正版の差分表示

**タブ4: リライト提案（Phase 2）:**

| 抽出条件 | 判定ロジック | 理由ラベル |
|---------|------------|----------|
| 順位停滞（11-20位） | 最新30日平均が11-20位 & 変動幅5位以内 | `rank_stagnant` |
| 順位急落 | 前月平均との差が+5以上 | `rank_drop` |
| 経年劣化 | 公開6ヶ月以上 & 過去3ヶ月のSSが減少傾向 | `aged` |
| CTR低下 | 表示回数>1000 & CTR<同順位帯平均の70% | `low_ctr` |
| AIO影響 | 順位改善or横ばい & 表示回数orクリック数20%以上減少 | `aio_impact` |

**リライト優先度スコア算出式:**
```
スコア(0-100) =
  (検索Vol正規化 × 0.30) + (順位改善余地 × 0.25) + (流入減少度 × 0.20)
  + (経過月数 × 0.15) + (CTR乖離 × 0.10)
```

### 画面 5b: 外部ライターポータル (`/writer`) — Phase 1

| 画面 | 表示内容 | 操作 |
|------|---------|------|
| **記事一覧** | アサインされた記事リスト | クリックで詳細へ |
| **構成案確認** | ディレクター作成の構成案 | 閲覧のみ |
| **原稿提出** | Google Docs URL登録 or ファイルアップロード | 提出 |
| **フィードバック確認** | 修正指示の閲覧 | 閲覧のみ |

**アクセス制限:** クライアント名・企業情報=非表示、売上・契約情報=非表示、他ライターのタスク=非表示、プロジェクト情報全般=非表示

**ライター評価システム:** 得意ジャンルタグ / 品質スコア(0-5) / 対応速度(0-5) / 総納品数

### 画面 6: コンテンツ詳細 (`/clients/[id]/contents/[cid]`) — Phase 1

記事メタ情報+KPIカード / パフォーマンス推移グラフ（SS推移・順位推移） / 企画案プレビュー / 初稿プレビュー / フィードバック・指摘スレッド / 進行タイムライン

### 画面 7: 技術SEO (`/clients/[id]/technical`) — Phase 1

**対応する現行レポート:** スライド24「サービスページコンテンツ状況（改善施策）」

Site Audit Overview（5カード: Health Score, クロールURL数, Errors, Warnings, Notices） / Site Audit Issues（カテゴリ別アコーディオン、13カテゴリ） / Core Web Vitals（LCP/INP/CLS信号機表示） / パフォーマンススコア推移グラフ / インデックス状況 / 施策タスク進捗

### 画面 8: 外部リンク (`/clients/[id]/backlinks`) — Phase 1

KPIカード（被リンク数, 参照ドメイン数, DR） / 推移グラフ（12ヶ月） / 参照ドメイン一覧テーブル / 新規獲得リンク（直近30日）

### 画面 9: レポート (`/clients/[id]/reports`) — Phase 2

スライドサムネイルストリップ / スライドプレビュー（全14スライド） / AI所感ドラフト（スライド連動）/ PPTX/PDFダウンロード

### 画面 10: 施策タスク管理 (`/clients/[id]/tasks`) — Phase 1

カンバンビュー（TODO/IN_PROGRESS/DONE/BLOCKED） / リストビュー / タスク追加モーダル / 全体進捗率プログレスバー

### 画面 11: 設定 (`/settings`) — Phase 1（管理者のみ）

クライアント管理 / プロジェクト設定（OAuth認証フロー起動） / ユーザー管理 / 通知設定 / 同期ステータス

### 画面 12: クライアントポータル (`/portal/[id]`) — Phase 3

ウェルカムヘッダー / KPIカード / SS推移グラフ / 承認待ちコンテンツ一覧 / 月次レポートアーカイブ

### 画面 13: チャット (`/clients/[id]/chat`) — Phase 2/3

**チャンネル構成:**

| チャンネル | 用途 | 参加者 |
|-----------|------|--------|
| **#general** | 案件全般の連絡 | コンサルタント + クライアント |
| **#content** | コンテンツ企画・リライト | コンサルタント + ディレクター + ライター |
| **#technical** | 技術施策の進捗 | コンサルタント + エンジニア |
| **#report** | 月次レポートの確認 | コンサルタント + クライアント |
| **カスタム** | 任意の目的 | 手動で招待 |

**メンション・参照機能:**

| トリガー | 対象 | クリック時の挙動 |
|---------|------|----------------|
| `@ユーザー名` | プロジェクト参加メンバー | 通知送信 |
| `#task:` | 施策タスク | タスク詳細モーダル表示 |
| `#content:` | コンテンツ記事 | コンテンツ詳細画面へ遷移 |
| `#report:` | 月次レポートのスライド | レポート該当スライドへ遷移 |
| `#kw:` | 管理キーワード | KW詳細モーダル表示 |

**リアルタイム配信:** Pusher（WebSocket）。フォールバックとしてSSE。

---

## 7. API設計（エンドポイント一覧）

| メソッド | エンドポイント | 説明 | 権限 | Phase |
|---------|-------------|------|------|-------|
| | **認証** | | | |
| `POST` | `/api/auth/[...nextauth]` | NextAuth.js管理（Google OAuth） | 公開 | P1 |
| | **クライアント** | | | |
| `GET` | `/api/clients` | クライアント一覧（担当分のみ） | ADMIN, MEMBER | P1 |
| `POST` | `/api/clients` | クライアント新規作成 | ADMIN | P1 |
| `GET` | `/api/clients/[id]` | クライアント詳細 | アサイン済み | P1 |
| `PATCH` | `/api/clients/[id]` | クライアント情報更新 | ADMIN | P1 |
| | **ダッシュボード** | | | |
| `GET` | `/api/clients/[id]/dashboard` | KPIサマリー | アサイン済み | P1 |
| `GET` | `/api/clients/[id]/traffic` | 流入推移 | アサイン済み | P1 |
| `GET` | `/api/clients/[id]/conversions` | CV推移 | アサイン済み | P1 |
| `GET` | `/api/clients/[id]/landing-pages` | LP TOP N | アサイン済み | P1 |
| | **キーワード** | | | |
| `GET` | `/api/clients/[id]/keywords` | 管理KW一覧 + 最新順位 | アサイン済み | P1 |
| `POST` | `/api/clients/[id]/keywords` | KW追加（一括） | MEMBER+ | P1 |
| `DELETE` | `/api/clients/[id]/keywords/[kwId]` | KW削除（論理削除） | MEMBER+ | P1 |
| `GET` | `/api/clients/[id]/keywords/[kwId]/history` | KW順位履歴 | アサイン済み | P1 |
| `GET` | `/api/clients/[id]/keywords/focus` | KWフォーカスデータ | アサイン済み | P1 |
| | **コンテンツ** | | | |
| `GET` | `/api/clients/[id]/contents` | コンテンツ一覧 | アサイン済み | P1 |
| `POST` | `/api/clients/[id]/contents` | コンテンツ新規作成 | MEMBER | P1 |
| `PATCH` | `/api/clients/[id]/contents/[cid]` | ステータス・ライター・〆切変更 | MEMBER | P1 |
| `GET` | `/api/clients/[id]/contents/rewrite-candidates` | リライト候補一覧 | アサイン済み | P2 |
| | **外部リンク** | | | |
| `GET` | `/api/clients/[id]/backlinks` | 被リンク統計推移 | アサイン済み | P1 |
| `GET` | `/api/clients/[id]/backlinks/domains` | 参照ドメイン一覧 | アサイン済み | P1 |
| | **タスク** | | | |
| `GET` | `/api/clients/[id]/tasks` | 施策タスク一覧 | アサイン済み | P1 |
| `POST` | `/api/clients/[id]/tasks` | タスク作成 | MEMBER+ | P1 |
| `PATCH` | `/api/clients/[id]/tasks/[tid]` | タスク更新 | MEMBER+ | P1 |
| | **レポート** | | | |
| `POST` | `/api/clients/[id]/reports/generate` | 月次レポート生成開始（非同期） | MEMBER+ | P2 |
| `GET` | `/api/clients/[id]/reports` | 生成済みレポート一覧 | アサイン済み | P2 |
| `GET` | `/api/clients/[id]/reports/[rid]/download` | PPTX/PDFダウンロード | アサイン済み | P2 |
| | **アラート** | | | |
| `GET` | `/api/alerts` | アラート一覧（担当案件分） | MEMBER+ | P2 |
| `PATCH` | `/api/alerts/[aid]/read` | 既読マーク | 全ロール | P2 |
| | **Webhook** | | | |
| `POST` | `/api/webhooks/cms` | CMS記事更新通知受信 | 署名検証 | P1 |
| | **チャット** | | | |
| `GET` | `/api/clients/[id]/chat/channels` | チャンネル一覧（未読数付き） | アサイン済み | P2 |
| `POST` | `/api/clients/[id]/chat/channels` | カスタムチャンネル作成 | MEMBER+ | P2 |
| `GET` | `/api/clients/[id]/chat/channels/[chId]/messages` | メッセージ一覧 | チャンネルメンバー | P2 |
| `POST` | `/api/clients/[id]/chat/channels/[chId]/messages` | メッセージ送信 | チャンネルメンバー | P2 |
| `PATCH` | `/api/clients/[id]/chat/channels/[chId]/read` | 既読位置更新 | チャンネルメンバー | P2 |
| `POST` | `/api/clients/[id]/chat/channels/[chId]/messages/[mId]/pin` | ピン留め/解除 | MEMBER+ | P2 |
| `POST` | `/api/chat/upload` | ファイルアップロード（S3署名URL） | チャンネルメンバー | P2 |
| `GET` | `/api/chat/mentions/suggest` | メンション候補検索 | チャンネルメンバー | P2 |
| `GET` | `/api/clients/[id]/chat/search` | メッセージ全文検索 | アサイン済み | P2 |

---

## 8. バッチ処理設計（データ同期）

| ジョブ名 | 実行時刻(JST) | 処理内容 | 1クライアント所要時間 | リトライ |
|---------|-------------|---------|------------------|---------|
| **`sync-gsc`** | 03:00 | GSC APIで3日前データ取得 → BigQuery `rank_history`にINSERT | 約30秒 | 3回（5min, 15min, 60min） |
| **`sync-ga4`** | 03:30 | GA4 batchRunReportsで5種レポート取得 → BigQuery `traffic_snapshot` | 約20秒 | 同上 |
| **`sync-ahrefs`** | 04:00 | DR/被リンク/参照ドメイン/KD取得 → BigQuery + PostgreSQL | 約15秒 | レートリミット時は次バッチに延期 |
| **`sync-keyword-planner`** | 毎月1日 05:00 | Google Ads APIで全トラッキングKWの月間検索Vol取得 → `Keyword.searchVolume`更新 | 約60秒 | 3回。API制限時は翌日延期 |
| **`sync-cms`** | 04:30 | WP REST APIで全記事取得 → `Content`にupsert | 約10秒 | 同上 |
| **`sync-psi`** | 日曜 02:00 | PSI APIでCWV取得 → `CwvSnapshot` | 約60秒 | 同上 |
| **`calc-rewrite-scores`** | 05:00 | リライト優先度スコア再計算 → `Content.rewriteScore`更新 | 約5秒 | 1回 |
| **`check-alerts`** | 06:00 | アラートルール異常検知 → `AlertHistory` → Slack/メール | 約3秒 | 通知失敗時のみ |

> **🔧 ジョブキュー実装**
> BullMQ (Redis-backed) を使用。`concurrency: 3` で並列処理。全クライアント（100社想定）の同期を6時間以内に完了する設計。

---

## 9. アラート・通知設計

### 通知の優先度ティア

| 優先度 | 配信タイミング | 対象アラート | 通知方法 |
|--------|-------------|------------|---------|
| **Critical（即時）** | 発生時に即座に通知 | 順位急落、流入急減、CV異常 | Slack即時 + メール |
| **Warning（バッチ）** | 1時間ごとにまとめて | インデックス急減、被リンク急減、施策遅延、コンテンツ滞留 | Slackまとめ通知 |
| **Info（日次ダイジェスト）** | 毎朝8:00 | 契約更新接近、同期完了、新規コメント | 日次ダイジェストメール |

### 日次ダイジェストメール

| 項目 | 仕様 |
|------|------|
| **配信時刻** | 毎朝 8:00 JST |
| **件名** | 「今日対応すべき案件TOP5」 |
| **内容** | ヘルススコアワースト5 / 未返信チャット案件 / 期限超過タスク案件 / 契約更新30日以内案件 / 前日Criticalアラートまとめ |

### アラート種別一覧

| アラート種別 | トリガー条件 | 重要度 | 通知先 |
|------------|------------|--------|--------|
| **順位急落** | 管理KWの順位が前日比で5位以上下落 | Critical | Slack即時 + メール |
| **流入急減** | 日次オーガニックSSが過去7日平均の70%以下 | Critical | Slack即時 |
| **CV異常** | 通常CV発生ページで3日連続CV=0（月平均CV>5） | Critical | Slack即時 + メール |
| **インデックス急減** | インデックスページ数が前週比10%以上減少 | Warning | Slack（1時間バッチ） |
| **被リンク急減** | 参照ドメイン数が前週比10%以上減少 | Warning | Slack（1時間バッチ） |
| **施策遅延** | due_date超過 & status ≠ DONE | Warning | Slack（1時間バッチ） |
| **コンテンツ滞留** | 校正中3日以上 or クライアント承認待ち5日超過 | Warning | Slack + 自動リマインダー |
| **契約更新接近** | contractEndAtまで60日/30日 | Info | 日次ダイジェスト |
| **同期エラー** | SyncLog.status = 'error' が2回連続 | Warning | Slack（管理者チャンネル） |

---

## 10. レポート自動生成設計

### レポート生成フロー

1. 生成ボタン押下 → 2. DB集計 → 3. AI所感生成 → 4. PPTX組立 → 5. 所感レビュー → 6. 確定・DL

### スライド構成（現行レポートとの対応）

| スライド# | 内容 | 現行スライド | データソース | AI所感 |
|----------|------|------------|------------|--------|
| 1 | 表紙 | 表紙 | Client情報 | - |
| 2 | 全体概要サマリー | スライド4 | 全データ集計 | 自動生成 |
| 3 | コラムコンテンツ状況 | スライド6 | Content (status集計) | 自動生成 |
| 4 | サービスページ改善施策 | スライド7 | Task (TECHNICAL集計) | 自動生成 |
| 5 | チャンネル別流入数 | スライド9 | GA4 channelBreakdown | 自動生成 |
| 6 | オーガニックSS推移 | スライド10 | GA4 organicSessions | 自動生成 |
| 7 | magazine配下 vs その他 | スライド11 | GA4 セグメント | 自動生成 |
| 8 | ユーザー数推移 | スライド12 | GA4 totalUsers/newUsers | 自動生成 |
| 9 | 入口ページランキングTOP20 | スライド13 | GA4 landingPage | 自動生成 |
| 10 | アクセスランキングTOP20 | スライド14 | GSC page impressions | 自動生成 |
| 11 | CV数推移 | スライド15 | GA4 conversions | 自動生成 |
| 12 | KWフォーカス（前年プラス） | スライド17 | GSC query比較 | 自動生成 |
| 13 | KWフォーカス（前年マイナス） | スライド18 | GSC query比較 | 自動生成 |
| 14 | KWフォーカス（前月プラス） | スライド19 | GSC query比較 | 自動生成 |
| 15 | KWフォーカス（前月マイナス） | スライド20 | GSC query比較 | 自動生成 |
| 16 | 外部リンク数推移 | スライド22 | Ahrefs BacklinkSnapshot | 自動生成 |
| 17 | 次月アクションプラン | - | Task + Content | 手動入力 |

> **🔧 PPTX生成ライブラリ:** `pptxgenjs`。AI所感は Claude API (`claude-sonnet-4-6`) で生成。

### AI改善提案の自動生成（月2案）

| 提案の種類 | データソース | テンプレート |
|-----------|------------|------------|
| **Site Audit Issue → 修正推奨** | CwvSnapshot + 技術SEO | 「○○を修正すべき。想定インパクト: 表示速度△秒改善」 |
| **KW順位変動 → リライト提案** | RankHistory | 「○○のリライトを提案。競合記事の構成分析結果: ...」 |
| **CV改善 → CTA最適化提案** | TrafficSnapshot + GA4 CV | 「CTA配置変更を提案。根拠: LP直帰率が○%」 |

**提案書テンプレート（4項目構成）:**

| セクション | 内容 | データ自動挿入 |
|-----------|------|--------------|
| **何を（What）** | 具体的な改善アクション | 対象ページURL、対象KW |
| **なぜ（Why）** | 改善が必要な根拠データ | 順位変動グラフ、流入データ自動挿入 |
| **どうやって（How）** | 実施手順の概要 | AI競合分析結果から生成 |
| **期待効果（Impact）** | 改善による想定インパクト | 過去の類似施策効果（KnowledgeBaseから参照） |

---

## 11. ナレッジベース

> **💼 ビジネス解説**
> 新卒4名入社予定。通常は戦力化まで6ヶ月かかるが、ナレッジベースで **3ヶ月で戦力化** できる。1人あたり90万円の人件費効率化に相当。

### 構造

| データ | 内容 | データソース |
|--------|------|------------|
| **提案内容** | 過去に行った改善提案 | `KnowledgeBase.proposal` |
| **実施内容** | 実際に実施した内容 | `KnowledgeBase.implementation` |
| **効果測定** | 施策実施後の計測結果 | `KnowledgeBase.effect` |
| **タグ付け** | 業界タグ、施策種別タグ | `industry`, `tacticType`, `tags` |

### 検索・活用

| 機能 | 仕様 |
|------|------|
| **全文検索** | 提案内容・実施内容・効果をキーワード検索 |
| **フィルタ** | 業界別、施策種別、効果あり/なし |
| **AI提案連携** | AI改善提案生成時に過去の類似施策を自動参照 |
| **閲覧権限** | 全コンサルタント・ディレクター（クライアント名は匿名化オプション） |

---

## 12. 連絡手段一元化

### 段階的移行計画

| フェーズ | 対象 | 施策 |
|---------|------|------|
| **Phase 1** | 新規クライアント | ダッシュボード内チャットを開設し使い始める |
| **Phase 2** | 既存クライアント | ポータルの便利さを体験してもらう |
| **Phase 3** | 移行促進 | Chatwork API連携で自動転送。メールWebhook連携で自動取り込み |

### 外部連携（将来）

| 連携先 | 方式 | 用途 |
|--------|------|------|
| **Chatwork API** | 受信メッセージの自動転記 | Chatworkメッセージを自動転送 |
| **メールWebhook** | 特定件名・送信元のメール自動取り込み | メールをチャットに自動転記 |
| **Backlog API** | 課題の同期（将来検討） | Backlog課題をタスク管理に同期 |

---

## 13. 技術構成・インフラ

| レイヤー | 技術 | バージョン | 選定理由 |
|---------|------|-----------|---------|
| **フロントエンド** | Next.js (App Router) | 15.x | React Server ComponentsでDB直接アクセス |
| | TypeScript | 5.x | 型安全 |
| | TailwindCSS + shadcn/ui | 4.x / latest | 高速なUI開発 |
| | Recharts | 2.x | Reactネイティブグラフ |
| | @dnd-kit | latest | カンバンD&D |
| **バックエンド** | Next.js API Routes | - | フロントと同一リポジトリ |
| | Prisma ORM | 6.x | 型安全なDB操作 |
| | BullMQ | 5.x | Redisベースのジョブキュー |
| | NextAuth.js (Auth.js v5) | 5.x | OAuth認証 |
| **DB（操作系）** | PostgreSQL (Cloud SQL) | 16 | CRUD操作に最適 |
| **DB（分析系）** | BigQuery | - | 年438万件を数秒で集計。自社GCP内で完結 |
| **キャッシュ** | Redis (Memorystore) | 7.x | キャッシュ + ジョブキューバックエンド |
| **ファイルストレージ** | Cloud Storage (GCS) | - | レポートPPTX/PDF保存 |
| **AI** | Claude API (Anthropic) | claude-sonnet-4-6 | 所感ドラフト生成。日本語品質が高い |
| **PPTX生成** | pptxgenjs | 3.x | PowerPoint生成 |
| **リアルタイム通信** | Pusher | - | WebSocketチャット。Startup plan（200同時接続） |
| **ホスティング** | GCP Cloud Run | - | オートスケーリング対応 |
| **CI/CD** | GitHub Actions | - | PR時自動テスト、mainマージ時自動デプロイ |
| **監視** | Sentry + UptimeRobot | - | エラートラッキング + 死活監視 |

### インフラ構成図

```
┌─────────────────────────────────────────────────────────────┐
│                     GCP (Google Cloud Platform)             │
│                                                             │
│  ┌──────────────┐   ┌──────────────────────┐                │
│  │  Cloud Run    │──▶│ Cloud SQL (PostgreSQL │                │
│  │  (App Host)   │   │  16) — 操作系CRUD     │                │
│  └──────┬───────┘   └──────────────────────┘                │
│         │                                                    │
│         ├──▶ BigQuery — 分析 & 履歴時系列データ              │
│         │                                                    │
│         ├──▶ Memorystore (Redis 7) — キャッシュ & ジョブキュー│
│         │                                                    │
│         └──▶ Cloud Storage — レポートファイル保存            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
              │
              └──▶ Pusher — リアルタイムWebSocket (チャット)
```

### GCPインフラ構成詳細

| サービス | 用途 | スペック/プラン |
|---------|------|---------------|
| **Cloud Run** | アプリケーションホスティング | min 1, max 10インスタンス |
| **Cloud SQL (PostgreSQL 16)** | 操作系データベース | db-custom-2-4096（2 vCPU, 4GB RAM） |
| **BigQuery** | 分析データウェアハウス | オンデマンド課金 |
| **Memorystore (Redis 7)** | キャッシュ + ジョブキュー | Basic tier, 1GB |
| **Cloud Storage** | ファイルストレージ | Standard class |
| **Pusher** | リアルタイムWebSocket | Startup plan（$49/月、200同時接続） |

---

## 14. セキュリティ・権限設計

> **⚠️ 重要：クライアントデータの保護**
> 本システムは複数クライアントのビジネスデータを一元管理します。データ漏洩は信用失墜に直結。

| 対策 | 実装方法 |
|------|---------|
| **テナント分離** | Prismaミドルウェアで `WHERE projectId = 現在ユーザーのアサイン済みプロジェクト` を自動付与 |
| **認証** | OAuth 2.0 (Google)。セッションはDB管理（JWT 24時間有効） |
| **認可** | RBAC。APIミドルウェアで全リクエストのロール・アクセス権を検証 |
| **通信暗号化** | 全通信HTTPS（TLS 1.3）。Cloud Run自動管理 |
| **認証情報の保護** | OAuthトークン、API keyはAES-256-GCMで暗号化してDB保存。復号キーは環境変数 |
| **監査ログ** | 全データ変更操作を `AuditLog` テーブルに記録 |
| **入力検証** | 全APIをZodスキーマでバリデーション。XSS対策はReactデフォルトエスケープ + DOMPurify |
| **依存パッケージ管理** | GitHub Dependabot + npm audit週次実行 |

---

## 15. 非機能要件

| カテゴリ | 要件 | 目標値 | 計測方法 |
|---------|------|--------|---------|
| **表示速度** | ダッシュボード初期表示 | 3秒以内 | Lighthouse CI |
| | グラフ描画完了 | 1秒以内 | Performance API |
| | テーブルフィルタ/ソート | 500ms以内 | ユーザビリティテスト |
| **同時接続** | アクティブユーザー | 200ユーザー以上 | 負荷テスト (k6) |
| **クライアント数** | 同時管理 | 200社以上 | シード + 負荷テスト |
| **データ同期** | 全クライアント日次同期 | 6時間以内 | SyncLog完了時刻 |
| **可用性** | 月間稼働率 | 99.5%以上 | UptimeRobot |
| **バックアップ** | DB自動バックアップ | 日次、30日保持 | Cloud SQL自動バックアップ |
| **障害復旧** | RTO / RPO | 4時間 / 24時間 | 障害訓練 |
| **ブラウザ対応** | サポート | Chrome, Edge, Safari 最新2バージョン | E2Eテスト (Playwright) |
| **レスポンシブ** | モバイル対応 | 閲覧可能（操作はPC推奨） | 実機テスト |

### デザインシステム

| 項目 | 仕様 |
|------|------|
| **テーマ** | ライトモード。白背景(`#ffffff`) + 薄灰パネル(`#f8fafc`) + ダークテキスト(`#1e293b`) |
| **アクセントカラー** | 社内モード: 青(`#3b82f6`)。クライアントポータル: 紫(`#8b5cf6`) |
| **フォント** | Inter + Noto Sans JP（Google Fonts）。本文13px、見出し16-22px |
| **ボーダー半径** | カード: 12px、ボタン/バッジ: 6-8px、アバター: 50% |

### モバイル対応仕様

| 項目 | 仕様 |
|------|------|
| **サイドバー** | 768px以下でハンバーガーメニューに切替 |
| **KPIカード** | 4列 → 2列（タブレット）→ 1列（スマホ） |
| **カンバン** | 横スクロール対応 |
| **テーブル** | 横スクロール対応（`overflow-x: auto`） |
| **2カラム** | 768px以下で1カラムに切替 |

### 社内/クライアント モード切替

| 項目 | 社内モード | クライアントモード |
|------|----------|-----------------|
| **アクセントカラー** | 青(`#3b82f6`) | 紫(`#8b5cf6`) |
| **サイドバー** | 全クライアント一覧 + 各サブメニュー | ダッシュボード/コンテンツ承認/チャット/レポート |
| **チャット** | 全4チャンネル表示 | #general + #report のみ |
| **コンテンツ** | カンバン管理（全ステータス） | 承認待ち一覧 |
| **レポート** | プレビュー + AI所感編集 + 生成 | PDFダウンロードのみ |

---

## 16. データ分析基盤強化 + BigQuery連携

### 高度分析ダッシュボードの構成（Phase 4）

| 指標 | 表示内容 | 目的 |
|------|---------|------|
| **サイトパフォーマンス総合スコア** | Site Auditの問題数 x 影響度 = 改善優先度スコア | 技術的な改善の優先順位付け |
| **競合ベンチマーク** | 競合サイトのCWVスコア vs クライアントサイト | 技術的な差異を可視化 |
| **Tool ROI表示** | 「先月本ツールが自動処理した作業 = ○時間分」 | 投資対効果を実績値で証明 |

### BigQuery連携

| 機能 | 内容 | フェーズ |
|------|------|---------|
| **GA4 → 自社BigQuery蓄積** | GA4 Data APIで取得した集計データを自社バッチで自社BQにINSERT | P4 |
| **BigQueryからのデータ取得** | BigQuery APIでローデータを取得し深い分析を表示 | P4 |
| **高度分析プレビュー** | BigQueryローデータを活用した分析結果をダッシュボード内に表示 | P4 |

---

## 17. 開発ロードマップ・工数見積

> **⚠️ 旧計画からの変更点**
> クライアントポータルをPhase 3→ **Phase 1に前倒し**（解約阻止が最優先）。データ連携・ダッシュボードをPhase 2に移動。

### Phase 1: 解約阻止（W1-12 = 約3ヶ月）

| Week | マイルストーン | 成果物 | 工数(人日) |
|------|-------------|--------|-----------|
| W1-2 | **M1: プロジェクト基盤** | Next.jsプロジェクト、Prismaスキーマ、DB構築、認証、CI/CD | 10 |
| W3-4 | **M2: コンテンツ管理** | カンバンUI、バルク操作、ガントチャート、ボトルネック検知 | 14 |
| W5-6 | **M3: クライアントポータル** | クライアント専用ログイン、権限制御、簡易ダッシュボード、承認ワークフロー | 12 |
| W7-8 | **M4: チャット機能** | チャンネル管理、WebSocket、メンション・参照、ファイル添付 | 14 |
| W9-10 | **M5: ライターポータル** | ライター用UI、原稿提出、フィードバック確認、評価システム | 10 |
| W11-12 | **M6: テスト・改善** | E2Eテスト、承認フロー検証、自動リマインダー、バグ修正 | 10 |
| | | **Phase 1 小計** | **70人日** |

### Phase 2: スケール対応（W13-20 = 約2ヶ月）

| Week | マイルストーン | 成果物 | 工数(人日) |
|------|-------------|--------|-----------|
| W13-14 | **M7: GSC/GA4連携** | OAuth認証フロー、APIクライアント、日次バッチジョブ | 12 |
| W15-16 | **M8: Ahrefs/CMS連携** | Ahrefs APIクライアント、WP REST API、Webhook | 10 |
| W17-18 | **M9: ダッシュボード** | 全案件テーブルビュー、クライアント概要、KW管理、外部リンク | 14 |
| W19-20 | **M10: 通知設計** | アラートルールエンジン、優先度制御、日次ダイジェスト | 10 |
| | | **Phase 2 小計** | **46人日** |

### Phase 3: ロックイン（W21-28 = 約2ヶ月）

| Week | マイルストーン | 成果物 | 工数(人日) |
|------|-------------|--------|-----------|
| W21-22 | **M11: レポート自動生成** | PPTXテンプレート、データバインディング、生成パイプライン | 12 |
| W23-24 | **M12: AI所感 + 改善提案** | Claude API連携、所感ドラフト、月2案自動生成、リライトスコアリング | 12 |
| W25-26 | **M13: 保守プラン + ヘルススコア** | 保守プランUI、解約時比較画面、ヘルススコア算出 | 10 |
| W27-28 | **M14: ナレッジベース** | 施策→実施→効果の記録UI、検索・フィルタ、AI連携 | 10 |
| | | **Phase 3 小計** | **44人日** |

### Phase 4: データ分析基盤強化（W29-32 = 約1ヶ月）

| Week | マイルストーン | 成果物 | 工数(人日) |
|------|-------------|--------|-----------|
| W29-30 | **M15: Site Audit + BigQuery高度分析** | Site Audit深度統合、高度分析ダッシュボード | 10 |
| W31-32 | **M16: 高度分析ダッシュボード + リリース** | 総合スコア、Tool ROI、競合ベンチマーク、全体テスト | 10 |
| | | **Phase 4 小計** | **20人日** |

| | **全体合計** | **180人日** |
|---|------------|------------|

---

## 18. 費用対効果・ROI試算

### 開発投資（一時費用）

| 項目 | 金額 | 備考 |
|------|------|------|
| 社内エンジニア工数（180人日） | ¥7,200,000 | @¥40,000/人日 |
| 外部フリーランス委託（不足分） | ¥2,000,000-4,000,000 | Phase 1-2の一部を外部委託 |
| **開発費合計** | **¥9,200,000-11,200,000** | |

### 月額インフラコスト

| 項目 | 月額費用 | 備考 |
|------|---------|------|
| GCP（Cloud Run + Cloud SQL + Memorystore） | ¥40,000-60,000 | Cloud SQL ¥15,000、Cloud Run ¥10,000-20,000、Redis ¥10,000 |
| BigQuery | ¥3,000-10,000 | ストレージ: 年50-200GB。クエリ: 月1TB以内 |
| Ahrefs API専用アカウント（Advanced） | ¥67,000 | $449/月。新規契約必要 |
| Google Ads API（Keyword Planner） | ¥0 | 既存Adsアカウントで無料 |
| Claude API（AI所感・提案生成） | ¥15,000-30,000 | 120社×月1レポート+月2提案 |
| Pusher（リアルタイムチャット） | ¥8,000 | Startup plan $49/月 |
| Cloud Storage | ¥1,000 | PPTX/PDF保存 |
| Sentry + 監視 | ¥5,000 | エラー監視 + 死活監視 |
| **インフラ月額合計** | **¥139,000-181,000** | |
| **インフラ年額** | **¥1,668,000-2,172,000** | |

### 効果試算（年額）

| 効果 | 年間金額 | 算出根拠 |
|------|---------|---------|
| **解約防止（最大インパクト）** | **¥18,000,000** | 年5件の解約防止 × 月額¥300,000 × 12ヶ月 |
| **保守プラン転換** | **¥1,800,000** | 解約予定10件のうち5件が月¥30,000保守プランに移行 × 12ヶ月 |
| **レポート工数削減** | **¥8,640,000** | 120社 × 月2時間削減 × ¥3,000/時 × 12ヶ月 |
| **担当可能案件数増加** | **¥18,000,000** | 1人あたり+5件 × 10人 × 月額¥300,000 × 12ヶ月（ポテンシャル） |
| **年間効果合計** | **¥28,440,000〜** | |

### ROIまとめ

- **開発投資**: ¥9,200,000-11,200,000（一時費用）
- **年間インフラコスト**: ¥1,700,000-2,230,000
- **年間効果（解約防止+工数削減）**: ¥28,440,000
- **初年度ROI**: (28,440,000 - 2,230,000 - 11,200,000) / 11,200,000 = **134%**
- **投資回収期間: 4-6ヶ月**
- 2年目以降は年間¥26,000,000以上の純効果

---

## 19. リスクと対策

| # | リスク | 影響度 | 発生確率 | 対策 |
|---|--------|--------|---------|------|
| 1 | **Ahrefs APIユニット上限超過** | 中 | 低 | 専用アカウント契約で軽減。上限の約48%で運用。80%到達時にSlackアラート |
| 2 | **クライアントCMSがWordPress以外** | 中 | 中 | Phase 1はWP限定。`CmsConnector`インターフェースでプラグイン設計 |
| 3 | **GA4/GSCの認証トークン期限切れ** | 中 | 高 | リフレッシュトークンで自動更新。失敗時は管理者通知。設定画面で再認証ボタン |
| 4 | **データ量増加によるDB負荷** | 低 | 低 | BigQuery導入で軽減。数十億行でも数秒で集計 |
| 5 | **クライアントデータの漏洩** | 高 | 低 | テナント分離、暗号化保存、監査ログ、セキュリティレビュー |
| 6 | **開発リソース不足** | 高 | 中 | Phase 1のMVP厳選。外部エンジニア委託検討。shadcn/ui等の既製コンポーネント活用 |
| 7 | **Google API仕様変更** | 中 | 低 | API連携レイヤーを抽象化（`DataSourceConnector`インターフェース） |
| 8 | **ユーザー定着しない** | 中 | 中 | Phase 1リリース直後に社内トレーニング。2週間パイロット運用でフィードバック収集 |
| 9 | **クライアントがChatworkから移行しない** | 中 | 高 | 段階的移行。新規クライアントから開始。Chatwork API連携で自動転送 |
| 10 | **外部ライターポータルからのデータ漏洩** | 高 | 低 | WRITERロールに厳格な権限分離。Client/Projectテーブルへのアクセス完全ブロック |
| 11 | **4フェーズによるスコープクリープ** | 中 | 中 | 各フェーズのMVP厳密定義。2週間スプリントレビュー。Phase間でレトロスペクティブ |

---

## 20. 用語集

| 用語 | 正式名称 | わかりやすい説明 |
|------|---------|----------------|
| **SEO** | Search Engine Optimization | Googleなどの検索結果で上位に表示されるようにする施策 |
| **GSC** | Google Search Console | Googleが提供する無料ツール。検索順位やクリック数がわかる |
| **GA4** | Google Analytics 4 | サイトの訪問者数やお問い合わせ数を計測するGoogleの無料ツール |
| **Ahrefs** | - | SEO分析ツール（有料）。被リンク数や競合分析ができる |
| **CMS** | Content Management System | Webサイトの記事を管理するシステム。WordPressが代表例 |
| **API** | Application Programming Interface | ソフトウェア同士がデータをやり取りする仕組み |
| **DR** | Domain Rating | Ahrefsが算出するサイトの「信頼度スコア」（0-100） |
| **KW / KD** | Keyword / Keyword Difficulty | 検索キーワード / そのKWで上位表示する難しさ（0-100） |
| **CWV** | Core Web Vitals | Googleが定めるサイト表示速度の評価指標3つ（LCP, INP, CLS） |
| **AIO** | AI Overview | Google検索結果の上部に表示されるAI要約 |
| **CTR** | Click Through Rate | 検索結果に表示された回数のうち、クリックされた割合 |
| **CV / CVR** | Conversion / Conversion Rate | お問い合わせや応募などの成果 / その発生率 |
| **SS** | Sessions（セッション） | サイトへの訪問回数 |
| **LP** | Landing Page | ユーザーが最初にアクセスしたページ（入口ページ） |
| **OAuth** | Open Authorization | Googleアカウントでログインできるようにする仕組み |
| **RBAC** | Role-Based Access Control | 役割ごとに操作権限を分ける仕組み |
| **DB** | Database | データを整理して保存する倉庫 |
| **バッチ処理** | - | 毎日決まった時間に自動実行される裏方の処理 |
| **カンバン** | - | 付箋を列に並べて進捗を管理する方法。Trelloのようなイメージ |
| **MVP** | Minimum Viable Product | 最低限使える状態の製品 |
| **PPTX** | - | PowerPointファイルの形式 |
| **Looker Studio** | 旧Googleデータポータル | Googleのダッシュボードツール。現在GA4データ閲覧に使用中。本ツール稼働後は段階的に移行予定 |

---

> **本書は社外秘です。関係者以外への共有はお控えください。**
>
> SEO統合ダッシュボード 詳細要件定義書 v3.0 | 作成日: 2026-03-23 | 承認状態: 承認待ち
