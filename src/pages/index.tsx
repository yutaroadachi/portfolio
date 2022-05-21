import { Top } from 'src/components/page/Top'
import { createGetLayout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'

export default function TopPage() {
  return (
    <>
      <MetaTag
        title="トップ"
        description="Yutaro Adachi(ソフトウェアエンジニア)のポートフォリオサイトです。"
      />
      <Top />
    </>
  )
}

TopPage.getLayout = createGetLayout({ pt: 0 })
