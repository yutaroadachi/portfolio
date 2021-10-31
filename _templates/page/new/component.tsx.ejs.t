---
to: src/components/page/<%= name %>/<%= name %>.tsx
---
import { chakra } from '@chakra-ui/react'
import React from 'react'

export type <%= name %>Props = {}

export const <%= name %> = ({}: <%= name %>Props) => {
  return (
    <>
      <chakra.h2 id="<%= h.changeCase.paramCase(name) %>" textStyle="h2WithTreat">
        <%= name %>
      </chakra.h2>
      <chakra.div>
        <%= name %> content
      </chakra.div>
    </>
  )
}
