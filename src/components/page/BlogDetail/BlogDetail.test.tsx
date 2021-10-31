import React from 'react'
import { dummyBlogDetail } from 'src/data/dummy/blog'
import { render } from 'src/__tests__/utils'
import { BlogDetail } from './BlogDetail'

test('BlogDetail', () => {
  const { container } = render(<BlogDetail blog={dummyBlogDetail} />)
  expect(container).toMatchSnapshot()
})
