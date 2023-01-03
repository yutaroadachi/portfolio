import { URL } from '@/constants/url'
import { clsx } from 'clsx'
import NextImage from 'next/image'
import { ComponentPropsWithoutRef } from 'react'
import { IconType } from 'react-icons'
import { AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'

export type ProfileCardProps = ComponentPropsWithoutRef<'div'>

export const ProfileCard = (props: ProfileCardProps) => {
  const { className, ...rest } = props

  return (
    <div
      className={clsx(
        'card stack md:flex-row md:items-center space-y-8 md:space-x-8 md:space-y-0 p-8',
        className
      )}
      {...rest}
    >
      <div className="v-stack space-y-4 shrink-0">
        <NextImage
          src="/assets/profile.png"
          width={256}
          height={256}
          alt="Yutaro Adachiのプロフィール画像"
          className="max-w-[128px] h-auto"
        />
        <div className="text-center">
          <h2>Yutaro Adachi</h2>
          <p className="text-sm text-gray-500">ソフトウェアエンジニア</p>
        </div>
        <div className="h-stack space-x-4">
          {ACCOUNTS.map((account, idx) => {
            return (
              <a
                key={idx}
                href={account.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={account.label}
              >
                <account.icon size={24} />
              </a>
            )
          })}
        </div>
      </div>
      <p>
        大学卒業後、新卒で大手SIerに入社し、システムエンジニアとして客先常駐でのシステム開発、保守を経験しました。マネジメントや顧客折衝が中心の業務でしたが、システム開発に携わる以上は自分でも手を動かして実装できるようになる必要があると感じ、ソフトウェアエンジニアにキャリアチェンジすることを決意しました。
        <br />
        その後、スタートアップでソフトウェアエンジニアとしてフロントエンド（React,
        Next.js, TypeScript）からバックエンド（Ruby on
        Rails）まで幅広く経験してきましたが、特にフロントエンドが強みです。また、要件定義や設計といった上流工程の経験やチームリーダーとして所属チームの開発をリードする経験もしてきたので、一人称で開発できると自負しています。
      </p>
    </div>
  )
}

const ACCOUNTS: {
  href: string
  icon: IconType
  label: string
}[] = [
  {
    href: URL.github,
    icon: AiOutlineGithub,
    label: 'GitHubアカウント',
  },
  {
    href: URL.twitter,
    icon: AiOutlineTwitter,
    label: 'Twitterアカウント',
  },
]
