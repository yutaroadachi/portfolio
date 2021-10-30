import { GetStaticProps } from 'next'
import React from 'react'
import { BlogListPage, BlogListPageProps } from 'src/components/page/BlogList'
import { getBlogList } from 'src/lib/microCMS/client'

export default ({ blog }: BlogListPageProps) => {
  return <BlogListPage blog={blog} />
}

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  const blog = await getBlogList()

  return {
    props: {
      blog: blog,
    },
    revalidate: 5 * 60,
  }
}
