/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */

import { IParamsLng } from '@/types';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { useTranslation } from '../i18n';
import { fallbackLng, languages } from '../i18n/settings';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Test } from './components/Test';

export async function generateMetadata({ params: { lng } }: IParamsLng) {
  const { t } = await useTranslation(lng);
  return { title: t('h1') };
}

export default async function Page({ params: { lng } }: IParamsLng) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng);

  return (
    <>
      <Test lng={lng} />
      <main>
        <Header heading={t('h1')} />
        <h2>
          <Trans t={t} i18nKey='welcome'>
            Welcome to Next.js v13 <small>appDir</small> and i18next
          </Trans>
        </h2>
        <div style={{ width: '100%' }}>
          <p>
            <Trans t={t} i18nKey='blog.text'>
              Check out the corresponding <a href={t('blog.link')}>blog post</a>{' '}
              describing this example.
            </Trans>
          </p>
          <a href={t('blog.link')}>
            <img
              style={{ width: '50%' }}
              src='https://locize.com/blog/next-13-app-dir-i18n/next-13-app-dir-i18n.jpg'
              alt=''
            />
          </a>
        </div>
        <hr style={{ marginTop: 20, width: '90%' }} />
        <div>
          <Link href={`/${lng}/second-page`}>
            <button type='button'>{t('to-second-page')}</button>
          </Link>
          <Link href={`/${lng}/client-page`}>
            <button type='button'>{t('to-client-page')}</button>
          </Link>
        </div>
      </main>
      <Footer lng={lng} />
    </>
  );
}