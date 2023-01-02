import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { TechBlogList } from './tech-blog-list'

export default {
  title: 'features/blog/TechBlogList',
  component: TechBlogList,
} as ComponentMeta<typeof TechBlogList>

type StoryObj = ComponentStoryObj<typeof TechBlogList>

export const Default: StoryObj = {
  args: {
    techBlogList: Array(13)
      .fill(0)
      .map((_, idx) => ({
        link: 'http://example.com',
        title: `技術ブログ${idx + 1}`.repeat(idx + 1),
        pubDate: 'Sun, 01 Jan 2023 00:00:00 GMT',
      })),
  },
}
