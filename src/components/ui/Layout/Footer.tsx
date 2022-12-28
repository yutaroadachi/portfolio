import { clsx } from 'clsx'
import NextLink from 'next/link'
import { ComponentPropsWithoutRef } from 'react'
import { LINKS } from 'src/constants/links'
import { PATH } from 'src/constants/path'

export type FooterProps = ComponentPropsWithoutRef<'footer'>

export const Footer = (props: FooterProps) => {
  const { className, ...rest } = props

  return (
    <footer
      className={clsx(
        'flex flex-col justify-center items-center space-y-8 bg-c-primary text-white py-8',
        className
      )}
      {...rest}
    >
      <NextLink href={PATH.top} className="logo">
        adachi
      </NextLink>
      <div className="space-x-4 font-bold">
        {LINKS.map((link) => {
          return link.isExternal ? (
            <a
              key={link.key}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.title}
            </a>
          ) : (
            <NextLink key={link.key} href={link.href}>
              {link.title}
            </NextLink>
          )
        })}
      </div>
      <p>Copyright© adachi All Rights Reserved.</p>
    </footer>
  )
}
