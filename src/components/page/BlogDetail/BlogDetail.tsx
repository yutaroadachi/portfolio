import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  chakra,
  Stack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { Biography } from 'src/components/domain/Biography'
import { PATH } from 'src/constants/path'
import { formatYYYYMMDD } from 'src/lib/format/date-format'
import { PersonalBlogDetail } from 'src/types/blog'

export type BlogDetailProps = {
  blog: PersonalBlogDetail
}

export const BlogDetail = ({ blog }: BlogDetailProps) => {
  return (
    <Box>
      <Box mb={8}>
        <Breadcrumb
          separator={
            <ChevronRightIcon boxSize="14px" color="gray.500" pb="2px" />
          }
          fontSize="14px"
        >
          <BreadcrumbItem>
            <NextLink href={PATH.blog} passHref>
              <BreadcrumbLink color="link">ブログ一覧</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <chakra.p>ブログ詳細</chakra.p>
          </BreadcrumbItem>
        </Breadcrumb>
        <chakra.h1 id="blog-detail" textStyle="h1" color="main">
          {blog.title}
        </chakra.h1>
        <chakra.p fontSize="14px" color="gray.500">
          {`${formatYYYYMMDD(new Date(blog.publishedAt))}に投稿`}
        </chakra.p>
      </Box>
      <Stack spacing={8}>
        <Box
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
          className="blog-detail"
        />
        <Center>
          <NextLink href={PATH.blog} passHref>
            <Button variant="outlined" size="sm" as="a">
              ブログ一覧へ
            </Button>
          </NextLink>
        </Center>
        <Biography />
      </Stack>
    </Box>
  )
}
