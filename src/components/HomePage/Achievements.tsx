import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  chakra,
  Link,
  Stack,
} from '@chakra-ui/react'
import React from 'react'

export const Achievements = () => (
  <Stack spacing={4} py={4}>
    <chakra.h2 textStyle="heading" fontSize="2xl" textAlign="center">
      Achievements
    </chakra.h2>
    <Accordion defaultIndex={[0]} allowMultiple>
      <Stack spacing={4}>
        {achievements.map((achievement) => (
          <AccordionItem key={achievement.title}>
            <AccordionButton>
              <chakra.p flex="1" textAlign="left">
                {achievement.title}
              </chakra.p>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Stack spacing={1}>
                <chakra.p>{achievement.description}</chakra.p>
                {achievement.href && (
                  <Link href={achievement.href} isExternal color="link">
                    {achievement.linkTitle ?? achievement.href}
                  </Link>
                )}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Stack>
    </Accordion>
  </Stack>
)

type Achievement = {
  title: string
  description: string
  href?: string
  linkTitle?: string
}

const achievements: Achievement[] = [
  {
    title: 'Next.jsに関する記事がZennのTrendingでTech部門2位を達成',
    description:
      '「Next.jsにおけるSSG/SSR/ISR/CSRの違いと使い分け」の記事がZennのTrendingでTech部門2位を達成。その他にも「Next.js最速セットアップ」の記事が同6位を達成するなど、Next.jsに関する知見あり。',
    href: 'https://zenn.dev/a_da_chi/articles/105dac5573b2f5',
    linkTitle: 'Zennで読む',
  },
  {
    title: '映画『僕とオトウト』公式HP製作',
    description:
      '知人が撮影した映画『僕とオトウト』の公式HPを製作。使用技術はSTUDIO。ディレクション、デザイン、実装、リリース（独自ドメイン対応など）と全ての行程を担当。映画の内容が監督自身が重度の知的障害をもつ弟にカメラを向けたドキュメンタリーであったことから、映画の世界観を壊さないデザインとSTUDIOでできる範囲のアクセシビリティ（画像のalt設定やセマンティックなマークアップなど）を意識。',
  },
]
