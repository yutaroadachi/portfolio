import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import RootPage from './page'

export default {
  title: 'pages/RootPage',
  component: RootPage,
} as ComponentMeta<typeof RootPage>

type StoryObj = ComponentStoryObj<typeof RootPage>

export const Default: StoryObj = {}
