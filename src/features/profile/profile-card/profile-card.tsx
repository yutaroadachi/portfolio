import { URL } from "@/constants/url";
import { clsx } from "clsx";
import NextImage from "next/image";
import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";
import { AiOutlineGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { SiZenn } from "react-icons/si";

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
        <div className="font-bold text-3xl text-center block md:hidden">
          Yutaro Adachi
        </div>
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
                <account.icon size={account.size} />
              </a>
            );
          })}
        </div>
      </div>
      <div className="stack space-y-4">
        <div className="font-bold text-3xl text-left hidden md:block">
          Yutaro Adachi
        </div>
        <p>
          大学卒業後、大手SIer・スタートアップ・メガベンチャーと様々な規模・ステージの会社でエンジニアとして働いてきました。システムエンジニア・バックエンドエンジニア・フロントエンドエンジニアの経験がありますが、特にフロントエンド開発が強みです。
        </p>
      </div>
    </aside>
  );
};

const ACCOUNTS: {
  href: string;
  icon: IconType;
  label: string;
  size: number;
}[] = [
  {
    href: URL.github,
    label: "GitHubアカウント",
    icon: AiOutlineGithub,
    size: 24,
  },
  {
    href: URL.x,
    label: "Xアカウント",
    icon: FaXTwitter,
    size: 22,
  },
  {
    href: URL.zenn,
    label: "Zennアカウント",
    icon: SiZenn,
    size: 20,
  },
];
