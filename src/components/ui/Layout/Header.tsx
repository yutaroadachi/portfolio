import { clsx } from 'clsx'
import NextLink from 'next/link'
import { ComponentPropsWithoutRef } from 'react'
import { LINKS } from 'src/constants/links'
import { PATH } from 'src/constants/path'

export type HeaderProps = ComponentPropsWithoutRef<'header'>

export const Header = (props: HeaderProps) => {
  const { className, ...rest } = props

  return (
    <header className={clsx('bg-c-primary text-white', className)} {...rest}>
      <div className="flex justify-between items-center max-w-full lg:max-w-screen-md xl:max-w-screen-lg h-[64px] mx-4 lg:mx-auto">
        <NextLink href={PATH.top} className="logo">
          adachi
        </NextLink>
        <ForPC />
        <ForSP />
      </div>
    </header>
  )
}

const ForPC = () => {
  return (
    <nav className="hidden md:flex space-x-4 font-bold">
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
    </nav>
  )
}

const ForSP = () => {
  return (
    <nav className="flex md:hidden space-x-4">
      {LINKS.map((link) => {
        return link.isExternal ? (
          <a
            key={link.key}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.title}
          >
            <link.icon size={24} />
          </a>
        ) : (
          <NextLink key={link.key} href={link.href} aria-label={link.title}>
            <link.icon size={24} />
          </NextLink>
        )
      })}
    </nav>
  )
}
