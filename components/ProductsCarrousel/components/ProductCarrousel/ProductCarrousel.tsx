import clsx from "clsx";
import { Button } from "components/Button/Button";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
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
}: ProductCarrouselProps) => {
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
          <div className="relative flex items-center justify-between gap-1">
            <div>
              <Button className="self-start rounded-none py-1 px-4 font-thin normal-case md:text-xs">
                To Cart
              </Button>
            </div>

            <div className="relative block">
              <FavoriteInput id={name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
