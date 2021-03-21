import { ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import React from 'react'

export const Skills = () => (
  <VStack spacing={4} p={4}>
    <Text as="h2" textStyle="heading" fontSize="2xl">
      Skills
    </Text>
    <UnorderedList>
      {skills.map((skill) => (
        <ListItem key={skill}>{skill}</ListItem>
      ))}
    </UnorderedList>
  </VStack>
)

const skills = ['Next.js', 'TypeScript', 'Chakra UI', 'Ruby on Rails', 'Go']
