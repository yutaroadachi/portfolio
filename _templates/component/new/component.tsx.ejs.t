---
to: src/components/<%= path %>/<%= name %>.tsx
---
import { chakra } from "@chakra-ui/react"
import React from "react"

export type <%= name %>Props = {}

export const <%= name %> = (props: <%= name %>Props) => {
  return <chakra.h2><%= name %></chakra.h2>
}
