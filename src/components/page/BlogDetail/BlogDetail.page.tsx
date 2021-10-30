import { Box } from '@chakra-ui/react'
import React, { ComponentProps } from 'react'
import { MetaTag } from 'src/components/common'
import { AppLayout } from 'src/components/layout'
import { BlogDetail } from './BlogDetail'

export type BlogDetailPageProps = ComponentProps<typeof BlogDetail>

export const BlogDetailPage = ({ blog }: BlogDetailPageProps) => {
  return (
    <AppLayout>
      <MetaTag
        title={blog.title}
        description={blog.description ?? blog.title}
      />
      <Box
        w={{ base: 'full', lg: 'container.md' }}
        px={{ base: 4, lg: 0 }}
        mx="auto"
      >
        <BlogDetail blog={blog} />
      </Box>
    </AppLayout>
  )
}
