import { Resume } from 'src/components/page/Resume'
import { createGetLayout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'

export default function ResumePage() {
  return (
    <>
      <MetaTag
        title="履歴書"
        description="Yutaro Adachi(ソフトウェアエンジニア)の履歴書です。"
      />
      <Resume />
    </>
  )
}

ResumePage.getLayout = createGetLayout()
