import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import { Biography } from 'src/components/HomePage'
import { AppLayout } from 'src/components/layout'

export default function HomePage() {
  return (
    <AppLayout>
      <Center p={4}>
        <Box w={{ base: 'full', lg: 'container.md' }}>
          <Biography />
        </Box>
      </Center>
    </AppLayout>
  )
}
