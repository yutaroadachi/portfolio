import { RssFeedItem } from 'src/types/rss'

export const posts: RssFeedItem[] = Array(2)
  .fill(0)
  .map((_, idx) => ({
    content: `テスト${idx}`,
    contentSnippet: `テスト${idx}`,
    creator: `テスト${idx}`,
    'dc:creator': `テスト${idx}`,
    enclosure: {
      url: `テスト${idx}`,
      length: `テスト${idx}`,
      type: `テスト${idx}`,
    },
    guid: `テスト${idx}`,
    isoDate: `テスト${idx}`,
    link: `テスト${idx}`,
    pubDate: `テスト${idx}`,
    title: `テスト${idx}`,
  }))
