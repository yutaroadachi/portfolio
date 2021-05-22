import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import React from 'react'
import theme from 'src/theme'

const AllTheProviders = ({ children }: { children: JSX.Element }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

const customRender = (ui: JSX.Element, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
