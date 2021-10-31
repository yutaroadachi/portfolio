import React, { ComponentProps } from 'react'
import { Layout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'
import { Top } from './Top'

export type TopPageProps = ComponentProps<typeof Top>

export const TopPage = ({}: TopPageProps) => {
  return (
    <Layout>
      <MetaTag
        title="Top"
        description="Topページです。"
      />
      <Top />
    </Layout>
  )
}
