import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { PersonalBlogList } from './personal-blog-list'

export default {
  title: 'features/blog/PersonalBlogList',
  component: PersonalBlogList,
} as ComponentMeta<typeof PersonalBlogList>

type StoryObj = ComponentStoryObj<typeof PersonalBlogList>

export const Default: StoryObj = {
  args: {
    personalBlogList: Array(13)
      .fill(0)
      .map((_, idx) => ({
        id: (idx + 1).toString(),
        createdAt: '2023-01-01T00:00:00.0000',
        updatedAt: '2023-01-01T00:00:00.0000',
        publishedAt: '2023-01-01T00:00:00.0000',
        revisedAt: '2023-01-01T00:00:00.0000',
        title: `個人ブログ${idx + 1}`.repeat(idx + 1),
        body: `<p>個人ブログ${idx + 1}です。</p>`,
      })),
  },
}
