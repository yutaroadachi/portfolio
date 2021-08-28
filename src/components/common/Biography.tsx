import { chakra, HStack, Img, Link, StackProps, VStack } from '@chakra-ui/react'
import React from 'react'
import { GitHubIcon, TwitterIcon, ZennIcon } from 'src/components/icons'
import { URL } from 'src/constants/url'

export type BiographyProps = StackProps

export const Biography = (props: BiographyProps) => (
  <VStack spacing={4} {...props}>
    <Img
      src="/assets/home-page/profile.png"
      w="128px"
      h="128px"
      alt="Yutaro Adachiのプロフィール画像"
      borderRadius="50%"
    />
    <VStack spacing="2px">
      <chakra.h2 textStyle="h2">Yutaro Adachi</chakra.h2>
      <chakra.p fontSize="14px" color="gray.500">
        Software Engineer
      </chakra.p>
    </VStack>
    <chakra.p textAlign="center">
      ソフトウェアエンジニア3年目
      <br />
      フロントエンドが得意です
    </chakra.p>
    <HStack spacing={8}>
      <Link href={URL.github} isExternal>
        <GitHubIcon boxSize="24px" />
      </Link>
      <Link href={URL.zenn} isExternal>
        <ZennIcon boxSize="24px" />
      </Link>
      <Link href={URL.twitter} isExternal>
        <TwitterIcon boxSize="24px" />
      </Link>
    </HStack>
  </VStack>
)
