/* eslint-disable prettier/prettier */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { languages } from '@/app/i18n/settings';
import { ITLngPath } from '@/types';
import { IPost } from '@/types/blog-posts';
import { IMore, IProjects } from '@/types/navbar';
import { wpApiUrl } from '@/utils/api';
import { more, navigation, projects } from '@/utils/navbar';
import { Menu, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { getServerSession } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import { authOptions } from '../../api/auth/[...nextauth]';
import NavPosts from './NavPosts';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export async function NavbarBase({ t, lng }: ITLngPath) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [posts, setPosts] = useState([]);
  const pathname = usePathname();
  const locales = languages;
  const currentLocale = lng;

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className='h-8 w-8 text-yellow-500 '
          role='button'
          onClick={() => setTheme('light')}
        />
      );
    }
    return (
      <MoonIcon
        className='h-8 w-8 text-gray-900 '
        role='button'
        onClick={() => setTheme('dark')}
      />
    );
  };

  useEffect(() => {
    fetch(`${wpApiUrl}/posts?per_page=2&page=1&lang=${currentLocale}`)
      .then((res) => res.json())
      .then(setPosts);
  }, [currentLocale]);
  // const { data: session } = useSession();
  const session = await getServerSession(authOptions);

  return (
    <Popover className='relative bg-white dark:bg-gray-800'>
      <div
        className='pointer-events-none absolute inset-0 z-30 shadow'
        aria-hidden='true'
      />
      <div className='relative z-20'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:py-4 md:justify-start md:space-x-10 lg:px-8'>
          <div>
            <Link
              href={`/${currentLocale}`}
              className='flex'
              locale={currentLocale}
            >
              <span className='sr-only'>Liberato</span>
              <Image
                className='h-8 w-auto sm:h-10'
                src='/logo.svg'
                width={80}
                height={60}
                alt='Liberato'
              />
            </Link>
          </div>

          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
              <span className='sr-only'>Open menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>

          <div className='hidden md:flex md:flex-1 md:items-center md:justify-between'>
            <Popover.Group as='nav' className='flex space-x-10'>
              <Link
                href={`/${currentLocale}`}
                className='text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-100'
              >
                {/* @ts-ignore */}
                {navigation[currentLocale].home}
              </Link>
              <Link
                href={`/${currentLocale}/news`}
                className='text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-100'
              >
                {/* @ts-ignore */}
                {navigation[currentLocale].news}
              </Link>
              <Popover>
                {({ open, close }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-100 dark:focus:ring-indigo-800 dark:ring-offset-gray-800'
                      )}
                    >
                      {/* @ts-ignore */}
                      <span>{navigation[currentLocale].projects}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 -translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 -translate-y-1'
                    >
                      <Popover.Panel className='absolute inset-x-0 top-full z-10 hidden bg-white shadow-lg dark:bg-gray-800 md:block'>
                        <div className='mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16'>
                          {/* @ts-ignore */}
                          {projects[currentLocale].map((item: IProjects) => (
                            <Link
                              locale={currentLocale}
                              onClick={close}
                              key={item.name}
                              href={{
                                // eslint-disable-next-line sonarjs/no-duplicate-string
                                pathname: `${currentLocale}/projects/[name]`,
                                query: { name: item.href },
                              }}
                              className='-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700'
                            >
                              <div className='flex md:h-full lg:flex-col'>
                                <div className='shrink-0'>
                                  <span className='inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12'>
                                    <item.icon
                                      className='h-6 w-6'
                                      aria-hidden='true'
                                    />
                                  </span>
                                </div>
                                <div className='ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4'>
                                  <div>
                                    <p className='text-base font-medium text-gray-900 dark:text-gray-100'>
                                      {item.name}
                                    </p>
                                    <p className='mt-1 text-sm text-gray-500 dark:text-gray-300'>
                                      {item.description}
                                    </p>
                                  </div>
                                  <p className='mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-500 lg:mt-4'>
                                    {t('common:learn_more')}
                                    <span aria-hidden='true'> &rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link
                href={`/${currentLocale}/blog`}
                className='text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-100'
              >
                {/* @ts-ignore */}
                {navigation[currentLocale].blog}
              </Link>

              <Popover>
                {({ open, close }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white dark:bg-gray-800 text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-100 dark:focus:ring-indigo-800 dark:ring-offset-gray-800'
                      )}
                    >
                      {/* @ts-ignore */}
                      <span>{navigation[currentLocale].more}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 -translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 -translate-y-1'
                    >
                      <Popover.Panel className='absolute inset-x-0 top-full z-10 hidden shadow-lg md:block'>
                        <div className='absolute inset-0 flex'>
                          <div className='w-1/2 bg-white dark:bg-gray-800' />
                          {/* <div className='w-1/2 bg-gray-50' /> */}
                        </div>
                        <div className='relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
                          <nav className='grid gap-y-10 bg-white px-4 py-8 dark:bg-gray-800 sm:grid-cols-2 sm:gap-x-8 sm:px-6 sm:py-12 lg:px-8 xl:pr-12'>
                            <div>
                              <h3 className='text-base font-medium text-gray-500 dark:text-gray-400'>
                                Association
                              </h3>
                              <ul className='mt-5 space-y-6'>
                                {/* @ts-ignore */}
                                {more[currentLocale].map((item: IMore) => (
                                  <li key={item.name} className='flow-root'>
                                    <Link
                                      onClick={close}
                                      href={item.href}
                                      className='-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-700'
                                    >
                                      <item.icon
                                        className='h-6 w-6 shrink-0 text-gray-400'
                                        aria-hidden='true'
                                      />
                                      <span className='ml-4'>{item.name}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </nav>
                          <div className='bg-gray-50 px-4 py-8 dark:bg-gray-800 sm:px-6 sm:py-12 lg:px-8 xl:pl-12'>
                            <div>
                              <h3 className='text-base font-medium text-gray-500 dark:text-gray-300'>
                                {t('common:from_our_blog')}
                              </h3>
                              <ul className='mt-6 space-y-6'>
                                {posts.map((post: IPost) => (
                                  <NavPosts key={post.id} post={post} />
                                ))}
                              </ul>
                            </div>
                            <div className='mt-6 text-sm font-medium'>
                              <Link
                                href='/blog'
                                className='text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400'
                              >
                                {t('common:view_all_posts')}
                                <span aria-hidden='true'> &rarr;</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Link
                href={`/${currentLocale}/contact`}
                className='text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-100'
              >
                {/* @ts-ignore */}
                {navigation[currentLocale].contact}
              </Link>
            </Popover.Group>

            {/* Lng Change */}
            <ul className='flex justify-end'>
              {locales!.map((locale) => (
                <Link
                  href={`/${locale + pathname}`}
                  locale={locale}
                  key={locale}
                  className={
                    locale === currentLocale
                      ? 'mx-2 border-b-2 border-b-indigo-400 uppercase'
                      : 'uppercase'
                  }
                >
                  {locale}
                </Link>
              ))}
            </ul>

            {renderThemeChanger()}

            {session?.user == null ? (
              <div className='flex items-center md:ml-12'>
                <Link
                  href={`/${currentLocale}/login`}
                  className='ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                >
                  {t('common:sign_in')}
                </Link>
              </div>
            ) : (
              <Menu as='div' className='relative ml-3'>
                <div>
                  <Menu.Button className='flex items-center rounded-full bg-white p-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500'>
                    <span className='sr-only'>Open user menu</span>
                    <Image
                      width={32}
                      height={32}
                      className='mr-1 h-8 w-8 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt={session?.user?.name ?? 'User profile image'}
                    />
                    Hello, {session?.user?.name}
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black focus:outline-none'>
                    <Menu.Item>
                      {({ close }) => (
                        <Link
                          onClick={close}
                          href={`/${currentLocale}/admin`}
                          className='block bg-red-700 px-4 py-2 text-sm text-gray-100'
                        >
                          Admin Dashboard
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active, close }) => (
                        <Link
                          onClick={close}
                          href={`/${currentLocale}/profile`}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            // eslint-disable-next-line sonarjs/no-duplicate-string
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Your Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active, close }) => (
                        <Link
                          onClick={close}
                          href={`/${currentLocale}/settings`}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Settings
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active, close }) => (
                        <Link
                          href={`/${currentLocale}`}
                          onClick={() => {
                            signOut();
                            close();
                          }}
                          className={classNames(
                            active ? 'hover:bg-red-600 hover:text-white' : '',
                            'block px-4 py-2 text-sm text-gray-700 '
                          )}
                        >
                          Sign out
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 z-30 origin-top-right p-2 transition md:hidden'
        >
          <div className='divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black'>
            <div className='px-5 pb-6 pt-5 sm:pb-8'>
              <div className='flex items-center justify-between'>
                <div>
                  <Image
                    className='h-8 w-auto'
                    width={32}
                    height={32}
                    src='/logo.svg'
                    alt='Liberato'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Close menu</span>
                    <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6 sm:mt-8'>
                <nav>
                  <div className='grid gap-7 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8'>
                    {/* @ts-ignore */}
                    {projects[currentLocale].map((item: IProjects) => (
                      <Link
                        key={item.name}
                        locale={currentLocale}
                        href={{
                          pathname: `${currentLocale}/projects/[name]`,
                          query: { name: item.href },
                        }}
                        className='-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50'
                      >
                        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12'>
                          <item.icon className='h-6 w-6' aria-hidden='true' />
                        </div>
                        <div className='ml-4 text-base font-medium text-gray-900'>
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
            <div className='px-5 py-6'>
              <div className='grid grid-cols-2 gap-4'>
                {/* @ts-ignore */}
                {more[currentLocale].map((item: IMore) => (
                  <Link
                    key={item.name}
                    href={`${currentLocale + item.href}`}
                    className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href={`/${currentLocale}/contact`}
                  className='rounded-md text-base font-medium text-gray-900 hover:text-gray-700'
                >
                  Contact
                </Link>
              </div>
              {session?.user == null ? (
                <div className='mt-6'>
                  <Link
                    href={`/${currentLocale}/login`}
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                  >
                    Sign in
                  </Link>
                </div>
              ) : (
                <div className='mt-6 grid grid-cols-2 gap-4'>
                  <Image
                    width={64}
                    height={64}
                    className='mr-4 h-12 w-12 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt={session?.user?.name ?? 'User profile image'}
                  />
                  Hello, {session?.user?.name}!
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Link
                      key={item}
                      href={`${currentLocale}/${item}`}
                      className='block w-1/3 border-b-2 px-3 py-2 text-gray-700'
                    >
                      {item}
                    </Link>
                  ))}
                  <Link
                    href={`/${currentLocale}`}
                    onClick={() => signOut()}
                    className='block px-3 py-2 text-sm font-bold text-red-700 hover:bg-red-600 hover:text-white '
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
