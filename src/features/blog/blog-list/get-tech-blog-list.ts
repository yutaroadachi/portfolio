import { client } from '@/libs/rss/client'

export const getTechBlogList = async () => {
  const data = await client.getList({
    feedUrl: 'https://zenn.dev/a_da_chi/feed',
  })

  return data.items
}
