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
]
