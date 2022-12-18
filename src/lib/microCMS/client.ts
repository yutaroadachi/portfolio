import {
  createClient,
  GetListDetailRequest,
  GetListRequest,
} from 'microcms-js-sdk'
import { PersonalBlog } from 'src/types/blog'

export const getPersonalBlogList = async (
  queries?: GetListRequest['queries']
) => {
  const data = await client.getList<PersonalBlog>({
    endpoint: BLOG_ENDPOINT,
    queries: queries,
  })
  return data.contents
}

export const getPersonalBlogDetail = async (
  contentId: GetListDetailRequest['contentId'],
  queries?: GetListDetailRequest['queries']
) => {
  const data = await client.getListDetail<PersonalBlog>({
    endpoint: BLOG_ENDPOINT,
    contentId: contentId,
    queries: queries,
  })
  return data
}

const getApiKey = (): string => {
  if (process.env.MICROCMS_API_KEY === undefined) {
    throw new Error('MICROCMS_API_KEY is not set')
  }

  return process.env.MICROCMS_API_KEY
}

const client = createClient({
  serviceDomain: 'adachi',
  apiKey: getApiKey(),
})

const BLOG_ENDPOINT = 'blog'
