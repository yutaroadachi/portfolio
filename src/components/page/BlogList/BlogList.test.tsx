import React from 'react'
import { dummyBlogList } from 'src/data/dummy/blog'
import { render } from 'src/__tests__/utils'
import { BlogList } from './BlogList'

test('BlogList', () => {
  const { container } = render(<BlogList blog={dummyBlogList} />)
  expect(container).toMatchSnapshot()
})
