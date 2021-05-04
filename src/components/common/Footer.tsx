import { chakra, Link, VStack } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => (
  <VStack as="footer" spacing={1} fontSize="sm" p={4}>
    <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLSdSMQFzMIm2oWZ9fk_r1RGIUl_gaf3r6ouHVK_Ysn2FERGxVA/viewform?usp=sf_link"
      isExternal
      color="link"
    >
      お問い合わせ
    </Link>
    <chakra.p>Copyright© adachi All Rights Reserved.</chakra.p>
  </VStack>
)
