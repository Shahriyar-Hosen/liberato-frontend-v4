/* eslint-disable prettier/prettier */

import { useTranslation } from '@/app/i18n';
import { ILngPath } from '@/types';
import { HeroBase } from './HeroBase';

export const Hero = async ({ lng }: ILngPath) => {
  const { t } = await useTranslation(lng, 'index');
  const { t: commonT } = await useTranslation(lng, 'common');
  return <HeroBase t={t} commonT={commonT} />;
};
