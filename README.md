# ハンズオンで学ぶ TypeScript

## 学んだことや気づきを得たこと

- `git push origin HEAD` で今いるブランチの origin をリモートに push する
- `git checkout -` で前回いたブランチに移動できる
- `npm info` で npm コマンドの情報を詳しく知れる
- `ts-node-dev --respawn` で TypeScript ファイルが編集されたとき、自動で Javascript にトランスパイルできる
- `echo '{}' > sample.ts` で {} を sample.ts ファイルに挿入する
- ユニオン型は型制約が弱い
  - `(string | number)[]` といったもの
  - なので、代わりにタプル型を使う
    - `[string | number]` といったもの
- `interface` は便利
  - オブジェクトの型に名前をつけることができる
  - つまり、型をまとめて指定できる
  - `type（型エイリアス）` と `interface` のちがいは、
    - `interface` は **オブジェクト** と **クラス** の型だけ定義できる
    - `type` は **他の型も参照できる**
    - `interface` は **拡張できる**
    - `type` は **拡張できない**
    - だけど、拡張性ってそんな持たせることある？
    - 拡張性持たせるのめんどくさい
    - 結論、`type` でいい（？）
- `void` 型は、何もデータが存在しないときに使う
	- 関数からの return 値がないことを期待する型

## 参考サイト

[ハンズオンで学ぶ TypeScript - Udemy](https://www.udemy.com/course/ts-for-js-developers/learn/lecture/17755872#overview)

[interface と type の違い、そして何を使うべきかについて](https://zenn.dev/luvmini511/articles/6c6f69481c2d17)
