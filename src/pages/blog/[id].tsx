import { GetServerSideProps } from 'next'
import React from 'react'
import { BlogDetail, BlogDetailProps } from 'src/components/page/BlogDetail'
import { createGetLayout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'
import { getPersonalBlogDetail } from 'src/lib/microCMS/client'

/** ブログ詳細ページはmicroCMSのデータ転送料節約のため、データまでプリフェッチしなくて良いのでgetServerSidePropsを使う */
export const getServerSideProps: GetServerSideProps<BlogDetailProps> = async ({
  params,
  res,
}) => {
  const contentId = params?.id?.toString()

  if (!contentId) {
    return {
      notFound: true,
    }
  }

  const blog = await getPersonalBlogDetail(contentId)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=300, stale-while-revalidate=86400'
  )

  return {
    props: {
      blog: blog,
    },
  }
}

export default function BlogDetailPage({ blog }: BlogDetailProps) {
  return (
    <>
      <MetaTag
        title={blog.title}
        description={blog.description ?? blog.title}
      />
      <BlogDetail blog={blog} />
    </>
  )
}

BlogDetailPage.getLayout = createGetLayout()
