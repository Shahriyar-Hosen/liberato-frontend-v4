/* eslint-disable prettier/prettier */
export interface IContactValues {
  fullName: string;
  email: string;
  message: string;
}

export interface IContactFormProps {
  values: IContactValues;
  setIsErrored: (isErrored: boolean) => void;
}
