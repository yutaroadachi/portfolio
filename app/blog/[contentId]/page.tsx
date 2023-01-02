import {
  getPersonalBlogDetail,
  PersonalBlogDetail,
} from '@/features/blog/blog-detail'
import { notFound } from 'next/navigation'

export const dynamicParams = true

export const generateStaticParams = () => {
  return []
}

export const revalidate = 300

export default async function BlogDetailPage({
  params,
}: {
  params: { contentId: string }
}) {
  try {
    const personalBlogDetail = await getPersonalBlogDetail(params.contentId)

    return <PersonalBlogDetail personalBlogDetail={personalBlogDetail} />
  } catch (error) {
    notFound()
  }
}
