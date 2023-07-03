/* eslint-disable prettier/prettier */

'use client';

import { useTranslation } from '@/app/i18n/client';
import { ILngPath } from '@/types';
import { TestBase } from './TestBase';

export function Test({ lng }: ILngPath) {
  const { t } = useTranslation(lng, 'test');
  return <TestBase t={t} />;
}
