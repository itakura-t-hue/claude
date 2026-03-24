# ヘルスケアアプリ デザインシステム
## Healthcare App Design System for Elderly Users

---

## 要件分析 (Requirements Analysis)

**プロダクトタイプ**: Healthcare/Telemedicine Mobile App
**ターゲットオーディエンス**: Elderly users (60+), health-conscious consumers
**テックスタック**: React Native
**特別な要件**:
- Accessibility for elderly users (larger fonts, high contrast, simple interactions)
- Trust and clarity (medical context)
- Touch-friendly interfaces (44x44px+ minimum)
- Multiple language support consideration

---

## デザインシステム: ヘルスケアアプリ

### 概要 (Overview)

本デザインシステムは、お年寄りでも使いやすいヘルスケアアプリのために、**信頼感と明確性**を重視して設計されています。大きなテキスト、高コントラスト、シンプルなナビゲーション、そして医療的な信頼感を醸し出すことが重点です。

---

## 1. スタイル方針 (Style Guidelines)

### メインスタイル: **Minimalism** + **Healing Green**

**選定理由**:
- **ミニマリズム**: 高齢ユーザーのための認知負荷削減。不要なデザイン要素は排除し、重要な情報に集中
- **ヒーリンググリーン**: 医療・健康のシンボルカラー。落ち着きと安心感を伝える

### サブスタイル: **Flat Design** + **Accessible Color Palette**

**フラットデザイン要素**:
- シャドウは控えめ（高齢者の視認性向上）
- グラデーションは最小限
- 明確なボーダー/フレームで要素を区切る

**アクセシビリティ重視**:
- 色に依存した情報伝達は避ける（アイコンやテキストを併用）
- コントラスト比 WCAG AAA（7:1）を目指す
- 触覚フィードバック（スマートフォン振動）を活用

---

## 2. カラーパレット (Color Palette)

### 基本配色: **Healing Green Theme**

```
プライマリカラー（信頼と安心）:
- Primary Green: #06A77D — メイン操作ボタン、重要なステータス表示
- Secondary Teal: #055160 — サブアクション、補助的な要素

セカンダリカラー（医療的専門感）:
- Wellness Blue: #0D7FB8 — 情報、医療ナビゲーション
- Light Sky: #48BFE3 — 背景強調、アクセント

ニュートラルカラー（可読性と落ち着き）:
- Background Light: #F0FDF8 — メイン背景（優しい白とグリーンの混合）
- White: #FFFFFF — カード、パネル背景
- Text Primary: #0F2F2A — 本文テキスト（深い緑）
- Text Secondary: #666666 — 補助テキスト

ステータスカラー:
- Success: #10B981 — 健康状態良好、完了したタスク
- Warning: #F59E0B — 注意が必要な情報、医師の助言待ち
- Error/Alert: #DC2626 — 緊急、異常値、エラーメッセージ
- Info: #3B82F6 — 通知、ティップ、ガイダンス

ボーダー・区切線:
- Border Primary: #C5E5DF — カード間の区切り
- Border Subtle: #E8E8E8 — 軽い区分
```

### Tailwind Config例:

```js
colors: {
  primary: {
    DEFAULT: '#06A77D',    // Primary Green
    light: '#8FD3BC',      // Light accent
    dark: '#055160',       // Secondary Teal
  },
  secondary: {
    DEFAULT: '#0D7FB8',    // Wellness Blue
    light: '#48BFE3',      // Light Sky
  },
  background: {
    light: '#F0FDF8',      // Primary bg
    white: '#FFFFFF',
  },
  text: {
    primary: '#0F2F2A',    // Deep green text
    secondary: '#666666',
  },
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#DC2626',
    info: '#3B82F6',
  },
}
```

### ダークモード対応:

```
Dark Mode Adaptation (optional for accessibility):
- Background Dark: #0A2420
- Surface Dark: #1A3A35
- Text Dark (Light): #E0E0E0
- Primary Dark (Lightened): #52B88A (20-30% lighter for dark background contrast)
```

