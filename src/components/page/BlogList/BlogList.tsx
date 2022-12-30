import { Biography } from 'src/components/domain/Biography'
import { BlogCard } from 'src/components/domain/BlogCard'
import { PersonalBlogList, TechBlogList } from 'src/types/blog'

export type BlogListProps = {
  techBlog: TechBlogList
  personalBlog: PersonalBlogList
}

export const BlogList = ({ techBlog, personalBlog }: BlogListProps) => {
  return (
    <div className="space-y-8">
      <section>
        <h1 id="blog-list">ブログ</h1>
      </section>
      <TechBlog techBlog={techBlog} />
      <PersonalBlog personalBlog={personalBlog} />
      <Biography />
    </div>
  )
}

const TechBlog = ({ techBlog }: Pick<BlogListProps, 'techBlog'>) => {
  return (
    <div className="space-y-5">
      <h2 id="tech-blog" className="with-treat">
        テックブログ
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techBlog.map((blog, idx) => {
          return (
            <BlogCard
              key={idx}
              kind="tech"
              href={blog.link}
              title={blog.title}
              publishDate={new Date(blog.pubDate)}
            />
          )
        })}
      </div>
    </div>
  )
}

const PersonalBlog = ({
  personalBlog,
}: Pick<BlogListProps, 'personalBlog'>) => {
  return (
    <div className="space-y-5">
      <h2 id="personal-blog" className="with-treat">
        個人ブログ
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {personalBlog.map((blog) => {
          return (
            <BlogCard
              key={blog.id}
              kind="personal"
              href={`/blog/${blog.id}`}
              title={blog.title}
              publishDate={new Date(blog.publishedAt ?? blog.createdAt)}
            />
          )
        })}
      </div>
    </div>
  )
}
