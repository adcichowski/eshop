import { Orientation } from "lib/hygraph/generated/graphql";

export type ProductCarrouselPropsType = {
  favorite: boolean;
  id: string;
  slug: string;
  whiteFrame: boolean;
  sale: number | null | undefined;
  image: string;
  category: {
    slug: string;
  };
  variant: {
    id: string;
    width: number;
    height: number;
  };
  orientation: Orientation;
  amount: number;
  price: number;
  name: string;
};
