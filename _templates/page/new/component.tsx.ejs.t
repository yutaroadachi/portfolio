---
to: src/components/page/<%= name %>/<%= name %>.tsx
---
import { Box, chakra } from '@chakra-ui/react'
import React from 'react'

export type <%= name %>Props = {}

export const <%= name %> = ({}: <%= name %>Props) => {
  return (
    <Box>
      <chakra.h1 id="<%= h.changeCase.paramCase(name) %>" textStyle="h1" color="main" mb={8}>
        <%= name %>
      </chakra.h1>
      <chakra.p><%= name %> content</chakra.p>
    </Box>
  )
}
