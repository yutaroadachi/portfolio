import { Box, Center, chakra, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export const Skills = () => (
  <Box py={6}>
    <chakra.h2 textStyle="h2">Skills</chakra.h2>
    <Center>
      <UnorderedList>
        {skills.map((skill) => (
          <ListItem key={skill}>{skill}</ListItem>
        ))}
      </UnorderedList>
    </Center>
  </Box>
)

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Chakra UI',
  'Ruby on Rails',
  'Go',
]
