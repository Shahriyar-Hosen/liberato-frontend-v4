import { useTranslation } from 'next-i18next';
import { IPost } from 'types/blog-posts';
import HomePostSingle from '../app/[lng]/components/BlogHome/HomePostSingle';

export default function BlogHome({ posts }: { posts: IPost[] }) {
  const { t } = useTranslation();
  return (
    <div className='relative bg-gray-50 px-6 pb-20 pt-16 dark:bg-gray-800 lg:px-8 lg:pb-28 lg:pt-24'>
      <div className='absolute inset-0'>
        <div className='h-1/3 bg-white dark:bg-gray-800 sm:h-2/3' />
      </div>
      <div className='relative mx-auto max-w-7xl'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl'>
            {t('index:fourth_title')}
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-gray-300 sm:mt-4'>
            {t('index:fourth_title_subtitle')}
          </p>
        </div>
        <div className='mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3'>
          {posts.map((post: IPost) => (
            <HomePostSingle key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
