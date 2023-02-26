import React from "react";
import { CartContextProvider, useCartContext } from "../CartContext";
import { faker } from "@faker-js/faker";
import type { CartItem } from "../types";
import { render, screen } from "@testing-library/react";
import User from "@testing-library/user-event";
import { Layout } from "components/Layout/Layout";
const setup = () => ({
  product: {
    id: faker.datatype.uuid(),
    amount: Number(faker.random.numeric()),
    image: { url: faker.image.business(), alt: faker.commerce.productName() },
    price: Number(faker.commerce.price(1, 200, 100)),
    title: faker.commerce.productName(),
  },
  initialCart: (length: number) =>
    Object.fromEntries(
      Array.from({ length }, () => {
        const product = setup().product;
        return [product.id, product];
      })
    ),
});

describe("<CartContext>", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn().mockReturnValue(setup().initialCart(2)),
        setItem: jest.fn(),
      },
    });
  });
  it("should call localStorage getItem on render", () => {
    render(<CartContextProvider />);
    const cart = window.localStorage.getItem("cart");
    expect(cart).toBe("");
  });
  it("should call localStorage setItem if cart change", () => {
    const { getByRole } = render(
      <CartContextProvider>
        <AddButton />
      </CartContextProvider>
    );
    const button = getByRole("button");
    User.click(button);
    expect(window.localStorage.setItem).toHaveBeenCalled(2);
  });
});

const AddButton = () => {
  const { addProduct } = useCartContext();
  return (
    <button
      onClick={() => {
        addProduct(setup().product);
      }}
    >
      Add Product
    </button>
  );
};
