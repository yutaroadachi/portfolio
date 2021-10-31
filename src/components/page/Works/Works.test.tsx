import React from 'react'
import { dummyPosts } from 'src/data/dummy/posts'
import { render } from 'src/__tests__/utils'
import { Works } from './Works'

test('Works', () => {
  const { container } = render(<Works posts={dummyPosts} />)
  expect(container).toMatchSnapshot()
})
