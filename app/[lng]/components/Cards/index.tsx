/* eslint-disable prettier/prettier */

import { useTranslation } from '@/app/i18n';
import { ILngPath } from '@/types';
import { CardsBase } from './CardsBase';

export const Cards = async ({ lng }: ILngPath) => {
  const { t } = await useTranslation(lng, 'index');
  return <CardsBase t={t} />;
};
