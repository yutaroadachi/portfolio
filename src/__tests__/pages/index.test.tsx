import React from 'react'
import HomePage from 'src/pages'
import { posts } from '../data/posts'
import { render } from '../utils'

test('ホームページ', () => {
  const { container } = render(<HomePage posts={posts} />)
  expect(container).toMatchSnapshot()
})
