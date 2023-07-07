/* eslint-disable prettier/prettier */

import { useTranslation } from '@/app/i18n';
import { ILngPath } from '@/types';
import { ContactBase } from './ContactBase';

export const Contact = async ({ lng }: ILngPath) => {
  const { t } = await useTranslation(lng, 'test');
  const { t: commonT } = await useTranslation(lng, 'test');
  return <ContactBase lng={lng} t={t} commonT={commonT} />;
};
