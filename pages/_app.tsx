import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import '../styles/Main.css'
import '../styles/Navbar.css'
import '../styles/Hero.css'


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
      loadingElement.classList.add('loaded');
    }
  }, []);
  return (
      <Component {...pageProps} />
  )
}
