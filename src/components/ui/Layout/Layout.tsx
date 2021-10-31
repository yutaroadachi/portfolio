import { Container, ContainerProps, Flex } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'
import { Footer } from 'src/components/ui/Footer'
import { Header } from 'src/components/ui/Header'

export type LayoutProps = PropsWithChildren<ContainerProps>

export const Layout = ({ children, ...props }: LayoutProps) => (
  <Flex direction="column" minH="100vh">
    <Header />
    <Flex direction="column" flexGrow={1} as="main">
      <Container
        maxW={{ base: 'full', lg: 'container.md' }}
        px={{ base: 4, lg: 0 }}
        py={8}
        {...props}
      >
        {children}
      </Container>
    </Flex>
    <Footer />
  </Flex>
)
