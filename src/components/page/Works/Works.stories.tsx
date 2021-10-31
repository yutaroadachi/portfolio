import { Meta, Story } from '@storybook/react'
import React from 'react'
import { dummyPosts } from 'src/data/dummy/posts'
import { Works, WorksProps } from './Works'

export default {
  title: 'page/Works',
  component: Works,
  args: {
    posts: dummyPosts,
  },
} as Meta<WorksProps>

type Template = Story<WorksProps>

const Template: Template = (args) => <Works {...args} />

export const Default: Template = Template.bind({})
