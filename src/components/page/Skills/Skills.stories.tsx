import { Meta, Story } from '@storybook/react'
import { Skills } from './Skills'

export default {
  title: 'page/Skills',
  component: Skills,
} as Meta

type Template = Story

const Template: Template = (args) => <Skills {...args} />

export const Default: Template = Template.bind({})
