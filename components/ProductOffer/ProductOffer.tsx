import { Button } from "components/Button/Button";
import { FavoriteInput } from "components/Inputs/FavoriteInput";
import Image from "next/image";
import Link from "next/link";
import type { TypeHeadlineTags } from "types/types";
export function ProductOffer({
  name,
  HeaderTag,
  image,
}: {
  readonly name: string;
  readonly HeaderTag: TypeHeadlineTags;
  readonly image: { readonly src: string; readonly alt: string };
}) {
  return (
    <Link href={`/${name}`} className="max-w-[206px]">
      <article
        aria-describedby={`poster${name}`}
        className="flex flex-col items-center"
      >
        <Image
          className="border-2 border-black"
          {...image}
          width={218.63}
          height={323.46}
          alt={image.alt}
        />
        <div>
          <HeaderTag id={`poster${name}`}>{name}</HeaderTag>
          <div className="mb-1 font-medium">od 10zł</div>
          <div className="mb-2 flex">
            <Button className="relative self-center rounded-none bg-primary px-4 py-2 text-[10px] uppercase text-white md:text-xs">
              Add to cart
            </Button>
            <div className="relative mr-8 justify-self-end">
              <FavoriteInput id={name} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
