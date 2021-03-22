import { Box, Grid, HStack, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { ZennIcon } from 'src/components/icons'
import { formatYYYYMMDD } from 'src/lib/date-format'
import { RssFeedItem } from 'src/types/rss'

export const RecentPosts = ({ posts }: { posts: RssFeedItem[] }) => (
  <VStack spacing={4} py={4}>
    <Text as="h2" textStyle="heading" fontSize="2xl">
      Recent Posts
    </Text>
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={4}
    >
      {posts.length > 0 ? (
        posts
          .slice(0, 6)
          .map((post) => <PostCard key={post.link} post={post} />)
      ) : (
        <Text>failed to get recent posts.</Text>
      )}
    </Grid>
    <Link href="https://zenn.dev/a_da_chi" isExternal>
      Read more
    </Link>
  </VStack>
)

const PostCard = ({ post }: { post: RssFeedItem }) => (
  <Link href={post.link} isExternal layerStyle="card" p={4}>
    <HStack spacing={4} h="full">
      <ZennIcon boxSize="32px" />
      <Box>
        <Text fontWeight="bold">{post.title}</Text>
        <Text fontSize="xs" color="secondary">
          {`Published at ${formatYYYYMMDD(new Date(post.pubDate))}`}
        </Text>
      </Box>
    </HStack>
  </Link>
)
