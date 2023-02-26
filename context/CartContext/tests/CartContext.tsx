import React from "react";
import { CartContextProvider, useCartContext } from "../CartContext";
import { faker } from "@faker-js/faker";
import type { CartItem } from "../types";
import { render, screen } from "@testing-library/react";
import User from "@testing-library/user-event";
type SetupTests = {
  product: CartItem;
  products: (length: number) => CartItem[];
};

const setup = () => ({
  product: {
    id: faker.datatype.uuid(),
    amount: Number(faker.random.numeric()),
    image: { url: faker.image.business(), alt: faker.commerce.productName() },
    price: Number(faker.commerce.price(1, 200, 100)),
    title: faker.commerce.productName(),
  },
});

function CartContextTest() {
  const { addProduct, deleteProduct, cart } = useCartContext();
  const product = setup().product;
  return (
    <>
      <div>
        Number of product <span>{Object.values(cart ?? []).length}</span>
      </div>
      <button onClick={() => addProduct(product)}>Add Product</button>
      <button onClick={() => deleteProduct(product)}>Remove Product</button>
    </>
  );
}

describe("<CartContext>", () => {
  beforeEach(() =>
    render(
      <CartContextProvider>
        <CartContextTest />
      </CartContextProvider>
    )
  );
  const [addButton, removeButton] = screen.getAllByRole("button");
  const elementProductsLength = screen.getByText("Number of product");
  it("should add product to cart", () => {
    User.click(addButton);
    expect(elementProductsLength).toBe(1);
  });
});
