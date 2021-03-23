import { HStack, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Image } from 'src/components/common'
import { GitHubIcon, TwitterIcon, ZennIcon } from 'src/components/icons'

export const Biography = () => (
  <VStack spacing={4} layerStyle="card" p={4} mt={4}>
    <Image
      src="/assets/home-page/biography.png"
      width={90}
      height={90}
      alt="プロフィール画像"
      borderRadius="50%"
    />
    <Text as="h2" textStyle="heading" fontSize="2xl">
      Yutaro Adachi
    </Text>
    <Text>Web Engineer</Text>
    <HStack spacing={8}>
      <Link href="https://github.com/yutaroadachi" isExternal>
        <GitHubIcon boxSize="20px" />
      </Link>
      <Link href="https://zenn.dev/a_da_chi" isExternal>
        <ZennIcon boxSize="20px" />
      </Link>
      <Link href="https://twitter.com/a_da_chi_" isExternal>
        <TwitterIcon boxSize="20px" />
      </Link>
    </HStack>
  </VStack>
)
