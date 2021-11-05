---
to: src/components/page/<%= name %>/<%= name %>.tsx
---
import { Box, chakra, Stack } from '@chakra-ui/react'
import React from 'react'

export type <%= name %>Props = {}

export const <%= name %> = ({}: <%= name %>Props) => {
  return (
    <Box>
      <chakra.h1 id="<%= h.changeCase.paramCase(name) %>" textStyle="h1" color="main" mb={8}>
        <%= name %>
      </chakra.h1>
      <Stack spacing={8}>
        <Box><%= name %> content</Box>
      </Stack>
    </Box>
  )
}
