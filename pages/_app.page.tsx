import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from './layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <main className="">
        <Component {...pageProps} />
      </main>
    </RootLayout>
  );
}

export default App;
