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

[ハンズオンで学ぶ TypeScript - Udemy](https://www.udemy.com/course/ts-for-js-developers/learn/lecture/17755872#overview)
