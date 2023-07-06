/* eslint-disable prettier/prettier */

'use client';

import { useTranslation } from '@/app/i18n/client';
import { ILngPath } from '@/types';
import { CardsBase } from './CardsBase';

export function Cards({ lng }: ILngPath) {
  const { t } = useTranslation(lng, 'test');
  return <CardsBase t={t} />;
}
