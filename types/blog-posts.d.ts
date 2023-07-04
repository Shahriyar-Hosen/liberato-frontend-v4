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
  name: string;
  simple_local_avatar: {
    full: string;
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
