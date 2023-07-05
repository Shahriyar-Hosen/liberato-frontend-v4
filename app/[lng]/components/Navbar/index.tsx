/* eslint-disable prettier/prettier */

import { useTranslation } from '@/app/i18n';
import { ILngPath } from '@/types';
import { NavbarBase } from './NavbarBase';

export const Test = async ({ lng }: ILngPath) => {
  const { t } = await useTranslation(lng, 'test');
  return <NavbarBase t={t} />;
};
