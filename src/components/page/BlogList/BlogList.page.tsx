import React, { ComponentProps } from 'react'
import { Layout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'
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
