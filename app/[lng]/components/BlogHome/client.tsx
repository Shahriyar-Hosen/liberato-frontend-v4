/* eslint-disable prettier/prettier */

'use client';

import { useTranslation } from '@/app/i18n/client';
import { IBlogHome } from '.';
import { BlogHomeBase } from './BlogHomeBase';

export function BlogHome({
  lng,
  posts,
  authors,
  featuredMedias,
  media352,
}: IBlogHome) {
  const { t } = useTranslation(lng, 'index');
  return (
    <BlogHomeBase
      t={t}
      posts={posts}
      authors={authors}
      featuredMedias={featuredMedias}
      media352={media352}
    />
  );
}
