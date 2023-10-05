export const toastActionCart = {
  deleteProduct: "Product has been removed from cart",
  addProduct: "Product has been added to cart",
  changeAmount: (quantityDifference: number) => {
    return `Product amount has been ${
      quantityDifference ? "increased" : "decreased"
    } in cart`;
  },
};
