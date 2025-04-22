## Figma

- node が多すぎるとうまく読み取ってくれない
- URL を送る必要がある
  - 毎回送るのは面倒な気がする
  - Docker で立てて env 共有できる？

## Notion

- URL を送る必要がある
  - こちらも Docker で立てて env 共有できる？
- 特定のツールのみを仕様できるようにしないと不具合が発生してしまう
  - https://github.com/makenotion/notion-mcp-server/issues/15

## 作業記録

### 2025年4月23日

- **Figma**
  - カラーパレットのカラーコードを取得し、`src/consts/colors.ts` に反映。
  - Figmaのアカウント作成画面を基に`src/pages/Signup.tsx`を作成。

- **React Router**
  - React Routerを設定し、`/login` パスでログインページに遷移できるように設定。

- **styled-components**
  - `styled-components` を使用してログインページとサインアップページのスタイルを作成。
  - カラーコードは `src/consts/colors.ts` から呼び出すように統一。

- **zod & react-hook-form**
  - `zod`、`@hookform/resolvers`、`react-hook-form` をインストール。
  - フォームバリデーションの準備を整備。
