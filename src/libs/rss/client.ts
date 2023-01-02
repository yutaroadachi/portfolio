import Parser from 'rss-parser'

export const client = (() => {
  const parser = new Parser()
  const getList = async ({ feedUrl }: { feedUrl: string }) =>
    await parser.parseURL(feedUrl)

  return { getList }
})()
