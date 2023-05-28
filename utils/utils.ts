export const changeValueCurrency = (price: number, format = "en-US") => {
  const priceWithRest = price / 100;
  const formatterPLN = new Intl.NumberFormat(format, {
    style: "currency",
    currency: "USD",
  });
  return formatterPLN.format(priceWithRest);
};

export const priceWithDiscount = (price: number, discount: number) => {
  const valueDiscount = Math.floor((price * discount) / 100);
  return changeValueCurrency(price - valueDiscount);
};

export const objectKeys = <Obj extends object>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
};

export const uniqId = () => `${Math.random()}${new Date()}`;

export const randomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const roundToNearestHalf = (num: number) => {
  if (null) return undefined;
  if (num % 1 >= 0.5) return Math.ceil(num * 2) / 2;
  return Math.floor(num * 2) / 2 + 0.5;
};
