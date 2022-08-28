import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shorcut icon" href="https://github.com/brunood07.png" />
        <link rel="apple-touch-icon" href="https://github.com/brunood07.png" />

        <meta
          name="description"
          content="A simples project starter to work with Typescript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
