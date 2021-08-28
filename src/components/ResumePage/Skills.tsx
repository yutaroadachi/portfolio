import { Box, chakra, Tag, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

export type SkillsProps = {}

export const Skills = (props: SkillsProps) => (
  <Box>
    <chakra.h2 textStyle="h2WithTreat">Skills</chakra.h2>
    <Wrap>
      {skills.map(({ label, field }) => (
        <WrapItem key={label}>
          <Tag variant={field === 'frontend' ? 'primary' : 'outlined'}>
            {label}
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  </Box>
)

type Skill = {
  label: string
  field: 'frontend' | 'backend'
}

const skills: Skill[] = [
  { label: 'React', field: 'frontend' },
  { label: 'TypeScript', field: 'frontend' },
  { label: 'Next.js', field: 'frontend' },
  { label: 'Chakra UI', field: 'frontend' },
  { label: 'Context', field: 'frontend' },
  { label: 'SWR', field: 'frontend' },
  { label: 'Formik', field: 'frontend' },
  { label: 'Yup', field: 'frontend' },
  { label: 'Jest', field: 'frontend' },
  { label: 'Testing Library', field: 'frontend' },
  { label: 'Cypress', field: 'frontend' },
  { label: 'Storybook', field: 'frontend' },
  { label: 'Hygen', field: 'frontend' },
  { label: 'Ruby on Rails', field: 'backend' },
  { label: 'Go', field: 'backend' },
]
