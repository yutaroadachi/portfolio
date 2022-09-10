import {
  chakra,
  HStack,
  Icon,
  Link,
  Stack,
  StackProps,
  VStack,
} from '@chakra-ui/react'
import NextImage from 'next/future/image'
import { IconType } from 'react-icons'
import { FiGithub, FiTwitter } from 'react-icons/fi'
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
          style={{
            borderRadius: '50%',
          }}
        />
        <VStack spacing="2px">
          <chakra.h2 textStyle="h2">Yutaro Adachi</chakra.h2>
          <chakra.p fontSize="14px" color="gray.500">
            ソフトウェアエンジニア
          </chakra.p>
        </VStack>
        <HStack spacing={4}>
          {accounts.map((account, idx) => {
            return (
              <Link href={account.href} isExternal key={idx}>
                <Icon boxSize="24px" as={account.icon} />
              </Link>
            )
          })}
        </HStack>
      </VStack>
      <chakra.p>
        大学卒業後、新卒で大手SIerに入社し、システムエンジニアとして客先常駐でのシステム開発を経験しました。この経験を通して、自分でもコードを書けるようになる必要があると感じ、ソフトウェアエンジニアにキャリアチェンジすることを決意しました。
        <br />
        その後、スタートアップでソフトウェアエンジニアとしてフロントエンドからバックエンドまで幅広く経験してきましたが、特にReactとTypeScriptを中心としたフロントエンド開発が得意です。また、要件定義や設計といった上流工程の経験やチームリーダーとしてスクラム開発をリードする経験もしてきたので、一人称で開発に携わることができると自負しています。
      </chakra.p>
    </Stack>
  )
}

const accounts: {
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
]
