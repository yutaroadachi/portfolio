import { Skills } from 'src/components/page/Skills'
import { createGetLayout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'

export default function SkillsPage() {
  return (
    <>
      <MetaTag
        title="スキル"
        description="Yutaro Adachi(ソフトウェアエンジニア)のスキルです。"
        ogUrl="https://portfolio-adachi.vercel.app/skills/"
      />
      <Skills />
    </>
  )
}

SkillsPage.getLayout = createGetLayout()
