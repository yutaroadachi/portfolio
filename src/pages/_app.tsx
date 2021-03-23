import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import theme from 'src/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
