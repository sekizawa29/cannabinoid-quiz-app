# 🧪 カンナビノイドクイズ

カンナビノイドに関する知識・教養を育成するWebクイズアプリケーションです。

## ✨ 特徴

- 📚 **3段階の難易度**: 初級・中級・上級から選択
- 🎯 **5問形式**: 短時間で気軽に挑戦可能
- 📱 **レスポンシブデザイン**: スマホ・タブレット・PC対応
- 🎉 **結果シェア機能**: Xで結果をシェア可能
- 💡 **詳細解説**: 各問題に教育的な解説付き
- ⭐ **パーソナライズドコメント**: スコアに応じたフィードバック

## 🎮 問題内容

### 初級（8問）
- CBD、THCの基礎知識
- 法律・規制に関する知識
- 基本的な健康情報

### 中級（8問）
- 科学的・薬理学的知識
- 品質管理・分析項目
- 生合成経路の理解

### 上級（8問）
- 最新研究・臨床応用
- 複雑な作用機序
- 専門的な立体化学

## 🚀 技術スタック

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 インストール

```bash
# リポジトリをクローン
git clone https://github.com/yourusername/cannabinoid-quiz.git
cd cannabinoid-quiz

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# 本番ビルド
npm run build

# プレビュー
npm run preview
```

## 🎯 使用方法

1. 難易度を選択（初級・中級・上級）
2. 5問の選択問題に回答
3. 結果とスコアを確認
4. 詳細な解説を読む
5. 結果をXでシェア（任意）

## 🌐 デプロイ

GitHub Pagesで自動デプロイされます：

```bash
# mainブランチにプッシュすると自動デプロイ
git push origin main
```

## 📁 プロジェクト構造

```
src/
├── components/          # Reactコンポーネント
│   ├── QuizStart.tsx   # 開始画面
│   ├── QuizQuestion.tsx # 問題画面
│   └── QuizResult.tsx  # 結果画面
├── hooks/              # カスタムフック
│   └── useQuiz.ts      # クイズロジック
├── types/              # 型定義
│   └── quiz.ts         # クイズ関連の型
├── utils/              # ユーティリティ
│   └── shareUtils.ts   # シェア機能
└── App.tsx             # メインアプリ

public/
└── data/
    └── questions.json  # 問題データ
```

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📝 問題の追加・編集

`public/data/questions.json`を編集することで、新しい問題を追加できます：

```json
{
  "id": 新しいID,
  "category": "カテゴリー名",
  "type": "multiple",
  "question": "問題文",
  "options": ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
  "correct": 0,
  "explanation": "解説文"
}
```

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🔗 関連リンク

- [デモサイト](https://yourusername.github.io/cannabinoid-quiz/)
- [問題の追加リクエスト](https://github.com/yourusername/cannabinoid-quiz/issues)

---

**注意**: このアプリケーションは教育目的で作成されています。医療的なアドバイスを提供するものではありません。