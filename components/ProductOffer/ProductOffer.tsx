import { Button } from "components/Button/Button";
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
      <section
        aria-describedby={`poster${name}`}
        className="flex flex-col items-center"
      >
        <div>
          <Image
            className="border-2 border-black"
            {...image}
            width={218.63}
            height={323.46}
          />
          <div className="ml-1">
            <div className="flex flex-col">
              <HeaderTag id={`poster${name}`}>{name}</HeaderTag>
              <div className="font-medium mb-1">od 10zł</div>
              <div className="grid grid-cols-2 mb-2">
                <button className="text-xs rounded-none bg-primary px-4 py-2 text-white uppercase self-center">
                  Add to cart
                </button>
                <div className="justify-self-end mr-5 relative">
                  <FavoriteInput id={name} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
