import { Box, Center } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import React from 'react'
import Parser from 'rss-parser'
import { Biography, Jobs, RecentPosts, Skills } from 'src/components/HomePage'
import { AppLayout } from 'src/components/layout'
import { RssFeed, RssFeedItem } from 'src/types/rss'

export default function HomePage({ posts }: { posts: RssFeedItem[] }) {
  return (
    <AppLayout>
      <Center p={4}>
        <Box w={{ base: 'full', lg: 'container.md' }}>
          <Biography />
          <Skills />
          <RecentPosts posts={posts} />
          <Jobs />
        </Box>
      </Center>
    </AppLayout>
  )
}

export const getServerSideProps: GetServerSideProps<{
  posts: RssFeedItem[]
}> = async ({ res }) => {
  try {
    const parser: Parser<RssFeed, RssFeedItem> = new Parser()
    const feed = await parser.parseURL('https://zenn.dev/a_da_chi/feed')

    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate')

    return {
      props: {
        posts: feed.items,
      },
    }
  } catch (e) {
    console.error(e)

    return {
      props: {
        posts: [],
      },
    }
  }
}
