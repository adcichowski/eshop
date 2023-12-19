export type ResponseAlgolia = {
  slug: string;
  name: string;
  whiteFrame: boolean;
  description: string;
  categories: {
    slug: string;
  }[];
  images: {
    url: string;
  }[];
};
