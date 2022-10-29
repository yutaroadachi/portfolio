import {
  Center,
  chakra,
  Icon,
  LinkBox,
  LinkBoxProps,
  LinkOverlay,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import { GrBlog } from 'react-icons/gr'
import { ZennIcon } from 'src/components/ui/Icon'
import { formatYYYYMMDD } from 'src/lib/format/date-format'
import { truncate } from 'src/lib/format/string-format'
import NextLink from 'next/link'

export type BlogCardProps = {
  href: string
  title: string
  publishDate: Date
  kind: 'tech' | 'personal'
} & LinkBoxProps

export const BlogCard = ({
  href,
  title,
  publishDate,
  kind,
  ...props
}: BlogCardProps) => {
  return (
    <LinkBox layerStyle="card" p={4} as="article" {...props}>
      <Stack spacing={0} h={{ base: '220px', md: '200px' }}>
        <Center mb={4}>
          <Icon boxSize="24px" as={kind === 'tech' ? ZennIcon : GrBlog} />
        </Center>
        <chakra.h3 fontWeight="bold" flexGrow={1} overflow="hidden">
          {kind === 'tech' && (
            <LinkOverlay href={href} isExternal>
              {truncate(title, 50)}
            </LinkOverlay>
          )}
          {kind === 'personal' && (
            <NextLink href={href} passHref legacyBehavior>
              <LinkOverlay>{truncate(title, 50)}</LinkOverlay>
            </NextLink>
          )}
        </chakra.h3>
        <chakra.p fontSize="12px" color="gray.500">
          {`${formatYYYYMMDD(publishDate)}に投稿`}
        </chakra.p>
      </Stack>
    </LinkBox>
  )
}
