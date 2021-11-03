import { GetServerSideProps } from 'next'
import React from 'react'
import {
  BlogDetailPage,
  BlogDetailPageProps,
} from 'src/components/page/BlogDetail'
import { getPersonalBlogDetail } from 'src/lib/microCMS/client'

export default function _BlogDetailPage({ blog }: BlogDetailPageProps) {
  return <BlogDetailPage blog={blog} />
}

/** ブログ詳細ページはmicroCMSのデータ転送料節約のため、データまでプリフェッチしなくて良いのでgetServerSidePropsを使う */
export const getServerSideProps: GetServerSideProps<BlogDetailPageProps> =
  async ({ params, res }) => {
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
