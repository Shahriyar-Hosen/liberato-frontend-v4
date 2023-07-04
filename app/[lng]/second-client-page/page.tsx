/* eslint-disable prettier/prettier */

'use client';

import { IParamsLng } from '@/types';
import Link from 'next/link';
import { useTranslation } from '../../i18n/client';
import { Footer } from '../components/Footer/client';
import { Header } from '../components/Header';

export default function Page({ params: { lng } }: IParamsLng) {
  const { t } = useTranslation(lng, 'second-client-page');

  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <Link href={`/${lng}`}>
          <button type='button'>{t('back-to-home')}</button>
        </Link>
      </main>
      <Footer lng={lng} path='/second-client-page' />
    </>
  );
}
