import React, { ComponentProps } from 'react'
import { MetaTag } from 'src/components/common'
import { Layout } from 'src/components/ui/Layout'
import { BlogList } from './BlogList'

export type BlogListPageProps = ComponentProps<typeof BlogList>

export const BlogListPage = ({ blog }: BlogListPageProps) => {
  return (
    <Layout>
      <MetaTag title="Blog" description="adachiの個人ブログです。" />
      <BlogList blog={blog} />
    </Layout>
  )
}
