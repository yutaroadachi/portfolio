---
to: src/pages/<%= path %>/index.tsx
---
<%_
  base = h.changeCase.pascalCase(path.split("/").join("."))
  componentName = `${base}Page`
  pageName = `${base}NextPage`
_%>
<%_ if (locals.getProps === "SSG") { _%>
import { GetStaticProps } from "next"
<%_ } _%>
<%_ if (locals.getProps === "SSR") { _%>
import { GetServerSideProps } from "next"
<%_ } _%>
import { <%= componentName %> } from 'src/components/page/<%= componentName %>'
import { MetaTag } from 'src/components/ui/MetaTag'

<%_ if (getProps !== "いいえ") { _%>
export type <%= pageName %>Props = {}

export default function <%= pageName %>({}: <%= pageName %>Props) {
<%_ } else { _%>
export default function <%= pageName %>() {
<%_ } _%>
  return (
    <>
      <MetaTag
        title="<%= pageName %>"
        description="Yutaro Adachi(フロントエンドエンジニア)の<%= pageName %>です。"
      />
      <<%= componentName %> />
    </>
  )
}
<%_ if (getProps === "SSG") { _%>

export const getStaticProps: GetStaticProps<<%= pageName %>Props> = async (
  ctx
) => {
  return {
    props: {},
    revalidate: 5 * 60,
  }
}
<%_ } _%>
<%_ if (getProps === "SSR") { _%>

export const getServerSideProps: GetServerSideProps<<%= pageName %>Props> = async (
  ctx
) => {
  return { 
    props: {} 
  }
}
<%_ } _%>
