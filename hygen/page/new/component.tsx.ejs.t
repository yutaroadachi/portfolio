---
to: src/components/page/<%= h.changeCase.pascalCase(path.split("/").join(".")) %>/<%= h.changeCase.pascalCase(path.split("/").join(".")) %>.tsx
---
<%_
  componentName = h.changeCase.pascalCase(path.split("/").join("."))
_%>
export type <%= componentName %>Props = {}

export const <%= componentName %> = ({}: <%= componentName %>Props) => {
  return (
    <div className="space-y-8">
      <section>
        <h1 id="<%= h.changeCase.paramCase(componentName) %>"><%= componentName %></h1>
      </section>
      <div><%= componentName %> content</div>
    </div>
  )
}
