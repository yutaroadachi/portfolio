import NextImage from 'next/image'
import NextLink from 'next/link'
import { PropsWithChildren } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { Biography } from 'src/components/domain/Biography'
import { LINKS } from 'src/constants/links'

export const Top = () => {
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
      // SPの場合はヘッダーとアドレスバーの高さを除いた高さ、PCの場合はヘッダーの高さを除いた高さ
      className="v-stack space-y-4 min-h-[calc(100vh_-_128px)] lg:min-h-[calc(100vh_-_64px)]"
    >
      <h1 id="hero" className="text-center">
        adachi&apos;s
        <br />
        portfolio site
      </h1>
      <NextImage
        src="/assets/top-page/hero.png"
        width={938}
        height={1000}
        alt=""
        priority
        className="max-w-[313px] h-auto"
      />
      <div className="v-stack">
        <BiChevronDown size={48} />
        <p className="text-2xl font-bold">Scroll</p>
      </div>
    </section>
  )
}

const AboutMe = () => {
  return (
    <section className="v-stack space-y-5">
      <h2 id="about-me" className="h2-with-treat">
        私について
      </h2>
      <Biography />
    </section>
  )
}

const Links = () => {
  return (
    <section className="v-stack space-y-5">
      <h2 id="links" className="h2-with-treat">
        リンク
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {LINKS.map((link) => {
          return (
            <div key={link.key} className="card p-4">
              <Link {...link} data-testid={link.key}>
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
  href,
  isExternal,
  children,
}: PropsWithChildren<typeof LINKS[0]>) => {
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <NextLink href={href}>{children}</NextLink>
  )
}