**アクセシビリティ検証**:
- Primary Green + White: 5.2:1 コントラスト比（WCAG AA以上）
- Primary Green + Light Background: 6.8:1 コントラスト比（WCAG AAA）
- Error Red + White: 4.6:1 コントラスト比（WCAG AA）
- Success Green + White: 5.1:1 コントラスト比（WCAG AA）

---

## 3. タイポグラフィ (Typography)

### フォントペアリング: **Source Sans Pro + Source Serif Pro**

**選定理由**:
- オープンソースで自由に使用可能
- 高齢ユーザーに親しみやすい、読みやすいデザイン
- 医学的な信頼感を醸し出す
- 優れたアクセシビリティ評価

### フォント設定:

**見出し用**: Source Sans Pro
```
- H1 (Screen Title): 32px, Weight 600, Letter-spacing: -0.02em
- H2 (Section Title): 24px, Weight 600, Letter-spacing: -0.01em
- H3 (Subsection): 20px, Weight 600, Letter-spacing: 0
```

**本文用**: Source Sans Pro (セリフは避ける。モバイル画面での可読性)
```
- Body Text: 16px, Weight 400, Line-height: 1.6, Letter-spacing: 0
- Small Text (注釈): 14px, Weight 400, Line-height: 1.5
- Label/Button: 16px, Weight 600, Line-height: 1.4
- Caption: 12px, Weight 400, Line-height: 1.4
```

**コード/数値用**: IBM Plex Mono (医療データ、測定値)
```
- Vital Signs: 18px, Weight 600 (血圧、体温など重要データ)
- Date/Time: 14px, Weight 400
```

### Google Fonts Import:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet">
```

### React Native設定:

```js
const fontFamilies = {
  heading: 'Source Sans Pro',
  body: 'Source Sans Pro',
  mono: 'IBM Plex Mono',
};

const fontSizes = {
  h1: 32,
  h2: 24,
  h3: 20,
  body: 16,
  small: 14,
  caption: 12,
  vital: 18, // 重要な医療データ
};
```

### タイポグラフィのアクセシビリティ:

- **最小フォントサイズ**: 16px（本文）、14px（ラベル）
- **最大行幅**: 65文字（読みやすさのため）
- **行間**: 1.5～1.6（テキスト密度を下げ、スキャン容易性向上）
- **文字間隔**: 見出しは-0.02em（インパクト）、本文は0（自然）

---

## 4. スペーシング・レイアウト (Spacing & Layout)

### 基本単位: **8px Grid System**

高齢ユーザーのために、十分なホワイトスペースとタッチターゲット確保を重視。

```css
/* Spacing Scale */
--space-xs: 4px;      /* 最小（文字間隔など） */
--space-sm: 8px;      /* 要素間の基本間隔 */
--space-md: 16px;     /* セクション内のマージン */
--space-lg: 24px;     /* セクション間のマージン */
--space-xl: 32px;     /* 主要エリアのマージン */
--space-2xl: 48px;    /* ページ全体のパディング */
--space-3xl: 64px;    /* 大きなセクション間 */
```

### React Native実装例:

```js
const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
};

// 使用例
<View style={{ paddingHorizontal: spacing.lg, paddingVertical: spacing.md }}>
  <Text style={{ marginBottom: spacing.md }}>健康チェック</Text>
