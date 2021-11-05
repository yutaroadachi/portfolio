import React from 'react'
import { render } from 'src/__tests__/utils'
import { Top } from './Top'

test('Top', () => {
  const { container } = render(<Top />)
  expect(container).toMatchSnapshot()
})
