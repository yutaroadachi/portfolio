import React from 'react'
import { render } from 'src/lib/test-utils'
import HomePage from 'src/pages'
import { posts } from 'src/__tests__/data/posts'

test('ホームページ', () => {
  const { container } = render(<HomePage posts={posts} />)
  expect(container).toMatchSnapshot()
})
