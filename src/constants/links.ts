import { IconType } from 'react-icons'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { GrBlog } from 'react-icons/gr'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { PATH } from './path'

/** Header, Footer, Topで使用するリンク */
export const LINKS: {
  title: string
  href: string
  icon: IconType
}[] = [
  {
    title: 'スキル',
    href: PATH.skills,
    icon: FaReact,
  },
  {
    title: '履歴書',
    href: PATH.resume,
    icon: IoDocumentTextOutline,
  },
  {
    title: 'ブログ',
    href: PATH.blog,
    icon: GrBlog,
  },
  {
    title: '成果物',
    href: PATH.works,
    icon: CgWorkAlt,
  },
]
