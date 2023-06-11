export const toastActionCart = {
  deleteProduct: "Successful remove product from cart",
  addProduct: "Successful add product to cart",
  changeAmount: (quantityDifference: number) => {
    return `Successful ${
      quantityDifference ? "increase" : "decrease"
    }  amount product in cart`;
  },
};
