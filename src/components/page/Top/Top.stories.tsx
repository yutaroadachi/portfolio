import { Meta, Story } from '@storybook/react'
import { Top } from './Top'

export default {
  title: 'page/Top',
  component: Top,
} as Meta

type Template = Story

const Template: Template = (args) => <Top {...args} />

export const Default: Template = Template.bind({})
