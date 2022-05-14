import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import React from 'react'

export const JobHistory = () => {
  return (
    <Box w="full">
      <chakra.h2 id="job-history" textStyle="h2WithTreat" color="main" mb={8}>
        職務経歴
      </chakra.h2>
      <ForPC />
      <ForSP />
    </Box>
  )
}

const ForPC = () => {
  return (
    <Stack display={{ base: 'none', md: 'flex' }} spacing={8}>
      {jobs.map((job, idx) => {
        return (
          <Stack spacing={4} key={idx}>
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
                      <chakra.div key={skill}>{skill}</chakra.div>
                    ))}
                  </Td>
                  <Td whiteSpace="nowrap">
                    {job.roles.map((role) => (
                      <chakra.div key={role}>{role}</chakra.div>
                    ))}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Stack>
        )
      })}
    </Stack>
  )
}

const ForSP = () => {
  return (
    <Accordion
      display={{ base: 'block', md: 'none' }}
      defaultIndex={[0]}
      allowMultiple
    >
      <Stack spacing={4}>
        {jobs.map((job, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <chakra.h3 textStyle="h3">{job.companyName}</chakra.h3>
                  <chakra.div fontSize="14px" color="gray.500">
                    {job.start}〜{job.end ?? '現在'}
                  </chakra.div>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Stack spacing={4}>
                  <chakra.p>{job.detail}</chakra.p>
                  <Box>
                    <chakra.div fontWeight="bold">使用技術</chakra.div>
                    {job.skills.map((skill) => {
                      return <chakra.div key={skill}>{skill}</chakra.div>
                    })}
                  </Box>
                  <Box>
                    <chakra.div fontWeight="bold">役割</chakra.div>
                    {job.roles.map((role) => {
                      return <chakra.div key={role}>{role}</chakra.div>
                    })}
                  </Box>
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
}[] = [
  {
    companyName: '金融系スタートアップ',
    start: '2020/9',
    detail:
      'くらしとお金の社会課題を解決するシステムとサービスを提供する会社にて、社内のファイナンシャルプランナー向けのCRM・SFAシステムやはたらく世代のお金の診断・相談サービスの開発に従事し、フロントエンド（Next.js, TypeScript）からバックエンド（Ruby on Rails）まで幅広く経験しています。また、チームリーダーとしてスクラム開発をリードする経験もしています。',
    skills: ['Next.js', 'TypeScript', 'Ruby on Rails'],
    roles: ['メンバー', 'チームリーダー'],
  },
  {
    companyName: '金融系スタートアップ',
    start: '2019/8',
    end: '2020/8',
    detail:
      '上場企業のIR部門と機関投資家、証券会社をつなぐプラットフォームを提供する会社にて、メインプロダクトの開発に従事し、フロントエンド（React）からバックエンド（Ruby on Rails）まで幅広く経験しました。また、営業同行やカスタマーサポート、企画などのビジネスサイドに近い経験もしました。',
    skills: ['React', 'Ruby on Rails'],
    roles: ['メンバー'],
  },
  {
    companyName: '大手SIer',
    start: '2018/4',
    end: '2019/7',
    detail:
      '大手SIerの会社にて、大手金融機関のシステム子会社に常駐して社内稟議などのペーパーレス化システムの改修・保守に従事し、リリース作業を自動化するBashスクリプトの開発や保守チームのリーダーを経験しました。',
    skills: ['Bash'],
    roles: ['メンバー', 'チームリーダー'],
  },
]
