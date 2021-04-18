import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  chakra,
  HStack,
  Link,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { ZennIcon } from 'src/components/icons'
import { formatYYYYMMDD } from 'src/lib/date-format'
import { RssFeedItem } from 'src/types/rss'

export const RecentPosts = ({ posts }: { posts: RssFeedItem[] }) => (
  <VStack spacing={4} py={4}>
    <chakra.h2 textStyle="heading" fontSize="2xl">
      Recent Posts
    </chakra.h2>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
      {posts.length > 0 ? (
        posts
          .slice(0, 6)
          .map((post) => <PostCard key={post.link} post={post} />)
      ) : (
        <chakra.p>failed to get recent posts.</chakra.p>
      )}
    </SimpleGrid>
    <Button
      as="a"
      href="https://zenn.dev/a_da_chi"
      target="_blank"
      rel="noopener noreferrer"
      rightIcon={<ExternalLinkIcon />}
    >
      Zennでもっと読む
    </Button>
  </VStack>
)

const PostCard = ({ post }: { post: RssFeedItem }) => (
  <Link href={post.link} isExternal layerStyle="card" p={4}>
    <HStack spacing={4} h="full">
      <ZennIcon boxSize="32px" />
      <Box>
        <chakra.p fontWeight="bold">{post.title}</chakra.p>
        <chakra.p fontSize="xs" color="secondary">
          {`Published at ${formatYYYYMMDD(new Date(post.pubDate))}`}
        </chakra.p>
      </Box>
    </HStack>
  </Link>
)
