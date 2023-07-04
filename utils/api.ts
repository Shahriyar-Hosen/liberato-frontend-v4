import axios from 'axios';

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export const wpApiUrl = 'https://wp.udruga-liberato.hr/wp-json/wp/v2';
export const blogCategoryId = 68;
export const newsCategoryId = 67;
export const unCategorizedCategoryId = 1;

export const allowedUserRoles = ['ADMIN', 'EDITOR', 'AUTHOR', 'USER'];

export const formatEmail = (leftPart: string) => {
  const formattedLeftPart = leftPart.replace(' ', '.').toLowerCase();

  return `${formattedLeftPart}@udruga-liberato.hr`;
};
