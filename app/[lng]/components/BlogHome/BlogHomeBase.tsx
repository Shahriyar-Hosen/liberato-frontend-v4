/* eslint-disable prettier/prettier */
/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { IPosts, IT } from '@/types';
import { IAuthor, IFeaturedMedia, IPost } from '@/types/blog-posts';
import HomePostSingle from './HomePostSingle';

export interface BlogHome extends IT, IPosts {
  featuredMedias: IFeaturedMedia[];
  authors: IAuthor[];
}

export function BlogHomeBase({ t, posts, authors, featuredMedias }: BlogHome) {
  // console.log({ posts });

  return (
    <div className='relative bg-gray-50 px-6 pt-16 pb-20 dark:bg-gray-800 lg:px-8 lg:pt-24 lg:pb-28'>
      <div className='absolute inset-0'>
        <div className='h-1/3 bg-white dark:bg-gray-800 sm:h-2/3' />
      </div>
      <div className='relative mx-auto max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl'>
            {t('fourth_title')}
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-300 sm:mt-4'>
            {t('fourth_title_subtitle')}
          </p>
        </div>
        <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
          {posts.length >= 1 ? (
            posts.map((post: IPost) => (
              <HomePostSingle
                key={post.id}
                post={post}
                featuredMedias={featuredMedias}
                author={authors?.filter((item) => item.id === post?.author)[0]}
              />
            ))
          ) : (
            <h1>Kiccu pacci na😥😥😥</h1>
          )}
        </div>
      </div>
    </div>
  );
}