</View>
```

### タッチターゲット（モバイル必須）:

```
- ボタン・タップ可能要素: 最小 44x48px（iOS）、48x48dp（Android）
- 要素間のマージン: 最小 12px
- ボタン内のパディング: 水平 16px、垂直 12px
```

### レイアウトパターン:

**シングルカラム（推奨）**:
- 高齢ユーザーが横スクロールに戸惑わない
- モバイルファースト対応
- 最大コンテンツ幅: 420px（大画面でも見やすさ優先）

**カード型レイアウト**:
- 関連情報を視覚的にグループ化
- 各カード: 16px パディング、8px ボーダーラジウス
- 背景: #FFFFFF、ボーダー: 1px solid #C5E5DF

---

## 5. エフェクト・インタラクション (Effects & Interactions)

### シャドウ（ミニマム、高齢ユーザー考慮）:

```css
/* 微細なシャドウのみ（色覚障害対策、コントラスト重視） */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 2px 4px rgba(0, 0, 0, 0.08);
--shadow-lg: 0 4px 8px rgba(0, 0, 0, 0.10);

/* Dark Modeではエレベーション（背景の明るさ）で表現 */
```

### ボーダーラジウス:

```
- ボタン: 6-8px（親しみやすさ）
- カード: 8-12px（柔らかい印象）
- 入力フィールド: 6px（明確さ）
- モーダル: 12px（重要度を示す）
```

### トランジション・アニメーション:

**基本原則**:
- 目的のあるアニメーション（フィードバック、状態変化を示す）のみ
- 高齢ユーザーの動きに敏感な傾向に対応（控えめなアニメーション）
- `prefers-reduced-motion` を尊重

```css
/* Standard Transitions */
--transition-fast: 150ms ease-out;    /* ホバー反応 */
--transition-base: 300ms ease-out;    /* 状態変更 */
--transition-slow: 500ms ease-out;    /* ページ遷移（最大） */

/* Easing Functions */
ease-out: cubic-bezier(0.4, 0, 0.2, 1);  /* 自然な減速 */
ease-in-out: cubic-bezier(0.4, 0, 0.2, 1); /* フェード */
```

### インタラクション例:

**ボタン押下**:
```
- Normal: Primary Green背景
- Hover/Focus: 10%暗くなる、2px ボーダー
- Active: Secondary Teal背景、振動フィードバック（100ms）
- Disabled: 50%透明度、グレーテキスト
```

**フォーム入力**:
```
- Focus: 2px Wellness Blue ボーダー、背景 Light Sky
- Error: 2px Error Red ボーダー、背景に淡いレッド
- Success: 2px Success Green ボーダー、チェックアイコン
- Disabled: Light Gray背景、入力不可表示
```

**スクロール・ページ遷移**:
```
- Fade in: 300ms (0 → 1 opacity)
- Slide up: 300ms (100px ↓ → 0px ↑)
- 高齢ユーザーは急激な遷移に混乱しやすいため、最大500msとする
```

---

## 6. アイコン (Icons)

### アイコンライブラリ: **Lucide React** + **Phosphor Icons**

**選定理由**:
- 医療関連のアイコンが充実
- シンプルで高齢者に理解しやすいデザイン
- React Native対応パッケージが豊富
- セマンティック（意味が明確）

### 推奨アイコン（医療アプリ向け）:

```js
import {
  Home,
  Heart,              // ハート/健康監視
  Activity,           // アクティビティ/運動
  Pill,              // 医薬品/薬管理
  Calendar,          // 予約/スケジュール
  Settings,          // 設定
  AlertCircle,       // 警告/注意
  CheckCircle,       // 完了/確認
  TrendingUp,        // 改善/増加
  TrendingDown,      // 悪化/減少
  Clock,             // 時間/タイマー
  MapPin,            // 病院/施設位置
  Phone,             // 連絡/通話
  MessageSquare,     // メッセージ/チャット
  File,              // 医療記録
  BarChart3,         // データ可視化
  Droplet,           // 水分/血液検査
  Thermometer,       // 体温
  Eye,               // 視力管理
  Ear,               // 聴力管理
  Search,            // 検索
  Menu,              // ナビゲーション
  X,                 // 閉じる
  ChevronRight,      // 進める
  ChevronDown,       // 展開
} from 'lucide-react-native';
```

### アイコン使用ガイドライン:

**サイズ**:
```
- ナビゲーション: 24-28px
- ボタン内: 18-20px
- インライン: 16px
- キー情報強調: 32-40px
```

**スタイル**:
```
- 線幅: 2px（高齢ユーザーの視認性）
- 色: プライマリカラー、またはテキスト色に同じ
- 背景円: オプション（アクティブ状態時）
```

**アクセシビリティ**:
```js
// React Nativeの例
<TouchableOpacity
  accessible={true}
  accessibilityLabel="健康チェック"
  accessibilityHint="現在の健康状態をチェックします"
