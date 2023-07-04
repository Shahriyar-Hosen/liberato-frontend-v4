export interface IAboutUsStats {
  label: string;
  value: string;
}

export interface ILangAboutUsStats {
  en: IAboutUsStats[];
  hr: IAboutUsStats[];
}

export type ImageGalleryType = {
  url: string;
  alt: string;
  link: string;
};
