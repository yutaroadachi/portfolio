import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Resume, ResumeProps } from './Resume'

export default {
  title: 'page/Resume',
  component: Resume,
} as Meta<ResumeProps>

type Template = Story<ResumeProps>

const Template: Template = (args) => <Resume {...args} />

export const Default: Template = Template.bind({})
