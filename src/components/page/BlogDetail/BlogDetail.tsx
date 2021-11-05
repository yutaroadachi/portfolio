import { Box, chakra } from '@chakra-ui/react'
import React from 'react'
import { formatYYYYMMDD } from 'src/lib/format/date-format'
import { PersonalBlogDetail } from 'src/types/blog'

export type BlogDetailProps = {
  blog: PersonalBlogDetail
}

export const BlogDetail = ({ blog }: BlogDetailProps) => {
  return (
    <Box>
      <Box mb={8}>
        <chakra.h1 id="blog-detail" textStyle="h1" color="main">
          {blog.title}
        </chakra.h1>
        <chakra.p fontSize="14px" color="gray.500">
          {`${formatYYYYMMDD(new Date(blog.publishedAt))}に投稿`}
        </chakra.p>
      </Box>
      <Box
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className="blog-detail"
      />
    </Box>
  )
}
