/* eslint-disable prettier/prettier */

'use client';

import { useTranslation } from '@/app/i18n/client';
import { IBlogHome } from '.';
import { BlogHomeBase } from './BlogHomeBase';

export function BlogHome({ lng, posts }: IBlogHome) {
  const { t } = useTranslation(lng, 'test');
  return <BlogHomeBase t={t} posts={posts} />;
}