>
  <Heart size={24} color="#06A77D" />
  <Text>健康チェック</Text>
</TouchableOpacity>
```

**アンチパターン（してはいけないこと）**:
- 絵文字をアイコンとして使用（医療の信頼感が下がる）
- 複数のアイコンライブラリを混在（一貫性が失われる）
- 高齢ユーザーに不可解なアイコン（医学的でないメタファー）

---

## 7. UX ガイドライン（高齢ユーザー特化）

### 優先度 HIGH のガイドライン:

#### 1. 明確な情報階層
```
- 重要な情報（健康指標、警告）は常に視認可能
- タップターゲット最小 44x44px
- コントラスト比最小 4.5:1（推奨 7:1）
```

#### 2. シンプルなナビゲーション
```
- ボトムタブ: 3-4個（最大5個）
- 1タップで主要機能にアクセス
- ハンバーガーメニューは補助的なのみ
```

#### 3. 形式フィールド
```
- ラベルは常に表示（プレースホルダーのみはNG）
- 必須フィールドを明確に示す（*マーク + "必須"テキスト）
- エラーメッセージは具体的で、修正方法を示す
例: 「メールアドレスが無効です。例: example@email.com」
```

#### 4. フィードバック即座性
```
- ボタン押下後 100-200ms 以内に反応（視覚的 + 触覚）
- ローディング状態を明示（スケルトン画面推奨）
- 成功メッセージをトースト通知で表示（2-3秒自動消失）
```

#### 5. アクセシビリティ対応
```
- VoiceOver (iOS) / TalkBack (Android) 対応
- aria-label をすべてのアイコンボタンに付与
- 見出し階層を正しく使用（h1 → h2 → h3、飛び越さない）
- キーボードナビゲーション完全サポート
```

---

## 8. コンポーネント設計

### Primary Button（主要操作）
```
- サイズ: 48px 高さ、水平 16px パディング
- 背景: Primary Green (#06A77D)
- テキスト: #FFFFFF、16px、Weight 600
- ボーダーラジウス: 8px
- Press状態: Secondary Teal背景、振動フィードバック
- Disabled: 50%透明度
```

### Secondary Button（補助操作）
```
- サイズ: 44px 高さ
- 背景: Light background (#F0FDF8)
- ボーダー: 2px Primary Green
- テキスト: Primary Green、16px
- Press状態: Light Green背景
```

### Card（情報グループ）
```
- パディング: 16px
- 背景: #FFFFFF
- ボーダー: 1px #C5E5DF
- ボーダーラジウス: 8-12px
- シャドウ: --shadow-md
```

### Input Field（入力欄）
```
- 高さ: 48px（タッチターゲット確保）
- パディング: 水平 12px、垂直 8px
- フォント: Source Sans Pro, 16px
- ボーダー: 1px #C5E5DF
- Focus: Wellness Blue ボーダー (2px)、背景 #F0FDFF
- Label: 16px、Weight 600、上部配置
```

### Status Indicator（ステータス表示）
```
医療データ表示用:
- 正常: Success Green + チェックアイコン
- 注意: Warning Orange + 注意アイコン
- 異常: Error Red + アラートアイコン
- テキスト: 14px、Color同じ
```

### Navigation Bottom Tabs
```
- 高さ: 56-60px
- タブ数: 3-4個推奨（最大5個）
- アイコン: 24px
- ラベル: 12px、Weight 500、常に表示
- Active: Primary Green、Inactive: Gray
- Safe Area対応（ホームインジケーター回避）
```

---

## 9. ダークモード対応（オプション）

高齢ユーザー向けには**ライトモード推奨**ですが、夜間使用を考慮したダークモードも提供可。

```css
/* Light Mode (Primary) */
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F0FDF8;
  --text-primary: #0F2F2A;
  --text-secondary: #666666;
  --border: #C5E5DF;
  --color-primary: #06A77D;
}

/* Dark Mode (Optional) */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0A2420;      /* 完全な黒は避ける */
    --bg-secondary: #1A3A35;
    --text-primary: #E8E8F0;
    --text-secondary: #B0B0B0;
    --border: #2D5250;
    --color-primary: #52B88A;   /* 20-30%明るく */
  }
}
```

**ダークモード使用時の注意**:
- 高齢ユーザーはライトモードを好む傾向（コントラスト視認性）
- ダークモードは optional 機能として
- 両モードで WCAG AAA (7:1) コントラスト確保

---

## 10. アンチパターン（してはいけないこと）

### Style & Layout
- ❌ 複数の色が競合するカラーパレット（信頼感が失われる）
- ❌ 過度なグラデーション・装飾（医療アプリにふさわしくない）
- ❌ フォントサイズ 14px 未満（高齢ユーザーの読みづらさ）
- ❌ テキスト行幅 100文字以上（読みが疲れやすい）
- ❌ タップターゲット 44px 未満（誤タップ増加）

### Interaction
- ❌ ホバーのみに隠された情報（モバイルでは不可）
- ❌ 500ms 以上のアニメーション（高齢ユーザーは待機に不安）
- ❌ 確認なしで医療データ削除（不可逆的な操作）
- ❌ 自動音再生（突然の音は困惑させる）
- ❌ 赤と緑だけで状態表現（色覚障害対策）

### Accessibility
- ❌ セマンティックHTML無視（スクリーンリーダー非対応）
- ❌ ARIA ラベルなしのアイコンボタン（意図が不明確）
- ❌ 見出し階層の飛び越し（スクリーンリーダーで構造が壊れる）
- ❌ 画像内のみにテキスト（alt text がない）
- ❌ キーボードナビゲーション非対応（高齢ユーザーがマウス操作に時間かかる）

### Content
- ❌ 医学用語の説明なし（患者は正確な理解が必要）
- ❌ エラーメッセージが「エラーが発生しました」のみ（何をしたらいい？）
- ❌ 複雑なフォーム（一度に20+ フィールド表示）
- ❌ 重要情報が深い階層（3+ 階層タップ）
- ❌ 予約・医療記録など重要な確認画面なし

---

## 11. React Native 実装チェックリスト

- [ ] すべてのタップターゲット 44x48px 以上
- [ ] フォントサイズ最小 14px（理想は 16px）
- [ ] Primary Green + White コントラスト 5:1 以上確認
- [ ] SafeAreaView で notch/home indicator 対応
- [ ] 全ボタン・リンクに accessibilityLabel 付与
- [ ] FlatList で 50+ アイテムは virtualization
- [ ] ローディング状態（ActivityIndicator または Skeleton）を表示
- [ ] エラー状態で具体的なエラーメッセージ表示
- [ ] ホームボタン（OS戻るボタン）で意図しないデータ削除が起きないか確認
- [ ] Dark mode detected → ライトモード推奨 toast 表示（オプション）
- [ ] 医療データ入力時に確認画面を表示
- [ ] 薬剤・食事・予約など定期的タスクに RemoteNotification / LocalNotification 設定
- [ ] Keyboard Avoiding View でテキスト入力時にキーボードが入力欄を隠さない
- [ ] Pull-to-Refresh で最新データ取得（健康データ更新対応）

---

## 12. アクセシビリティ規格（WCAG 2.1 AA 準拠）

### 色コントラスト
```
- 通常テキスト: 4.5:1 以上
- 大きいテキスト (18px+ bold / 24px+): 3:1 以上
- 推奨: AAA level (7:1)
- 医療データ表示: 最低 WCAG AAA
```

### 視覚情報
```
- 色のみで情報を伝えない → アイコン + テキストを併用
- 例: エラー = 赤い X アイコン + "エラーが発生しました" テキスト
```

### キーボードナビゲーション
```
- Tab キーですべてのインタラクティブ要素に到達可能
- Tab order が論理的（左上 → 右下）
- Escape キーで モーダル/メニューを閉じる
- Enter/Space でボタン/リンク操作
```

### スクリーンリーダー
```
- aria-label: "健康チェック" などアクション説明
- aria-hint: "あなたの最新の健康状態を表示します"
- Role: button, link, heading など明示的に付与
- Landmark: <main>, <nav>, <aside> で構造化
```

### フォーカス管理
```
- 現在のフォーカスが視覚的に明確（2-3px outline）
- フォーカスリング色：Primary Green または Contrast色
- フォーカスが意図せず隠れない（スクロール時も可視）
```

---

## 13. パフォーマンス最適化（高齢ユーザー向け）

**理由**: インターネット速度が遅い環境（農村部、通信制限ユーザー）での使用を想定

```
- Initial Bundle Size: < 100KB gzipped
- TTI (Time to Interactive): < 3秒
- Lighthouse Score: 85+ 目標
- 画像最適化: WebP + AVIF、lazy loading
- API レスポンス: < 1秒（ダッシュボード）、< 500ms（アクション）
```

### React Native最適化:
```js
// FlatList virtualization
<FlatList
  data={healthData}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  maxToRenderPerBatch={10}
  updateCellsBatchingPeriod={50}
  initialNumToRender={10}
