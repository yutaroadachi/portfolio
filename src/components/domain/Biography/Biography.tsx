import { clsx } from 'clsx'
import NextImage from 'next/image'
import { ComponentPropsWithoutRef } from 'react'
import { IconType } from 'react-icons'
import { FiGithub, FiTwitter } from 'react-icons/fi'
import { URL } from 'src/constants/url'

export type BiographyProps = ComponentPropsWithoutRef<'div'>

export const Biography = (props: BiographyProps) => {
  const { className, ...rest } = props

  return (
    <div
      className={clsx(
        'card flex flex-col md:flex-row md:items-center space-y-8 md:space-x-8 md:space-y-0 p-8',
        className
      )}
      {...rest}
    >
      <div className="flex flex-col items-center space-y-4 shrink-0">
        <NextImage
          src="/assets/profile.png"
          width={128}
          height={128}
          alt="Yutaro Adachiのプロフィール画像"
        />
        <div className="text-center">
          <h2>Yutaro Adachi</h2>
          <p className="text-sm text-gray-500">ソフトウェアエンジニア</p>
        </div>
        <div className="flex space-x-4">
          {ACCOUNTS.map((account, idx) => {
            return (
              <a
                key={idx}
                href={account.href}
                target="_blank"
                rel="noopener noreferrer"
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
        Rails）まで幅広く経験してきましたが、特にフロントエンドが強みです。また、要件定義や設計といった上流工程の経験やリードエンジニアとして所属チームの開発をリードする経験もしてきたので、一人称で開発できると自負しています。
      </p>
    </div>
  )
}

const ACCOUNTS: {
  href: string
  icon: IconType
}[] = [
  {
    href: URL.github,
    icon: FiGithub,
  },
  {
    href: URL.twitter,
    icon: FiTwitter,
  },
]
