import { VStack } from '@chakra-ui/react'
import React from 'react'
import { Biography } from 'src/components/domain/Biography'
import { Navigation } from 'src/components/ui/Navigation'
import { Histories } from './Histories'
import { Skills } from './Skills'

export type ResumeProps = {}

export const Resume = ({}: ResumeProps) => {
  return (
    <VStack spacing={8}>
      <Biography />
      <Navigation active="resume" />
      <Skills />
      <Histories />
    </VStack>
  )
}
