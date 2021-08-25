import { Box, chakra, HStack, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import { Image } from 'src/components/common'
import { GitHubIcon, TwitterIcon, ZennIcon } from 'src/components/icons'

export const Biography = () => (
  <Box py={6}>
    <VStack spacing={4}>
      <chakra.p textStyle="h1" textAlign="center" color="main">
        Yutaro
        <br />
        Adachi
        <br />
        Portfolio Site
      </chakra.p>
      <Box>
        <Image
          src="/assets/home-page/biography.png"
          width={100}
          height={100}
          alt="プロフィール画像"
          borderRadius="50%"
        />
      </Box>
      <chakra.p textAlign="center">
        1995年生まれのWebエンジニア。
        <br />
        得意分野はフロントエンド。Reactが好き。バックエンドも対応可能な点が強み。
      </chakra.p>
      <HStack spacing={8}>
        <Link href="https://github.com/yutaroadachi" isExternal>
          <GitHubIcon boxSize="24px" />
        </Link>
        <Link href="https://zenn.dev/a_da_chi" isExternal>
          <ZennIcon boxSize="24px" />
        </Link>
        <Link href="https://twitter.com/a_da_chi_" isExternal>
          <TwitterIcon boxSize="24px" />
        </Link>
      </HStack>
    </VStack>
  </Box>
)
