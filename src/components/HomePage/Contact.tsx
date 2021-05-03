import { chakra, Link, VStack } from '@chakra-ui/react'
import React from 'react'

export const Contact = () => (
  <VStack spacing={4} py={4}>
    <chakra.h2 textStyle="heading" fontSize="2xl">
      Contact
    </chakra.h2>
    <chakra.p>
      お問い合わせフォームは
      <Link
        href="https://docs.google.com/forms/d/e/1FAIpQLSdSMQFzMIm2oWZ9fk_r1RGIUl_gaf3r6ouHVK_Ysn2FERGxVA/viewform?usp=sf_link"
        isExternal
        color="link"
      >
        こちら
      </Link>
    </chakra.p>
  </VStack>
)
