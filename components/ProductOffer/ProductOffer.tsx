import { FavoriteInput } from "components/Inputs/components/FavoriteInput";
import Image from "next/future/image";
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
    <div>
      <article
        aria-describedby={`poster${name}`}
        className="flex flex-col items-center"
      >
        <Image
          className="border-2 border-black"
          {...image}
          width={218.63}
          height={323.46}
        />
        <div className="pl-6">
          <HeaderTag id={`poster${name}`}>{name}</HeaderTag>
          <div className="font-medium mb-1">od 10zł</div>
          <div className="grid grid-cols-2 mb-2">
            <button className="text-xs rounded-none bg-primary px-4 py-2 text-white uppercase self-center">
              Add to cart
            </button>
            <div className="justify-self-end mr-8 relative">
              <FavoriteInput id={name} />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
