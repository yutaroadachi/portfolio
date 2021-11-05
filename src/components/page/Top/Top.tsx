import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  chakra,
  Icon,
  Img,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Stack,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import React from 'react'
import { Biography } from 'src/components/domain/Biography'
import { LINKS } from 'src/constants/links'

export type TopProps = {}

export const Top = ({}: TopProps) => {
  return (
    <Stack spacing={8}>
      <Hero />
      <AboutMe />
      <Links />
    </Stack>
  )
}

const Hero = () => {
  const HEADER_HEIGHT = 64
  const ADRESS_BAR_HEIGHT = 64

  return (
    <>
      <Head>
        <link rel="preload" href="/assets/top-page/hero.png" as="image" />
      </Head>
      <VStack
        spacing={4}
        justify="center"
        align="center"
        minH={{
          base: `calc(100vh - ${HEADER_HEIGHT + ADRESS_BAR_HEIGHT}px)`,
          lg: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <chakra.h1 id="hero" textStyle="h1" color="main" textAlign="center">
          adachi&apos;s
          <br />
          portfolio site
        </chakra.h1>
        <Img
          src="/assets/top-page/hero.png"
          htmlWidth="313px"
          htmlHeight="333px"
          alt=""
        />
        <VStack spacing={0} color="main">
          <ChevronDownIcon boxSize="48px" />
          <chakra.p fontSize="24px" fontWeight="700">
            Scroll
          </chakra.p>
        </VStack>
      </VStack>
    </>
  )
}

const AboutMe = () => {
  return (
    <Box>
      <chakra.h2 id="about-me" textStyle="h2WithTreat" color="main" mb={8}>
        私について
      </chakra.h2>
      <Biography />
    </Box>
  )
}

const Links = () => {
  return (
    <Box w="full">
      <chakra.h2 id="links" textStyle="h2WithTreat" color="main" mb={8}>
        リンク
      </chakra.h2>
      <SimpleGrid columns={{ base: 2, md: 4 }} gap={4}>
        {LINKS.map((link) => {
          return (
            <LinkBox layerStyle="card" p={4} key={link.title}>
              <VStack spacing={1}>
                <Icon boxSize="48px" as={link.icon} />
                <NextLink href={link.href} passHref>
                  <LinkOverlay
                    fontWeight="700"
                    data-test-id={`top-to-${link.key}`}
                  >
                    {link.title}
                  </LinkOverlay>
                </NextLink>
              </VStack>
            </LinkBox>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}
