/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { IParamsLng, IPosts } from '@/types';
// import { wpApiUrl } from '@/utils/api';
// import { GetStaticProps } from 'next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from '../i18n';
import { fallbackLng, languages } from '../i18n/settings';
import { AboutUsHome, Cards, Hero } from './components';

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   const res = await fetch(`${wpApiUrl}/posts?per_page=3&page=1&lang=${locale}`);

//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//       ...(await serverSideTranslations(locale!, ['index', 'common'])),
//     },
//     revalidate: 10,
//   };
// };

export async function generateMetadata({ params: { lng } }: IParamsLng) {
  const { t } = await useTranslation(lng);
  return { title: t('h1') };
}

export interface IHome extends IParamsLng, IPosts {}

export default async function Home({ params: { lng } }: IHome) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // const { t } = await useTranslation(lng);

  return (
    <>
      <Hero lng={lng} />
      <Cards lng={lng} />
      <AboutUsHome lng={lng} />
      {/* <BlogHome lng={lng} posts={posts} /> */}
    </>
  );
}
