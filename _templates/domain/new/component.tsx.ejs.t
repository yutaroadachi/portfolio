---
to: src/components/domain/<%= name %>/<%= name %>.tsx
---
import { chakra } from '@chakra-ui/react'
import React from 'react'

export type <%= name %>Props = {}

export const <%= name %> = ({}: <%= name %>Props) => {
  return (
    <chakra.div>
      <%= name %>
    </chakra.div>
  )
}
