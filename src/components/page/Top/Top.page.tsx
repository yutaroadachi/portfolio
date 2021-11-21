import React, { ComponentProps } from 'react'
import { Layout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'
import { Top } from './Top'

export type TopPageProps = ComponentProps<typeof Top>

export const TopPage = ({}: TopPageProps) => {
  return (
    <Layout pt={0}>
      <MetaTag
        title="トップ"
        description="Yutaro Adachi(フロントエンドエンジニア)のポートフォリオサイトです。"
      />
      <Top />
    </Layout>
  )
}
