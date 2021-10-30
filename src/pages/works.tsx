import { Center, VStack } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import React from 'react'
import Parser from 'rss-parser'
import { Biography, MetaTag, Navigation } from 'src/components/common'
import { AppLayout } from 'src/components/layout'
import {
  Achievements,
  RecentPosts,
  RecentPostsProps,
} from 'src/components/WorksPage'
import { RssFeed, RssFeedItem } from 'src/types/rss'

type WorksPageProps = RecentPostsProps

export default function WorksPage(props: WorksPageProps) {
  return (
    <AppLayout>
      <MetaTag title="Works" description="技術記事や実績を確認できます。" />
      <Center w="full">
        <VStack
          spacing={8}
          w={{ base: 'full', lg: 'container.md' }}
          px={{ base: 4, lg: 0 }}
        >
          <Biography />
          <Navigation active="works" />
          <RecentPosts posts={props.posts} />
          <Achievements />
        </VStack>
      </Center>
    </AppLayout>
  )
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
