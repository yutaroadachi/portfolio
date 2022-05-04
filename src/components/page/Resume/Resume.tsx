import { Box, chakra, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { Biography } from 'src/components/domain/Biography'
import { JobHistory } from './JobHistory'

export type ResumeProps = {}

export const Resume = ({}: ResumeProps) => {
  return (
    <Box>
      <chakra.h1 id="resume" textStyle="h1" color="main" mb={8}>
        履歴書
      </chakra.h1>
      <Stack spacing={8}>
        <JobHistory />
        <AcademicHistory />
        <Biography />
      </Stack>
    </Box>
  )
}

const AcademicHistory = () => {
  return (
    <Box w="full">
      <chakra.h2
        id="academic-history"
        textStyle="h2WithTreat"
        color="main"
        mb={8}
      >
        最終学歴
      </chakra.h2>
      <VStack spacing={1}>
        <chakra.h3 textStyle="h3">国立大学 経済学部</chakra.h3>
        <chakra.div fontSize="14px" color="gray.500">
          2014/4 ~ 2018/3
        </chakra.div>
        <chakra.div>
          経営学を専攻するゼミに所属し、卒業研究では任天堂のWiiが成功した理由をブルー・オーシャン戦略の観点から考察しました。
        </chakra.div>
      </VStack>
    </Box>
  )
}
