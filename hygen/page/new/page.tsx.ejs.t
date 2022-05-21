---
to: src/pages/<%= path %>/index.tsx
---
<%_
  componentName = h.changeCase.pascalCase(path.split("/").join("."))
  pageName = `${componentName}Page`
_%>
<%_ if (locals.getProps === "SSG") { _%>
import { GetStaticProps } from "next"
<%_ } _%>
<%_ if (locals.getProps === "SSR") { _%>
import { GetServerSideProps } from "next"
<%_ } _%>
import React from 'react'
import { <%= componentName %> } from 'src/components/page/<%= componentName %>'
import { createGetLayout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'

<%_ if (getProps === "SSG") { _%>
export type <%= pageName %>Props = {}

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
export type <%= pageName %>Props = {}

export const getServerSideProps: GetServerSideProps<<%= pageName %>Props> = async (
  ctx
) => {
  return { 
    props: {} 
  }
}

<%_ } _%>
<%_ if (getProps !== "いいえ") { _%>
export default function <%= pageName %>({}: <%= pageName %>Props) {
<%_ } else { _%>
export default function <%= pageName %>() {
<%_ } _%>
  return (
    <>
      <MetaTag
        title="<%= pageName %>"
        description="Yutaro Adachi(ソフトウェアエンジニア)の<%= pageName %>です。"
      />
      <<%= componentName %> />
    </>
  )
}

<%= pageName %>.getLayout = createGetLayout()
