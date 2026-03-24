# ヘルスケアアプリ デザインシステムガイド

## 目次
1. [概要](#概要)
2. [設計原則](#設計原則)
3. [配色](#配色)
4. [タイポグラフィ](#タイポグラフィ)
5. [アイコン](#アイコン)
6. [コンポーネント](#コンポーネント)
7. [React Native実装例](#react-native実装例)
8. [アクセシビリティ](#アクセシビリティ)
9. [レイアウトとスペーシング](#レイアウトとスペーシング)

---

## 概要

本デザインシステムは、お年寄りを含むすべてのユーザーが快適に使用できるヘルスケアアプリケーション向けの統一的なデザイン基準です。React Nativeを用いて、iOS/Android両プラットフォームで一貫性のあるUIを実現します。

### 設計のポイント
- **シニア向け対応**：大きな文字、シンプルな色使い、直感的なナビゲーション
- **医療的信頼性**：落ち着きのあるカラーパレット、明確な情報階層
- **アクセシビリティ優先**：高いコントラスト比、音声対応、動作の明確性

---

## 設計原則

### 1. シンプルさ (Simplicity)
- 複雑な情報は段階的に表示
- 1画面あたりの情報量は最小限に
- 明確で簡潔なラベルと説明文

### 2. 明確性 (Clarity)
- 各要素の目的が直感的にわかること
- 重要な情報が視覚的に目立つこと
- テキストと背景のコントラスト比 4.5:1 以上

### 3. 一貫性 (Consistency)
- 共通パターンの繰り返し使用
- デバイス全体での同じ動作
- 統一されたビジュアルスタイル

### 4. 親切さ (Kindness)
- エラーメッセージは優しい表現
- ユーザーの行動を待つ
- サポート情報へ簡単にアクセスできる

---

## 配色

### プライマリカラー

#### メインカラー：信頼と安心のブルー
```
医療用ブルー (Healthcare Blue)
HEX: #2563EB
RGB: (37, 99, 235)
用途: 重要なボタン、リンク、ナビゲーションハイライト
```

#### サポートカラー：リフレッシュなグリーン
```
ウェルネスグリーン (Wellness Green)
HEX: #10B981
RGB: (16, 185, 129)
用途: ポジティブ状態、完了状態、推奨アクション
```

#### アラートカラー：注意のレッド
```
ケアレッド (Care Red)
HEX: #EF4444
RGB: (239, 68, 68)
用途: エラー、警告、重要な注意
```

#### 警告カラー：注意促進のアンバー
```
ウォーニングアンバー (Warning Amber)
HEX: #F59E0B
RGB: (245, 158, 11)
用途: 注意が必要な情報、確認アラート
```

### ニュートラルカラー

```
深いグレー (Dark Gray)
HEX: #1F2937
RGB: (31, 41, 55)
用途: テキスト、見出し

標準グレー (Standard Gray)
HEX: #6B7280
RGB: (107, 114, 128)
用途: 補助テキスト、ラベル

ライトグレー (Light Gray)
HEX: #E5E7EB
RGB: (229, 231, 235)
用途: ボーダー、背景パターン

ホワイト
HEX: #FFFFFF
RGB: (255, 255, 255)
用途: メイン背景
```

### カラーパレット表

| 用途 | 色名 | HEX | RGB | 用途例 |
|------|------|-----|-----|--------|
| プライマリ | Healthcare Blue | #2563EB | 37, 99, 235 | ボタン、リンク |
| 成功 | Wellness Green | #10B981 | 16, 185, 129 | 完了状態、OK |
| エラー | Care Red | #EF4444 | 239, 68, 68 | エラー、NG |
| 警告 | Warning Amber | #F59E0B | 245, 158, 11 | 警告メッセージ |
| テキスト | Dark Gray | #1F2937 | 31, 41, 55 | 本文テキスト |
| サブテキスト | Standard Gray | #6B7280 | 107, 114, 128 | 補助情報 |
| 境界線 | Light Gray | #E5E7EB | 229, 231, 235 | 区切り線 |

### 色のアクセシビリティ

- **コントラスト比の確保**：すべてのテキストと背景で WCAG AA 基準 (4.5:1 以上) をクリア
- **色覚異常対応**：色だけで情報を伝えない。記号、テキスト、パターンを併用
- **グレースケール対応**：カラーを除いても情報が理解できる設計

---

## タイポグラフィ

### フォント選定の方針

シニア層に優しいフォントの特性：
- **セリフなし** (Sans-serif)：小さい画面でも読みやすい
- **開放性**：文字の内部スペースが大きい
- **一貫性**：異なるサイズでも見た目が安定

### 推奨フォント

#### プライマリフォント：Segoe UI / San Francisco
```
主な特徴：
- Windows / iOS での標準フォント
- 高い可読性と洗練された見た目
- 豊富なウェイト展開
```

#### フォールバック
```
- Apple デバイス: San Francisco
- Android デバイス: Roboto / Noto Sans JP
- ウェブ: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
```

### フォントサイズ体系

シニア層対応のため、通常のモバイルアプリより大きめのサイズを推奨：

```
スーパーLarge (Display)
サイズ: 34pt
ウェイト: Bold (700)
用途: アプリタイトル、主要メッセージ
行高: 40pt
例: "血圧記録" (ページタイトル)

Large (Headline)
サイズ: 28pt
ウェイト: Bold (700)
用途: セクションタイトル、重要情報
行高: 34pt
例: "今日の健康状態"

Medium (Subheading)
サイズ: 22pt
ウェイト: Semibold (600)
用途: カード見出し、セクション名
行高: 28pt
例: "朝の測定"

Body Large
サイズ: 18pt
ウェイト: Regular (400)
用途: 本文テキスト、説明文
行高: 26pt
例: "血圧は正常範囲です。"

Body Regular
サイズ: 16pt
ウェイト: Regular (400)
用途: 標準テキスト、ボタンラベル
行高: 24pt
例: "測定を開始"

Small
サイズ: 14pt
ウェイト: Regular (400)
用途: 補助情報、キャプション
行高: 20pt
例: "最終更新：2026年3月18日"

Caption
サイズ: 12pt
ウェイト: Regular (400)
用途: レジェンド、注釈
行高: 16pt
例: "※医師の指示に従ってください"
```

### フォントペアリング例

| 見出し | 本文 | 推奨用途 |
|--------|------|---------|
| Bold 28pt | Regular 18pt | セクション区切り |
| Semibold 22pt | Regular 16pt | カード内容 |
| Regular 16pt | Regular 14pt | リスト項目 |

### 行間のガイドライン

- テキストの行高：最小 1.5 倍のフォントサイズ
- シニア層対応：1.6 倍以上を推奨
- 段落間隔：行高の 1 倍程度

---

## アイコン

### アイコンデザインの原則

#### 1. わかりやすさ
- シンプルな形状、すぐに意味がわかる
- 詳細が多すぎない
- ユニバーサルな記号の活用

#### 2. 一貫性
- すべてのアイコンで同じスタイル
- ストローク幅の統一
- コーナーの丸さの統一

#### 3. スケーラビリティ
- 小さいサイズでも識別可能
- ベクター形式 (SVG) で供給
- 複数サイズで テスト (24px, 32px, 48px)

### アイコンサイズ体系

```
Extra Small (Indicator)
24px × 24px
用途: インライン、補助情報アイコン
ストローク幅: 1.5px
例: リスト項目の左アイコン

Small (Standard)
32px × 32px
用途: ナビゲーション、ボタンアイコン
ストローク幅: 2px
例: ボトムナビゲーション

Medium
48px × 48px
用途: 機能のメインアイコン
ストローク幅: 2px
例: ホーム画面の大きなボタン

Large
64px × 64px
用途: ページトップ、紹介画面
ストローク幅: 2px
例: 成功メッセージの大きなアイコン
```

### アイコン設計ガイドライン

#### ストロークアイコン (推奨)
```
特徴:
- 外枠のみで構成
- シンプルで認識しやすい
- 背景色とのコントラストが明確

スタイル:
- ストローク幅: 2px (32px 時)
- コーナー: 2px 丸め
- カラー: #2563EB (プライマリ) または #1F2937 (ダーク)
```

### コアアイコンセット

ヘルスケアアプリで必須のアイコン：

| アイコン | 用途 | 説明 |
|---------|------|------|
| ❤️ | ホーム | ハート型 - 健康と安心 |
| 📊 | 統計 | 棒グラフ - データ表示 |
| 💊 | 医療 | 錠剤 - 医療関連 |
| 📅 | 予定 | カレンダー - スケジュール |
| ⚙️ | 設定 | ギア - 設定メニュー |
| 👤 | プロフィール | 人型アイコン - ユーザー情報 |
| 🔔 | 通知 | ベル - アラート |
| ❌ | 閉じる | バツ記号 - キャンセル |
| ✓ | 完了 | チェックマーク - 成功 |
| ⚠️ | 警告 | 三角形 - 注意 |
| 📍 | 位置 | ピンマーク - 場所情報 |
| 🔐 | セキュア | 鍵 - 安全性 |

### カラー活用

```
デフォルト状態:
- アイコン色: #2563EB (Healthcare Blue)

エラー / 警告:
- アイコン色: #EF4444 (Care Red)

成功:
- アイコン色: #10B981 (Wellness Green)

非アクティブ:
- アイコン色: #6B7280 (Standard Gray)
```

---

## コンポーネント

### 1. ボタン

#### プライマリボタン
```
背景色: #2563EB
テキスト色: #FFFFFF
パディング: 16px (縦) × 24px (横)
コーナー半径: 8px
フォント: Semibold 16pt
最小高さ: 56px (タッチターゲット)
ボーダー: なし

状態:
- 通常: 上記
- ホバー: 背景 #1d4ed8
- 押下: 背景 #1e40af
- 無効: 背景 #d1d5db, テキスト #9ca3af
```

#### セカンダリボタン
```
背景色: 透明
ボーダー: 2px #2563EB
テキスト色: #2563EB
パディング: 14px (縦) × 24px (横)
コーナー半径: 8px
フォント: Semibold 16pt
最小高さ: 56px

状態:
- 通常: 上記
- ホバー: 背景 #eff6ff
- 押下: 背景 #dbeafe
```

#### デストラクティブボタン
```
背景色: #EF4444
テキスト色: #FFFFFF
パディング: 16px (縦) × 24px (横)
コーナー半径: 8px
フォント: Semibold 16pt
最小高さ: 56px
ボーダー: なし

用途: 削除、キャンセル、危険な操作
```

### 2. テキスト入力フィールド

```
背景色: #FFFFFF
ボーダー: 1px #E5E7EB
ボーダー半径: 8px
パディング: 12px
フォント: Regular 16pt
高さ: 56px (最小)
アウトライン幅: 2px

状態:
- フォーカス: ボーダー色 #2563EB, アウトライン幅 2px
- エラー: ボーダー色 #EF4444
- 無効: 背景 #f3f4f6, テキスト色 #d1d5db

ラベル:
- フォント: Semibold 14pt
- カラー: #1F2937
- マージン下: 8px
```

### 3. カード

```
背景色: #FFFFFF
ボーダー: 1px #E5E7EB
ボーダー半径: 12px
シャドウ: 0px 1px 3px rgba(0, 0, 0, 0.1)
パディング: 16px
マージン下: 12px

ホバー状態:
- シャドウ: 0px 4px 6px rgba(0, 0, 0, 0.1)
- ボーダー: 1px #2563EB

内部スペーシング:
- タイトル下: 8px
- 内容下: 12px
```

### 4. トグルスイッチ

```
背景色 (ON): #10B981
背景色 (OFF): #d1d5db
サムサイズ: 24px
トータル幅: 52px
高さ: 32px
コーナー半径: 16px
アニメーション: 200ms ease-in-out

用途: 機能のオン/オフ、通知設定
```

### 5. アラートボックス

#### 成功アラート
```
背景色: #dbeafe (淡いブルー)
ボーダー左: 4px #10B981 (グリーン)
テキスト色: #1F2937
アイコン: #10B981
パディング: 12px
ボーダー半径: 8px

例: "測定データを保存しました。"
```

#### 警告アラート
```
背景色: #fef3c7 (淡いアンバー)
ボーダー左: 4px #F59E0B (アンバー)
テキスト色: #1F2937
アイコン: #F59E0B
パディング: 12px
ボーダー半径: 8px

例: "血圧が高めです。医師に相談してください。"
```

#### エラーアラート
```
背景色: #fee2e2 (淡いレッド)
ボーダー左: 4px #EF4444 (レッド)
テキスト色: #1F2937
アイコン: #EF4444
パディング: 12px
ボーダー半径: 8px

例: "通信に失敗しました。もう一度お試しください。"
```

### 6. バッジ

```
背景色: #2563EB
テキスト色: #FFFFFF
パディング: 4px 8px
フォント: Semibold 12pt
ボーダー半径: 4px
最小幅: 20px
テキスト配置: 中央

用途: 通知数、ステータス表示
```

### 7. プログレスバー

```
背景色: #E5E7EB
進捗色: #10B981
高さ: 8px
コーナー半径: 4px
アニメーション: スムーズな更新

用途: 測定中の進捗、データ同期状況
```

---

## React Native実装例

### 1. カラー定義 (constants/colors.ts)

```typescript
export const colors = {
  // Primary
  primary: '#2563EB',
  primaryLight: '#dbeafe',
  primaryDark: '#1e40af',

  // Status
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',

  // Neutral
  dark: '#1F2937',
  gray: '#6B7280',
  light: '#E5E7EB',
  white: '#FFFFFF',

  // Text
  text: {
    primary: '#1F2937',
    secondary: '#6B7280',
    light: '#9ca3af',
    inverse: '#FFFFFF',
  },

  // Background
  background: {
    primary: '#FFFFFF',
    secondary: '#f9fafb',
  },
};
```

### 2. タイポグラフィ定義 (constants/typography.ts)

```typescript
import { Platform } from 'react-native';

const fontFamily = Platform.select({
  ios: 'San Francisco',
  android: 'Roboto',
});

export const typography = {
  // Display
  display: {
    fontSize: 34,
    fontWeight: '700',
    fontFamily,
    lineHeight: 40,
  },

  // Headline
  headline: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily,
    lineHeight: 34,
  },

  // Subheading
  subheading: {
    fontSize: 22,
    fontWeight: '600',
    fontFamily,
    lineHeight: 28,
  },

  // Body Large
  bodyLarge: {
    fontSize: 18,
    fontWeight: '400',
    fontFamily,
    lineHeight: 26,
  },

  // Body Regular
  body: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily,
    lineHeight: 24,
  },

  // Small
  small: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily,
    lineHeight: 20,
  },

  // Caption
  caption: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily,
    lineHeight: 16,
  },
};
```

### 3. ボタンコンポーネント (components/Button.tsx)

```typescript
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'destructive';
  disabled?: boolean;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
}) => {
  const getButtonStyle = () => {
    const baseStyle = {
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 8,
      minHeight: 56,
      justifyContent: 'center',
      alignItems: 'center',
    };

    switch (variant) {
      case 'primary':
        return [
          baseStyle,
          {
            backgroundColor: disabled ? colors.light : colors.primary,
          },
        ];
      case 'secondary':
        return [
          baseStyle,
          {
            backgroundColor: disabled ? colors.light : 'transparent',
            borderWidth: 2,
            borderColor: disabled ? colors.light : colors.primary,
          },
        ];
      case 'destructive':
        return [
          baseStyle,
          {
            backgroundColor: disabled ? colors.light : colors.error,
          },
        ];
      default:
        return baseStyle;
    }
  };

  const getTextStyle = () => {
    const baseStyle: TextStyle = {
      ...typography.body,
      fontWeight: '600',
    };

    if (variant === 'secondary') {
      return [
        baseStyle,
        {
          color: disabled ? colors.gray : colors.primary,
        },
      ];
    }

    return [
      baseStyle,
      {
        color: disabled ? colors.gray : colors.white,
      },
    ];
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={getTextStyle()}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
```

### 4. テキスト入力フィールド (components/TextInput.tsx)

```typescript
import React, { useState } from 'react';
import {
  TextInput as RNTextInput,
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';

interface TextInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  disabled?: boolean;
  keyboardType?: 'default' | 'numeric' | 'email-address';
  style?: ViewStyle;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  error,
  disabled = false,
  keyboardType = 'default',
  style,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
          error && styles.inputError,
          disabled && styles.inputDisabled,
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        editable={!disabled}
        keyboardType={keyboardType}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    ...typography.small,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 8,
  },
  input: {
    ...typography.body,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    minHeight: 56,
    color: colors.text.primary,
    backgroundColor: colors.background.primary,
  },
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  inputError: {
    borderColor: colors.error,
  },
  inputDisabled: {
    backgroundColor: colors.background.secondary,
    color: colors.text.secondary,
  },
  errorText: {
    ...typography.caption,
    color: colors.error,
    marginTop: 4,
  },
});
```

### 5. カードコンポーネント (components/Card.tsx)

```typescript
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../constants/colors';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.light,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});
```

### 6. アラートコンポーネント (components/Alert.tsx)

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';

interface AlertProps {
  type: 'success' | 'warning' | 'error';
  message: string;
}

export const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const getAlertStyle = () => {
    switch (type) {
      case 'success':
        return { background: '#dbeafe', border: colors.success, icon: '✓' };
      case 'warning':
        return { background: '#fef3c7', border: colors.warning, icon: '!' };
      case 'error':
        return { background: '#fee2e2', border: colors.error, icon: '✕' };
    }
  };

  const style = getAlertStyle();

  return (
    <View
      style={[
        styles.alert,
        {
          backgroundColor: style.background,
          borderLeftColor: style.border,
        },
      ]}
    >
      <Text style={[styles.message, { color: colors.text.primary }]}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alert: {
    borderLeftWidth: 4,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  message: {
    ...typography.body,
  },
});
```

---

## アクセシビリティ

### スクリーンリーダー対応

```typescript
// テキスト入力にラベルを自動的に関連付ける
<TextInput
  accessible={true}
  accessibilityLabel="収縮期血圧"
  accessibilityHint="数値を入力してください"
/>

// ボタンの説明を明確にする
<Button
  label="測定開始"
  accessible={true}
  accessibilityLabel="血圧測定を開始します"
  accessibilityRole="button"
/>

// アイコン単体の場合は代替テキスト必須
<Icon
  name="heart"
  accessible={true}
  accessibilityLabel="ホーム画面"
/>
```

### 動的テキスト対応

```typescript
// ユーザーのテキストサイズ設定に対応
import { AccessibilityInfo } from 'react-native';

const scaledSize = fontSize * AccessibilityInfo.boldTextEnabled ? 1.2 : 1;
```

### タッチターゲットサイズ

```
最小タッチターゲット: 44pt × 44pt (iOS), 48dp × 48dp (Android)
シニア向け推奨: 56px × 56px 以上
ボタン最小高さ: 56px
ボタン最小幅: 56px

例:
- ナビゲーションボタン: 56px × 56px
- 確認ボタン: 56px (H) × 120px (W)
```

### 音声ガイダンス

```typescript
// 重要なアクション完了時の音声フィードバック
import { AccessibilityInfo } from 'react-native';

const announceSuccess = async () => {
  await AccessibilityInfo.announceForAccessibility(
    '測定が完了しました。結果を確認してください。'
  );
};
```

---

## レイアウトとスペーシング

### スペーシング体系 (8px ベース)

```
8px    - XS (インライン間隔)
16px   - SM (標準パディング)
24px   - MD (セクション間隔)
32px   - LG (大きな間隔)
48px   - XL (ページ最上部など)
```

### ページレイアウト

#### ホーム画面構成例

```
┌─────────────────────┐
│   ステータスバー     │  (システム)
├─────────────────────┤
│   健康状態: 良好     │  <-- Display テキスト (34pt)
├─────────────────────┤
│  ┌─────────────────┐ │
│  │ 血圧: 120/80    │ │  <-- カード (Subheading 22pt)
│  │ 更新: 10分前    │ │      (Small テキスト)
│  └─────────────────┘ │
│                       │  <-- 16px スペース
│  ┌─────────────────┐ │
│  │ 心拍: 72 bpm    │ │
│  │ 更新: 10分前    │ │
│  └─────────────────┘ │
│                       │  <-- 16px スペース
│  ┌─────────────────┐ │
│  │ [測定を開始]     │ │  <-- プライマリボタン (56px高)
│  └─────────────────┘ │
│                       │
└─────────────────────┘
│  ホーム  統計  設定   │  <-- ボトムナビゲーション
└─────────────────────┘
```

### セーフエリア

iOS ノッチ / アンドロイド配置に対応：

```typescript
import { SafeAreaView } from 'react-native-safe-area-context';

<SafeAreaView style={{ flex: 1 }}>
  {/* コンテンツ */}
</SafeAreaView>
```

### シニア層向けパディング

```
画面左右パディング: 16px (最小)
縦パディング: 16px (最小)
セクション間隔: 24px 以上
要素間隔: 12px 以上
```

---

## 実装チェックリスト

- [ ] すべてのテキストが最小 16pt で表示される
- [ ] すべてのボタンが最小 56px × 56px のタッチターゲット
- [ ] カラーコントラスト比が 4.5:1 以上 (テキスト対背景)
- [ ] スクリーンリーダー対応 (accessibilityLabel など)
- [ ] 動的テキトサイズに対応
- [ ] 音声フィードバック機能を実装
- [ ] オフライン時の状態を明確に表示
- [ ] エラーメッセージは建設的な内容
- [ ] 重要な操作に確認画面を用意
- [ ] ダークモード対応を検討

---

## 参考資料

### WCAG 2.1 (アクセシビリティ基準)
- Level AA 基準を最小要件とする
- テキストコントラスト比 4.5:1 以上
- キーボードナビゲーション完全対応

### iOS HIG (Human Interface Guidelines)
- Apple のデザイン基準に準拠
- 最小タッチターゲット: 44pt × 44pt

### Android Material Design
- Material 3 デザインシステムに対応
- 最小タッチターゲット: 48dp × 48dp

### シニア向け UI/UX
- 大きなフォント、シンプルな配色
- 明確な情報階層
- 直感的なナビゲーション

---

## まとめ

本デザインシステムは、医療アプリケーションの安心感と、シニア層が安心して使用できるアクセシビリティを両立させることを目指しています。

**核となるコンセプト**：
1. **信頼**：落ち着きのある配色とフォント
2. **安心**：大きなタッチターゲット、明確なメッセージ
3. **包括性**：あらゆるユーザーが使用可能な設計

React Native での実装を通じて、iOS/Android 両プラットフォームで一貫性のある体験を提供できます。

---

**ドキュメント作成日**: 2026年3月18日
**バージョン**: 1.0
**対象フレームワーク**: React Native 0.72+
