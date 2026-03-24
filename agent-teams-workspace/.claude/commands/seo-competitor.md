---
description: 競合分析チーム（3名）。競合サイトとの比較分析・施策立案
argument-hint: [自社URL 競合URL]
---

# 競合分析チーム

あなたはSEOディレクターを補佐するチームリーダーです。以下の手順で競合分析チームを編成してください。

## 依頼内容

$ARGUMENTS

## チーム編成手順

1. `TeamCreate` で `seo-competitor` チームを作成
2. 以下の3名のチームメイトを `Agent` ツールで生成（`team_name: "seo-competitor"`）
3. `TaskCreate` でタスクを作成し、各メンバーに割り当て

## チームメンバー

### 1. SEO指標分析担当（metrics-analyst）
- **役割**: DR、オーガニックトラフィック推移、被リンクプロファイル、KWランキング数・トップKW
- **使用ツール**: Ahrefs MCP（site-explorer-domain-rating、site-explorer-metrics、site-explorer-metrics-history、site-explorer-referring-domains、site-explorer-organic-keywords、site-explorer-backlinks-stats）
- **プロンプト指示**: あなたは競合分析チームのSEO指標分析担当です。Ahrefsを活用して、自社と競合のSEO指標を比較分析してください。DR、オーガニックトラフィック推移、被リンクプロファイル、KWランキング数、トップKWを調査し、比較表を作成してください。結果はMarkdownファイルとして `~/desktop/claude/agent-teams-workspace/` に保存してください。

### 2. コンテンツ戦略分析担当（content-strategist）
- **役割**: 競合のコンテンツ構成・サイト構造、上位獲得コンテンツの特徴、更新頻度、コンテンツギャップ分析
- **使用ツール**: WebFetch、WebSearch、Ahrefs MCP（site-explorer-top-pages、site-explorer-pages-by-traffic）
- **プロンプト指示**: あなたは競合分析チームのコンテンツ戦略分析担当です。競合サイトのコンテンツ構成、サイト構造、上位獲得コンテンツの特徴、更新頻度を分析し、コンテンツギャップを特定してください。結果はMarkdownファイルとして `~/desktop/claude/agent-teams-workspace/` に保存してください。

### 3. 施策提案担当（strategy-advisor）
- **役割**: 上記2名の分析統合、差別化ポイント特定、短期（1-3ヶ月）・中期（3-6ヶ月）の優先度付き施策ロードマップ
- **使用ツール**: Read、Write
- **プロンプト指示**: あなたは競合分析チームの施策提案担当です。SEO指標分析担当とコンテンツ戦略分析担当の分析結果を統合し、差別化ポイントを特定してください。短期（1-3ヶ月）・中期（3-6ヶ月）の優先度付き施策ロードマップを作成してください。結果はMarkdownファイルとして `~/desktop/claude/agent-teams-workspace/` に保存してください。

## 作業フロー

1. SEO指標分析担当とコンテンツ戦略分析担当を並行で起動
2. 両者の分析が完了したら、施策提案担当を起動して統合・ロードマップ作成
3. 最終的な比較表と施策提案ロードマップをまとめる

## 成果物

- SEO指標比較表
- コンテンツ戦略分析レポート
- **統合版: 比較表 + 施策提案ロードマップ**

すべて `~/desktop/claude/agent-teams-workspace/` に保存してください。
