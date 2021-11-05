import { Meta, Story } from '@storybook/react'
import React from 'react'
import { dummyPersonalBlogList, dummyTechBlogList } from 'src/data/dummy/blog'
import { BlogList, BlogListProps } from './BlogList'

export default {
  title: 'page/BlogList',
  component: BlogList,
  args: {
    techBlog: dummyTechBlogList,
    personalBlog: dummyPersonalBlogList,
  },
} as Meta<BlogListProps>

type Template = Story<BlogListProps>

const Template: Template = (args) => <BlogList {...args} />

export const Default: Template = Template.bind({})
