import { useReadingTime } from 'hooks/useReadingTime';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IAuthor, IFeaturedMedia, IPostPreview } from 'types/blog-posts';
import { wpApiUrl } from 'utils/api';

export default function PostPreview({
  title,
  date,
  excerpt,
  slug,
  content,
  coverImage,
  authorId,
}: IPostPreview) {
  const [author, setAuthor] = useState<IAuthor>();
  const [featuredMedia, setFeaturedMedia] = useState<IFeaturedMedia>({
    source_url: '',
  });

  const { minutes, words } = useReadingTime(content);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${wpApiUrl}/media/${coverImage}`)
      .then((res) => res.json())
      .then(setFeaturedMedia);

    fetch(`${wpApiUrl}/users/${authorId}`)
      .then((r) => r.json())
      .then(setAuthor);
  }, [coverImage, authorId]);

  const link = `/blog/${slug}`;

  return featuredMedia.source_url !== '' && author ? (
    <div key={title}>
      <div className='shrink-0'>
        <Image
          height={300}
          width={400}
          className='w-full rounded-lg object-cover sm:h-48 lg:h-96'
          src={featuredMedia?.source_url}
          alt=''
        />
      </div>
      <Link href={link} className='mt-2 block'>
        <p
          className='text-xl font-semibold text-gray-900 dark:text-gray-200'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div
          className='mt-3 text-base text-gray-500 dark:text-gray-300'
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
      </Link>
      <div className='mt-3'>
        <div className='mt-6 flex items-center'>
          <div className='shrink-0'>
            <span className='sr-only'>{author?.name}</span>
            <Image
              className='h-10 w-10 rounded-full'
              src={author.simple_local_avatar.full}
              alt={author?.name}
              width={40}
              height={40}
            />
          </div>
          <div className='ml-3'>
            <p className='text-sm font-medium text-gray-900 dark:text-gray-200'>
              <a href={author?.name} className='hover:underline'>
                {author?.name}
              </a>
            </p>
            <div className='flex space-x-1 text-sm text-gray-500 dark:text-gray-400'>
              <time dateTime={date}>
                {new Date(date).toLocaleDateString('hr-HR')}
              </time>
              <span aria-hidden='true'>&middot;</span>
              <span>
                {minutes} min read ({words} words)
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link
        href={link}
        className='mt-8 flex text-base font-semibold text-indigo-600 hover:text-indigo-500'
      >
        Read full story
      </Link>
    </div>
  ) : (
    <div>Loading...</div>
  );
}
