/* eslint-disable prettier/prettier */

import { ReactNode } from 'react';

export interface IParamsLng {
  params: {
    lng: string;
  };
}

export interface IChildren extends IParamsLng {
  children: ReactNode;
}
