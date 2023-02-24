import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link';

export default function Document() {
  return (
    <Html>
      <Head>
      <Link rel="manifest" href="/manifest.json"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}