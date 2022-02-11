---
to: src/components/<%= kind %>/<%= name %>/<%= name %>.test.tsx
---
import React from 'react'
import { render } from 'src/__tests__/utils'
import { <%= name %> } from './<%= name %>'

test('<%= name %>', () => {
  const { container } = render(<<%= name %> />)
  expect(container).toMatchSnapshot()
})
