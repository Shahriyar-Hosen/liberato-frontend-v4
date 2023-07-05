/* eslint-disable prettier/prettier */

'use client';

import { useTranslation } from '@/app/i18n';
import { ILngPath } from '@/types';
import { NavbarBase } from './NavbarBase';

export const Navbar = async ({ lng }: ILngPath) => {
  const { t } = await useTranslation(lng, 'common');
  return <NavbarBase t={t} lng={lng} />;
};
