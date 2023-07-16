import { BlogCard } from "./blog-card";
import { getPersonalBlogList } from "./get-personal-blog-list";

export type PersonalBlogListProps = {
  personalBlogList: Awaited<ReturnType<typeof getPersonalBlogList>>;
};

export const PersonalBlogList = ({
  personalBlogList,
}: PersonalBlogListProps) => {
  return (
    <div className="space-y-5">
      <h2 id="personal-blog" className="with-treat">
        個人ブログ
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {personalBlogList.map((personalBlog) => {
          return (
            <BlogCard
              key={personalBlog.id}
              kind="personal"
              href={`/blog/${personalBlog.id}`}
              title={personalBlog.title}
              publishDate={
                new Date(personalBlog.publishedAt ?? personalBlog.createdAt)
              }
            />
          );
        })}
      </div>
    </div>
  );
};
