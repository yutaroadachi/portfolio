import { Button, ButtonProps } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'
import React from 'react'

export default {
  title: 'UI/Button',
  component: Button,
} as Meta<ButtonProps>

type Template = Story<ButtonProps>

const Template: Template = (args) => <Button {...args}>Default</Button>

export const Default: Template = Template.bind({})
