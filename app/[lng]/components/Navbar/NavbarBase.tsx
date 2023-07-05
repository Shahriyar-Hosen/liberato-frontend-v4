/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */

import { IT } from '@/types';

export function NavbarBase({ t }: IT) {
  return (
    <div>
      <h1>{t('title')}</h1>
      <br />
      <h3>{t('subTitle')}</h3>
      <br />
      <p>{t('des')}</p>
    </div>
  );
}
