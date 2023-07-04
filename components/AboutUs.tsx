import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IAboutUsStats } from 'types/about-us';
import { aboutUsStats } from 'utils/about-us';

export default function AboutUs({ isHome = true }: { isHome: boolean }) {
  const { t } = useTranslation();
  const { locale: currentLocale } = useRouter();

  return (
    <div className='relative bg-white py-16 dark:bg-gray-800 sm:py-24'>
      <div className='lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8'>
        <div className='relative sm:py-16 lg:py-0'>
          <div
            aria-hidden='true'
            className='hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen'
          >
            <div className='absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 dark:bg-gray-700 lg:right-72' />
            <svg
              className='absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12'
              width={404}
              height={392}
              fill='none'
              viewBox='0 0 404 392'
            >
              <defs>
                <pattern
                  id='02f20b47-fd69-4224-a62a-4c9de5c763f7'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200 dark:text-gray-400'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill='url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)'
              />
            </svg>
          </div>
          <div className='relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20'>
            {/* Testimonial card */}
            <div className='relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl'>
              <Image
                width={200}
                height={200}
                className='absolute inset-0 h-full w-full object-cover'
                src='/about.jpg'
                alt='Liberato talk 2021'
              />
              <div className='absolute inset-0 bg-indigo-500 mix-blend-multiply' />
              <div className='absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-60' />
              <div className='relative px-8'>
                <blockquote className='mt-8'>
                  <div className='relative text-lg font-medium text-white md:grow'>
                    <svg
                      className='absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 text-indigo-400'
                      fill='currentColor'
                      viewBox='0 0 32 32'
                      aria-hidden='true'
                    >
                      <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                    </svg>
                    <p className='relative'>
                      {t('common:testimonial_pocetna')}
                    </p>
                  </div>

                  <footer className='mt-4'>
                    <p className='text-base font-semibold text-indigo-200'>
                      Stipo Margić, {t('common:testimonial_pocetna_potpis')}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className='relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0'>
          {/* Content area */}
          <div className='pt-12 sm:pt-16 lg:pt-20'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl'>
              {t('about:title')}
            </h2>
            <div className='prose prose-indigo mt-6 space-y-6 text-gray-500 dark:text-gray-300'>
              <p className='text-lg'>{t('about:paragraph_1')}</p>
              <p className='text-base leading-7'>{t('about:paragraph_2')}</p>
              <p className='text-base leading-7'>{t('about:paragraph_3')}</p>
              <ul>
                <li>{t('about:paragraph_31')}</li>
                <li>{t('about:paragraph_32')}</li>
                <li>{t('about:paragraph_33')}</li>
              </ul>
              <p className='text-base leading-7'>{t('about:paragraph_4')}</p>
            </div>
          </div>

          {/* Stats section */}
          <div className='mt-10'>
            <dl className='grid grid-cols-2 gap-x-4 gap-y-8'>
              {/* @ts-ignore */}
              {aboutUsStats[currentLocale].map((stat: IAboutUsStats) => (
                <div
                  key={stat.label}
                  className='border-t-2 border-gray-100 pt-6'
                >
                  <dt className='text-base font-medium text-gray-500 dark:text-gray-300'>
                    {stat.label}
                  </dt>
                  <dd className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200'>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            {isHome && (
              <div className='mt-10'>
                <Link
                  href='/about'
                  locale={currentLocale}
                  className='text-base font-medium text-indigo-600'
                >
                  {t('common:find_out_about_text')}
                  <span aria-hidden='true'> &rarr;</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
