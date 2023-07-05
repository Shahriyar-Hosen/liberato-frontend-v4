/* eslint-disable prettier/prettier */

'use client';

import { useTranslation } from '@/app/i18n/client';
import { ILngPath } from '@/types';
import { NavbarBase } from './NavbarBase';

export function Navbar({ lng }: ILngPath) {
  const { t } = useTranslation(lng, 'common');
  return <NavbarBase t={t} lng={lng} />;
}
