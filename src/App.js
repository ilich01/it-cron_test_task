import React from 'react'

export default function MyApp({ Component, pageProps }) {
  return (
    <div id="root">
      <Component {...pageProps} />
    </div>
  )
}
