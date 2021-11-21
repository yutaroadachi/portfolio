import React, { ComponentProps } from 'react'
import { Layout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'
import { BlogList } from './BlogList'

export type BlogListPageProps = ComponentProps<typeof BlogList>

export const BlogListPage = ({ techBlog, personalBlog }: BlogListPageProps) => {
  return (
    <Layout>
      <MetaTag
        title="ブログ"
        description="Yutaro Adachi(フロントエンドエンジニア)のブログです。"
      />
      <BlogList techBlog={techBlog} personalBlog={personalBlog} />
    </Layout>
  )
}
