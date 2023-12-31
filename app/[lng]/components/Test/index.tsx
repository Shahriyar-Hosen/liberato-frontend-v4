/* eslint-disable prettier/prettier */

import { useTranslation } from '@/app/i18n';
import { ILngPath } from '@/types';
import { TestBase } from './TestBase';

export const Test = async ({ lng }: ILngPath) => {
  const { t } = await useTranslation(lng, 'test');
  return <TestBase t={t} />;
};
