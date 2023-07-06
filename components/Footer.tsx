/* eslint-disable prettier/prettier */

'use client';

import { IMore, ISocial } from '@/types/navbar';
import { more } from '@/utils/navbar';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import NewsletterForm from '../app/[lng]/components/Footer/NewsletterForm';

const social: Array<ISocial> = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/UdrugaLiberato',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/liberato.hr',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/liberato',
    icon: (props) => (
      <svg viewBox='0 0 32 32' {...props}>
        <path
          d='M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z'
          fill='#fff'
          fillRule='evenodd'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
];
export default function Footer() {
  const { t } = useTranslation();
  const { locale: currentLocale } = useRouter();

  return (
    <footer
      className='bg-white shadow-2xl shadow-indigo-900 dark:bg-gray-900'
      aria-labelledby='footer-heading'
    >
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-6 pb-8 pt-24 sm:pt-24 lg:px-8'>
        <div className='xl:grid xl:grid-cols-2 xl:gap-8'>
          <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div className='flex flex-col items-center'>
                <Image
                  src='/partners/nacionalna_zaklada.png'
                  alt='Nacionalna zaklada'
                  width={599}
                  height={599}
                  className='max-h-40 w-full object-contain'
                />
                <p className='text-center text-sm lg:mt-2'>
                  Udruga Liberato je korisnik institucionalne podrške Nacionalne
                  zaklade za razvoj civilnoga društva za stabilizaciju i/ili
                  razvoj udruge.
                </p>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-black dark:text-white'>
                  Liberato
                </h3>
                <ul className='mt-6 space-y-4'>
                  {/* @ts-ignore */}
                  {more[currentLocale].slice(0, 4).map((item: IMore) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className='text-sm leading-6 text-gray-700 hover:text-black dark:text-gray-300'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='mt-10 xl:mt-0'>
              <h3 className='text-sm font-semibold leading-6 text-black dark:text-white'>
                {t('common:newsletter')}
              </h3>
              <p className='mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300'>
                {t('common:newsletter_subtitle')}
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24'>
          <div className='flex space-x-6 md:order-2'>
            {social.map((item: ISocial) => (
              <Link
                referrerPolicy='no-referrer'
                target='_blank'
                key={item.name}
                href={item.href}
                className='text-gray-500 hover:text-gray-400'
              >
                <span className='sr-only'>{item.name}</span>
                {/* @ts-ignore */}
                <item.icon className='h-6 w-6' aria-hidden='true' />
              </Link>
            ))}
          </div>
          <p className='mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0'>
            &copy; {new Date().getFullYear()} {t('common:copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
