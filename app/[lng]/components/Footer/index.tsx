/* eslint-disable prettier/prettier */

import { useTranslation } from '@/app/i18n';
import { ILngPath } from '@/types';
import { FooterBase } from './FooterBase';

export const Footer = async ({ lng, path }: ILngPath) => {
  const { t } = await useTranslation(lng, 'common');
  return <FooterBase t={t} lng={lng} path={path} />;
};
