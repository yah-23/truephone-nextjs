import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import { FileProvider } from '../contexts/FileContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <FileProvider>
        <Component {...pageProps} />
      </FileProvider>
    </ChakraProvider>
  )
}

export default MyApp
