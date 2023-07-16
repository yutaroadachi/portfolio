import { PATH } from "@/constants/path";
import { ORIGIN } from "@/constants/url";
import type { Metadata } from "next";

const siteName = "Yutaro Adachi's Portfolio";

export const generateTitle = (pageTitle: string) => {
  return `${pageTitle} | ${siteName}`;
};

export const generateOpenGraph = (
  title: string,
  description: string,
  ogImageTitle?: string,
): Metadata["openGraph"] => {
  const ogImageEndpoint = `${ORIGIN}${PATH.api.og}`;

  return {
    title: generateTitle(title),
    description,
    siteName,
    images: ogImageTitle
      ? `${ogImageEndpoint}?title=${ogImageTitle}`
      : ogImageEndpoint,
  };
};
