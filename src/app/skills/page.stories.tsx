import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import SkillsPage from './page'

export default {
  title: 'pages/SkillsPage',
  component: SkillsPage,
} as ComponentMeta<typeof SkillsPage>

type StoryObj = ComponentStoryObj<typeof SkillsPage>

export const Default: StoryObj = {}
