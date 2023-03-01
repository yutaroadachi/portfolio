import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { LayoutContent } from './LayoutContent'

export default {
  title: 'layouts/RootLayout',
  component: LayoutContent,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof LayoutContent>

type StoryObj = ComponentStoryObj<typeof LayoutContent>

export const Default: StoryObj = {}
