import React from "react";
import { CartContextProvider, useCartContext } from "../CartContext";
import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ToastProvider } from "context/ToastContext/ToastContext";
import { ToastsContainer } from "components/Toast/ToastsContainer";

const setup = () => ({
  product: {
    id: faker.datatype.uuid(),
    amount: Number(faker.random.numeric()),
    image: { url: faker.image.business(), alt: faker.commerce.productName() },
    price: Number(faker.commerce.price(1, 200, 100)),
    title: faker.commerce.productName(),
  },
});

describe("CartContext", () => {
  const getElements = {
    buttons: () => screen.getAllByRole("button"),
  };
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
      },
    });
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
    render(
      <ToastProvider>
        <CartContextProvider>
          <ToastsContainer />
          <AddButton />
        </CartContextProvider>
      </ToastProvider>
    );
  });

  it("should call localStorage getItem in first render", async () => {
    expect(window.localStorage.getItem).toBeCalled();
  });

  it("should call localStorage setItem if the product was added", async () => {
    const addButton = getElements.buttons()[0];
    await userEvent.click(addButton);
    expect(window.localStorage.setItem).toBeCalled();
  });

  it("should show alert (*Successful add product to cart*) if product was added", async () => {
    const addButton = getElements.buttons()[0];
    await userEvent.click(addButton);
    const alert = screen.getByRole("alert");
    const text = screen.getByText("Successful add product to cart");
    expect(alert).toBeInTheDocument;
    expect(text).toBeInTheDocument;
  });

  it("should show alert (*Successful remove product from cart*) if product was added", async () => {
    const addButton = getElements.buttons()[1];
    await userEvent.click(addButton);
    const alert = screen.getByRole("alert");
    const text = screen.getByText("Successful remove product from cart");
    expect(alert).toBeInTheDocument;
    expect(text).toBeInTheDocument;
  });
});

function AddButton() {
  const product = setup().product;
  const { addProduct, deleteProduct } = useCartContext();
  return (
    <>
      <button
        onClick={() => {
          addProduct(product);
        }}
      >
        Add Product
      </button>
      <button
        onClick={() => {
          deleteProduct(product);
        }}
      >
        Remove Product
      </button>
    </>
  );
}
