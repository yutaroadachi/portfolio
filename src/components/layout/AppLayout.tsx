import { Flex, FlexProps } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'
import { Footer, Header } from 'src/components/common'

export const AppLayout = ({
  children,
  ...props
}: PropsWithChildren<FlexProps>) => (
  <Flex direction="column" minH="100vh">
    <Header />
    <Flex direction="column" flexGrow={1} py={8} as="main" {...props}>
      {children}
    </Flex>
    <Footer />
  </Flex>
)
