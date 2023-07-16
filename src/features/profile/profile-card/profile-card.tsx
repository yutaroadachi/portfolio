import { URL } from "@/constants/url";
import { clsx } from "clsx";
import NextImage from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

export type ProfileCardProps = ComponentPropsWithoutRef<"div">;

export const ProfileCard = (props: ProfileCardProps) => {
  const { className, ...rest } = props;

  return (
    <aside
      className={clsx(
        "card stack md:flex-row md:items-center space-y-8 md:space-x-8 md:space-y-0 p-8",
        className,
      )}
      {...rest}
    >
      <h2 id="about-me" className="sr-only">
        私について
      </h2>
      <div className="v-stack space-y-4 shrink-0">
        <NextImage
          src="/assets/profile.png"
          width={256}
          height={256}
          alt="Yutaro Adachiのプロフィール画像"
          className="max-w-[128px] h-auto"
        />
        <div className="font-bold text-3xl text-center">Yutaro Adachi</div>
        <div className="h-stack space-x-4">
          {ACCOUNTS.map((account, idx) => {
            return (
              <a
                key={idx}
                href={account.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={account.label}
              >
                <account.icon size={24} />
              </a>
            );
          })}
        </div>
      </div>
      <p>
        大学卒業後、大手SIerに入社し、システムエンジニアとして客先常駐でのシステム開発を経験しました。その後、スタートアップに転職し、ソフトウェアエンジニアとしてフロントエンド開発からバックエンド開発まで幅広く経験してきましたが、特にフロントエンド開発が強みです。要件定義や設計といった上流工程の経験やチームリーダーの経験もしてきたので、一人称で開発できると自負しています。
        <br />
        また、
        <a
          href={URL.zenn}
          target="_blank"
          rel="noopener noreferrer"
          className="text-c-link mx-1"
        >
          Zenn
          <FiExternalLink className="inline-block mb-1 ml-1" />
        </a>
        にて合計2,000以上のLikeを頂いているように積極的・継続的にアウトプットを行っています。特に「
        <a
          href={`${URL.zenn}/articles/105dac5573b2f5`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-c-link mx-1"
        >
          もう迷わないNext.jsのCSR/SSR/SSG/ISR
          <FiExternalLink className="inline-block mb-1 ml-1" />
        </a>
        」は400以上のLikeを頂いています。
      </p>
    </aside>
  );
};

const ACCOUNTS: {
  href: string;
  icon: IconType;
  label: string;
}[] = [
  {
    href: URL.github,
    icon: AiOutlineGithub,
    label: "GitHubアカウント",
  },
  {
    href: URL.twitter,
    icon: AiOutlineTwitter,
    label: "Twitterアカウント",
  },
];
