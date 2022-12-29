---
to: src/components/<%= kind %>/<%= name %>/<%= name %>.tsx
---
export type <%= name %>Props = {}

export const <%= name %> = ({}: <%= name %>Props) => {
  return (
    <div>
      <div><%= name %></div>
    </div>
  )
}
