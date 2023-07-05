/* eslint-disable prettier/prettier */

'use client';

import { useTranslation } from '@/app/i18n/client';
import { ILngPath } from '@/types';
import { HeroBase } from './HeroBase';

export function Hero({ lng }: ILngPath) {
  const { t } = useTranslation(lng, 'index');
  const { t: commonT } = useTranslation(lng, 'common');
  return <HeroBase t={t} commonT={commonT} />;
}
