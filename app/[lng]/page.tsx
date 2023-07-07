/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */

import { IParamsLng, IPosts } from '@/types';
import { IPost } from '@/types/blog-posts';
import { wpApiUrl } from '@/utils/api';
import axios from 'axios';
import { useTranslation } from '../i18n';
import { fallbackLng, languages } from '../i18n/settings';
import { AboutUsHome, BlogHome, Cards, Hero } from './components';

export async function generateMetadata({ params: { lng } }: IParamsLng) {
  const { t } = await useTranslation(lng, 'common');
  return { title: t('title') };
}

export interface IHome extends IParamsLng, IPosts {}

async function fetchPosts(lng: string): Promise<IPost[]> {
  try {
    const response = await axios.get(
      `${wpApiUrl}/posts?per_page=3&page=1&lang=${lng}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching posts', error);
    return [];
  }
}

export default async function Home({ params: { lng } }: IHome) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // const { t } = await useTranslation(lng);

  let posts: IPost[] = [];

  posts = await fetchPosts(lng);

  return (
    <>
      <Hero lng={lng} />
      <Cards lng={lng} />
      <AboutUsHome lng={lng} />
      <BlogHome lng={lng} posts={posts} />
    </>
  );
}
