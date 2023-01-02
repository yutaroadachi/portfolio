import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { PersonalBlogDetail } from './personal-blog-detail'

export default {
  title: 'features/blog/PersonalBlogDetail',
  component: PersonalBlogDetail,
} as ComponentMeta<typeof PersonalBlogDetail>

type StoryObj = ComponentStoryObj<typeof PersonalBlogDetail>

export const Default: StoryObj = {
  args: {
    personalBlogDetail: {
      id: 'example',
      createdAt: '2023-01-01T00:00:00.0000',
      updatedAt: '2023-01-01T00:00:00.0000',
      publishedAt: '2023-01-01T00:00:00.0000',
      revisedAt: '2023-01-01T00:00:00.0000',
      title: '個人ブログ',
      body: '<p>個人ブログです。</p>',
    },
  },
}