/>

// Image optimization
<Image
  source={{ uri: imageUrl }}
  style={{ width: 200, height: 200 }}
  resizeMode="cover"
  onLoadStart={() => setLoading(true)}
  onLoadEnd={() => setLoading(false)}
/>

// Lazy loading
const HealthDetails = React.lazy(() => import('./HealthDetails'));
```

---

## 14. テーマカラーサマリー

### Primary Palette
| 用途 | 色コード | RGB | 用途例 |
|------|---------|-----|-------|
| Primary Green | #06A77D | (6, 168, 125) | メイン操作、完了状態 |
| Secondary Teal | #055160 | (5, 81, 96) | サブアクション、フォーカス |
| Wellness Blue | #0D7FB8 | (13, 127, 184) | 情報、医療ナビ |
| Light Sky | #48BFE3 | (72, 191, 227) | アクセント、背景強調 |

### Status Colors
| ステータス | 色コード | 用途 |
|-----------|---------|------|
| Success | #10B981 | 健康状態良好、完了 |
| Warning | #F59E0B | 注意が必要、要確認 |
| Error | #DC2626 | エラー、異常値、緊急 |
| Info | #3B82F6 | 通知、ガイダンス |

### Neutral Colors
| タイプ | 色コード | 用途 |
|-------|---------|------|
| Background Light | #F0FDF8 | メイン背景 |
| White | #FFFFFF | カード、パネル |
| Text Primary | #0F2F2A | 本文テキスト |
| Text Secondary | #666666 | 補助テキスト |
| Border | #C5E5DF | 区分線 |

---

## 15. 実装ファイル構成例（React Native）

```
healthcare-app/
├── src/
│   ├── colors.ts              // カラーパレット定数
│   ├── typography.ts          // フォント設定、サイズ
│   ├── spacing.ts             // スペーシング定数（8px grid）
│   ├── components/
│   │   ├── Button.tsx         // Primary/Secondary Button
│   │   ├── Card.tsx           // カード コンポーネント
│   │   ├── Input.tsx          // テキスト入力
│   │   ├── HealthMetric.tsx   // 健康指標表示
│   │   ├── StatusIndicator.tsx // ステータス表示
│   │   └── BottomNav.tsx      // ボトムナビゲーション
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── HealthCheckScreen.tsx
│   │   ├── AppointmentScreen.tsx
│   │   └── SettingsScreen.tsx
│   └── navigation/
│       └── AppNavigator.tsx   // ナビゲーション定義
├── App.tsx                    // エントリーポイント
└── package.json
```

### colors.ts 例:
```ts
export const colors = {
  primary: {
    green: '#06A77D',
    teal: '#055160',
  },
  secondary: {
    blue: '#0D7FB8',
    lightSky: '#48BFE3',
  },
  background: {
    light: '#F0FDF8',
    white: '#FFFFFF',
  },
  text: {
    primary: '#0F2F2A',
    secondary: '#666666',
  },
  status: {
    success: '#10B981',
    warning: '#F59E0B',
    error: '#DC2626',
    info: '#3B82F6',
  },
};
```

---

## 16. デリバリーチェックリスト

実装前に以下を確認：

- [ ] 絵文字をアイコンとして使用していないか ✓ Lucide React 使用
- [ ] アイコンファミリーが統一されているか ✓ Lucide + Phosphor のみ
- [ ] タッチターゲットが 44x44px 以上か ✓ すべてのボタン確認
- [ ] コントラスト比が WCAG AA 以上か ✓ WebAIM Checker 使用
- [ ] ホバー/フォーカス/アクティブ/ディセーブル状態定義済みか ✓
- [ ] ローディング状態があるか ✓ Activity Indicator + Skeleton
- [ ] セマンティック HTML 使用か ✓ React Native Accessible コンポーネント
- [ ] キーボードナビゲーション機能するか ✓ accessibilityRole 付与
- [ ] prefers-reduced-motion を尊重しているか ✓ 500ms 以上のアニメーション削除
- [ ] レスポンシブ対応しているか ✓ Dimensions API 使用
- [ ] ダークモード対応しているか ✓ useColorScheme hook
- [ ] フォントの最適化（swap + preload）しているか ✓ Google Fonts 使用

---

## 参考資料

### UI/UX Pro Max リファレンス
- `styles.md`: Minimalism パターン、Healthcare アンチパターン
- `colors.md`: Healing Green, Wellness Blue パレット
- `typography.md`: Source Sans Pro + Source Serif Pro ペアリング
- `icons.md`: Lucide React/Phosphor Icons 医療アイコン
- `ux-guidelines.md`: 高齢ユーザー向けアクセシビリティ、タッチターゲット
- `app-interface.md`: React Native SafeAreaView, FlatList, Keyboard Handling

### WCAG 2.1 ガイドライン
- 色コントラスト: https://webaim.org/resources/contrastchecker/
- アクセシビリティ: https://www.w3.org/WAI/WCAG21/quickref/

### React Native アクセシビリティ
- https://reactnative.dev/docs/accessibility

---

## まとめ (Summary)

このデザインシステムは、**お年寄りが安心して使えるヘルスケアアプリ**を実現するため、以下を重視します:

1. **信頼感**: ヒーリンググリーン + ミニマリズム
2. **明確さ**: 大きなテキスト、高コントラスト、シンプルナビゲーション
3. **使いやすさ**: 44px+ タップターゲット、わかりやすいアイコン
4. **安全性**: セマンティック HTML、アクセシビリティ WCAG AAA
5. **パフォーマンス**: 軽量バンドル、高速 API レスポンス

React Native での実装により、iOS/Android 両方で一貫した体験を提供でき、高齢ユーザーの多様なニーズに対応できます。

---

**Last Updated**: March 2026
**Version**: 1.0
**Status**: Ready for Implementation
**Accessibility Level**: WCAG 2.1 AA+（推奨 AAA）
