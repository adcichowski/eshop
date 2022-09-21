export const changeValueCurrency = (price: number, format = "pl-PL") => {
  const priceWithRest = price / 100;
  const formatterPLN = new Intl.NumberFormat(format, {
    style: "currency",
    currency: "PLN",
  });
  return formatterPLN.format(priceWithRest);
};

export const priceWithDiscount = (price: number, discount: number) => {
  const valueDiscount = price * (discount / 100);
  return changeValueCurrency(price - valueDiscount);
};
