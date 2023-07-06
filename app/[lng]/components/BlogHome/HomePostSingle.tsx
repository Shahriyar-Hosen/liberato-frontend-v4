/* eslint-disable prettier/prettier */

'use client';

import { useReadingTime } from '@/hooks/useReadingTime';
import { IAuthor, IFeaturedMedia, IPost } from '@/types/blog-posts';
import { wpApiUrl } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function HomePostSingle({ post }: { post: IPost }) {
  const [author, setAuthor] = useState<IAuthor>({
    name: '',
    simple_local_avatar: {
      full: '',
    },
  });
  const [featuredMedia, setFeaturedMedia] = useState<IFeaturedMedia>({
    source_url: '',
  });

  const { minutes, words } = useReadingTime(post.content.rendered);
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${wpApiUrl}/media/${post.featured_media}`)
      .then((res) => res.json())
      .then(setFeaturedMedia);

    fetch(`${wpApiUrl}/users/${post.author}`)
      .then((r) => r.json())
      .then(setAuthor);
  }, [post.featured_media, post.author]);

  const link = `/blog/${post.slug}`;
  if (author.simple_local_avatar.full === '' || featuredMedia.source_url === '')
    return null;
  return (
    <div
      key={post.title.rendered}
      className='flex flex-col overflow-hidden rounded-lg shadow-lg'
    >
      <div className='shrink-0'>
        <Image
          height={300}
          width={400}
          className='h-48 w-full object-cover'
          src={featuredMedia.source_url}
          alt=''
        />
      </div>
      <div className='flex flex-1 flex-col justify-between bg-white p-6 dark:bg-gray-700'>
        <div className='flex-1'>
          <Link href={link} className='mt-2 block'>
            <p
              className='text-xl font-semibold text-gray-900 dark:text-gray-200'
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div
              className='mt-3 text-base text-gray-500 dark:text-gray-300'
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </Link>
        </div>
        <div className='mt-6 flex items-center'>
          <div className='shrink-0'>
            <span className='sr-only'>{author.name}</span>
            <Image
              className='h-10 w-10 rounded-full'
              src={author.simple_local_avatar.full}
              width={40}
              height={40}
              alt={author.name}
            />
          </div>
          <div className='ml-3'>
            <p className='text-sm font-medium text-gray-900 dark:text-gray-200'>
              <span className='hover:underline'>{author.name}</span>
            </p>
            <div className='flex space-x-1 text-sm text-gray-500 dark:text-gray-400'>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('hr-HR')}
              </time>
              <span aria-hidden='true'>&middot;</span>
              <span>
                {minutes} min read ({words} words)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePostSingle;
