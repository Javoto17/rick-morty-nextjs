import React from 'react'
import Head from 'next/head'

import '../styles/app.css'

import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp ({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Rick and Morty</title>
        <link rel="manifest" href="/assets/img/ico/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/img/ico/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/img/ico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/img/ico/favicon-16x16.png"
        />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
