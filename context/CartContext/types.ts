export interface CartItem {
  readonly id: string;
  readonly image: {
    readonly url: string;
    readonly alt?: string | null;
  };
  readonly amount: number;
  readonly price: number;
  readonly title: string;
}

export interface CartContextType {
  readonly cart: Record<string, CartItem> | undefined;
  readonly addProduct: (product: CartItem) => void;
  readonly deleteProduct: (product: CartItem) => void;
}
