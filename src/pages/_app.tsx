import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import Providers from '@/components/ui/Providers';

export default function App( { Component, pageProps }: AppProps ) {
  return (
    <Providers>
      <Component { ...pageProps } />
    </Providers>
  );
}
