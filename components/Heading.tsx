import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

interface HeadingProps {
  title: string;
  description: string;
}

export default function Heading({ title, description }: HeadingProps) {
  return (
    <div>
      <div>
        <nav className='sm:hidden' aria-label='Back'>
          <Link
            href='/'
            className='flex items-center text-sm font-medium text-gray-400 hover:text-gray-200'
          >
            <ChevronLeftIcon
              className='mr-1 -ml-1 h-5 w-5 shrink-0 text-gray-500'
              aria-hidden='true'
            />
            Back
          </Link>
        </nav>
        <nav className='hidden sm:flex' aria-label='Breadcrumb'>
          <ol className='flex items-center space-x-4'>
            <li>
              <div className='flex'>
                <Link
                  href='/'
                  className='text-sm font-medium text-gray-400 hover:text-gray-200'
                >
                  Udruga Liberato
                </Link>
              </div>
            </li>
            <li>
              <div className='flex items-center'>
                <ChevronRightIcon
                  className='h-5 w-5 shrink-0 text-gray-500'
                  aria-hidden='true'
                />
                <Link
                  href='/blog'
                  className='ml-4 text-sm font-medium text-gray-400 hover:text-gray-200'
                >
                  Blog
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className='mt-2 md:flex md:items-center md:justify-between'>
        <div className='min-w-0 flex-1'>
          <h2 className='text-2xl font-bold uppercase leading-7 text-gray-900 dark:text-gray-200 sm:truncate sm:text-3xl sm:tracking-tight'>
            {title}
          </h2>
          <p className='pt-2 text-sm leading-3 text-gray-400'>{description}</p>
        </div>
      </div>
    </div>
  );
}
