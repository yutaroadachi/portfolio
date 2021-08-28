import { AttachmentIcon, EditIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, SimpleGrid, SimpleGridProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { PATH } from 'src/constants/path'
import { URL } from 'src/constants/url'

export type NavigationProps = {
  active: 'resume' | 'works'
} & SimpleGridProps

export const Navigation = (props: NavigationProps) => {
  const { active, ...rest } = props

  const isResumeActive = active === 'resume'
  const isWorksActive = active === 'works'

  return (
    <SimpleGrid
      id="navigation"
      columns={3}
      spacing={4}
      w="full"
      maxW="340px"
      {...rest}
    >
      <NextLink href={PATH.resume} passHref scroll={false}>
        <Button
          variant={isResumeActive ? 'primary' : 'outlined'}
          size="sm"
          minW="108px"
          rightIcon={<AttachmentIcon />}
          as="a"
          data-test-id="navigation-resume"
        >
          Resume
        </Button>
      </NextLink>
      <NextLink href={PATH.works} passHref scroll={false}>
        <Button
          variant={isWorksActive ? 'primary' : 'outlined'}
          size="sm"
          minW="108px"
          rightIcon={<EditIcon />}
          as="a"
          data-test-id="navigation-works"
        >
          Works
        </Button>
      </NextLink>
      <Button
        variant="outlined"
        size="sm"
        minW="108px"
        rightIcon={<ExternalLinkIcon />}
        as="a"
        href={URL.contact}
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </Button>
    </SimpleGrid>
  )
}
