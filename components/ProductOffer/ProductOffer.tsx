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
                <div className="p-4">
                  <div className="flex items-center mr-4 mb-2">
                    <input
                      type="checkbox"
                      id="A3-yes"
                      name="A3-confirmation"
                      value="yes"
                      className="favorite opacity-0 absolute h-8 w-8"
                    />
                    <div className="cursor-pointer text-red-400 border-blue-400 w-8 h-8 flex flex-shrink-0 justify-center items-center mr-2">
                      <svg
                        width="29"
                        height="26"
                        viewBox="0 0 29 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.64279 13.2665C-0.277723 9.35532 0.69578 3.48856 5.5633 1.53298C10.4308 -0.422605 13.3513 3.48856 14.3248 5.44415C15.2983 3.48856 19.1923 -0.422605 24.0599 1.53298C28.9274 3.48856 28.9274 9.35532 26.0069 13.2665C23.0864 17.1777 14.3248 25 14.3248 25C14.3248 25 5.5633 17.1777 2.64279 13.2665Z"
                          stroke="black"
                          stroke-width="1.68852"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <label for="A3-yes" className="sr-only">
                      Favorite product
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
