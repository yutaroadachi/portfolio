import { BlogDetail, BlogList } from 'src/types/blog'

export const dummyBlogList: BlogList = Array(13)
  .fill(0)
  .map((_, idx) => ({
    id: (idx + 1).toString(),
    createdAt: '2021-10-31T00:00:00.0000',
    updatedAt: '2021-10-31T00:00:00.0000',
    publishedAt: '2021-10-31T00:00:00.0000',
    revisedAt: '2021-10-31T00:00:00.0000',
    title: `テスト個人ブログ${idx + 1}`,
    body: `<p>テスト個人ブログ${
      idx + 1
    }です。<br><br><a href="http://example.com" target="_blank" rel="noopener noreferrer">テストリンク</a></p>`,
    description: `テスト個人ブログ${idx + 1}です。`,
  }))

export const dummyBlogDetail: BlogDetail = {
  id: '1',
  createdAt: '2021-10-31T00:00:00.0000',
  updatedAt: '2021-10-31T00:00:00.0000',
  publishedAt: '2021-10-31T00:00:00.0000',
  revisedAt: '2021-10-31T00:00:00.0000',
  title: 'テスト個人ブログ1',
  body: '<p>テスト個人ブログ1です。<br><br><a href="http://example.com" target="_blank" rel="noopener noreferrer">テストリンク</a></p>',
  description: 'テスト個人ブログ1です。',
}
