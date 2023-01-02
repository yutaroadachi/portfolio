import { client } from '@/libs/microcms/client'
import { GetListDetailRequest } from 'microcms-js-sdk'
import { PersonalBlog } from '../types'

export const getPersonalBlogDetail = async (
  contentId: GetListDetailRequest['contentId'],
  queries?: GetListDetailRequest['queries']
) =>
  await client.getListDetail<PersonalBlog>({
    endpoint: 'blog',
    contentId,
    queries,
  })
