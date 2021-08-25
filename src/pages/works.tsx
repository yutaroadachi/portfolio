import { Box, Center } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import React from 'react'
import Parser from 'rss-parser'
import { Biography, MetaTag } from 'src/components/common'
import { Achievements, RecentPosts } from 'src/components/HomePage'
import { AppLayout } from 'src/components/layout'
import { RssFeed, RssFeedItem } from 'src/types/rss'

type HomePageProps = {
  posts: RssFeedItem[]
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <AppLayout>
      <MetaTag title="Works" description="技術記事や実績を確認できます。" />
      <Biography />
      <Center w="full">
        <Box w={{ base: 'full', lg: 'container.md' }} px={{ base: 4, lg: 0 }}>
          <RecentPosts posts={posts} />
          <Achievements />
        </Box>
      </Center>
    </AppLayout>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const parser: Parser<RssFeed, RssFeedItem> = new Parser()
  const feed = await parser.parseURL('https://zenn.dev/a_da_chi/feed')

  return {
    props: {
      posts: feed.items,
    },
    revalidate: 300,
  }
}
