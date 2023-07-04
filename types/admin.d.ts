interface Image {
  '@type': string;
  '@id': string;
  src: string;
  name: string;
  mime: string;
}

interface Avatar {
  src: string;
  title: string;
  path: string;
  mime: string;
}
export interface User {
  '@id': string;
  '@type': string;
  avatar: Avatar;
  createdAt: Date;
  deletedAt?: Date;
  email: string;
  id: string;
  roles: string[];
  username: string;
}

export type City = {
  '@id': string;
  '@type': string;
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  radiusInKm: number;
  createdAt: string;
};

export interface QuestionAndAnswer {
  id: string;
  answerId?: string;
  question: string;
  answer: boolean;
}

export interface ICategory {
  '@id': string;
  '@type': string;
  id: string;
  name: string;
  description: string;
  image: Image[];
  questions: QuestionAndAnswer[];
}
export interface ILocation {
  '@context': string;
  '@id': string;
  '@type': string;
  id: string;
  category: ICategory;
  city: City;
  name: string;
  street: string;
  email?: string;
  phone?: string;
  about?: string;
  published: boolean;
  featured: boolean;
  latitude: number;
  longitude: number;
  createdAt: string;
  images?: Image[];
  questionsAndAnswers: QuestionAndAnswer[];
}
