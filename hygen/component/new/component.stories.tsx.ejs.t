---
to: src/components/<%= kind %>/<%= name %>/<%= name %>.stories.tsx
---
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { <%= name %> } from './<%= name %>'

export default {
  title: '<%= kind %>/<%= name %>',
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>

type StoryObj = ComponentStoryObj<typeof <%= name %>>

export const Default: StoryObj = {}
