import Parser from 'rss-parser'
import { RssFeed, RssFeedItem } from 'src/types/rss'

export const getZennFeed = async () => {
  const feed = await client.getFeed(ZENN_ENDPOINT)
  return feed.items
}

const client = (() => {
  const parser: Parser<RssFeed, RssFeedItem> = new Parser()

  const getFeed = async (url: string) => {
    const feed = await parser.parseURL(url)
    return feed
  }

  return { getFeed }
})()

const ZENN_ENDPOINT = 'https://zenn.dev/a_da_chi/feed'
