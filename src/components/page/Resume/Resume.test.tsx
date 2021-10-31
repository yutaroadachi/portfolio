import React from 'react'
import { render } from 'src/__tests__/utils'
import { Resume } from './Resume'

test('Resume', () => {
  const { container } = render(<Resume />)
  expect(container).toMatchSnapshot()
})
