import { MicroCMSListContent } from 'microcms-js-sdk'

export type BlogList = BlogDetail[]

export type BlogDetail = Blog & MicroCMSListContent

export type Blog = {
  title: string
  body: string
  description?: string
}
