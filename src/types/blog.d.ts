import { MicroCMSListContent } from 'microcms-js-sdk'
import { RssFeedItem } from './rss'

export type TechBlogList = RssFeedItem[]

export type PersonalBlogList = PersonalBlogDetail[]

export type PersonalBlogDetail = PersonalBlog & MicroCMSListContent

export type PersonalBlog = {
  title: string
  body: string
  description?: string
}
