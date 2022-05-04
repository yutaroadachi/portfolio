import React, { ComponentProps } from 'react'
import { Layout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'
import { Skills } from './Skills'

export type SkillsPageProps = ComponentProps<typeof Skills>

export const SkillsPage = ({}: SkillsPageProps) => {
  return (
    <Layout>
      <MetaTag
        title="スキル"
        description="Yutaro Adachi(ソフトウェアエンジニア)のスキルです。"
      />
      <Skills />
    </Layout>
  )
}
