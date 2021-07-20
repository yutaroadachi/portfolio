import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Header } from './Header'

export default {
  title: 'Common/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<{}>

type Template = Story<{}>

const Template: Template = (args) => <Header {...args} />

export const Default: Template = Template.bind({})
