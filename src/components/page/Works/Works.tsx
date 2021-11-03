import { Box, chakra, VStack } from '@chakra-ui/react'
import React from 'react'
import { Biography } from 'src/components/domain/Biography'

export type WorksProps = {}

export const Works = ({}: WorksProps) => {
  return (
    <Box>
      <chakra.h1 id="works" textStyle="h1" color="main" mb={8}>
        成果物
      </chakra.h1>
      <VStack spacing={8}>
        <chakra.p>TODO</chakra.p>
        <Biography />
      </VStack>
    </Box>
  )
}
