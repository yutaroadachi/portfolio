import Head from 'next/head'

export type MetaTagProps = {
  title: string
  description: string
  ogImageTitle?: string
  noindex?: boolean
}

export const MetaTag = ({
  title,
  description,
  ogImageTitle,
  noindex,
}: MetaTagProps) => {
  return (
    <Head>
      <title key="title">{`${title} | adachi`}</title>
      <meta key="description" name="description" content={description} />
      <meta
        key="og:image"
        property="og:image"
        content={`https://portfolio-adachi.vercel.app/api/og${
          ogImageTitle ? `?title=${ogImageTitle}` : ''
        }`}
      />
      {noindex && <meta key="robots" name="robots" content="noindex" />}
    </Head>
  )
}
