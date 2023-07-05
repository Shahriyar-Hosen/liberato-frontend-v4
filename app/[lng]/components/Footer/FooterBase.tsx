/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */

import { languages } from '@/app/i18n/settings';
import { ITLngPath } from '@/types';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';

export function FooterBase({ t, lng, path = '' }: ITLngPath) {
  return (
    <footer>
      <Trans i18nKey='languageSwitcher' t={t}>
        Switch from <strong>{lng}</strong> to:{' '}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && ' or '}
              <Link href={`/${l}${path}`}>{l}</Link>
            </span>
          );
        })}
      <p>{t('description')}</p>
      <p
        style={{
          fontSize: 'smaller',
          fontStyle: 'italic',
          marginTop: 20,
        }}
      >
        <Trans i18nKey='helpLocize' t={t}>
          With using
          <a href='https://locize.com' target='_new'>
            locize
          </a>
          you directly support the future of
          <a href='https://www.i18next.com' target='_new'>
            i18next
          </a>
          .
        </Trans>
      </p>
    </footer>
  );
}
