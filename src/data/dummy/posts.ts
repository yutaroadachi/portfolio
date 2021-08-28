import { RssFeedItem } from 'src/types/rss'

export const dummyPosts: RssFeedItem[] = Array(13)
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
    title: `テスト記事${idx + 1}`.repeat(idx + 1),
  }))
