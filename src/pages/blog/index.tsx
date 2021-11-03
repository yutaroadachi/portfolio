import { GetStaticProps } from 'next'
import React from 'react'
import { BlogListPage, BlogListPageProps } from 'src/components/page/BlogList'
import { getPersonalBlogList } from 'src/lib/microCMS/client'
import { getZennFeed } from 'src/lib/rss/client'

export default function _BlogListPage({
  techBlog,
  personalBlog,
}: BlogListPageProps) {
  return <BlogListPage techBlog={techBlog} personalBlog={personalBlog} />
}

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  const [techBlog, personalBlog] = await Promise.all([
    getZennFeed(),
    getPersonalBlogList(),
  ])

  return {
    props: {
      techBlog: techBlog,
      personalBlog: personalBlog,
    },
    revalidate: 5 * 60,
  }
}
