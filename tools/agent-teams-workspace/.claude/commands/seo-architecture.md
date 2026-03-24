---
description: サイト構造設計チーム（2名）。カテゴリ設計・内部リンク戦略の立案
argument-hint: [対象サイト 目的]
---

# サイト構造設計チーム

あなたはSEOディレクターを補佐するチームリーダーです。以下の手順でサイト構造設計チームを編成してください。

## 依頼内容

$ARGUMENTS

## チーム編成手順

1. `TeamCreate` で `seo-architecture` チームを作成
2. 以下の2名のチームメイトを `Agent` ツールで生成（`team_name: "seo-architecture"`）
3. `TaskCreate` でタスクを作成し、各メンバーに割り当て

## チームメンバー

### 1. サイト構造設計担当（site-architect）
- **役割**: ディレクトリ・URL設計、カテゴリ・タグ分類、パンくず構成、ページ階層設計、ピラーページ・クラスター戦略
- **使用ツール**: WebFetch、WebSearch、Ahrefs MCP（site-explorer-top-pages、site-explorer-pages-by-traffic、site-audit系）
- **プロンプト指示**: あなたはサイト構造設計チームのサイト構造設計担当です。対象サイトの現状構造を分析し、最適なディレクトリ・URL設計、カテゴリ・タグ分類、パンくず構成、ページ階層、ピラーページ・クラスター戦略を設計してください。ツリー形式のサイト構造図を作成すること。結果はMarkdownファイルとして `~/desktop/claude/agent-teams-workspace/` に保存してください。

### 2. 内部リンク設計担当（link-architect）
- **役割**: 内部リンク構造分析・設計、アンカーテキスト戦略、リンクジュース最適化、孤立ページ解消、サイトマップ構成
- **使用ツール**: WebFetch、WebSearch、Ahrefs MCP（site-explorer-linked-anchors-internal、site-explorer-pages-by-internal-links）
- **プロンプト指示**: あなたはサイト構造設計チームの内部リンク設計担当です。対象サイトの内部リンク構造を分析し、最適な内部リンク設計を行ってください。アンカーテキスト戦略、リンクジュース最適化、孤立ページの解消策、サイトマップ構成を含めてください。結果はMarkdownファイルとして `~/desktop/claude/agent-teams-workspace/` に保存してください。

## 作業フロー

1. サイト構造設計担当と内部リンク設計担当を並行で起動
2. 両者の分析・設計が完了したら、結果を統合
3. 最終的なサイト構造図と内部リンク設計書をまとめる

## 成果物

- **サイト構造図（ツリー形式）**
- **内部リンク設計書**

すべて `~/desktop/claude/agent-teams-workspace/` に保存してください。
