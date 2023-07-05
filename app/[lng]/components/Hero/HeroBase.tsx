/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */

import { IT } from '@/types';
import { TFunction } from 'i18next';
import Image from 'next/image';
import Link from 'next/link';

interface IHeroBase extends IT {
  commonT: TFunction<string, undefined>;
}

export function HeroBase({ t, commonT }: IHeroBase) {
  return (
    <div className='relative bg-white dark:bg-gray-800'>
      <div className='mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8'>
        <div className='px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h1 className='mt-24   text-4xl font-bold italic tracking-tight text-gray-900 dark:text-gray-200 sm:mt-10 sm:text-6xl'>
              {t('hero_title')}
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300'>
              {t('hero_subtitle')}
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <Link
                href='/about'
                className='rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                {commonT('find_out_more_btn')}
              </Link>
            </div>
          </div>
        </div>
        <div className='relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0'>
          <Image
            className='aspect-[3/2] w-full bg-gray-50 object-cover dark:bg-gray-800 lg:absolute lg:inset-0 lg:h-full'
            height={1000}
            width={1000}
            alt='hero image'
            src='/hero.svg'
          />
        </div>
      </div>
    </div>
  );
}
