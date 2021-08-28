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
  Spacer,
  Stack,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { URL } from 'src/constants/url'

export type HistoriesProps = BoxProps

export const Histories = (props: HistoriesProps) => (
  <Box id="histories" {...props}>
    <chakra.h2 textStyle="h2WithTreat">Histories</chakra.h2>
    <JobHistory />
    <Spacer w="full" h={4} />
    <AcademicHistory />
  </Box>
)

const JobHistory = () => {
  return (
    <VStack spacing={4} w="full">
      <chakra.h3 textStyle="h3" color="main">
        Job History
      </chakra.h3>
      <Accordion defaultIndex={[0]} allowMultiple w="full">
        <Stack spacing={4}>
          {jobs.map((job) => (
            <AccordionItem key={job.companyName}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <chakra.p fontWeight="bold">{job.companyName}</chakra.p>
                  <chakra.p fontSize="12px" color="gray.500">
                    {job.period}
                  </chakra.p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Stack spacing={1}>
                  <chakra.p fontSize="12px">{job.description}</chakra.p>
                  {job.href && (
                    <Link
                      href={job.href}
                      isExternal
                      fontSize="12px"
                      color="link"
                    >
                      会社のHPを見る
                      <ExternalLinkIcon pb="2px" ml={1} />
                    </Link>
                  )}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Stack>
      </Accordion>
    </VStack>
  )
}

const AcademicHistory = () => {
  return (
    <VStack spacing={4} w="full">
      <chakra.h3 textStyle="h3" color="main">
        Academic History
      </chakra.h3>
      <Stack spacing={4} w="full">
        {academics.map((academic) => (
          <Stack spacing={1} layerStyle="card" p={4} key={academic.schoolName}>
            <chakra.p fontWeight="bold">{academic.schoolName}</chakra.p>
            <chakra.p fontSize="12px" color="gray.500">
              {academic.period}
            </chakra.p>
            {academic.href && (
              <Link
                href={academic.href}
                isExternal
                fontSize="12px"
                color="link"
              >
                学校のHPを見る
                <ExternalLinkIcon pb="2px" ml={1} />
              </Link>
            )}
          </Stack>
        ))}
      </Stack>
    </VStack>
  )
}

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
    href: URL.onemile,
  },
  {
    companyName: '株式会社みんせつ',
    period: '2019/8 ~ 2020/8',
    description:
      '上場企業のIR部門と機関投資家、証券会社をつなぐプラットフォームを提供する会社にて、メインプロダクトのSaaSの企画・開発に従事。React, Ruby on Railsをメインにフロントエンドからバックエンドまで幅広く経験。',
    href: URL.msetsu,
  },
  {
    companyName: 'NTTコムウェア株式会社',
    period: '2018/4 ~ 2019/7',
    description:
      'システムインテクグレータの会社にて、某金融機関に常駐して社内稟議などのペーパーレス化システムの保守に従事。保守チーム（5名程度）のリーダーとして顧客折衝やマネジメント、資料作成を経験。また開発面では、テスト設計やリリース作業を自動化するbashスクリプトの製造を経験。',
    href: URL.nttcom,
  },
]

type Academic = {
  schoolName: string
  period: string
  href?: string
}

const academics: Academic[] = [
  {
    schoolName: '岡山大学 経済学部',
    period: '2014/4 ~ 2018/3',
    href: URL.okayamaU,
  },
]
