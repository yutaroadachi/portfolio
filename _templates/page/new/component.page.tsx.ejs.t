---
to: src/components/page/<%= name %>/<%= name %>.page.tsx
---
import React, { ComponentProps } from 'react'
import { Layout } from 'src/components/ui/Layout'
import { MetaTag } from 'src/components/ui/MetaTag'
import { <%= name %> } from './<%= name %>'

export type <%= name %>PageProps = ComponentProps<typeof <%= name %>>

export const <%= name %>Page = ({}: <%= name %>PageProps) => {
  return (
    <Layout>
      <MetaTag
        title="<%= name %>"
        description="<%= name %>ページです。"
      />
      <<%= name %> />
    </Layout>
  )
}
