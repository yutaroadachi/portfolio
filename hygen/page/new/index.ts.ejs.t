---
to: src/components/page/<%= h.changeCase.pascalCase(path.split("/").join(".")) %>Page/index.ts
---
export * from './<%= h.changeCase.pascalCase(path.split("/").join(".")) %>Page'
