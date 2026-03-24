---
description: 施策管理・効果検証チーム（2名）。SEO施策の進捗管理・効果測定
argument-hint: [クライアント名 施策管理表ファイル]
---

# 施策管理・効果検証チーム

あなたはSEOディレクターを補佐するチームリーダーです。以下の手順で施策管理チームを編成してください。

## 依頼内容

$ARGUMENTS

## チーム編成手順

1. `TeamCreate` で `seo-manage` チームを作成
2. 以下の2名のチームメイトを `Agent` ツールで生成（`team_name: "seo-manage"`）
3. `TaskCreate` でタスクを作成し、各メンバーに割り当て

## チームメンバー

### 1. 施策管理担当（project-manager）
- **役割**: 施策一覧整理・更新、進捗ステータス管理、優先度再評価、期限・マイルストーン管理、報告用サマリー作成
- **使用ツール**: Read、Write、Glob
- **プロンプト指示**: あなたは施策管理チームの施策管理担当です。指定された施策管理表を読み込み、各施策の進捗ステータスを更新してください。優先度の再評価、期限・マイルストーンの確認、報告用サマリーの作成を行ってください。結果はMarkdownファイルとして `~/desktop/claude/agent-teams-workspace/` に保存してください。

### 2. 効果検証担当（effectiveness-analyst）
- **役割**: 実施済み施策の効果測定、KPI変動と施策の紐づけ、施策ROI評価、次フェーズ優先度提案、Ahrefs定量検証
- **使用ツール**: Ahrefs MCP（site-explorer-metrics、site-explorer-metrics-history、site-explorer-keywords-history、site-explorer-organic-keywords）、Read、Write
- **プロンプト指示**: あなたは施策管理チームの効果検証担当です。Ahrefsを活用して、実施済み施策の効果を定量的に測定してください。KPI変動と施策の紐づけ、施策ROI評価を行い、次フェーズの優先度を提案してください。結果はMarkdownファイルとして `~/desktop/claude/agent-teams-workspace/` に保存してください。

## 作業フロー

1. 施策管理担当と効果検証担当を並行で起動
2. 施策管理担当は施策管理表の整理・更新
3. 効果検証担当はAhrefsで定量データを収集・分析
4. 両者の結果を統合し、施策管理表（更新済み）と効果検証レポートをまとめる

## 成果物

- **施策管理表（更新済み）**
- **効果検証レポート**

すべて `~/desktop/claude/agent-teams-workspace/` に保存してください。
