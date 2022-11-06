import Head from 'next/head'

export type MetaTagProps = {
  title: string
  description: string
  ogUrl: string
  ogImageTitle?: string
  noindex?: boolean
}

export const MetaTag = ({
  title,
  description,
  ogUrl,
  ogImageTitle,
  noindex,
}: MetaTagProps) => {
  const fullTitle = `${title} | adachi's Portfolio`
  const baseOgImageUrl = 'https://portfolio-adachi.vercel.app/api/og'
  const ogImageUrl = ogImageTitle
    ? `${baseOgImageUrl}?title=${ogImageTitle}`
    : baseOgImageUrl

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      {noindex && <meta name="robots" content="noindex" />}
    </Head>
  )
}
