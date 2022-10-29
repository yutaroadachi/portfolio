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
          return <_Link link={link} key={link.title} />
        })}
      </HStack>
      <chakra.p>Copyright© adachi All Rights Reserved.</chakra.p>
    </VStack>
  </chakra.footer>
)

const _Link = ({ link }: { link: typeof LINKS[number] }) => {
  return link.isExternal ? (
    <Link href={link.href} isExternal fontWeight="bold">
      {link.title}
    </Link>
  ) : (
    <NextLink href={link.href} passHref legacyBehavior>
      <Link fontWeight="bold">{link.title}</Link>
    </NextLink>
  )
}
