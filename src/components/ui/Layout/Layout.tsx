import { Container, ContainerProps, Flex } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export type LayoutProps = ContainerProps

export const Layout = ({
  children,
  ...props
}: PropsWithChildren<LayoutProps>) => (
  <Flex direction="column" minH="100vh">
    <Header />
    <Flex direction="column" flexGrow={1} as="main">
      <Container
        maxW={{ base: 'full', lg: 'container.md', xl: 'container.lg' }}
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

export const createGetLayout = (
  layoutProps?: LayoutProps
): ((page: React.ReactElement) => React.ReactNode) => {
  return function getLayout(page: React.ReactElement): React.ReactNode {
    return <Layout {...layoutProps}>{page}</Layout>
  }
}
