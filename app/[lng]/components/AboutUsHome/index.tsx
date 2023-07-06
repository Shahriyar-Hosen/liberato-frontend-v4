/* eslint-disable prettier/prettier */

import { useTranslation } from '@/app/i18n';
import { ILngPath } from '@/types';
import { AboutUsHomeBase } from './AboutUsHomeBase';

export const AboutUsHome = async ({ lng }: ILngPath) => {
  const { t } = await useTranslation(lng, 'index');
  const { t: commonT } = await useTranslation(lng, 'common');
  return <AboutUsHomeBase t={t} lng={lng} commonT={commonT} />;
};
