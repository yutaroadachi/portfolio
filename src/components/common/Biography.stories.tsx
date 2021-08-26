import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Biography } from './Biography'

export default {
  title: 'Common/Biography',
  component: Biography,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<{}>

type Template = Story<{}>

const Template: Template = (args) => <Biography {...args} />

export const Default: Template = Template.bind({})
