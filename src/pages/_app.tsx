import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import theme from 'src/theme'
import 'typeface-montserrat'

export default function _App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
