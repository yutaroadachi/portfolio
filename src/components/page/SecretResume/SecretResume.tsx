import { Box, chakra, Stack } from '@chakra-ui/react'
import React from 'react'

export type SecretResumeProps = {}

export const SecretResume = ({}: SecretResumeProps) => {
  return (
    <Box>
      <chakra.h1 id="secret-resume" textStyle="h1" color="main" mb={8}>
        職務経歴書
      </chakra.h1>
      <Stack spacing={8}>
        <Box>準備中</Box>
      </Stack>
    </Box>
  )
}
