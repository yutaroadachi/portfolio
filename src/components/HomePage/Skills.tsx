import { chakra, ListItem, UnorderedList, VStack } from '@chakra-ui/react'
import React from 'react'

export const Skills = () => (
  <VStack spacing={4} py={4}>
    <chakra.h2 textStyle="heading" fontSize="2xl">
      Skills
    </chakra.h2>
    <UnorderedList>
      {skills.map((skill) => (
        <ListItem key={skill}>{skill}</ListItem>
      ))}
    </UnorderedList>
  </VStack>
)

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Chakra UI',
  'Ruby on Rails',
  'Go',
]
