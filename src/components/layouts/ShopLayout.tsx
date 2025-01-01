import { PropsWithChildren } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui/navbar/Navbar';



interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}


export const ShopLayout = ( { pageDescription, title, children, imageFullUrl }: PropsWithChildren<Props> ) => {


  return (
    <>
      <Head>

        <title>{ title }</title>

        <meta name="description" content={ pageDescription } />

        <meta name="og:title" content={ title } />

        <meta name="og:description" content={ pageDescription } />
        <meta name="og:description" content={ pageDescription } />

        {
          imageFullUrl && (
            <meta name="og:image" content={ imageFullUrl } />
          )
        }

      </Head>

      <nav>
        <Navbar />
      </nav>

      {/* Sidebar */ }

      <main className="max-w-7xl mx-auto my-3">
        { children }
      </main>

      <footer>
        {/* TODO: Mi custom footer */ }
      </footer>
    </>
  );
};
