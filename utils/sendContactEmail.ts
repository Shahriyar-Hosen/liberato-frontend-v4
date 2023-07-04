import { IContactValues } from '../types/contact-form';

export const sendContactEmail = async (
  { fullName, email, message }: IContactValues,
  setIsErrored: (state: boolean) => void
) => {
  const form = new FormData();
  form.append('name', fullName);
  form.append('email', email);
  form.append('message', message);

  const res = await fetch('https://dev.udruga-liberato.hr/contact', {
    method: 'POST',
    body: form,
  });

  const data = await res.json();
  if (data.status === 'ok') {
    setIsErrored(false);
  } else {
    setIsErrored(true);
  }
};
