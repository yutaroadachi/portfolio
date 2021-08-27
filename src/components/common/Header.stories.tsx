import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Header, HeaderProps } from './Header'

export default {
  title: 'Common/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<HeaderProps>

type Template = Story<HeaderProps>

const Template: Template = (args) => <Header {...args} />

export const Default: Template = Template.bind({})
