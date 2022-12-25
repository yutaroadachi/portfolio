import { IconType } from 'react-icons'
import { GiSkills } from 'react-icons/gi'
import {
  MdOutlineArticle,
  MdOutlineEmail,
  MdOutlineWorkOutline,
} from 'react-icons/md'
import { PATH } from './path'
import { URL } from './url'

/** Header, Footer, Topで使用するリンク */
export const LINKS: {
  title: string
  href: string
  icon: IconType
  key: string
  isExternal: boolean
}[] = [
  {
    title: 'スキル',
    href: PATH.skills,
    icon: GiSkills,
    key: 'skills',
    isExternal: false,
  },
  {
    title: '履歴書',
    href: PATH.resume,
    icon: MdOutlineWorkOutline,
    key: 'resume',
    isExternal: false,
  },
  {
    title: 'ブログ',
    href: PATH.blog,
    icon: MdOutlineArticle,
    key: 'blog',
    isExternal: false,
  },
  {
    title: 'お問い合わせ',
    href: URL.contact,
    icon: MdOutlineEmail,
    key: 'contact',
    isExternal: true,
  },
]
