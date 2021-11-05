import { Meta, Story } from '@storybook/react'
import React from 'react'
import { dummyPersonalBlogDetail } from 'src/data/dummy/blog'
import { BlogDetail, BlogDetailProps } from './BlogDetail'

export default {
  title: 'page/BlogDetail',
  component: BlogDetail,
  args: {
    blog: dummyPersonalBlogDetail,
  },
} as Meta<BlogDetailProps>

type Template = Story<BlogDetailProps>

const Template: Template = (args) => <BlogDetail {...args} />

export const Default: Template = Template.bind({})
