---
to: src/components/page/<%= h.changeCase.pascalCase(path.split("/").join(".")) %>Page/<%= h.changeCase.pascalCase(path.split("/").join(".")) %>Page.test.tsx
---
<%_ componentName = `${h.changeCase.pascalCase(path.split("/").join("."))}Page` _%>
import React from 'react'
import { render } from 'src/__tests__/utils'
import { <%= componentName %> } from './<%= componentName %>'

test('<%= componentName %>', () => {
  const { container } = render(<<%= componentName %> />)
  expect(container).toMatchSnapshot()
})
