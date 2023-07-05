/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */

import { IParamsLng } from '@/types';
import { useTranslation } from '../i18n';
import { fallbackLng, languages } from '../i18n/settings';
import { Hero } from './components/Hero';

export async function generateMetadata({ params: { lng } }: IParamsLng) {
  const { t } = await useTranslation(lng);
  return { title: t('h1') };
}

export default async function Page({ params: { lng } }: IParamsLng) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // const { t } = await useTranslation(lng);
  return <Hero lng={lng} />;
}
