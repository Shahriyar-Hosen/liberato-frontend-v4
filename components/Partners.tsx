import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ImageGalleryType } from 'types/about-us';

const imagePerRow = 4;

export default function Partners({
  imageGallery,
}: {
  imageGallery: ImageGalleryType[];
}) {
  const [next, setNext] = useState(imagePerRow);
  const handleMoreImage = () => {
    setNext(next + imagePerRow);
  };
  const { t } = useTranslation();

  return (
    <div className='bg-white py-24 dark:bg-gray-800 sm:py-32'>
      <h2 className='text-center text-4xl font-bold'>{t('about:partners')}</h2>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3 lg:grid-cols-4'>
          {imageGallery?.slice(0, next)?.map((image: ImageGalleryType) => {
            return (
              <Link
                href={image.link}
                rel='noopener noreferrer'
                target='_blank'
                key={image.url}
              >
                <div
                  className='col-span-1 flex items-center justify-center bg-gray-50 p-8 dark:bg-gray-800'
                  key={image.url}
                >
                  <div className='rounded bg-gray-400/5 p-8 sm:p-10'>
                    <Image
                      className='max-h-40 w-full object-contain'
                      src={image.url}
                      alt={image.alt}
                      width={258}
                      height={248}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {next < imageGallery?.length && (
        <div className='flex justify-center'>
          <button
            type='button'
            className='mt-4 inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onClick={handleMoreImage}
          >
            {t('about:load_more')}
          </button>
        </div>
      )}
    </div>
  );
}
