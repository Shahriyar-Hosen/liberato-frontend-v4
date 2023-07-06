/* eslint-disable prettier/prettier */

import { useTranslation } from '@/app/i18n';
import { ILngPath, IPosts } from '@/types';
import { BlogHomeBase } from './BlogHomeBase';

export interface IBlogHome extends ILngPath, IPosts {}

export const BlogHome = async ({ lng, posts }: IBlogHome) => {
  const { t } = await useTranslation(lng, 'test');
  return <BlogHomeBase t={t} posts={posts} />;
};
