import { Button, ButtonProps } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'Theme/Components/Button',
  component: Button,
  args: {
    size: 'md',
  },
} as Meta<ButtonProps>

type Template = Story<ButtonProps>

const Template: Template = (args) => <Button {...args} />

export const Primary: Template = Template.bind({})
Primary.args = {
  children: 'Primary',
  variant: 'primary',
}

export const Outlined: Template = Template.bind({})
Outlined.args = {
  children: 'Outlined',
  variant: 'outlined',
}
