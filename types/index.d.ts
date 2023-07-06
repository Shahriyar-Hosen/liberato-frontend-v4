/* eslint-disable prettier/prettier */
/* eslint-disable import/no-extraneous-dependencies */

import { TFunction } from 'i18next';
import { ReactNode } from 'react';

export interface IParamsLng {
  params: {
    lng: string;
  };
}

export interface ILngPath {
  lng: string;
  path?: string;
}

export interface IChildren extends IParamsLng {
  children: ReactNode;
}

export interface IT {
  t: TFunction<string, undefined>;
}

export interface ITWithCommon extends IT {
  commonT: TFunction<string, undefined>;
}

export interface ITLngPath extends ILngPath, IT {}

export interface ITLngPathWithCommon extends ILngPath, ITWithCommon {}
