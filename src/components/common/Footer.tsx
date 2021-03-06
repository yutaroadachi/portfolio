import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  BoxProps,
  chakra,
  Link,
  SimpleGrid,
  Stack,
  VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { PATH } from 'src/constants/path'
import { URL } from 'src/constants/url'

export type FooterProps = BoxProps

export const Footer = (props: FooterProps) => (
  <chakra.footer
    w="full"
    bgColor="main"
    color="white"
    py={8}
    as="footer"
    {...props}
  >
    <VStack spacing={8} w="full" maxW="340px" mx="auto">
      <SimpleGrid columns={2} spacing={4} w="full">
        {[resumeLinks, worksLinks].map((links, idx) => (
          <Stack spacing={1} key={idx}>
            {links.map((link) => (
              <NextLink href={link.href} passHref key={link.label}>
                <Link
                  fontSize={!!link.isParent ? '20px' : '16px'}
                  fontWeight={!!link.isParent ? 'bold' : 'normal'}
                  pl={!!link.isParent ? 0 : 4}
                  data-test-id={`footer-navigation-${link.key}`}
                >
                  {link.label}
                </Link>
              </NextLink>
            ))}
          </Stack>
        ))}
        <Link href={URL.contact} isExternal fontSize="20px" fontWeight="bold">
          Contact
          <ExternalLinkIcon pb="2px" ml={1} />
        </Link>
      </SimpleGrid>
      <chakra.p>CopyrightÂ© adachi All Rights Reserved.</chakra.p>
    </VStack>
  </chakra.footer>
)

type Link = {
  key: string
  label: string
  href: string
  isParent?: boolean
}

const resumeLinks: Link[] = [
  {
    key: 'resume',
    label: 'Resume',
    href: PATH.resume + '#navigation',
    isParent: true,
  },
  {
    key: 'skills',
    label: 'Skills',
    href: PATH.resume + '#skills',
  },
  {
    key: 'histories',
    label: 'Histories',
    href: PATH.resume + '#histories',
  },
]

const worksLinks: Link[] = [
  {
    key: 'works',
    label: 'Works',
    href: PATH.works + '#navigation',
    isParent: true,
  },
  {
    key: 'recent-posts',
    label: 'Recent Posts',
    href: PATH.works + '#recent-posts',
  },
  {
    key: 'achievements',
    label: 'Achievements',
    href: PATH.works + '#achievements',
  },
]
