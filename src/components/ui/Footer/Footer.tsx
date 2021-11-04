import { BoxProps, chakra, HStack, Link, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { LINKS } from 'src/constants/links'
import { Logo } from '../Logo'

export type FooterProps = BoxProps

export const Footer = (props: FooterProps) => (
  <chakra.footer bgColor="main" color="white" py={8} {...props}>
    <VStack spacing={8} w="full" maxW="375px" mx="auto">
      <Logo />
      <HStack spacing={4}>
        {LINKS.map((link) => {
          return (
            <NextLink href={link.href} passHref key={link.title}>
              <Link fontWeight="700">{link.title}</Link>
            </NextLink>
          )
        })}
      </HStack>
      <chakra.p>Copyright© adachi All Rights Reserved.</chakra.p>
    </VStack>
  </chakra.footer>
)
