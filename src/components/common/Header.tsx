import { Center, chakra } from '@chakra-ui/react'
import React from 'react'

export const Header = () => (
  <Center as="header" py={2} borderBottom="1px" borderColor="whiteAlpha.300">
    <chakra.h1 textStyle="h1">adachi</chakra.h1>
  </Center>
)
