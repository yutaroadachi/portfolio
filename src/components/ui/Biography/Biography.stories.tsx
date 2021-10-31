import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Biography, BiographyProps } from './Biography'

export default {
  title: 'ui/Biography',
  component: Biography,
} as Meta<BiographyProps>

type Template = Story<BiographyProps>

const Template: Template = (args) => <Biography {...args} />

export const Default: Template = Template.bind({})
