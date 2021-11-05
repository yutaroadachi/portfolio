import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Logo, LogoProps } from './Logo'

export default {
  title: 'ui/Logo',
  component: Logo,
} as Meta<LogoProps>

type Template = Story<LogoProps>

const Template: Template = (args) => <Logo {...args} />

export const Default: Template = Template.bind({})
