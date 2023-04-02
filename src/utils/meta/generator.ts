import { PROD_ORIGIN } from '@/constants/url'
import type { Metadata } from 'next'

export const generateTitle = (pageTitle: string) => {
  return `${pageTitle} | Yutaro Adachi's Portfolio`
}

export const generateOpenGraph = (
  title: string,
  description: string,
  ogImageTitle?: string
): Metadata['openGraph'] => {
  const siteName = `Yutaro Adachi's Portfolio`
  const titleWithTemplate = `${title} | ${siteName}`
  const ogImageEndpoint = `${PROD_ORIGIN}/api/og`

  return {
    title: titleWithTemplate,
    description,
    siteName,
    images: [
      {
        url:
          ogImageTitle === undefined
            ? ogImageEndpoint
            : `${ogImageEndpoint}?title=${ogImageTitle}`,
      },
    ],
  }
}
