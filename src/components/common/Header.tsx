import { Center, chakra } from '@chakra-ui/react'
import React from 'react'

export const Header = () => (
  <Center as="header" p={4} borderBottom="1px" borderColor="whiteAlpha.300">
    <chakra.h1 textStyle="heading" fontSize="4xl" letterSpacing="2px">
      adachi
    </chakra.h1>
  </Center>
)
