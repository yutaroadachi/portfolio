import { PATH } from "@/constants/path";
import { ORIGIN } from "@/constants/url";
import { ProfileCard } from "@/features/profile/profile-card";
import { formatYYYYMMDD } from "@/utils/format/date-format";
import { generateTitle } from "@/utils/meta/generator";
import NextLink from "next/link";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { SiHatenabookmark } from "react-icons/si";
import { getPersonalBlogDetail } from "./get-personal-blog-detail";

export type PersonalBlogDetailProps = {
  personalBlogDetail: Awaited<ReturnType<typeof getPersonalBlogDetail>>;
};

export const PersonalBlogDetail = ({
  personalBlogDetail,
}: PersonalBlogDetailProps) => {
  const shareUrl = `${ORIGIN}${PATH.blog}/${personalBlogDetail.id}`;
  const shareText = generateTitle(personalBlogDetail.title);

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <nav className="text-sm text-c-link" aria-label="breadcrumb">
          <ol className="flex items-center space-x-1">
            <li>
              <NextLink href={PATH.blog}>ブログ一覧</NextLink>
            </li>
            <BiChevronRight className="text-gray-500" />
            <li>
              <NextLink href={`${PATH.blog}/${personalBlogDetail.id}`}>
                ブログ詳細
              </NextLink>
            </li>
          </ol>
        </nav>
        <h1 id="blog-detail">{personalBlogDetail.title}</h1>
        <div className="text-sm text-gray-500">
          {`${formatYYYYMMDD(
            new Date(
              personalBlogDetail.publishedAt ?? personalBlogDetail.createdAt,
            ),
          )}に投稿`}
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${personalBlogDetail.body}`,
        }}
        className="blog-detail card p-8"
      />
      <div className="h-stack space-x-4 justify-center">
        <TwitterShareLink url={shareUrl} text={shareText} />
        <HatenaShareLink url={shareUrl} text={shareText} />
      </div>
      <div className="flex justify-center">
        <NextLink href={PATH.blog} className="text-c-link">
          ブログ一覧へ
        </NextLink>
      </div>
      <ProfileCard />
    </div>
  );
};

type ShareLink = {
  url: string;
  text: string;
};

const TwitterShareLink = ({ url, text }: ShareLink) => {
  const urlSearchParams = new URLSearchParams({ url, text });

  return (
    <a
      href={`https://twitter.com/intent/tweet?${urlSearchParams}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitterでシェア"
    >
      <AiOutlineTwitter size={36} />
    </a>
  );
};

const HatenaShareLink = ({ url, text }: ShareLink) => {
  const urlSearchParams = new URLSearchParams({ url, btitle: text });

  return (
    <a
      href={`https://b.hatena.ne.jp/entry/panel/?${urlSearchParams}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="はてなブックマークでシェア"
    >
      <SiHatenabookmark size={36} />
    </a>
  );
};
