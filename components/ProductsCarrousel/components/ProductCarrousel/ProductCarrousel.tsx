import clsx from "clsx";
import { Button } from "components/Button/Button";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
import { useCartContext } from "context/CartContext/CartContext";
import Image from "next/image";
import Link from "next/link";

export type ProductCarrouselProps = Readonly<{
  readonly id: string;
  readonly whiteFrame: boolean;
  readonly slug: string;
  readonly name: string;
  readonly price: number;

  width?: number;
  height?: number;
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
  width,
  height,
}: ProductCarrouselProps) => {
  const { addProduct } = useCartContext();
  if (!width || !height) {
    return <></>;
  }
  return (
    <section aria-labelledby={name} className="relative">
      <div>
        <div>
          <div
            className={`flex h-56 items-center overflow-hidden object-center md:h-72 ${clsx(
              whiteFrame && "border-2 px-2 md:px-4"
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
          <h3 className="mt-1 truncate text-xs" id={name}>
            <Link
              passHref
              href={slug}
              className="after:content after:absolute after:left-0 after:top-0 after:h-full after:w-full after:cursor-pointer"
            >
              {name}
            </Link>
          </h3>
          <span className="md:text-md text-sm font-medium">{price / 100}$</span>
          <div className="relative mt-2 flex items-center justify-between gap-1">
            <Button
              data-outside="true"
              onClick={() => {
                addProduct({
                  amount: 1,
                  variant: { width, height },
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

            <div className="relative">
              <FavoriteInput id={name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
