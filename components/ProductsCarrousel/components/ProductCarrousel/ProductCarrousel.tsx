import clsx from "clsx";
import { Button } from "components/Button/Button";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
import { useCartContext } from "context/CartContext/CartContext";
import { useToastContext } from "context/ToastContext/ToastContext";
import Image from "next/image";
import Link from "next/link";

export type ProductCarrouselProps = Readonly<{
  readonly id: string;
  readonly whiteFrame: boolean;
  readonly slug: string;
  readonly name: string;
  readonly price: number;
  readonly images: readonly {
    readonly id: string;
    readonly url: string;
    readonly alt?: string | null;
  }[];
}>;

export const ProductCarrousel = ({
  whiteFrame,
  slug,
  name,
  price,
  images,
  id,
}: ProductCarrouselProps) => {
  const { addProduct } = useCartContext();
  const { addToast } = useToastContext();
  return (
    <section aria-labelledby={name}>
      <div>
        <div>
          <div
            className={`flex h-72 items-center overflow-hidden object-center ${clsx(
              whiteFrame && "border-2 px-4"
            )}`}
          >
            <Image
              alt={name}
              src={images[0].url}
              width={180}
              height={251}
              className="h-auto w-full"
            />
          </div>
        </div>
        <div className="z-10 my-1 mx-4 flex flex-col">
          <h3 className="mt-1 text-xs" id={name}>
            <Link
              passHref
              href={slug}
              className="after:content after:absolute after:left-0 after:top-0 after:h-full after:w-full after:cursor-pointer"
            >
              {name}
            </Link>
          </h3>
          <span className="md:text-md text-sm font-medium">
            od {price / 100} zł
          </span>
          <div className="relative mt-2 flex items-center justify-between gap-1">
            <Button
              onClick={() => {
                addProduct({
                  amount: 1,
                  id,
                  price,
                  title: name,
                  image: images[0],
                });
              }}
              className="self-start rounded-none py-1 px-3 font-light normal-case"
            >
              To Cart
            </Button>

            <div className="relative block">
              <FavoriteInput id={name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
