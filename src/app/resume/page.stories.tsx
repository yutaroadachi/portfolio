import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import ResumePage from './page'

export default {
  title: 'pages/ResumePage',
  component: ResumePage,
} as ComponentMeta<typeof ResumePage>

type StoryObj = ComponentStoryObj<typeof ResumePage>

export const Default: StoryObj = {}
