import { Meta, Story } from '@storybook/react'
import React from 'react'
import { dummyPosts } from 'src/data/dummy/posts'
import { RecentPosts, RecentPostsProps } from './RecentPosts'

export default {
  title: 'HomePage/RecentPosts',
  component: RecentPosts,
  args: {
    posts: dummyPosts,
  },
} as Meta<RecentPostsProps>

type Template = Story<RecentPostsProps>

const Template: Template = (args) => <RecentPosts {...args} />

export const Default: Template = Template.bind({})
