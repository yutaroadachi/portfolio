export type RssFeed = {
  items: RssFeedItem[]
  feedUrl: string
  image: {
    link: string
    url: string
    title: string
  }
  paginationLinks: {
    self: string
  }
  title: string
  description: string
  generator: string
  link: string
  language: string
  lastBuildDate: string
}

export type RssFeedItem = {
  content: string
  contentSnippet: string
  creator: string
  'dc:creator': string
  enclosure: {
    url: string
    length: string
    type: string
  }
  guid: string
  isoDate: string
  link: string
  pubDate: string
  title: string
}
