import { Button } from "components/Button/Button";
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
    <div className="w-90">
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
                <button className="text-xs rounded-none bg-primary px-4 py-2 text-white uppercase">
                  Add to cart
                </button>
                <div className="p-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
