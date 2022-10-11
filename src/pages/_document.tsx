import { Head, Html, Main, NextScript } from 'next/document'

export default function _Document() {
  return (
    <Html>
      <Head>
        <meta
          key="og:image"
          property="og:image"
          content="https://portfolio-adachi.vercel.app/api/og"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {process.env.VERCEL_ENV !== 'production' && (
          <meta key="robots" name="robots" content="noindex" />
        )}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
