import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  BoxProps,
  Button,
  Center,
  chakra,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { ZennIcon } from 'src/components/icons'
import { URL } from 'src/constants/url'
import { formatYYYYMMDD } from 'src/lib/date-format'
import { truncate } from 'src/lib/format'
import { RssFeedItem } from 'src/types/rss'

export type RecentPostsProps = {
  posts: RssFeedItem[]
} & BoxProps

export const RecentPosts = (props: RecentPostsProps) => {
  const { posts, ...rest } = props

  return (
    <Box {...rest}>
      <chakra.h2 textStyle="h2WithTreat">Recent Posts</chakra.h2>
      <VStack spacing={4}>
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} w="full">
          {posts.length > 0 &&
            posts
              .slice(0, 12)
              .map((post) => <PostCard key={post.link} post={post} />)}
        </SimpleGrid>
        <Button
          variant="outlined"
          size="sm"
          rightIcon={<ExternalLinkIcon />}
          as="a"
          href={URL.zenn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Zennでもっと読む
        </Button>
      </VStack>
    </Box>
  )
}

const PostCard = ({ post }: { post: RssFeedItem }) => {
  return (
    <LinkBox layerStyle="card" p={4} as="article">
      <Stack spacing={0} h="176px">
        <Center mb={4}>
          <ZennIcon boxSize="24px" />
        </Center>
        <LinkOverlay href={post.link} isExternal flexGrow={1} overflow="hidden">
          <chakra.h3 fontSize="14px" fontWeight="bold">
            {truncate(post.title, 50)}
          </chakra.h3>
        </LinkOverlay>
        <chakra.p fontSize="12px" color="gray.500">
          {`Posted at ${formatYYYYMMDD(new Date(post.pubDate))}`}
        </chakra.p>
      </Stack>
    </LinkBox>
  )
}
