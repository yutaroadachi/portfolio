import React from 'react'
import { render } from 'src/__tests__/utils'
import { Skills } from './Skills'

test('Skills', () => {
  const { container } = render(<Skills />)
  expect(container).toMatchSnapshot()
})
