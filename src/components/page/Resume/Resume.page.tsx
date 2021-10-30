import React, { ComponentProps } from 'react'
import { Layout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'
import { Resume } from './Resume'

export type ResumePageProps = ComponentProps<typeof Resume>

export const ResumePage = ({}: ResumePageProps) => {
  return (
    <Layout>
      <MetaTag
        title="Resume"
        description="Yutaro Adachi(Software Engineer)のスキルや職歴・学歴を確認できます。"
      />
      <Resume />
    </Layout>
  )
}
