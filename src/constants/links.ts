import { IconType } from 'react-icons'
import { FaReact } from 'react-icons/fa'
import { GrBlog } from 'react-icons/gr'
import { IoDocumentTextOutline, IoMailOutline } from 'react-icons/io5'
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
    icon: FaReact,
    key: 'skills',
    isExternal: false,
  },
  {
    title: '履歴書',
    href: PATH.resume,
    icon: IoDocumentTextOutline,
    key: 'resume',
    isExternal: false,
  },
  {
    title: 'ブログ',
    href: PATH.blog,
    icon: GrBlog,
    key: 'blog',
    isExternal: false,
  },
  {
    title: 'お問い合わせ',
    href: URL.contact,
    icon: IoMailOutline,
    key: 'contact',
    isExternal: true,
  },
]
