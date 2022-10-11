import { SecretResume } from 'src/components/page/SecretResume'
import { createGetLayout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'

export default function SecretResumePage() {
  return (
    <>
      <MetaTag
        title="職務経歴書"
        description="Yutaro Adachi(ソフトウェアエンジニア)の職務経歴書です。"
        ogUrl="https://portfolio-adachi.vercel.app/secret/resume/"
        noindex
      />
      <SecretResume />
    </>
  )
}

SecretResumePage.getLayout = createGetLayout()
