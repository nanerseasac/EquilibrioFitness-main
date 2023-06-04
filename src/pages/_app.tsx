import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/global'
import { Montserrat } from '@next/font/google'

const montserrat = Montserrat({
  subsets: ['latin']
})

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Equilibrio Fitness</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="theme-color"
          content="linear-gradient(180deg, #000000 -10.19%, #C00909 88.07%)"
        />
        <meta
          name="description"
          content="A simple project to show my favorites spot in the world."
        />
      </Head>
      <GlobalStyles />
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
