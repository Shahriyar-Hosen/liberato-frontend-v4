/* eslint-disable prettier/prettier */

'use client';

import { useTranslation } from '@/app/i18n/client';
import { ILngPath } from '@/types';
import { ContactBase } from './ContactBase';

export function Contact({ lng }: ILngPath) {
  const { t } = useTranslation(lng, 'test');
  const { t: commonT } = useTranslation(lng, 'test');
  return <ContactBase lng={lng} t={t} commonT={commonT} />;
}
