import { IconType } from 'react-icons'
import { GiSkills } from 'react-icons/gi'
import { MdOutlineArticle, MdOutlineWorkOutline } from 'react-icons/md'
import { PATH } from './path'

export type LinksHref = '/skills' | '/resume' | '/blog'

/** Header, Footer, Topで使用するリンク */
export const LINKS: {
  key: string
  href: LinksHref | string
  title: string
  icon: IconType
  isExternal: boolean
}[] = [
  {
    key: 'skills',
    href: PATH.skills,
    title: 'スキル',
    icon: GiSkills,
    isExternal: false,
  },
  {
    key: 'resume',
    href: PATH.resume,
    title: '履歴書',
    icon: MdOutlineWorkOutline,
    isExternal: false,
  },
  {
    key: 'blog',
    href: PATH.blog,
    title: 'ブログ',
    icon: MdOutlineArticle,
    isExternal: false,
  },
]
