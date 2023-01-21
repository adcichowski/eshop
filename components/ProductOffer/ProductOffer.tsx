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
          <div className="font-medium mb-1">od 10zł</div>
          <div className="flex mb-2">
            <Button className="text-[10px] md:text-xs rounded-none bg-primary px-4 py-2 text-white uppercase relative self-center">
              Add to cart
            </Button>
            <div className="justify-self-end mr-8 relative">
              <FavoriteInput id={name} />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
