import Image from "next/image";
import ClearIcon from "./clear.svg";
import { changeValueCurrency } from "utils/utils";
import { useCartContext } from "context/CartContext/CartContext";
import clsx from "clsx";
type ProductCartPopperProps = {
  readonly id: string;
  readonly whiteFrame: boolean;
  readonly variant: {
    readonly width: number;
    readonly height: number;
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
  whiteFrame,
  price,
  variant,
}: ProductCartPopperProps) {
  const { deleteProduct } = useCartContext();
  return (
    <article className="grid w-full grid-cols-4 gap-x-3 border-b-[1px] border-gray-100 pb-2">
      <div className="basis-[88px]">
        <Image
          className={`w-auto object-cover ${clsx(
            "border  p-[6px]" && whiteFrame
          )}`}
          width={100}
          height={90}
          src={image.url}
          alt={image.alt ?? title}
        />
      </div>
      <div className="col-span-3 flex flex-col py-[2px]">
        <div className="flex grow justify-between gap-x-4">
          <h3 className="text-left">
            {title}
            {` ${variant.width} cm x ${variant.height} cm`}
          </h3>
          <button
            onClick={() => {
              //TODO: SET CART IN COOKIE HTTP ONLY
              setTimeout(() => {
                deleteProduct({ id });
              }, 1);
            }}
            className="mt-[3px] self-start"
          >
            <ClearIcon />
          </button>
        </div>
        <div className="flex justify-between">
          <div className="text-sm">{amount} szt.</div>
          <div className="text-base font-semibold">
            {changeValueCurrency(price)}
          </div>
        </div>
      </div>
    </article>
  );
}
