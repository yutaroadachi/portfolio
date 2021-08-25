import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import { Biography, MetaTag } from 'src/components/common'
import { Jobs, Skills } from 'src/components/HomePage'
import { AppLayout } from 'src/components/layout'

export default function HomePage() {
  return (
    <AppLayout>
      <MetaTag
        title="Resume"
        description="スキルや職歴・学歴を確認できます。"
      />
      <Biography />
      <Center w="full">
        <Box w={{ base: 'full', lg: 'container.md' }} px={{ base: 4, lg: 0 }}>
          <Skills />
          <Jobs />
        </Box>
      </Center>
    </AppLayout>
  )
}
