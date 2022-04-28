import { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Ioasys test</title>
          <link rel="shortcut icon" href="/img/icon-512.png" />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <meta name="description" content="Test project for company Ioasys" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default App
