import { Meta, Story } from '@storybook/react'
import React from 'react'
import { RecentPosts } from './RecentPosts'
import { RssFeedItem } from '../../types/rss'

const posts = Array(2)
  .fill(0)
  .map((_, idx) => ({
    content: `テスト${idx}`,
    contentSnippet: `テスト${idx}`,
    creator: `テスト${idx}`,
    'dc:creator': `テスト${idx}`,
    enclosure: {
      url: `テスト${idx}`,
      length: `テスト${idx}`,
      type: `テスト${idx}`,
    },
    guid: `テスト${idx}`,
    isoDate: `テスト${idx}`,
    link: `テスト${idx}`,
    pubDate: `テスト${idx}`,
    title: `テスト${idx}`,
  }))

export default {
  title: 'HomePage/RecentPosts',
  component: RecentPosts,
  args: {
    posts: posts,
  },
} as Meta<{ posts: RssFeedItem[] }>

type Template = Story<{ posts: RssFeedItem[] }>

const Template: Template = (args) => <RecentPosts {...args} />

export const Default: Template = Template.bind({})
