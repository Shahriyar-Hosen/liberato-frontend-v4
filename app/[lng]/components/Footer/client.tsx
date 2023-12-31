/* eslint-disable prettier/prettier */

'use client';

import { ILngPath } from '@/types';
import { useTranslation } from '@/app/i18n/client';
import { FooterBase } from './FooterBase';

export function Footer({ lng, path }: ILngPath) {
  const { t } = useTranslation(lng, 'common');
  return <FooterBase t={t} lng={lng} path={path} />;
}
