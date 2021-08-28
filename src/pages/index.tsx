import { Center, VStack } from '@chakra-ui/react'
import React from 'react'
import { Biography, MetaTag, Navigation } from 'src/components/common'
import { AppLayout } from 'src/components/layout'
import { Histories, Skills } from 'src/components/ResumePage'

export default function ResumePage() {
  return (
    <AppLayout>
      <MetaTag
        title="Resume"
        description="スキルや職歴・学歴を確認できます。"
      />
      <Center w="full">
        <VStack
          spacing={8}
          w={{ base: 'full', lg: 'container.md' }}
          px={{ base: 4, lg: 0 }}
        >
          <Biography />
          <Navigation active="resume" />
          <Skills />
          <Histories />
        </VStack>
      </Center>
    </AppLayout>
  )
}
