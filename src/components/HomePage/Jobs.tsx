import { Box, Center, HStack, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const Jobs = () => (
  <VStack spacing={4} py={4}>
    <Text as="h2" textStyle="heading" fontSize="2xl">
      Jobs
    </Text>
    {jobs.map((job) => (
      <JobCard key={job.companyName} job={job} />
    ))}
  </VStack>
)

const JobCard = ({ job }: { job: Job }) => (
  <HStack spacing={4} layerStyle="card" w="full" p={4}>
    <Center flexShrink={0} boxSize="32px">
      <Box
        boxSize={job.isCurrent ? '20px' : '10px'}
        bgColor={job.isCurrent ? 'primary' : 'secondary'}
        borderRadius="50%"
      />
    </Center>
    <Box>
      <Link href={job.companyLink} isExternal fontWeight="bold">
        {job.companyName}
      </Link>
      <Text fontSize="xs" color="secondary">
        {job.period}
      </Text>
      <Text fontSize="xs">{job.description}</Text>
    </Box>
  </HStack>
)

type Job = {
  isCurrent: boolean
  companyName: string
  companyLink: string
  period: string
  description: string
}

const jobs: Job[] = [
  {
    isCurrent: true,
    companyName: '株式会社OneMile Partners',
    companyLink: 'https://onemile.co.jp/',
    period: '2020/9 ~ current',
    description:
      '「はたらく世代」のお客様向けに、資産運用のサポートを提供する会社にて、業務支援のための管理画面やお客様向けサービスサイトの開発に従事。TypeScript, Next.js, Ruby on Railsをメインにフロントエンドからバックエンドまで幅広く経験。また、スクラム開発によるチーム開発も経験。',
  },
  {
    isCurrent: false,
    companyName: '株式会社みんせつ',
    companyLink: 'https://msetsu.com/',
    period: '2019/8 ~ 2020/8',
    description:
      '上場企業のIR部門と機関投資家、証券会社をつなぐプラットフォームを提供する会社にて、メインプロダクトのSaaSの企画・開発に従事。React, Ruby on Railsをメインにフロントエンドからバックエンドまで幅広く経験。',
  },
  {
    isCurrent: false,
    companyName: 'NTTコムウェア株式会社',
    companyLink: 'https://www.nttcom.co.jp/',
    period: '2018/4 ~ 2019/7',
    description:
      'システムインテクグレータの会社にて、某金融機関に常駐して社内稟議などのペーパーレス化システムの保守に従事。保守チーム（5名程度）のリーダーとして顧客折衝やマネジメント、資料作成を経験。また開発面では、テスト設計やリリース作業を自動化するbashスクリプトの製造を経験。',
  },
]
