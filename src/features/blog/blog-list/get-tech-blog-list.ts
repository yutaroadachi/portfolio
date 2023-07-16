import { URL } from "@/constants/url";
import { client } from "@/libs/rss/client";

export const getTechBlogList = async () => {
  const data = await client.getList({
    feedUrl: `${URL.zenn}/feed`,
  });

  return data.items;
};
