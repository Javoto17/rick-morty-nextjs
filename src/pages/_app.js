import React from 'react'
import Head from 'next/head'

import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
