import {
  ArrowPathIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'next-i18next';
import CardItem from '../app/[lng]/components/Cards/CardItem';

export default function Cards() {
  const { t } = useTranslation();
  return (
    <div className='relative bg-white py-24 dark:bg-gray-800 sm:py-32 lg:py-40'>
      <div className='mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8'>
        <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl'>
          {t('index:second_title')}
        </p>
        <p className='mx-auto mt-5 max-w-prose text-xl text-gray-500 dark:text-gray-300'>
          {t('index:second_subtitle')}
        </p>
        <div className='mt-20'>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3'>
            <CardItem
              name={t('index:box_under_subtitle_title2')}
              description={t('index:box_under_subtitle_2_subtitle')}
              icon={
                <WrenchScrewdriverIcon
                  className='h-8 w-8 text-white'
                  aria-hidden='true'
                />
              }
            />
            <CardItem
              name={t('index:box_under_subtitle_title1')}
              description={t('index:box_under_subtitle_title_1_subtitle')}
              icon={
                <ArrowPathIcon
                  className='h-8 w-8 text-white'
                  aria-hidden='true'
                />
              }
            />
            <CardItem
              name={t('index:box_under_subtitle_title3')}
              description={t('index:box_under_subtitle_3_subtitle')}
              icon={
                <UserGroupIcon
                  className='h-8 w-8 text-white'
                  aria-hidden='true'
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
