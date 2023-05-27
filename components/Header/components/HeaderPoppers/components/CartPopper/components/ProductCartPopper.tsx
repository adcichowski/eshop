import Image from "next/image";
import ClearIcon from "./clear.svg";
import { changeValueCurrency } from "utils/utils";
import { useCartContext } from "context/CartContext/CartContext";
type ProductCartPopperProps = {
  readonly id: string;
  variant: {
    width: number;
    height: number;
  };

  readonly image: { readonly url: string; readonly alt?: string | null };
  readonly price: number;
  readonly amount: number;
  readonly title: string;
};
export function ProductCartPopper({
  id,
  image,
  title,
  amount,
  price,
  variant,
}: ProductCartPopperProps) {
  const { deleteProduct } = useCartContext();
  return (
    <section
      className="flex w-[322px] border-b-[1px] border-gray-100 pb-2"
      aria-label="products in your cart"
    >
      <div className="basis-[86px]">
        <div className="h-[112px] w-full border p-[6px]">
          <Image
            className="object-cover"
            width={100}
            height={90}
            src={image.url}
            alt={image.alt ?? title}
          />
        </div>
      </div>
      <div className="ml-[14px] flex basis-[242px] flex-col py-[2px]">
        <div className="flex grow justify-between">
          <h3 className="text-left">
            {title}
            {` ${variant.width} cm x ${variant.height} cm`}
          </h3>
          <button
            onClick={() => {
              deleteProduct({ id });
            }}
            className="mt-[3px] mr-3 self-start"
          >
            <ClearIcon data-outside="false" />
          </button>
        </div>
        <div className="flex justify-between">
          <div className="text-sm">{amount} szt.</div>
          <div className="text-base font-semibold">
            {changeValueCurrency(price)}
          </div>
        </div>
      </div>
    </section>
  );
}
