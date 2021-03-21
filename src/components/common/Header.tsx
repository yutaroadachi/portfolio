import { Center, Text } from '@chakra-ui/react'
import React from 'react'

export const Header = () => (
  <Center as="header" p={2} borderBottom="1px" borderColor="whiteAlpha.300">
    <Text as="h1" textStyle="heading" fontSize="4xl" letterSpacing="2px">
      adachi
    </Text>
  </Center>
)
