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
  const fullTitle = `${title} | adachi`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      {ogImageTitle && (
        <meta
          key="og:image"
          property="og:image"
          content={`https://portfolio-adachi.vercel.app/api/og?title=${ogImageTitle}`}
        />
      )}
      {noindex && <meta key="robots" name="robots" content="noindex" />}
    </Head>
  )
}
