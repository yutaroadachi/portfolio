import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Layout } from './Layout'

export default {
  title: 'ui/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>

type StoryObj = ComponentStoryObj<typeof Layout>

export const Default: StoryObj = {}
