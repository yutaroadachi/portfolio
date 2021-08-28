import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  chakra,
  Link,
  Stack,
} from '@chakra-ui/react'
import React from 'react'

export type AchievementsProps = BoxProps

export const Achievements = (props: AchievementsProps) => (
  <Box id="achievements" w="full" {...props}>
    <chakra.h2 textStyle="h2WithTreat">Achievements</chakra.h2>
    <Accordion defaultIndex={[0]} allowMultiple w="full">
      <Stack spacing={4}>
        {achievements.map((achievement) => (
          <AccordionItem key={achievement.title}>
            <AccordionButton>
              <chakra.p fontWeight="bold" flex="1" textAlign="left">
                {achievement.title}
              </chakra.p>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Stack spacing={1}>
                <chakra.p fontSize="12px">{achievement.description}</chakra.p>
                {achievement.href && (
                  <Link
                    href={achievement.href}
                    isExternal
                    fontSize="12px"
                    color="link"
                  >
                    {achievement.linkTitle ?? achievement.href}
                    <ExternalLinkIcon pb="2px" ml={1} />
                  </Link>
                )}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Stack>
    </Accordion>
  </Box>
)

type Achievement = {
  title: string
  description: string
  href?: string
  linkTitle?: string
}

const achievements: Achievement[] = [
  {
    title: 'Next.jsに関する記事がZennのTrendingでTech部門1位を達成',
    description:
      '「Next.jsプロジェクトにCypressを導入してGitHub ActionsでVercelのPreview環境のE2Eテストをする」の記事がZennのTrendingでTech部門1位を達成。その他にも「Next.jsにおけるSSG/SSR/ISR/CSRの違いと使い分け」の記事が同2位、「Next.js最速セットアップ」の記事が同6位を達成するなど、Next.jsに関する記事を多数執筆。',
    href: 'https://zenn.dev/a_da_chi/articles/7ba871c23c5510',
    linkTitle: 'Zennで読む',
  },
  {
    title: '映画「僕とオトウト」公式HP製作',
    description:
      '知人が撮影した映画「僕とオトウト」の公式HPを製作。使用技術はSTUDIO。ディレクション、デザイン、実装、リリース（独自ドメイン対応など）と全ての行程を担当。映画の内容が監督自身が重度の知的障害をもつ弟にカメラを向けたドキュメンタリーであったことから、映画の世界観を壊さないデザインとSTUDIOでできる範囲のアクセシビリティ（画像のalt設定やセマンティックなマークアップなど）を意識。',
    href: 'https://boku-to-otouto.com/',
    linkTitle: '公式HPを見る',
  },
]
