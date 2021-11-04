import { LinkBox, LinkBoxProps, LinkOverlay } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { PATH } from 'src/constants/path'

export type LogoProps = LinkBoxProps

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <LinkBox {...props}>
      <NextLink href={PATH.top} passHref>
        <LinkOverlay textStyle="logo">adachi</LinkOverlay>
      </NextLink>
    </LinkBox>
  )
}
