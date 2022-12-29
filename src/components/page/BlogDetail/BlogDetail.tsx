import NextLink from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { Biography } from 'src/components/domain/Biography'
import { PATH } from 'src/constants/path'
import { formatYYYYMMDD } from 'src/lib/format/date-format'
import { PersonalBlogDetail } from 'src/types/blog'

export type BlogDetailProps = {
  blog: PersonalBlogDetail
}

export const BlogDetail = ({ blog }: BlogDetailProps) => {
  return (
    <div className="space-y-8">
      <div>
        <nav aria-label="breadcrumb" className="text-sm text-c-link">
          <ol className="flex items-center space-x-1">
            <li>
              <NextLink href={PATH.blog}>ブログ一覧</NextLink>
            </li>
            <BiChevronRight className="text-gray-500" />
            <li>
              <NextLink href={`/blog/${blog.id}`}>ブログ詳細</NextLink>
            </li>
          </ol>
        </nav>
        <h1 id="blog-detail">{blog.title}</h1>
        <div className="text-sm text-gray-500">
          {`${formatYYYYMMDD(
            new Date(blog.publishedAt ?? blog.createdAt)
          )}に投稿`}
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className="blog-detail card p-8"
      />
      <div className="center">
        <NextLink href={PATH.blog} className="text-c-link">
          ブログ一覧へ
        </NextLink>
      </div>
      <Biography />
    </div>
  )
}
