import { GetStaticProps } from 'next'
import React from 'react'
import { BlogList, BlogListProps } from 'src/components/page/BlogList'
import { createGetLayout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'
import { getPersonalBlogList } from 'src/lib/microCMS/client'
import { getZennFeed } from 'src/lib/rss/client'

export const getStaticProps: GetStaticProps<BlogListProps> = async () => {
  const [techBlog, personalBlog] = await Promise.all([
    getZennFeed(),
    getPersonalBlogList(),
  ])

  return {
    props: {
      techBlog: techBlog,
      personalBlog: personalBlog,
    },
    revalidate: 5 * 60,
  }
}

export default function BlogListPage({
  techBlog,
  personalBlog,
}: BlogListProps) {
  return (
    <>
      <MetaTag
        title="ブログ"
        description="Yutaro Adachi(ソフトウェアエンジニア)のブログです。"
      />
      <BlogList techBlog={techBlog} personalBlog={personalBlog} />
    </>
  )
}

BlogListPage.getLayout = createGetLayout()
