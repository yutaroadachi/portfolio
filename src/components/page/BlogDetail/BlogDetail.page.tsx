import React, { ComponentProps } from 'react'
import { MetaTag } from 'src/components/common'
import { Layout } from 'src/components/ui/Layout'
import { BlogDetail } from './BlogDetail'

export type BlogDetailPageProps = ComponentProps<typeof BlogDetail>

export const BlogDetailPage = ({ blog }: BlogDetailPageProps) => {
  return (
    <Layout>
      <MetaTag
        title={blog.title}
        description={blog.description ?? blog.title}
      />
      <BlogDetail blog={blog} />
    </Layout>
  )
}
