import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Center, chakra, HStack } from '@chakra-ui/react'
import React from 'react'

export const Header = () => (
  <>
    <Center as="header" w="full" h="64px" bgColor="main" pos="fixed" zIndex={2}>
      <HStack
        justify="space-between"
        w={{ base: 'full', lg: 'container.md' }}
        px={{ base: 4, lg: 0 }}
      >
        <HamburgerIcon boxSize="24px" color="white" />
        <chakra.h1 textStyle="h1" color="white">
          adachi
        </chakra.h1>
        <Box boxSize="24px" />
      </HStack>
    </Center>
    <Box w="full" h="64px" />
  </>
)
