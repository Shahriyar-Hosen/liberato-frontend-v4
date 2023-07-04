import Link from 'next/link';
import React from 'react';

export default function Documents() {
  return (
    <div className=' bg-white dark:bg-gray-800'>
      <div className='mx-auto flex max-w-7xl flex-col items-start'>
        <h1 className='mb-4 text-center text-3xl font-bold uppercase text-gray-800 dark:text-gray-100'>
          Dokumenti
        </h1>
        <ul className='mb-4'>
          <li>
            <Link
              href='/downloads/operativni2023.pdf'
              rel='noopener noreferrer'
              target='_blank'
            >
              Operativni plan 2023.
            </Link>
          </li>
          <li>
            <Link
              href='/downloads/projekcije2023.pdf'
              rel='noopener noreferrer'
              target='_blank'
            >
              Financijske projekcije 2023.
            </Link>
          </li>
          <li>
            <Link
              href='/downloads/finizvj2022.pdf'
              rel='noopener noreferrer'
              target='_blank'
            >
              Financijski izvještaj 2022.
            </Link>
          </li>
          <li>
            <Link
              href='/downloads/opis2022.pdf'
              rel='noopener noreferrer'
              target='_blank'
            >
              Opisni izvještaj 2022.
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
