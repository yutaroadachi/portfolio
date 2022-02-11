---
to: src/components/<%= kind %>/<%= name %>/<%= name %>.tsx
---
import { Box, chakra } from '@chakra-ui/react'
import React from 'react'

export type <%= name %>Props = {}

export const <%= name %> = ({}: <%= name %>Props) => {
  return (
    <Box>
      <chakra.div><%= name %></chakra.div>
    </Box>
  )
}
