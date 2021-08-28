import React from 'react'
import ResumePage from 'src/pages'
import { render } from '../utils'

test('/', () => {
  const { container } = render(<ResumePage />)
  expect(container).toMatchSnapshot()
})
