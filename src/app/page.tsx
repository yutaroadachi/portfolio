import { LINKS, LinksHref } from '@/constants/links'
import { ProfileCard } from '@/features/profile/profile-card'
import { generateOpenGraph, generateTitle } from '@/utils/meta/generator'
import NextImage from 'next/image'
import NextLink from 'next/link'
import { PropsWithChildren } from 'react'
import { BiChevronDown } from 'react-icons/bi'

const title = 'トップ'
const description = 'Yutaro Adachi(Frontend Engineer)のポートフォリオです。'
export const metadata = {
  title: generateTitle(title),
  description,
  openGraph: generateOpenGraph(title, description),
}

export default function RootPage() {
  return (
    <div className="stack space-y-8">
      <Hero />
      <AboutMe />
      <Links />
    </div>
  )
}

const Hero = () => {
  return (
    <section
      // ヘッダーとコンテナのパディングの高さを除いた高さを設定する
      // スマホの場合はアドレスバーの高さも除いた高さを設定する
      className="v-stack center space-y-4 min-h-[calc(100vh_-_160px)] lg:min-h-[calc(100vh_-_96px)]"
    >
      <h1 id="hero" className="text-center">
        Yutaro Adachi&apos;s
        <br />
        Portfolio
      </h1>
      <NextImage
        src="/assets/top-page/hero.png"
        width={626}
        height={667}
        alt=""
        priority
        className="max-w-[313px] h-auto"
      />
      <div className="v-stack">
        <BiChevronDown size={48} />
        <p className="text-3xl font-bold">Scroll</p>
      </div>
    </section>
  )
}

const AboutMe = () => {
  return (
    <section className="v-stack space-y-5">
      <h2 id="about-me" className="with-treat">
        私について
      </h2>
      <ProfileCard />
    </section>
  )
}

const Links = () => {
  return (
    <section className="v-stack space-y-5">
      <h2 id="links" className="with-treat">
        リンク
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {LINKS.map((link) => {
          return (
            <div key={link.key} className="card p-4" data-testid={link.key}>
              <Link isExternal={link.isExternal} href={link.href}>
                <div className="v-stack space-y-1">
                  <link.icon size={48} />
                  <h3>{link.title}</h3>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

const Link = ({
  isExternal,
  href,
  children,
}: PropsWithChildren<{
  isExternal: boolean
  href: string
}>) => {
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <NextLink href={href as LinksHref}>{children}</NextLink>
  )
}
