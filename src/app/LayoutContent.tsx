import { LINKS, LinksHref } from '@/constants/links'
import { PATH } from '@/constants/path'
import NextLink from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'

export const LayoutContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="stack min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="max-w-full lg:max-w-screen-md xl:max-w-screen-lg px-4 lg:px-0 py-8 mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

const Header = () => {
  return (
    <header className="bg-c-primary text-white">
      <div className="flex justify-between items-center max-w-full lg:max-w-screen-md xl:max-w-screen-lg h-[64px] mx-4 lg:mx-auto">
        <Logo />
        <nav className="flex md:hidden space-x-4">
          {LINKS.map((link) => {
            return (
              <Link
                key={link.key}
                isExternal={link.isExternal}
                href={link.href}
                label={link.title}
              >
                <link.icon size={24} />
              </Link>
            )
          })}
        </nav>
        <nav className="hidden md:flex space-x-4 font-bold">
          {LINKS.map((link) => {
            return (
              <Link
                key={link.key}
                isExternal={link.isExternal}
                href={link.href}
              >
                {link.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className="v-stack space-y-8 bg-c-primary text-white py-8">
      <Logo />
      <nav className="space-x-4 font-bold">
        {LINKS.map((link) => {
          return (
            <Link key={link.key} isExternal={link.isExternal} href={link.href}>
              {link.title}
            </Link>
          )
        })}
      </nav>
      <div className="text-sm">
        Copyright© Yutaro Adachi All Rights Reserved.
      </div>
    </footer>
  )
}

const Logo = () => {
  return (
    <NextLink href={PATH.top} className="logo">
      y
    </NextLink>
  )
}

const Link = ({
  isExternal,
  href,
  label,
  children,
}: PropsWithChildren<{
  isExternal: boolean
  href: string
  label?: string
}>) => {
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  ) : (
    <NextLink href={href as LinksHref} aria-label={label}>
      {children}
    </NextLink>
  )
}
