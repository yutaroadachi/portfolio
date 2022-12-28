import { Box, chakra, Stack } from '@chakra-ui/react'
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
      </div>
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {personalBlog.map((blog) => {
          return (
            <BlogCard
              href={`/blog/${blog.id}`}
              title={blog.title}
              publishDate={new Date(blog.publishedAt ?? blog.createdAt)}
              kind="personal"
              key={blog.id}
            />
          )
        })}
      </div>
    </Box>
  )
}
