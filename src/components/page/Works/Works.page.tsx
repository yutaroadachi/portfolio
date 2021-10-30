import React, { ComponentProps } from 'react'
import { Layout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'
import { Works } from './Works'

export type WorksPageProps = ComponentProps<typeof Works>

export const WorksPage = ({ posts }: WorksPageProps) => {
  return (
    <Layout>
      <MetaTag
        title="Works"
        description="Yutaro Adachi(Software Engineer)の最近の投稿や実績を確認できます。"
      />
      <Works posts={posts} />
    </Layout>
  )
}
