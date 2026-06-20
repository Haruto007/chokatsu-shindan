# 腸活診断

排泄と消化、免疫・睡眠、日常習慣に関する30問を3段階で診断し、結果に応じた改善ヒントを表示する Google Apps Script Web アプリです。

## アプリにアクセス

[腸内環境ヘルスチェックを開く](https://script.google.com/macros/s/AKfycbyFTJhxHD4SHT9pe8M-2QL7xgxGcAFJpSybL671DSQN2uuz8Y5iw-5h8bilNLeDKXD1EA/exec)

スマートフォンのカメラで以下のQRコードを読み取ってアクセスできます。

![腸内環境ヘルスチェック QRコード](assets/chokatsu-shindan-qr.png)

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

`main` ブランチへのpushを契機に、GitHub ActionsがGASへの同期とウェブアプリの再デプロイを行います。

ウェブアプリはGASマニフェストで「未ログインを含む全員がアクセス可能」「デプロイしたユーザーとして実行」に設定されています。デプロイ後はGitHub Actionsが公開URLへ匿名アクセスし、画面を取得できることまで自動確認します。
