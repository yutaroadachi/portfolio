import { Flex, FlexProps } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'
import { Footer, Header } from 'src/components/common'

export const AppLayout = ({
  children,
  ...props
}: PropsWithChildren<FlexProps>) => (
  <Flex direction="column" minH="100vh">
    <Header />
    <Flex as="main" direction="column" flexGrow={1} {...props}>
      {children}
    </Flex>
    <Footer />
  </Flex>
)
