/* eslint-disable prettier/prettier */

import { ITLngPathWithCommon } from '@/types';
import { IContactValues } from '@/types/contact-form';
import { initialContactValues } from '@/utils/contact-form';
import { sendContactEmail } from '@/utils/sendContactEmail';
import {
  ArrowPathIcon,
  BanknotesIcon,
  EnvelopeIcon,
  IdentificationIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';

export function ContactBase({ t, lng: currentLocale }: ITLngPathWithCommon) {
  const [isErrored, setIsErrored] = useState<boolean | null>(null);
  const formik = useFormik({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    initialValues: initialContactValues,
    validationSchema: Yup.object({
      fullName: Yup.string().required('Name is required'),
      email: Yup.string().email().required('Email is required'),
      message: Yup.string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters'),
    }),
    onSubmit: (values: IContactValues) => {
      sendContactEmail(values, setIsErrored);
    },
  });

  return (
    <div className='relative bg-white dark:bg-gray-800'>
      <div className='absolute inset-0'>
        <div className='absolute inset-y-0 left-0 w-1/2 bg-gray-50 dark:bg-gray-800' />
      </div>
      <div className='relative mx-auto max-w-7xl lg:grid lg:grid-cols-5'>
        <div className='bg-gray-50 px-6 py-16 dark:bg-gray-700 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
          <div className='mx-auto max-w-lg'>
            <h2 className='text-2xl font-bold uppercase tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl'>
              {t('contact:contact_us')}
            </h2>
            <p className='mt-3 text-lg leading-6 text-gray-500 dark:text-gray-300'>
              {t('contact:contact_us_more')}
            </p>
            <dl className='mt-8 text-base text-gray-500 dark:text-gray-300'>
              <div>
                <dt className='sr-only'>Address</dt>
                <dd>
                  <p>Kopilica 5</p>
                  <p>
                    {currentLocale === 'hr' ? 'Hrvatska' : 'Croatia'}, 21000
                    Split
                  </p>
                </dd>
              </div>
              <div className='mt-6'>
                <dt className='sr-only'>Phone number</dt>
                <dd className='flex'>
                  <PhoneIcon
                    className='h-6 w-6 shrink-0 text-gray-400'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>+385 (099) 3000-302</span>
                </dd>
              </div>
              <div className='mt-3'>
                <dt className='sr-only'>Email</dt>
                <dd className='flex'>
                  <EnvelopeIcon
                    className='h-6 w-6 shrink-0 text-gray-400'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>info@udruga-liberato.hr</span>
                </dd>
              </div>
              <div className='mt-3'>
                <dt className='sr-only'>OIB</dt>
                <dd className='flex'>
                  <IdentificationIcon
                    className='h-6 w-6 shrink-0 text-gray-400'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>93066636032</span>
                </dd>
              </div>
              <div className='mt-3'>
                <dt className='sr-only'>IBAN</dt>
                <dd className='flex'>
                  <BanknotesIcon
                    className='h-6 w-6 shrink-0 text-gray-400'
                    aria-hidden='true'
                  />
                  <span className='ml-3'>HR5724840081135147158</span>
                </dd>
              </div>
            </dl>
            <p className='mt-6 text-base text-gray-500 dark:text-gray-300'>
              {t('contact:contact_us_question')}{' '}
              <Link
                href='/about'
                className='font-medium text-gray-700 underline dark:text-gray-400'
              >
                {t('contact:contact_us_link')}
              </Link>
            </p>
          </div>
        </div>
        {isErrored === null && (
          <div className='bg-white px-6 py-16 dark:bg-gray-800 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12'>
            <div className='mx-auto max-w-lg lg:max-w-none'>
              <form
                onSubmit={formik.handleSubmit}
                className='grid grid-cols-1 gap-y-6'
              >
                <div>
                  <label htmlFor='fullName' className='sr-only'>
                    {t('common:full_name')}
                  </label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    type='text'
                    name='fullName'
                    id='fullName'
                    className='block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 dark:text-blue-500'
                    //  @ts-ignore
                    placeholder={t('common:full_name')}
                  />
                  {formik.errors.fullName && (
                    <span className='text-sm text-red-500'>
                      {formik.errors.fullName}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor='email' className='sr-only'>
                    {t('common:email')}
                  </label>
                  <input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 dark:text-gray-900'
                    //  @ts-ignore
                    placeholder={t('common:email')}
                  />
                  {formik.errors.email && (
                    <span className='text-sm text-red-500'>
                      {formik.errors.email}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor='message' className='sr-only'>
                    {t('common:message')}
                  </label>
                  <textarea
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    id='message'
                    name='message'
                    rows={4}
                    className='block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 dark:text-gray-900'
                    //  @ts-ignore
                    placeholder={t('common:message')}
                  />
                  {formik.errors.message && (
                    <span className='text-sm text-red-500'>
                      {formik.errors.message}
                    </span>
                  )}
                </div>
                <div>
                  <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    {t('common:submit_btn')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {isErrored === true ? (
          <div className='bg-white px-6 py-16 dark:bg-gray-800 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12'>
            <div className='mx-auto flex max-w-lg flex-col items-center justify-center lg:max-w-none'>
              <ArrowPathIcon
                className='h-48 w-48 text-red-500'
                aria-hidden='true'
              />
              <p className='text-center text-sm text-gray-500'>
                {t('contact:contact_us_error')}{' '}
                <a
                  href='mailto:info@udruga-liberato.hr'
                  className='font-medium text-indigo-600 underline dark:text-indigo-400'
                >
                  info@udruga-liberato.hr
                </a>
              </p>
            </div>
          </div>
        ) : isErrored === false ? (
          <div className='bg-white px-6 py-16 dark:bg-gray-800 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12'>
            <div className='mx-auto flex max-w-lg flex-col items-center justify-center lg:max-w-none'>
              <EnvelopeIcon
                className='h-48 w-48 text-green-500'
                aria-hidden='true'
              />
              <p className='text-center text-sm text-gray-500'>
                {t('contact:contact_us_success')}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
