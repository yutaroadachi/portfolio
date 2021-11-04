import { BoxProps, chakra, HStack } from '@chakra-ui/react'
import React from 'react'
import { Logo } from '../Logo'

export type HeaderProps = BoxProps

export const Header = (props: HeaderProps) => (
  <chakra.header w="full" h="64px" bgColor="main" color="white" {...props}>
    <HStack
      justify="center"
      w={{ base: 'full', lg: 'container.md' }}
      h="full"
      mx={{ base: 0, lg: 'auto' }}
    >
      <Logo />
    </HStack>
  </chakra.header>
)
