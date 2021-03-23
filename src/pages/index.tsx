import { Box, Center } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import React from 'react'
import Parser from 'rss-parser'
import {
  Biography,
  Contact,
  Jobs,
  RecentPosts,
  Skills,
} from 'src/components/HomePage'
import { AppLayout } from 'src/components/layout'
import { RssFeed, RssFeedItem } from 'src/types/rss'

type HomePageProps = {
  posts: RssFeedItem[]
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <AppLayout>
      <Center px={4}>
        <Box w={{ base: 'full', lg: 'container.md' }}>
          <Biography />
          <Skills />
          <RecentPosts posts={posts} />
          <Jobs />
          <Contact />
        </Box>
      </Center>
    </AppLayout>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  try {
    const parser: Parser<RssFeed, RssFeedItem> = new Parser()
    const feed = await parser.parseURL('https://zenn.dev/a_da_chi/feed')

    return {
      props: {
        posts: feed.items,
      },
      revalidate: 300,
    }
  } catch (e) {
    console.error(e)

    return {
      props: {
        posts: [],
      },
      revalidate: 300,
    }
  }
}
