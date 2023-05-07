import { Button } from "components/Button/Button";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
import Image from "next/image";
import Link from "next/link";

export type ProductCarrouselProps = Readonly<{
  readonly id: string;
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
  slug,
  name,
  price,
  images,
}: ProductCarrouselProps) => {
  return (
    <section
      aria-labelledby={name}
      className="relative flex w-full max-w-[206px] flex-col"
    >
      <div>
        <div className="m-auto max-h-72 overflow-hidden object-center">
          <Image
            alt={name}
            src={images[0].url}
            width={180}
            height={251}
            className="h-auto w-full bg-cover object-cover object-center"
          />
        </div>
      </div>
      <div className="my-1 mx-4 flex flex-col">
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
    </section>
  );
};
