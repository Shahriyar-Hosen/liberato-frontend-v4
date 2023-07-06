/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import './global.css';

import { IChildren, IParamsLng } from '@/types';
import { dir } from 'i18next';
import { ThemeProvider } from 'next-themes';
import { languages } from '../i18n/settings';
import { Footer, Navbar } from './components';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export interface IRootLayout extends IChildren, IParamsLng {}

export default function RootLayout({ children, params: { lng } }: IRootLayout) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <main>
          <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
            <Navbar lng={lng} />
            {children}
            <Footer lng={lng} />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
