import { URL } from "@/constants/url";
import { FiExternalLink } from "react-icons/fi";
import { BlogCard } from "./blog-card";
import { getTechBlogList } from "./get-tech-blog-list";

export type TechBlogListProps = {
  techBlogList: Awaited<ReturnType<typeof getTechBlogList>>;
};

export const TechBlogList = ({ techBlogList }: TechBlogListProps) => {
  return (
    <div className="space-y-5">
      <h2 id="tech-blog-list" className="with-treat">
        テックブログ
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techBlogList.map((techBlog, idx) => {
          return (
            <BlogCard
              key={idx}
              kind="tech"
              href={techBlog.link as string}
              title={techBlog.title as string}
              publishDate={new Date(techBlog.pubDate as string)}
            />
          );
        })}
      </div>
      <center>
        <a
          href={URL.zenn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-c-link"
        >
          もっと見る
          <FiExternalLink className="inline-block mb-1 ml-1" />
        </a>
      </center>
    </div>
  );
};
