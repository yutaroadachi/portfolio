import {
  chakra,
  HStack,
  Icon,
  Link,
  Stack,
  StackProps,
  VStack,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import React from 'react'
import { IconType } from 'react-icons'
import { FiGithub, FiMail, FiTwitter } from 'react-icons/fi'
import { URL } from 'src/constants/url'

export type BiographyProps = StackProps

export const Biography = (props: BiographyProps) => {
  return (
    <Stack
      spacing={8}
      direction={{ base: 'column', md: 'row' }}
      align={{ md: 'center' }}
      layerStyle="card"
      p={8}
      {...props}
    >
      <VStack spacing={4} flexShrink={0}>
        <NextImage
          src="/assets/profile.png"
          width={128}
          height={128}
          alt="Yutaro Adachiのプロフィール画像"
          className="circle-image"
        />
        <VStack spacing="2px">
          <chakra.h2 textStyle="h2">Yutaro Adachi</chakra.h2>
          <chakra.p fontSize="14px" color="gray.500">
            フロントエンドエンジニア
          </chakra.p>
        </VStack>
        <HStack spacing={4}>
          {links.map((link, idx) => {
            return (
              <Link href={link.href} isExternal key={idx}>
                <Icon boxSize="24px" as={link.icon} />
              </Link>
            )
          })}
        </HStack>
      </VStack>
      <chakra.p>
        大学で経済学を学んだのち、大手SIerでメンバーおよびチームリーダーとして客先常駐でのシステム開発を経験しました。この経験を通して、自分でもコードを書けるようになる必要があると感じ、エンジニアにキャリアチェンジすることを決意しました。
        <br />
        その後スタートアップでエンジニアとしてフロントエンド開発からバックエンド開発まで幅広く経験してきましたが、特にReactを中心としたフロントエンド開発が得意です。また要件定義や設計といった上流工程の経験もしてきたため、一人称で開発に携わることができると自負しております。
      </chakra.p>
    </Stack>
  )
}

const links: {
  href: string
  icon: IconType
}[] = [
  {
    href: URL.github,
    icon: FiGithub,
  },
  {
    href: URL.twitter,
    icon: FiTwitter,
  },
  {
    href: URL.contact,
    icon: FiMail,
  },
]
