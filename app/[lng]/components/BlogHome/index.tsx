/* eslint-disable prettier/prettier */

import { useTranslation } from '@/app/i18n';
import { ILngPath, IPosts } from '@/types';
import { IAuthor, IFeaturedMedia } from '@/types/blog-posts';
import { BlogHomeBase } from './BlogHomeBase';

export interface IBlogHome extends ILngPath, IPosts {
  featuredMedias: IFeaturedMedia[];
  media352: IFeaturedMedia;
  authors: IAuthor[];
}

export const BlogHome = async ({
  lng,
  posts,
  authors,
  featuredMedias,
  media352,
}: IBlogHome) => {
  const { t } = await useTranslation(lng, 'index');
  return (
    <BlogHomeBase
      t={t}
      posts={posts}
      authors={authors}
      featuredMedias={featuredMedias}
      media352={media352}
    />
  );
};
