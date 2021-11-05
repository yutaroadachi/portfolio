import { ExternalLinkIcon } from '@chakra-ui/icons'
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
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import React from 'react'
import { URL } from 'src/constants/url'

export const JobHistory = () => {
  return (
    <Box w="full">
      <chakra.h2 id="job-history" textStyle="h2WithTreat" color="main" mb={8}>
        職歴
      </chakra.h2>
      <ForPC />
      <ForSP />
    </Box>
  )
}

const ForPC = () => {
  return (
    <Stack d={{ base: 'none', md: 'flex' }} spacing={8}>
      {jobs.map((job) => {
        return (
          <Stack spacing={4} key={job.companyName}>
            <Box>
              <chakra.h3 textStyle="h3">{job.companyName}</chakra.h3>
            </Box>
            <Table colorScheme="blackAlpha" size="lg">
              <Thead>
                <Tr>
                  <Th whiteSpace="nowrap">期間</Th>
                  <Th>業務内容</Th>
                  <Th whiteSpace="nowrap">使用技術</Th>
                  <Th whiteSpace="nowrap">役割</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td whiteSpace="nowrap">
                    {job.start}〜
                    <br />
                    {job.end ?? '現在'}
                  </Td>
                  <Td>{job.detail}</Td>
                  <Td whiteSpace="nowrap">
                    {job.skills.map((skill) => (
                      <chakra.p key={skill}>{skill}</chakra.p>
                    ))}
                  </Td>
                  <Td whiteSpace="nowrap">
                    {job.roles.map((role) => (
                      <chakra.p key={role}>{role}</chakra.p>
                    ))}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            <Box>
              <Link href={job.href} isExternal color="link" float="right">
                会社のHPを見る
                <ExternalLinkIcon pb="2px" ml="2px" />
              </Link>
            </Box>
          </Stack>
        )
      })}
    </Stack>
  )
}

const ForSP = () => {
  return (
    <Accordion
      d={{ base: 'block', md: 'none' }}
      defaultIndex={[0]}
      allowMultiple
    >
      <Stack spacing={4}>
        {jobs.map((job) => {
          return (
            <AccordionItem key={job.companyName}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <chakra.h3 textStyle="h3">{job.companyName}</chakra.h3>
                  <chakra.p fontSize="14px" color="gray.500">
                    {job.start}〜{job.end ?? '現在'}
                  </chakra.p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Stack spacing={4}>
                  <chakra.p>{job.detail}</chakra.p>
                  <Box>
                    <chakra.p fontWeight={700}>使用技術</chakra.p>
                    {job.skills.map((skill) => {
                      return <chakra.p key={skill}>{skill}</chakra.p>
                    })}
                  </Box>
                  <Box>
                    <chakra.p fontWeight={700}>役割</chakra.p>
                    {job.roles.map((role) => {
                      return <chakra.p key={role}>{role}</chakra.p>
                    })}
                  </Box>
                  <Link href={job.href} isExternal color="link">
                    会社のHPを見る
                    <ExternalLinkIcon pb="2px" ml="2px" />
                  </Link>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Stack>
    </Accordion>
  )
}

const jobs: {
  companyName: string
  start: string
  end?: string
  detail: React.ReactNode
  skills: string[]
  roles: string[]
  href: string
}[] = [
  {
    companyName: '株式会社モニクル',
    start: '2020/9',
    detail: (
      <>
        「はたらく世代」の資産運用をサポートする会社のファイナンシャルアドバイザー向けCRMシステムおよび、お客様向けサービスサイトの開発に従事し、フロントエンド開発からバックエンド開発まで幅広く経験しております。
        <br />
        <chakra.span
          d="inline-block"
          fontSize="12px"
          lineHeight={4}
          color="gray.500"
          mt={1}
        >
          ※株式会社モニクルは持株会社であり、正確には同グループ会社の
          <Link href={URL.onemile} isExternal color="link">
            株式会社OneMile Partners
            <ExternalLinkIcon pb="2px" mx="2px" />
          </Link>
          に入社後、同グループ会社の
          <Link href={URL.navipla} isExternal color="link">
            株式会社ナビゲータープラットフォーム
            <ExternalLinkIcon pb="2px" mx="2px" />
          </Link>
          を経由して転籍した形になっておりますが、業務内容に変化はありません。
        </chakra.span>
      </>
    ),
    skills: ['React', 'TypeScript', 'Next.js', 'Ruby on Rails', 'Go'],
    roles: ['メンバ'],
    href: URL.monicle,
  },
  {
    companyName: '株式会社みんせつ',
    start: '2019/8',
    end: '2020/8',
    detail:
      '上場企業のIR部門と機関投資家、証券会社をつなぐプラットフォームの企画・開発に従事し、フロントエンド開発からバックエンド開発まで幅広く経験しました。',
    skills: ['React', 'Ruby on Rails'],
    roles: ['メンバ'],
    href: URL.msetsu,
  },
  {
    companyName: 'NTTコムウェア株式会社',
    start: '2018/4',
    end: '2019/7',
    detail:
      '某大手金融機関に常駐して社内稟議などのペーパーレス化システムの開発・保守に従事し、メンバとしてはテスト設計やリリース作業を自動化するbashスクリプトの製造を、保守チーム（5名程度）のリーダーとしては顧客折衝やマネジメント、資料作成を経験しました。',
    skills: ['bash', 'SQL'],
    roles: ['メンバ', 'チームリーダー'],
    href: URL.nttcom,
  },
]
