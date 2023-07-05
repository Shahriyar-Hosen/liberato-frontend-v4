/* eslint-disable prettier/prettier */

import { ILngPath } from '@/types';
// import { useTranslation } from '../../../i18n';
import { useTranslation } from '@/app/i18n';
import { FooterBase } from './FooterBase';

export const Footer = async ({ lng, path }: ILngPath) => {
  const { t } = await useTranslation(lng, 'footer');
  return <FooterBase t={t} lng={lng} path={path} />;
};
