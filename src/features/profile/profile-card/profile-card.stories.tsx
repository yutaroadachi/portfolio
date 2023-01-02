import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { ProfileCard } from './profile-card'

export default {
  title: 'features/profile/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>

type StoryObj = ComponentStoryObj<typeof ProfileCard>

export const Default: StoryObj = {}
