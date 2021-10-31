import { VStack } from '@chakra-ui/react'
import React from 'react'
import { Biography } from 'src/components/ui/Biography'
import { Navigation } from 'src/components/ui/Navigation'
import { RssFeedItem } from 'src/types/rss'
import { Achievements } from './Achievements'
import { RecentPosts } from './RecentPosts'

export type WorksProps = {
  posts: RssFeedItem[]
}

export const Works = ({ posts }: WorksProps) => {
  return (
    <VStack spacing={8}>
      <Biography />
      <Navigation active="works" />
      <RecentPosts posts={posts} />
      <Achievements />
    </VStack>
  )
}
