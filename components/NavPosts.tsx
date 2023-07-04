import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IFeaturedMedia, IPost } from 'types/blog-posts';
import { wpApiUrl } from 'utils/api';

function NavPosts({ post }: { post: IPost }) {
  const [featuredMedia, setFeaturedMedia] = useState<IFeaturedMedia>({
    source_url: '',
  });

  useEffect(() => {
    fetch(`${wpApiUrl}/media/${post.featured_media}`)
      .then((res) => res.json())
      .then(setFeaturedMedia);
  }, [post.featured_media]);

  return (
    <li key={post.id} className='flow-root'>
      <Link
        href={`/blog/${post.slug}`}
        className='-m-3 flex rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-700'
      >
        <div className='hidden shrink-0 sm:block'>
          <Image
            width={60}
            height={60}
            className='h-20 w-32 rounded-md object-cover'
            src={featuredMedia.source_url}
            alt={post.title.rendered}
          />
        </div>
        <div className='w-0 flex-1 sm:ml-8'>
          <h4 className='truncate text-base font-medium text-gray-900 dark:text-gray-200'>
            {post.title.rendered}
          </h4>
          <p
            className='mt-1 text-sm text-gray-500 dark:text-gray-300'
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered.slice(0, 120),
            }}
          />
        </div>
      </Link>
    </li>
  );
}

export default NavPosts;
