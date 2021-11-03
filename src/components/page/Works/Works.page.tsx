import React, { ComponentProps } from 'react'
import { Layout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'
import { Works } from './Works'

export type WorksPageProps = ComponentProps<typeof Works>

export const WorksPage = ({}: WorksPageProps) => {
  return (
    <Layout>
      <MetaTag
        title="Works"
        description="Yutaro Adachi(フロントエンドエンジニア)の成果物です。"
      />
      <Works />
    </Layout>
  )
}
