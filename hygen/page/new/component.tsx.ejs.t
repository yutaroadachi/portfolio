---
to: src/components/page/<%= h.changeCase.pascalCase(path.split("/").join(".")) %>/<%= h.changeCase.pascalCase(path.split("/").join(".")) %>.tsx
---
<%_
  componentName = h.changeCase.pascalCase(path.split("/").join("."))
_%>
import { Box, chakra, Stack } from '@chakra-ui/react'
import React from 'react'
import { Layout } from 'src/components/ui/Layout'

export type <%= componentName %>Props = {}

export const <%= componentName %> = ({}: <%= componentName %>Props) => {
  return (
    <Box>
      <chakra.h1 id="<%= h.changeCase.paramCase(componentName) %>" textStyle="h1" color="main" mb={8}>
        <%= componentName %>
      </chakra.h1>
      <Stack spacing={8}>
        <Box><%= componentName %> content</Box>
      </Stack>
    </Box>
  )
}
