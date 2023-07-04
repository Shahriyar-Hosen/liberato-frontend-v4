/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */
import './global.css';

import { IChildren, IParamsLng } from '@/types';
import { dir } from 'i18next';
import { languages } from '../i18n/settings';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export interface IRootLayout extends IChildren, IParamsLng {}

export default function RootLayout({ children, params: { lng } }: IRootLayout) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  );
}
