import {
  getPersonalBlogDetail,
  PersonalBlogDetail,
} from "@/features/blog/blog-detail";
import { generateOpenGraph, generateTitle } from "@/utils/meta/generator";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: { contentId: string };
}): Promise<Metadata> => {
  try {
    const personalBlogDetail = await getPersonalBlogDetail(params.contentId);
    const title = personalBlogDetail.title;
    const description =
      personalBlogDetail.description ?? personalBlogDetail.title;

    return {
      title: generateTitle(title),
      description,
      openGraph: generateOpenGraph(title, description, title),
    };
  } catch {
    const title = "404 Not Found";
    const description = "ページが見つかりませんでした。";

    return {
      title: generateTitle(title),
      description,
      openGraph: generateOpenGraph(title, description),
    };
  }
};

export const dynamicParams = true;

export const generateStaticParams = () => {
  return [];
};

export const revalidate = 300;

export default async function BlogDetailPage({
  params,
}: {
  params: { contentId: string };
}) {
  try {
    const personalBlogDetail = await getPersonalBlogDetail(params.contentId);

    return <PersonalBlogDetail personalBlogDetail={personalBlogDetail} />;
  } catch (error) {
    notFound();
  }
}
