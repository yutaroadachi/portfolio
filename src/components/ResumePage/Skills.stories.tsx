import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Skills, SkillsProps } from './Skills'

export default {
  title: 'ResumePage/Skills',
  component: Skills,
} as Meta<SkillsProps>

type Template = Story<SkillsProps>

const Template: Template = (args) => <Skills {...args} />

export const Default: Template = Template.bind({})
