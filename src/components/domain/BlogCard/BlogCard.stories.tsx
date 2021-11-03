import { Meta, Story } from '@storybook/react'
import React from 'react'
import { BlogCard, BlogCardProps } from './BlogCard'

export default {
  title: 'domain/BlogCard',
  component: BlogCard,
  args: {
    title: 'テストブログ',
    href: 'http://example.com',
    publishDate: new Date('2021-10-31T00:00:00.0000'),
    w: { base: '163.5px', md: '172px', lg: '244px' },
  },
} as Meta<BlogCardProps>

type Template = Story<BlogCardProps>

const Template: Template = (args) => <BlogCard {...args} />

export const Tech: Template = Template.bind({})
Tech.args = {
  kind: 'tech',
}

export const Personal: Template = Template.bind({})
Personal.args = {
  kind: 'personal',
}
