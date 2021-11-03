import React from 'react'
import { dummyPersonalBlogList, dummyTechBlogList } from 'src/data/dummy/blog'
import { render } from 'src/__tests__/utils'
import { BlogList } from './BlogList'

test('BlogList', () => {
  const { container } = render(
    <BlogList
      techBlog={dummyTechBlogList}
      personalBlog={dummyPersonalBlogList}
    />
  )
  expect(container).toMatchSnapshot()
})
