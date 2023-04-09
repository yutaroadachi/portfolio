import { ProfileCard } from '@/features/profile/profile-card'
import { generateOpenGraph, generateTitle } from '@/utils/meta/generator'
import NextImage from 'next/image'
import { BiChevronDown } from 'react-icons/bi'

const title = 'トップ'
const description = 'Yutaro Adachiのポートフォリオです。'
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
      <Skills />
    </div>
  )
}

const Hero = () => {
  return (
    <section
      // ヘッダーとコンテナのパディングの高さを除いた高さを設定する
      // スマホの場合はアドレスバーの高さも除いた高さを設定する
      className="v-stack center min-h-[calc(100vh_-_160px)] lg:min-h-[calc(100vh_-_96px)]"
    >
      <h1 id="hero" className="text-center">
        Yutaro Adachi&apos;s Portfolio
      </h1>
      <NextImage
        src="/assets/top-page/hero.png"
        width={626}
        height={667}
        alt=""
        priority
        className="max-w-[313px] h-auto mt-8"
      />
      <div className="v-stack mt-4">
        <div className="font-bold">Scroll Down</div>
        <BiChevronDown size={72} className="animate-bounce" />
      </div>
    </section>
  )
}

const AboutMe = () => {
  return (
    <section className="v-stack space-y-5">
      <div className="font-bold text-3xl with-treat" aria-hidden="true">
        私について
      </div>
      <ProfileCard />
    </section>
  )
}

const Skills = () => {
  return (
    <section className="stack space-y-5 md:text-center">
      <h2 id="skills" className="with-treat">
        スキル
      </h2>
      <div className="stack space-y-4">
        <div>
          <h3>リードできる</h3>
          <ul>
            <li>JavaScript, TypeScript, React, Next.js</li>
          </ul>
        </div>
        <div>
          <h3>問題なく使用できる</h3>
          <ul>
            <li>HTML, CSS, Ruby, Ruby on Rails, GraphQL</li>
          </ul>
        </div>
        <div>
          <h3>実務経験あり</h3>
          <ul>
            <li>NestJS, Prisma, Go</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
