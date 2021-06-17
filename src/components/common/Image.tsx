import { chakra } from '@chakra-ui/react'
import NextImage from 'next/image'

/** @link https://nextjs.org/docs/api-reference/next/image */
export const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'src',
      'width',
      'height',
      'layout',
      'loader',
      'sizes',
      'quality',
      'priority',
      'objectFit',
      'objectPosition',
      'loading',
      'unoptimized',
      'alt',
      'placeholder',
      'blurDataURL',
    ].includes(prop),
})
