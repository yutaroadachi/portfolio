import { Box, chakra, SimpleGrid, Stack } from '@chakra-ui/react'
import React from 'react'
import { Biography } from 'src/components/domain/Biography'
import { BlogCard } from 'src/components/domain/BlogCard'
import { PersonalBlogList, TechBlogList } from 'src/types/blog'

export type BlogListProps = {
  techBlog: TechBlogList
  personalBlog: PersonalBlogList
}

export const BlogList = ({ techBlog, personalBlog }: BlogListProps) => {
  return (
    <Box>
      <chakra.h1 id="blog-list" textStyle="h1" color="main" mb={8}>
        ブログ
      </chakra.h1>
      <Stack spacing={8}>
        <TechBlog techBlog={techBlog} />
        <PersonalBlog personalBlog={personalBlog} />
        <Biography />
      </Stack>
    </Box>
  )
}

const TechBlog = ({ techBlog }: Pick<BlogListProps, 'techBlog'>) => {
  return (
    <Box w="full">
      <chakra.h2 id="tech-blog" textStyle="h2WithTreat" color="main" mb={8}>
        テックブログ
      </chakra.h2>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} w="full">
        {techBlog.map((blog, idx) => {
          return (
            <BlogCard
              href={blog.link}
              title={blog.title}
              publishDate={new Date(blog.pubDate)}
              kind="tech"
              key={idx}
            />
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

const PersonalBlog = ({
  personalBlog,
}: Pick<BlogListProps, 'personalBlog'>) => {
  return (
    <Box w="full">
      <chakra.h2 id="personal-blog" textStyle="h2WithTreat" color="main" mb={8}>
        個人ブログ
      </chakra.h2>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4} w="full">
        {personalBlog.map((blog) => {
          return (
            <BlogCard
              href={`/blog/${blog.id}`}
              title={blog.title}
              publishDate={new Date(blog.publishedAt)}
              kind="personal"
              key={blog.id}
            />
          )
        })}
      </SimpleGrid>
    </Box>
  )
}
