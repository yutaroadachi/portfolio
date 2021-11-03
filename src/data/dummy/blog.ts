import {
  PersonalBlogDetail,
  PersonalBlogList,
  TechBlogList,
} from 'src/types/blog'

export const dummyTechBlogList: TechBlogList = Array(13)
  .fill(0)
  .map((_, idx) => ({
    content: '',
    contentSnippet: '',
    creator: '',
    'dc:creator': '',
    enclosure: {
      url: '',
      length: '',
      type: '',
    },
    guid: '',
    isoDate: '',
    link: 'http://example.com',
    pubDate: 'Sat, 28 Aug 2021 00:00:00 GMT',
    title: `テスト技術ブログ${idx + 1}`.repeat(idx + 1),
  }))

export const dummyPersonalBlogList: PersonalBlogList = Array(13)
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

export const dummyPersonalBlogDetail: PersonalBlogDetail = {
  id: '1',
  createdAt: '2021-10-31T00:00:00.0000',
  updatedAt: '2021-10-31T00:00:00.0000',
  publishedAt: '2021-10-31T00:00:00.0000',
  revisedAt: '2021-10-31T00:00:00.0000',
  title: 'テスト個人ブログ1',
  body: '<p>テスト個人ブログ1です。<br><br><a href="http://example.com" target="_blank" rel="noopener noreferrer">テストリンク</a></p>',
  description: 'テスト個人ブログ1です。',
}
