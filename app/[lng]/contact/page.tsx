/* eslint-disable prettier/prettier */

'use client';

import { IParamsLng } from '@/types';
import { Contact } from '../components/Contact';

function ContactUs({ params: { lng } }: IParamsLng) {
  return <Contact lng={lng} />;
}

export default ContactUs;
