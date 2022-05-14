import { CloseIcon, HamburgerIcon, Icon } from '@chakra-ui/icons'
import {
  Box,
  BoxProps,
  chakra,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { LINKS } from 'src/constants/links'
import { Logo } from '../Logo'

export type HeaderProps = BoxProps

export const Header = (props: HeaderProps) => (
  <chakra.header bgColor="main" color="white" h={HEADER_HEIGHT} {...props}>
    <HStack
      justify="space-between"
      maxW={{ base: 'full', lg: 'container.md', xl: 'container.lg' }}
      h="full"
      mx={{ base: 4, lg: 'auto' }}
    >
      <Logo />
      <ForPC />
      <ForSP />
    </HStack>
  </chakra.header>
)

const ForPC = () => {
  return (
    <HStack display={{ base: 'none', md: 'flex' }} spacing={4}>
      {LINKS.map((link) => {
        return <_Link link={link} key={link.title} />
      })}
    </HStack>
  )
}

const ForSP = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <Icon
        boxSize={isOpen ? '24px' : '32px'}
        onClick={onOpen}
        as={isOpen ? CloseIcon : HamburgerIcon}
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        scrollBehavior="inside"
        motionPreset="slideInBottom"
      >
        <ModalContent
          bgColor="main"
          color="white"
          mt={HEADER_HEIGHT}
          borderRadius={0}
        >
          <ModalBody>
            <Stack spacing={4}>
              {LINKS.map((link) => {
                return <_Link link={link} key={link.title} />
              })}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}

const HEADER_HEIGHT = '64px'

const _Link = ({ link }: { link: typeof LINKS[number] }) => {
  return link.isExternal ? (
    <Link href={link.href} isExternal fontWeight="bold">
      {link.title}
    </Link>
  ) : (
    <NextLink href={link.href} passHref>
      <Link fontWeight="bold">{link.title}</Link>
    </NextLink>
  )
}
