/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */

import { IParamsLng } from '@/types';
import Link from 'next/link';
import { useTranslation } from '../../i18n';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export async function generateMetadata({ params: { lng } }: IParamsLng) {
  const { t } = await useTranslation(lng, 'second-page');
  return { title: t('h1') };
}

export default async function Page({ params: { lng } }: IParamsLng) {
  const { t } = await useTranslation(lng, 'second-page');
  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <Link href={`/${lng}`}>
          <button type='button'>{t('back-to-home')}</button>
        </Link>
      </main>
      <Footer lng={lng} path='/second-page' />
    </>
  );
}
