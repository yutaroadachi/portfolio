import { Box } from '@chakra-ui/react'
import React, { ComponentProps } from 'react'
import { MetaTag } from 'src/components/common'
import { AppLayout } from 'src/components/layout'
import { BlogList } from './BlogList'

export type BlogListPageProps = ComponentProps<typeof BlogList>

export const BlogListPage = ({ blog }: BlogListPageProps) => {
  return (
    <AppLayout>
      <MetaTag title="Blog" description="adachiの個人ブログです。" />
      <Box
        w={{ base: 'full', lg: 'container.md' }}
        px={{ base: 4, lg: 0 }}
        mx="auto"
      >
        <BlogList blog={blog} />
      </Box>
    </AppLayout>
  )
}
