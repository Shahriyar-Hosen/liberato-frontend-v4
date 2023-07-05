/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import './global.css';

import { IChildren, IParamsLng } from '@/types';
import { dir } from 'i18next';
import { ThemeProvider } from 'next-themes';
import { languages } from '../i18n/settings';
import { Navbar } from './components/Navbar';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export interface IRootLayout extends IChildren, IParamsLng {}

export default function RootLayout({
  children,
  params: { lng },
}: // pageProps: { session },
IRootLayout) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <main>
          <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
            {/* <SessionProvider session={session}> */}
            <Navbar lng={lng} />
            {children}
            {/* </SessionProvider> */}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
