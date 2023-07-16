import { PATH } from "@/constants/path";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import NextLink from "next/link";
import { ReactNode } from "react";

export const metadata = {
  twitter: {
    card: "summary_large_image",
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${montserrat.variable} font-sans`}>
      <body>
        <div className="stack min-h-screen">
          <Header />
          <main className="flex-grow">
            <div className="max-w-full lg:max-w-screen-md xl:max-w-screen-lg px-4 lg:px-0 py-8 mx-auto">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

const Header = () => {
  return (
    <header className="bg-c-primary text-white">
      <div className="flex justify-between items-center max-w-full lg:max-w-screen-md xl:max-w-screen-lg h-[64px] mx-4 lg:mx-auto">
        <Logo />
        <nav className="space-x-4 font-bold">
          {LINKS.map((link) => {
            return (
              <NextLink key={link.key} href={link.href} aria-label={link.title}>
                {link.title}
              </NextLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="v-stack space-y-8 bg-c-primary text-white py-8">
      <Logo />
      <nav className="space-x-4 font-bold">
        {LINKS.map((link) => {
          return (
            <NextLink key={link.key} href={link.href} aria-label={link.title}>
              {link.title}
            </NextLink>
          );
        })}
      </nav>
      <div className="text-sm">
        Copyright© Yutaro Adachi All Rights Reserved.
      </div>
    </footer>
  );
};

const Logo = () => {
  return (
    <NextLink href={PATH.top} className="logo" aria-label="logo">
      y
    </NextLink>
  );
};

const LINKS: {
  key: string;
  href: "/" | "/blog";
  title: string;
}[] = [
  {
    key: "top",
    href: PATH.top,
    title: "トップ",
  },
  {
    key: "blog",
    href: PATH.blog,
    title: "ブログ",
  },
];
