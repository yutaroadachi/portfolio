import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SecretResume, SecretResumeProps } from './SecretResume'

export default {
  title: 'page/SecretResume',
  component: SecretResume,
} as Meta<SecretResumeProps>

type Template = Story<SecretResumeProps>

const Template: Template = (args) => <SecretResume {...args} />

export const Default: Template = Template.bind({})
