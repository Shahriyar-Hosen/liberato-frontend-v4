/* eslint-disable prettier/prettier */
/* eslint-disable import/no-cycle */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */

import { IParamsLng, IPosts } from '@/types';
import {
  IAuthor,
  IAuthorData,
  IFeaturedMedia,
  IPost,
} from '@/types/blog-posts';
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

const fetchFeaturedMedia = async (media: number) => {
  try {
    const response = await axios.get(`${wpApiUrl}/media/${media}`);
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching posts', error);
    return [];
  }
};

const fetchAuthors = async () => {
  try {
    const response = await axios.get(`${wpApiUrl}/users`);

    return response.data.map((user: IAuthorData) => {
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

// const fetchAllAuthor = async (lng: string) => {
//   try {
//     const posts = await fetchPosts(lng);
//     const authors: any[] = [];
//     let test = {};

//     posts.map(async (post) => {
//       test = {
//         ...test,
//         [post.author]: await fetchAuthor().then((data) => authors.push(data)),
//       };
//       // console.log(test);
//     });

//     return authors;
//   } catch (error) {
//     console.error('Error fetching posts', error);
//     return [];
//   }
// };

export default async function Home({ params: { lng } }: IHome) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // const { t } = await useTranslation(lng);

  let posts: IPost[] = [];
  // const authors: IAuthor[] = [];

  posts = await fetchPosts(lng);

  const featuredMedias: IFeaturedMedia[] = await fetchFeaturedMedia(401);
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
      />
    </>
  );
}
