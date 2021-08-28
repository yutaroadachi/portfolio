import React from 'react'
import { dummyPosts } from 'src/data/dummy/posts'
import WorksPage from 'src/pages/works'
import { render } from '../utils'

test('/works', () => {
  const { container } = render(<WorksPage posts={dummyPosts} />)
  expect(container).toMatchSnapshot()
})
