import { HStack, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Image } from 'src/components/common'
import { GitHubIcon, TwitterIcon, ZennIcon } from 'src/components/icons'

export const Biography = () => (
  <VStack spacing={4} layerStyle="card" p={4}>
    <Image
      src="/assets/home-page/biography.png"
      width={150}
      height={150}
      alt="プロフィール画像"
      borderRadius="50%"
    />
    <Text>Yutaro Adachi / Web Engineer</Text>
    <HStack spacing={8}>
      <Link href="https://github.com/yutaroadachi" isExternal>
        <GitHubIcon boxSize="32px" />
      </Link>
      <Link href="https://zenn.dev/a_da_chi" isExternal>
        <ZennIcon boxSize="32px" />
      </Link>
      <Link href="https://twitter.com/a_da_chi_" isExternal>
        <TwitterIcon boxSize="32px" />
      </Link>
    </HStack>
  </VStack>
)
