export interface CartItem {
  readonly id: string;
  readonly whiteFrame: boolean;
  readonly sale: number | null | undefined;
  readonly image: string;
  readonly variant: {
    readonly id: string;
    readonly width: number;
    readonly height: number;
  };
  readonly title: string;
  readonly amount: number;
  readonly price: number;
}

export type DeletedCartItem = { id: string };
export interface CartContextType {
  readonly cart: Record<string, CartItem> | undefined;
  readonly changeAmountProduct: (product: CartItem) => void;
  readonly addProduct: (product: CartItem) => void;
  readonly deleteProduct: (product: DeletedCartItem) => void;
}
