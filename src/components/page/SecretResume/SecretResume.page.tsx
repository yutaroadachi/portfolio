import React, { ComponentProps } from 'react'
import { Layout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'
import { SecretResume } from './SecretResume'

export type SecretResumePageProps = ComponentProps<typeof SecretResume>

export const SecretResumePage = ({}: SecretResumePageProps) => {
  return (
    <Layout>
      <MetaTag
        title="職務経歴書"
        description="Yutaro Adachi(ソフトウェアエンジニア)の職務経歴書です。"
        noindex
      />
      <SecretResume />
    </Layout>
  )
}
