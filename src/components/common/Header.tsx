import { Box, Center, chakra, HStack } from '@chakra-ui/react'
import React from 'react'
import { ContactButton } from './buttons'

export const Header = () => (
  <>
    <Center as="header" w="full" h="70px" pos="fixed" zIndex={2}>
      <HStack
        justify="space-between"
        w={{ base: 'full', lg: 'container.md' }}
        px={{ base: 4, lg: 0 }}
      >
        <chakra.h1 textStyle="h1">adachi</chakra.h1>
        <ContactButton size="sm" />
      </HStack>
    </Center>
    <Box w="full" h="70px" />
  </>
)
