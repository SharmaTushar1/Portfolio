import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from './layout';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Head>
        <title>Tushar Sharma</title>
      </Head>
      <main className="">
        <Component {...pageProps} />
      </main>
    </RootLayout>
  );
}

export default App;
