import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ITeamMember } from 'types/team-members';
import { teamMembers } from 'utils/team-members';

export default function Team() {
  const { locale: currentLocale } = useRouter();
  const { t } = useTranslation();
  return (
    <div className='bg-white py-24 dark:bg-gray-800 md:py-32 lg:py-40'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl'>
            {t('about:team_title')}
          </h2>
          <p className='my-6 text-lg leading-8 text-gray-600 dark:text-gray-300'>
            {t('about:team_subtitle')}
          </p>
        </div>
        <ul className='mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2'>
          {/* @ts-ignore */}
          {teamMembers[currentLocale].map((person: ITeamMember) => (
            <li key={person.name}>
              <Image
                width={600}
                height={400}
                className='aspect-[3/2] w-full rounded-2xl object-cover'
                src={person.imageUrl}
                alt=''
              />
              <h3 className='mt-6 text-lg font-semibold leading-8 text-gray-900 dark:text-gray-200'>
                {person.name}
              </h3>
              <p className='text-base leading-7 text-gray-600 dark:text-gray-300'>
                {person.role}
              </p>
              <p className='mt-4 text-base leading-7 text-gray-600 dark:text-gray-300'>
                {person.bio}
              </p>
              <ul className='mt-6 flex gap-x-6'>
                <li>
                  <Link
                    href={`mailto:${person.email}`}
                    className='text-gray-400 hover:text-gray-500'
                  >
                    <span className='sr-only'>Email</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href={person.linkedinUrl}
                    className='text-gray-400 hover:text-gray-500'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='sr-only'>LinkedIn</span>
                    <svg
                      className='h-5 w-5'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
