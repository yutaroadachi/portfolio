import { Box, chakra, Stack } from '@chakra-ui/react'
import React from 'react'
import { formatYYYYMMDD } from 'src/lib/date-format'
import { BlogDetail as TBlogDetail } from 'src/types/blog'

export type BlogDetailProps = {
  blog: TBlogDetail
}

export const BlogDetail = ({ blog }: BlogDetailProps) => {
  return (
    <Stack spacing={4}>
      <Box>
        <chakra.h2 id="blog-detail" textStyle="h2">
          {blog.title}
        </chakra.h2>
        <chakra.p fontSize="12px" color="gray.500">
          {`Posted at ${formatYYYYMMDD(new Date(blog.createdAt))}`}
        </chakra.p>
      </Box>
      <Box
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className="blog-detail"
      />
    </Stack>
  )
}
