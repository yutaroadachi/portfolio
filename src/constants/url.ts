/** 外部リンク */
export const URL = {
  github: "https://github.com/yutaroadachi",
  twitter: "https://twitter.com/yutaroadachi",
  zenn: "https://zenn.dev/a_da_chi",
} as const;

/** オリジン */
export const ORIGIN =
  process.env.VERCEL_ENV === "production"
    ? "https://yutaroadachi.vercel.app"
    : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";
