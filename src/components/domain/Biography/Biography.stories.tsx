import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Biography } from './Biography'

export default {
  title: 'domain/Biography',
  component: Biography,
} as ComponentMeta<typeof Biography>

type StoryObj = ComponentStoryObj<typeof Biography>

export const Default: StoryObj = {}
