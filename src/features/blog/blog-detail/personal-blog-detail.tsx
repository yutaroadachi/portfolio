import { PATH } from '@/constants/path'
import { ProfileCard } from '@/features/profile/profile-card'
import { formatYYYYMMDD } from '@/utils/format/date-format'
import NextLink from 'next/link'
import { BiChevronRight } from 'react-icons/bi'
import { getPersonalBlogDetail } from './get-personal-blog-detail'

export type PersonalBlogDetailProps = {
  personalBlogDetail: Awaited<ReturnType<typeof getPersonalBlogDetail>>
}

export const PersonalBlogDetail = ({
  personalBlogDetail,
}: PersonalBlogDetailProps) => {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <nav aria-label="breadcrumb" className="text-sm text-c-link">
          <ol className="flex items-center space-x-1">
            <li>
              <NextLink href={PATH.blog}>ブログ一覧</NextLink>
            </li>
            <BiChevronRight className="text-gray-500" />
            <li>
              <NextLink href={`/blog/${personalBlogDetail.id}`}>
                ブログ詳細
              </NextLink>
            </li>
          </ol>
        </nav>
        <h1 id="blog-detail">{personalBlogDetail.title}</h1>
        <div className="text-sm text-gray-500">
          {`${formatYYYYMMDD(
            new Date(
              personalBlogDetail.publishedAt ?? personalBlogDetail.createdAt
            )
          )}に投稿`}
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${personalBlogDetail.body}`,
        }}
        className="blog-detail card p-8"
      />
      <div className="center">
        <NextLink href={PATH.blog} className="text-c-link">
          ブログ一覧へ
        </NextLink>
      </div>
      <ProfileCard />
    </div>
  )
}
