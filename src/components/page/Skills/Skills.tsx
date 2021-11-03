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
  ListItem,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { Biography } from 'src/components/domain/Biography'

export type SkillsProps = {}

export const Skills = ({}: SkillsProps) => {
  return (
    <Box>
      <chakra.h1 id="skills" textStyle="h1" color="main" mb={8}>
        スキル
      </chakra.h1>
      <VStack spacing={8}>
        <Box w="full">
          <ForPC />
          <ForSP />
        </Box>
        <Biography />
      </VStack>
    </Box>
  )
}

const ForPC = () => {
  return (
    <Table d={{ base: 'none', md: 'block' }} colorScheme="blackAlpha" size="lg">
      <Thead>
        <Tr>
          <Th whiteSpace="nowrap">スキル名</Th>
          <Th whiteSpace="nowrap">経験年数</Th>
          <Th>詳細</Th>
        </Tr>
      </Thead>
      <Tbody>
        {skills.map((skill) => {
          return (
            <Tr key={skill.name}>
              <Td whiteSpace="nowrap">{skill.name}</Td>
              <Td whiteSpace="nowrap">{skill.years}</Td>
              <Td>{skill.detail}</Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
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
        {skills.map((skill) => {
          return (
            <AccordionItem key={skill.name}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <chakra.h3 textStyle="h3">{skill.name}</chakra.h3>
                  <chakra.p fontSize="14px" color="gray.500">
                    {skill.years}
                  </chakra.p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <chakra.p>{skill.detail}</chakra.p>
              </AccordionPanel>
            </AccordionItem>
          )
        })}
      </Stack>
    </Accordion>
  )
}

const skills: {
  name: string
  years: string
  detail: React.ReactNode
}[] = [
  {
    name: 'React',
    years: '2.5年',
    detail: (
      <>
        Hooksを使用して関数コンポーネントを宣言的に書くことができます。
        <UnorderedList listStylePos="inside" mt={4}>
          <ListItem>スタイリング：styled-components</ListItem>
          <ListItem>UIライブラリ：Chakra UI/MUI</ListItem>
          <ListItem>グローバルステート管理：Context API</ListItem>
          <ListItem>フォーム管理：Formik/Yup</ListItem>
          <ListItem>データフェッチ：SWR</ListItem>
          <ListItem>単体テスト：Jest</ListItem>
          <ListItem>結合テスト：Testing Library</ListItem>
          <ListItem>E2E：Cypress</ListItem>
          <ListItem>コンポーネントカタログ：Storybook</ListItem>
          <ListItem>コードジェネレータ：Hygen</ListItem>
        </UnorderedList>
      </>
    ),
  },
  {
    name: 'TypeScript',
    years: '1.5年',
    detail:
      '基本的な型付けからジェネリクスを用いた少し応用的な型付けまで対応可能です。',
  },
  {
    name: 'Next.js',
    years: '1.5年',
    detail: (
      <>
        <Link
          href="https://zenn.dev/a_da_chi/articles/181ea4ccc39580"
          isExternal
          color="link"
        >
          基本的なNext.jsプロジェクトのセットアップ
          <ExternalLinkIcon pb="3px" mx="2px" />
        </Link>
        から対応可能です。上記の記事以外にも
        <Link href="https://zenn.dev/a_da_chi" isExternal color="link">
          Zenn
          <ExternalLinkIcon pb="3px" mx="2px" />
        </Link>
        でNext.jsに関する記事を複数執筆しており、累計で500近くのLikeを頂いております。
      </>
    ),
  },
  {
    name: 'Ruby on Rails',
    years: '2.5年',
    detail:
      'モノリシックなアプリケーション開発からAPI開発まで対応可能です。Fat Controllerにならないようにするのはもちろん、デコレータ層やユースケース層を使用してFat Modelにならないように意識しています。テストにはminitestを使用することが多く、日常的にテストを書いています。',
  },
  {
    name: 'Go',
    years: '0.1年',
    detail: '社内ツールの作成で触ったことがある程度です。',
  },
]
