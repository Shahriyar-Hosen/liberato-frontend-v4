/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { IPosts, IT } from '@/types';

export interface BlogHome extends IT, IPosts {}

export function BlogHomeBase({ t, posts }: BlogHome) {
  console.log("PostsBlogBase", posts);

  return (
    <div>
      <h1>{t('title')}</h1>
      <br />
      <h3>{t('subTitle')}</h3>
      <br />
      <p>{t('des')}</p>
    </div>
  );
}
