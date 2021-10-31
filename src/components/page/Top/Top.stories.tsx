import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Top, TopProps } from './Top'

export default {
  title: 'page/Top',
  component: Top,
} as Meta<TopProps>

type Template = Story<TopProps>

const Template: Template = (args) => <Top {...args} />

export const Default: Template = Template.bind({})
