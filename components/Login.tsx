import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'next-i18next';

export default function Login() {
  const { t } = useTranslation();

  const formik = useFormik({
    validateOnMount: true,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email must be valid email.')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    }),
    onSubmit: async (values) => {
      await signIn('credentials', {
        redirect: true,
        email: values.email,
        password: values.password,
      });
    },
  });
  const router = useSearchParams();
  const errorMsg = router.get('error');

  return (
    <div className='flex min-h-[85vh] flex-col justify-center py-12 dark:bg-gray-800 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <Image
          src='/logo.svg'
          width={200}
          height={100}
          className='mx-auto h-12 w-auto'
          alt='Liberate logo'
        />
        <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100'>
          {t('common:sign_in_title')}
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600 dark:text-gray-200'>
          {t('common:sign_in_subtitle')}
        </p>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white px-4 py-8 shadow dark:bg-gray-900 sm:rounded-lg  sm:px-10'>
          {errorMsg && (
            <div className='rounded-md bg-red-50 p-4'>
              <div className='flex'>
                <div className='shrink-0'>
                  <XCircleIcon
                    className='h-5 w-5 text-red-400'
                    aria-hidden='true'
                  />
                </div>
                <div className='ml-3'>
                  <h3 className='text-sm font-medium text-red-800'>
                    {errorMsg}
                  </h3>
                </div>
              </div>
            </div>
          )}
          <form className='mt-4 space-y-6' onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 dark:text-gray-200'
              >
                {t('common:email')}
              </label>
              <div className='mt-1'>
                <input
                  // @ts-ignore
                  placeholder={t('common:email')}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='block w-full appearance-none rounded-md border border-gray-300  px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:text-indigo-500 sm:text-sm'
                />
                {formik.errors.email && (
                  <span className='text-sm text-red-500'>
                    {formik.errors.email}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700 dark:text-gray-200'
              >
                {t('common:password')}
              </label>
              <div className='mt-1'>
                <input
                  id='password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  // @ts-ignore
                  placeholder={t('common:password')}
                  required
                  className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:text-indigo-500 sm:text-sm'
                />
                {formik.errors.password && (
                  <span className='text-sm text-red-500'>
                    {formik.errors.password}
                  </span>
                )}
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                disabled={!formik.isValid}
              >
                {t('common:sign_in')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
