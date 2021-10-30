import {
  createClient,
  GetListDetailRequest,
  GetListRequest,
} from 'microcms-js-sdk'
import { Blog } from 'src/types/blog'

export const getBlogList = async (queries?: GetListRequest['queries']) => {
  const data = await client.getList<Blog>({
    endpoint: BLOG_ENDPOINT,
    queries: queries,
  })
  return data.contents
}

export const getBlogDetail = async (
  contentId: GetListDetailRequest['contentId'],
  queries?: GetListDetailRequest['queries']
) => {
  const data = await client.getListDetail<Blog>({
    endpoint: BLOG_ENDPOINT,
    contentId: contentId,
    queries: queries,
  })
  return data
}

const client = createClient({
  serviceDomain: 'adachi',
  apiKey: process.env.MICROCMS_API_KEY!,
})

const BLOG_ENDPOINT = 'blog'
