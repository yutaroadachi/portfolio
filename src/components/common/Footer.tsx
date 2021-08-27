import { chakra, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import { PATH } from 'src/constants/path'

export const Footer = () => (
  <VStack as="footer" spacing={1} fontSize="sm" py={6}>
    <Link href={PATH.contact} isExternal color="link">
      お問い合わせ
    </Link>
    <chakra.p>Copyright© adachi All Rights Reserved.</chakra.p>
  </VStack>
)
