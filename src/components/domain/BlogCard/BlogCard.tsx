import { clsx } from 'clsx'
import NextLink from 'next/link'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import { MdOutlineArticle } from 'react-icons/md'
import { SiZenn } from 'react-icons/si'
import { formatYYYYMMDD } from 'src/lib/format/date-format'
import { truncate } from 'src/lib/format/string-format'

export type BlogCardProps = {
  kind: 'tech' | 'personal'
  href: string
  title: string
  publishDate: Date
} & ComponentPropsWithoutRef<'article'>

export const BlogCard = ({
  kind,
  href,
  title,
  publishDate,
  ...props
}: BlogCardProps) => {
  const { className, ...rest } = props

  return (
    <article className={clsx('card p-4', className)} {...rest}>
      <Link kind={kind} href={href}>
        <div className="flex justify-center">
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
    <NextLink href={href}>{children}</NextLink>
  )
}
