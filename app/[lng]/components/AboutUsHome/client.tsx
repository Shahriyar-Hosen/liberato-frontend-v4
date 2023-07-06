/* eslint-disable prettier/prettier */

'use client';

import { useTranslation } from '@/app/i18n/client';
import { ILngPath } from '@/types';
import { AboutUsHomeBase } from './AboutUsHomeBase';

export function AboutUsHome({ lng }: ILngPath) {
  const { t } = useTranslation(lng, 'test');
  return <AboutUsHomeBase t={t} />;
}
