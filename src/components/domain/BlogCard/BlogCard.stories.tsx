import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { BlogCard } from './BlogCard'

export default {
  title: 'domain/BlogCard',
  component: BlogCard,
} as ComponentMeta<typeof BlogCard>

type StoryObj = ComponentStoryObj<typeof BlogCard>

export const Tech: StoryObj = {
  args: {
    kind: 'tech',
    href: 'http://example.com',
    title: 'テストブログ',
    publishDate: new Date('2021-10-31T00:00:00.0000'),
    className: 'w-[244px]',
  },
}

export const Personal: StoryObj = {
  ...Tech,
  args: {
    ...Tech.args,
    kind: 'personal',
  },
}
