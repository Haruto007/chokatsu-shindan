# 腸活診断

生活習慣に関する10問から腸活の状態をセルフチェックし、結果に応じた改善ヒントを表示する Google Apps Script Web アプリです。

## セットアップ

```bash
npm install
npm run login
npm run create
npm run push
```

`standalone` 形式で作成したプロジェクトも、デプロイ時に「ウェブアプリ」を選択することで Web アプリとして公開できます。

すでに GAS プロジェクトがある場合は `.clasp.json.example` を `.clasp.json` にコピーし、`YOUR_SCRIPT_ID` を対象のスクリプト ID に置き換えてください。

## デプロイ

```bash
npm run deploy
```

初回デプロイ後、GAS 管理画面でウェブアプリの実行ユーザーとアクセス権限を確認してください。
