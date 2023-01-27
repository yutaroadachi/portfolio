export type DefaultTagsProps = {
  title: string
  description: string
  ogImageTitle?: string
  noindex?: boolean
}

export const DefaultTags = ({
  title,
  description,
  ogImageTitle,
  noindex,
}: DefaultTagsProps) => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta
        property="og:image"
        content={
          ogImageTitle
            ? `${ogImageApiServerEndpoint}?title=${ogImageTitle}`
            : ogImageApiServerEndpoint
        }
      />
      <meta name="twitter:card" content="summary_large_image" />
      {noindex && <meta name="robots" content="noindex" />}
    </>
  )
}

const siteName = "Yutaro Adachi's Portfolio"
const ogImageApiServerEndpoint = 'https://portfolio-adachi.vercel.app/api/og'
