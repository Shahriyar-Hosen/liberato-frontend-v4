/* eslint-disable prettier/prettier */
/* eslint-disable import/no-cycle */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */

import { IParamsLng, IPosts } from '@/types';
import { IAuthor, IFeaturedMedia, IPost } from '@/types/blog-posts';
import { wpApiUrl } from '@/utils/api';
import axios from 'axios';
import { useTranslation } from '../i18n';
import { fallbackLng, languages } from '../i18n/settings';
import { AboutUsHome, BlogHome, Cards, Hero } from './components';

export async function generateMetadata({ params: { lng } }: IParamsLng) {
  const { t } = await useTranslation(lng, 'common');
  return { title: t('title') };
}

export interface IHome extends IParamsLng, IPosts {
  featuredMedia: IFeaturedMedia;
  author: IAuthor;
}

async function fetchPosts(lng: string): Promise<IPost[]> {
  try {
    const response = await axios.get(
      `${wpApiUrl}/posts?per_page=3&page=1&lang=${lng}`
    );
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console, sonarjs/no-duplicate-string
    console.error('Error fetching posts', error);
    return [];
  }
}

const fetchFeaturedMedias = async () => {
  try {
    const response = await axios.get(`${wpApiUrl}/media`);
    return response?.data?.map((data: IFeaturedMedia) => {
      return {
        id: data.id,
        source_url: data.source_url,
      };
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching posts', error);
    return [];
  }
};

const fetchMedia352 = async () => {
  try {
    const res = await axios.get(`${wpApiUrl}/media/352`);
    return {
      id: res.data.id || 0,
      source_url: res.data.source_url || '',
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching posts', error);
    return {
      id: 0,
      source_url: '',
    };
  }
};

const fetchAuthors = async () => {
  try {
    const response = await axios.get(`${wpApiUrl}/users`);

    return response.data.map((user: IAuthor) => {
      return {
        id: user.id,
        name: user.name,
        simple_local_avatar: {
          full: user.simple_local_avatar.full,
        },
      };
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching posts', error);
    return [];
  }
};

export default async function Home({ params: { lng } }: IHome) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;

  const posts = await fetchPosts(lng);

  const featuredMedias: IFeaturedMedia[] = await fetchFeaturedMedias();
  const media352: IFeaturedMedia = await fetchMedia352();
  const author: IAuthor[] = await fetchAuthors();

  return (
    <>
      <Hero lng={lng} />
      <Cards lng={lng} />
      <AboutUsHome lng={lng} />
      <BlogHome
        lng={lng}
        posts={posts}
        authors={author}
        featuredMedias={featuredMedias}
        media352={media352}
      />
    </>
  );
}
