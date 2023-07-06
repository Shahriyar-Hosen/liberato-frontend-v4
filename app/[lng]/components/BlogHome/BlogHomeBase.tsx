/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { IPosts, IT } from '@/types';

export interface BlogHome extends IT, IPosts {}

export function BlogHomeBase({ t, posts }: BlogHome) {
  console.log('PostsBlogBase', posts);

  return (
    <div>
      <h1 className='text-center text-5xl'>Blog Home Section {t('title')}</h1>
    </div>
  );
}
