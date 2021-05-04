import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
  Link,
  Stack,
} from '@chakra-ui/react'
import React from 'react'

export const Jobs = () => (
  <Box py={6}>
    <chakra.h2 textStyle="h2">Jobs</chakra.h2>
    <Accordion defaultIndex={[0]} allowMultiple>
      <Stack spacing={4}>
        {jobs.map((job) => (
          <AccordionItem key={job.companyName}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <chakra.p>{job.companyName}</chakra.p>
                <chakra.p fontSize="xs" fontWeight="normal" color="secondary">
                  {job.period}
                </chakra.p>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Stack spacing={1}>
                <chakra.p>{job.description}</chakra.p>
                {job.href && (
                  <Link href={job.href} isExternal color="link">
                    会社HPを見る
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

type Job = {
  companyName: string
  period: string
  description: string
  href?: string
}

const jobs: Job[] = [
  {
    companyName: '株式会社OneMile Partners',
    period: '2020/9 ~ 現職',
    description:
      '「はたらく世代」のお客様向けに、資産運用のサポートを提供する会社にて、業務支援のための管理画面やお客様向けサービスサイトの開発に従事。TypeScript, Next.js, Ruby on Railsをメインにフロントエンドからバックエンドまで幅広く経験。また、スクラム開発によるチーム開発も経験。',
    href: 'https://onemile.co.jp/',
  },
  {
    companyName: '株式会社みんせつ',
    period: '2019/8 ~ 2020/8',
    description:
      '上場企業のIR部門と機関投資家、証券会社をつなぐプラットフォームを提供する会社にて、メインプロダクトのSaaSの企画・開発に従事。React, Ruby on Railsをメインにフロントエンドからバックエンドまで幅広く経験。',
    href: 'https://msetsu.com/',
  },
  {
    companyName: 'NTTコムウェア株式会社',
    period: '2018/4 ~ 2019/7',
    description:
      'システムインテクグレータの会社にて、某金融機関に常駐して社内稟議などのペーパーレス化システムの保守に従事。保守チーム（5名程度）のリーダーとして顧客折衝やマネジメント、資料作成を経験。また開発面では、テスト設計やリリース作業を自動化するbashスクリプトの製造を経験。',
    href: 'https://www.nttcom.co.jp/',
  },
]
