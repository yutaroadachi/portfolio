import { Meta, Story } from '@storybook/react'
import { Resume } from './Resume'

export default {
  title: 'page/Resume',
  component: Resume,
} as Meta

type Template = Story

const Template: Template = (args) => <Resume {...args} />

export const Default: Template = Template.bind({})
