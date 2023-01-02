import { DefaultTags } from '@/components/DefaultTags'
import { getPersonalBlogDetail } from '@/features/blog/blog-detail'

export default async function BlogDetailHead({
  params,
}: {
  params: { contentId: string }
}) {
  try {
    const personalBlogDetail = await getPersonalBlogDetail(params.contentId)

    return (
      <DefaultTags
        title={personalBlogDetail.title}
        description={personalBlogDetail.description ?? personalBlogDetail.title}
        ogImageTitle={personalBlogDetail.title}
      />
    )
  } catch (error) {
    return (
      <DefaultTags
        title="404 Not Found"
        description="ページが見つかりませんでした。"
      />
    )
  }
}
