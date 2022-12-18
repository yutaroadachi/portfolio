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
} from '@chakra-ui/react'
import React from 'react'
import { Biography } from 'src/components/domain/Biography'

export const Skills = () => {
  return (
    <Box>
      <chakra.h1 id="skills" textStyle="h1" color="main" mb={8}>
        スキル
      </chakra.h1>
      <Stack spacing={8}>
        <Box w="full">
          <ForPC />
          <ForSP />
        </Box>
        <Biography />
      </Stack>
    </Box>
  )
}

const ForPC = () => {
  return (
    <Table
      display={{ base: 'none', md: 'block' }}
      colorScheme="blackAlpha"
      size="lg"
    >
      <Thead>
        <Tr>
          <Th whiteSpace="nowrap">技術</Th>
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
      display={{ base: 'block', md: 'none' }}
      defaultIndex={[0]}
      allowMultiple
    >
      <Stack spacing={4}>
        {skills.map((skill) => {
          return (
            <AccordionItem key={skill.name}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  <chakra.h2 textStyle="h2">{skill.name}</chakra.h2>
                  <chakra.p fontSize="14px" color="gray.500">
                    {skill.years}
                  </chakra.p>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>{skill.detail}</AccordionPanel>
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
    years: '3年',
    detail: (
      <>
        LPやコーポレートサイト、採用サイトなどのHeadless
        CMSを使用したJamstackなサイトから、複雑なUIやロジックを持ったアプリケーションまで対応可能です。Hooksを使用してロジックとビューを適切に分離したり、再利用性の高いコンポーネントを作ったりすることを意識しています。
        <br />
        また、JestやCypressをGitHub
        Actionsで実行してテストを自動化したり、Storybookを使用してコンポーネントをカタログ化してデザイナーやビジネスサイドとのコミュニケーションをスムーズにしたり、Hygenを使用してテンプレートファイルの自動生成をして開発を効率化したりといったフロントエンド周辺のDevOpsの整備も意識しています。
        <Stack spacing={1} mt={4}>
          <chakra.h3 textStyle="h3">使用経験のあるライブラリ</chakra.h3>
          <UnorderedList listStylePos="inside">
            <ListItem>UIライブラリ: Chakra UI / MUI</ListItem>
            <ListItem>
              CSSフレームワーク: Tailwind CSS / Bootstrap / Bulma
            </ListItem>
            <ListItem>
              CSS in JS: styled-components / Emotion / CSS Modules
            </ListItem>
            <ListItem>状態管理: Context API</ListItem>
            <ListItem>データフェッチ: SWR</ListItem>
            <ListItem>フォーム管理: Formik</ListItem>
            <ListItem>バリデーションスキーマ: Yup</ListItem>
            <ListItem>単体テスト: Jest</ListItem>
            <ListItem>結合テスト: Testing Library</ListItem>
            <ListItem>E2E: Cypress</ListItem>
            <ListItem>コンポーネントカタログ: Storybook</ListItem>
            <ListItem>コードジェネレータ: Hygen</ListItem>
          </UnorderedList>
        </Stack>
      </>
    ),
  },
  {
    name: 'TypeScript',
    years: '2年',
    detail:
      '基本的なデータ構造に対する型付けから、それらを組み合わせたり、ジェネリクスを使用したりする必要がある複雑なデータ構造に対する型付けまで対応可能です。きちんと型を当てて保守性を高めるだけではなく、ドキュメントとしての役割も果たせるように命名を意識しています。',
  },
  {
    name: 'Next.js',
    years: '2年',
    detail: (
      <>
        LPやコーポレートサイト、採用サイトなどのHeadless
        CMSを併用したJamstackなサイトから、複雑なUIやロジックを持ったアプリケーションまで対応可能です。Zennにて
        <Link
          href="https://zenn.dev/a_da_chi/articles/181ea4ccc39580"
          isExternal
          color="link"
        >
          Next.js最速セットアップ
          <ExternalLinkIcon pb="3px" mx="2px" />
        </Link>
        や
        <Link
          href="https://zenn.dev/a_da_chi/articles/105dac5573b2f5"
          isExternal
          color="link"
        >
          もう迷わないNext.jsのCSR/SSR/SSG/ISR
          <ExternalLinkIcon pb="3px" mx="2px" />
        </Link>
        などNext.jsに関する技術記事を複数執筆しており、累計で1000以上のLikeを頂いています。
      </>
    ),
  },
  {
    name: 'Ruby on Rails',
    years: '3年',
    detail:
      'モノリシックなアプリケーション開発から、API開発まで対応可能です。Fat Controllerにならないようにするのはもちろん、サービス層やデコレータ層を使用してFat Modelにならないように意識しています。テストにはminitestを使用することが多く、日常的にテストを書いています。',
  },
  {
    name: 'Go',
    years: '1ヶ月',
    detail:
      '社内ツールの改修、および機能追加に伴うコードリーディングと実装の経験があります。',
  },
]
