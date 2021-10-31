import { GetStaticProps } from 'next'
import React from 'react'
import { WorksPage, WorksPageProps } from 'src/components/page/Works'
import { getZennFeed } from 'src/lib/rss/client'

export default function _WorksPage({ posts }: WorksPageProps) {
  return <WorksPage posts={posts} />
}

export const getStaticProps: GetStaticProps<WorksPageProps> = async () => {
  const feed = await getZennFeed()

  return {
    props: {
      posts: feed,
    },
    revalidate: 5 * 60,
  }
}
