'use client';
import { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';


interface ProvidersProps {
  children: ReactNode;
}

export default function Providers( { children }: ProvidersProps ) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        { children }
      </NextThemesProvider>
    </NextUIProvider>
  );
}
