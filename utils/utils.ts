import { ProductToPaymentType } from "lib/actions/payment-intent";

export const changeValueCurrency = (price: number, format = "en-US") => {
  const priceWithRest = price / 100;
  const formatterPLN = new Intl.NumberFormat(format, {
    style: "currency",
    currency: "USD",
  });
  return formatterPLN.format(priceWithRest);
};

export const priceWithDiscount = ({
  amount = 1,
  price,
  sale,
}: {
  sale: string | null | undefined | number;
  price: number;
  amount?: number;
}) => {
  if (sale === undefined || sale === null) {
    return price * amount;
  }
  const discountedPrice = price * (100 - Number(sale));
  return Math.floor((discountedPrice * amount) / 100);
};

export const objectKeys = <Obj extends object>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
};

export const uniqId = () => `${Math.random()}${new Date()}`;

export const randomInt = (max: number, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const roundToNearestHalf = (num: number) => {
  if (num % 1 >= 0.5) return Math.ceil(num * 2) / 2;
  return Math.floor(num * 2) / 2 + 0.5;
};

export const getEnv = (env: string | undefined, key: string) => {
  if (!env) throw Error(`Variable ${key} is not set in .env`);
  return env;
};

export const jsonParse = <T>(value: string | undefined): T | undefined => {
  try {
    if (!value) return undefined;
    return JSON.parse(value);
  } catch (e) {
    console.error(e);
  }
};

export const calculateOrderAmount = (securedProducts: ProductToPaymentType[]) =>
  securedProducts.reduce((orderAmount, product) => {
    return orderAmount + product.price * product.quantity;
  }, 0);
