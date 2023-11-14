"use client";
import Image from "next/image";
import { XIcon } from "lucide-react";
import { changeValueCurrency } from "utils/utils";
import { CartProduct, runCartAction } from "lib/actions/cart";
import { useToastContext } from "context/ToastContext/ToastContext";

export function ProductCartPopper({
  id,
  image,
  title,
  amount,
  variant,
  whiteFrame,
  price,
  sale,
}: CartProduct) {
  const { addToast } = useToastContext();
  return (
    <article className="grid w-full grid-cols-4 gap-x-3 border-b-[1px] border-gray-100 pb-2">
      <div className="basis-[88px]">
        <Image
          className="w-auto object-cover"
          width={100}
          height={90}
          src={image}
          alt={title}
        />
      </div>
      <div className="col-span-3 flex flex-col py-[2px]">
        <div className="flex grow justify-between gap-x-4">
          <h3 className="text-left">{title}</h3>
          <button
            onClick={() => {
              //TODO: SET CART IN COOKIE HTTP ONLY
              setTimeout(() => {
                runCartAction(
                  {
                    id,
                    amount: 1,
                    sale,
                    whiteFrame,
                    image,
                    variant,
                    price,
                    title,
                  },
                  "remove",
                );
                addToast("success", "Product has been removed from cart");
              }, 0);
            }}
            className="mt-[3px] self-start"
          >
            <XIcon />
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
