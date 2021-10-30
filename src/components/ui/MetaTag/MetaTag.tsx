import Head from 'next/head'
import React from 'react'

export type MetaTagProps = {
  title: string
  description: string
}

export const MetaTag = ({ title, description }: MetaTagProps) => {
  const baseTitle = " | adachi's portfolio site"

  return (
    <Head>
      <title key="title">{title + baseTitle}</title>
      <meta key="description" name="description" content={description} />
    </Head>
  )
}
