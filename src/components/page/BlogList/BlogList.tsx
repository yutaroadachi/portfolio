import { chakra, LinkBox, LinkOverlay, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { formatYYYYMMDD } from 'src/lib/format/date-format'
import { BlogList as TBlogList } from 'src/types/blog'

export type BlogListProps = {
  blog: TBlogList
}

export const BlogList = ({ blog }: BlogListProps) => {
  return (
    <>
      <chakra.h2 id="blog-list" textStyle="h2WithTreat">
        Blog
      </chakra.h2>
      <Stack>
        {blog.map((blog) => {
          return (
            <LinkBox layerStyle="card" p={4} key={blog.id}>
              <chakra.h3>
                <NextLink href={`/blog/${blog.id}`} passHref>
                  <LinkOverlay>{blog.title}</LinkOverlay>
                </NextLink>
              </chakra.h3>
              <chakra.p fontSize="12px" color="gray.500">
                {`Posted at ${formatYYYYMMDD(new Date(blog.createdAt))}`}
              </chakra.p>
            </LinkBox>
          )
        })}
      </Stack>
    </>
  )
}
