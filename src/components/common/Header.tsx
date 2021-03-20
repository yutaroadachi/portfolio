import { Center, Text } from '@chakra-ui/react'
import React from 'react'

export const Header = () => (
  <Center as="header" p={2} borderBottom="1px" borderColor="whiteAlpha.300">
    <Text
      as="h1"
      fontSize="4xl"
      fontWeight="bold"
      letterSpacing="2px"
      color="primary"
    >
      adachi
    </Text>
  </Center>
)
