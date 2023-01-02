import { client } from '@/libs/microcms/client'
import { GetListRequest } from 'microcms-js-sdk'
import { PersonalBlog } from '../types'

export const getPersonalBlogList = async (
  queries?: GetListRequest['queries']
) => {
  const data = await client.getList<PersonalBlog>({
    endpoint: 'blog',
    queries,
  })

  return data.contents
}
