import { Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const Contact = () => (
  <VStack spacing={4} py={4}>
    <Text as="h2" textStyle="heading" fontSize="2xl">
      Contact
    </Text>
    <Text>
      お問い合わせは{' '}
      <Link
        href="https://twitter.com/a_da_chi_"
        isExternal
        fontWeight="bold"
        color="#1da1f2"
      >
        Twitter
      </Link>{' '}
      のDMまで
    </Text>
  </VStack>
)
