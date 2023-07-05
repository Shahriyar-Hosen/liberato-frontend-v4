/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import './global.css';

import { IChildren, IParamsLng } from '@/types';
import { dir } from 'i18next';
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
          {/* <SessionProvider session={session}> */}
          <Navbar lng={lng} />
          {children}
          {/* </SessionProvider> */}
        </main>
      </body>
    </html>
  );
}
