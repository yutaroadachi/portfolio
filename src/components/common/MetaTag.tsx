import Head from 'next/head'
import React from 'react'

export type MetaTagProps = {
  title: string
  description: string
}

export const MetaTag = (props: MetaTagProps) => {
  const baseTitle = " | adachi's portfolio site"
  const baseDescription =
    'Yutaro Adachi(Web Engineer)のポートフォリオサイトです。'

  return (
    <Head>
      <title key="title">{props.title + baseTitle}</title>
      <meta key="description" name="description">
        {baseDescription + props.description}
      </meta>
    </Head>
  )
}
