import React from 'react'
import { render } from 'src/__tests__/utils'
import { SecretResume } from './SecretResume'

test('SecretResume', () => {
  const { container } = render(<SecretResume />)
  expect(container).toMatchSnapshot()
})
