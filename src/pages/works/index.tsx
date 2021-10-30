import { GetStaticProps } from 'next'
import React from 'react'
import Parser from 'rss-parser'
import { WorksPage, WorksPageProps } from 'src/components/page/Works'
import { RssFeed, RssFeedItem } from 'src/types/rss'

export default function _WorksPage({ posts }: WorksPageProps) {
  return <WorksPage posts={posts} />
}

export const getStaticProps: GetStaticProps<WorksPageProps> = async () => {
  const parser: Parser<RssFeed, RssFeedItem> = new Parser()
  const feed = await parser.parseURL('https://zenn.dev/a_da_chi/feed')

  return {
    props: {
      posts: feed.items,
    },
    revalidate: 5 * 60,
  }
}
