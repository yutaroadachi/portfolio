import { VStack } from '@chakra-ui/react'
import React from 'react'
import { Biography, Navigation } from 'src/components/common'
import { Histories, Skills } from 'src/components/ResumePage'
import { Layout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'

export default function ResumePage() {
  return (
    <Layout>
      <MetaTag
        title="Resume"
        description="Yutaro Adachi(Software Engineer)のスキルや職歴・学歴を確認できます。"
      />
      <VStack spacing={8}>
        <Biography />
        <Navigation active="resume" />
        <Skills />
        <Histories />
      </VStack>
    </Layout>
  )
}
