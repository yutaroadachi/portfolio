import React, { ComponentProps } from 'react'
import { Layout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'
import { Resume } from './Resume'

export type ResumePageProps = ComponentProps<typeof Resume>

export const ResumePage = ({}: ResumePageProps) => {
  return (
    <Layout>
      <MetaTag
        title="履歴書"
        description="Yutaro Adachi(フロントエンドエンジニア)の履歴書です。"
      />
      <Resume />
    </Layout>
  )
}
