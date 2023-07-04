import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function NewsletterForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const formik = useFormik({
    validateOnMount: false,
    validateOnChange: true,
    validateOnBlur: true,
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email().required('Email is required'),
    }),
    onSubmit: (values) => {
      fetch('/api/subs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            setError(false);
            setSuccess(true);
          } else {
            setError(true);
            setSuccess(false);
          }
        })
        .catch(() => {
          setError(true);
          setSuccess(false);
        });
    },
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className='mt-6 sm:flex sm:max-w-md lg:max-w-full'
      >
        <label htmlFor='email-address' className='sr-only'>
          {t('common:email')}
        </label>
        <input
          type='email'
          name='email'
          id='email-address'
          autoComplete='email'
          required
          className='w-full min-w-0 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white shadow-sm placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:mr-2 xl:w-full'
          onChange={formik.handleChange}
          value={formik.values.email}
          // @ts-ignore
          placeholder={t('common:email')}
        />
        <label htmlFor='name' className='sr-only'>
          {t('common:full_name')}
        </label>
        <input
          type='text'
          name='name'
          id='name'
          autoComplete='email'
          required
          className='w-full min-w-0 appearance-none rounded-md border-white/10 bg-gray-400/10 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base leading-7 text-white shadow-sm placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-[250px]'
          // @ts-ignore
          placeholder={t('common:full_name')}
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <div className='mt-4 rounded-md sm:mt-0 sm:ml-4 sm:shrink-0'>
          <button
            type='submit'
            className='flex w-full items-center justify-center rounded-md bg-indigo-500 py-1.5 px-3 text-base font-semibold leading-7 text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 sm:text-sm sm:leading-6'
            // @ts-ignore
            onClick={formik.handleSubmit}
          >
            {t('common:subscribe')}
          </button>
        </div>
      </form>
      {error && (
        <div className='mt-4 border-l-4 border-red-400 bg-red-50 p-4'>
          <div className='flex'>
            <div className='shrink-0'>
              <ExclamationTriangleIcon
                className='h-5 w-5 text-red-400'
                aria-hidden='true'
              />
            </div>
            <div className='ml-3'>
              <p className='text-sm text-red-700'>
                Something went wrong. Please contact us at{' '}
                <a
                  href='mailto:info@udruga-liberato.hr'
                  className='font-medium text-red-700 underline hover:text-red-600'
                >
                  info@udruga-liberato.hr
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {success && (
        <div className='mt-4 border-l-4 border-green-400 bg-green-50 p-4'>
          <div className='flex'>
            <div className='shrink-0'>
              <ExclamationTriangleIcon
                className='h-5 w-5 text-green-400'
                aria-hidden='true'
              />
            </div>
            <div className='ml-3'>
              <p className='text-sm text-green-700'>
                You have successfully subscribed. Check your email{' '}
                <span className='font-medium text-green-700 underline hover:text-green-600'>
                  {formik.values.email}
                </span>{' '}
                for a confirmation link.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
