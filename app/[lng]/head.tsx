/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import { IParamsLng } from '@/types';
import { useTranslation } from '../i18n';
import { fallbackLng, languages } from '../i18n/settings';

export default async function Head({ params: { lng } }: IParamsLng) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, 'common');

  return (
    <>
      <title>{t('title')}</title>
      <meta
        name='description'
        content='Previše uski prostori, nepristupačnost i nedostatak informacija ograničavaju osobe s invaliditetom u pristupu osnovnim uslugama i dobrima. Upravo zbog toga što i sam ima slične probleme kao osoba koja koristi invalidska kolica, Stipo Margić se udružuje s kolegama s Fakulteta, Mijom Matijevićem...'
      />
    </>
  );
}
