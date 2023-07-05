/* eslint-disable prettier/prettier */

'use client';

import { useTranslation } from '@/app/i18n/client';
import { ILngPath } from '@/types';
import { NavbarBase } from './NavbarBase';

export function Navbar({ lng }: ILngPath) {
  const { t } = useTranslation(lng, 'test');
  return <NavbarBase t={t} />;
}
