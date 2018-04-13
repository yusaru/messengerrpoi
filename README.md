# messengerrpoi

> A Vue.js project

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report
```

## 概要

Vueの勉強で作成。
メッセンジャーアプリっぽい物です。

vue-cli webpack で生成したプロジェクトに以下のモジュールを追加しています。
なるべく素のプロジェクトだけで作成しました。

* firebase  
    バックグラウンド処理
* moment  
    メッセージのタイムスタンプに使用

CSSはbulmaをCDN経由で使用しています。

## 開発環境

* windows 8.1 pro
* node v8.9.4
* npm 5.7.1
* vue 2.9.3

## 内容

Vueの勉強プロジェクト。

* コンポーネントの作成と使用
* ディレクティブの種類(v-for,v-on,v-if,v-bind)
* 双方向バインド(v-model)
* イベントハンドリング,オプション

を使用してみた。
また、vue-cliで付いてくるvue-routerの使用方法を勉強した。
コンポーネント間の値渡しや親子間の値渡し、状態管理については今回のプロジェクトではノータッチ。

あと、CSSフレームワーク(bootstrapはなんとなく知ってる感じ)というのを使ってみたかったので、bulmaを使用してみた。
横並びで表示させるのは'level',グリッドっぽい表示は'columns'、構造の要素は'section'で分ける
ヘッダは'hero','container'で水平展開?などなど。それっぽく作成する基準がわかった。


