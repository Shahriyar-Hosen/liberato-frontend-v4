/* eslint-disable prettier/prettier */

import { ILngPath } from '@/types';
import { useTranslation } from '../../../i18n';
import { TestBase } from './TestBase';

export const Test = async ({ lng }: ILngPath) => {
  const { t } = await useTranslation(lng, 'test');
  return <TestBase t={t} />;
};
