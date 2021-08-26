import React from 'react'
import ResumePage from 'src/pages'
import { posts } from '../data/posts'
import { render } from '../utils'

test('ホームページ', () => {
  const { container } = render(<ResumePage posts={posts} />)
  expect(container).toMatchSnapshot()
})
