import React from 'react'
import { render } from 'src/__tests__/utils'
import { Works } from './Works'

test('Works', () => {
  const { container } = render(<Works />)
  expect(container).toMatchSnapshot()
})
