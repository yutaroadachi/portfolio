import { formatYYYYMMDD } from '@/utils/format/date-format'
import { truncate } from '@/utils/format/string-format'
import NextLink from 'next/link'
import { PropsWithChildren } from 'react'
import { MdOutlineArticle } from 'react-icons/md'
import { SiZenn } from 'react-icons/si'

export type BlogCardProps = {
  kind: 'tech' | 'personal'
  href: string
  title: string
  publishDate: Date
}

export const BlogCard = ({ kind, href, title, publishDate }: BlogCardProps) => {
  return (
    <article className="card p-4">
      <Link kind={kind} href={href}>
        <div className="center">
          {kind === 'tech' ? (
            <SiZenn size={24} />
          ) : (
            <MdOutlineArticle size={24} />
          )}
        </div>
        <h3 className="h-[100px] overflow-hidden text-sm my-4">
          {truncate(title, 50)}
        </h3>
        <div className="text-xs text-gray-500">
          {`${formatYYYYMMDD(publishDate)}に投稿`}
        </div>
      </Link>
    </article>
  )
}

const Link = ({
  kind,
  href,
  children,
}: PropsWithChildren<Pick<BlogCardProps, 'kind' | 'href'>>) => {
  return kind === 'tech' ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <NextLink href={href as `/blog/${string}`}>{children}</NextLink>
  )
}
