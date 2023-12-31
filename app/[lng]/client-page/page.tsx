/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */

'use client';

import { IParamsLng } from '@/types';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslation } from '../../i18n/client';
import { Footer } from '../components/Footer/client';
import { Header } from '../components/Header';

export default function Page({ params: { lng } }: IParamsLng) {
  const { t } = useTranslation(lng, 'client-page');
  const [counter, setCounter] = useState(0);
  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <p>{t('counter', { count: counter })}</p>
        <div>
          <button onClick={() => setCounter(Math.max(0, counter - 1))}>
            -
          </button>
          <button onClick={() => setCounter(Math.min(10, counter + 1))}>
            +
          </button>
        </div>
        <Link href={`/${lng}/second-client-page`}>
          {t('to-second-client-page')}
        </Link>
        <Link href={`/${lng}`}>
          <button type='button'>{t('back-to-home')}</button>
        </Link>
      </main>
      <Footer lng={lng} path='/client-page' />
    </>
  );
}
