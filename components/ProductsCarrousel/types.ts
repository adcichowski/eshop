import { Orientation } from "lib/hygraph/generated/graphql";

export type ProductCarrouselPropsType = {
  id: string;
  slug: string;
  whiteFrame: boolean;
  sale: number | null | undefined;
  image: string;
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
