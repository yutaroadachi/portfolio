import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, chakra, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import { Biography } from 'src/components/domain/Biography'
import { URL } from 'src/constants/url'
import { JobHistory } from './JobHistory'

export type ResumeProps = {}

export const Resume = ({}: ResumeProps) => {
  return (
    <Box>
      <chakra.h1 id="resume" textStyle="h1" color="main" mb={8}>
        履歴書
      </chakra.h1>
      <VStack spacing={8}>
        <JobHistory />
        <AcademicHistory />
        <Biography />
      </VStack>
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
      <Box textAlign="center">
        <chakra.h3 textStyle="h3">岡山大学 経済学部</chakra.h3>
        <chakra.p fontSize="14px" color="gray.500">
          2014/4 ~ 2018/3
        </chakra.p>
        <Link href={URL.okayamaU} isExternal fontSize="12px" color="link">
          大学のHPを見る
          <ExternalLinkIcon pb="2px" ml="2px" />
        </Link>
      </Box>
    </Box>
  )
}
