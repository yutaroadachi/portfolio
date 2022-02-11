---
message: |

  新規ページ作成用ジェネレーターです。

  yarn g page new --path hoge/huga --getProps [いいえ|SSG|SSR]
  
  - src/pages/hoge/huga/index.tsx が作成されます。
    - getProps に SSG または SSR を指定すると get**Props が export されます。
  - src/components/page/HogeHuga 配下に以下のファイルが作成されます。
    - HogeHuga.tsx
    - HogeHuga.stories.tsx
    - HogeHuga.test.tsx
    - index.ts
---
