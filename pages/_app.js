import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <title>Research Titles Generator</title>
      <meta name="description" content="This tool randomly generates research title ideas for your reference or inspiration.
        Currently, the generated titles are for.
" />
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp
