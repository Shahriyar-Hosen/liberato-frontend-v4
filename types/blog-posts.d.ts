export interface IPost {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  date: string;
  status: string;
  author: number;
  content: {
    rendered: string;
  };
  featured_media: number;
  tags: number[];
  sticky: boolean;
  excerpt: {
    rendered: string;
  };
}

export interface IAuthor {
  id: number;
  name: string;
  simple_local_avatar: {
    full: string;
  };
}

export interface ISimpleLocalAvatar {
  '18': string;
  '24': string;
  '26': string;
  '32': string;
  '36': string;
  '48': string;
  '52': string;
  '64': string;
  '96': string;
  '128': string;
  '192': string;
  media_id: number;
  full: string;
  blog_id: number;
}

export interface IAvatarUrls {
  '24': string;
  '48': string;
  '96': string;
}

export interface IAuthorData {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: IAvatarUrls;
  meta: never[];
  simple_local_avatar: ISimpleLocalAvatar;
  _links: {
    self: ArrayConstructor[];
    collection: ArrayConstructor[];
  };
}

export interface IFeaturedMedia {
  source_url: string;
  alt_text?: string;
  media_details?: {
    width: string;
    height: string;
  };
}
export interface IPostPreview {
  title: string;
  date: string;
  content: string;
  excerpt: string;
  slug: string;
  coverImage: number;
  authorId: number;
}
