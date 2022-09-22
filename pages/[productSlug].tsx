import {
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery,
  GetProductDetailsBySlugQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from "generated/graphql";
import Image from "next/image";
import { apolloClient } from "graphql/apolloClient";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";
import { useSelect } from "downshift";

import { InferGetStaticPathsType } from "types/types";
import { changeValueCurrency, priceWithDiscount } from "utils/utils";
import { ProductDescription } from "src/pages/product/components/ProductDescription";

export async function getStaticPaths() {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });
  return {
    paths: data.products.map(({ slug }) => ({
      params: {
        productSlug: slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: InferGetStaticPathsType<typeof getStaticPaths>) {
  if (!params?.productSlug)
    return {
      props: {},
      notFound: true,
    };

  const { data } = await apolloClient.query<
    GetProductDetailsBySlugQuery,
    GetProductDetailsBySlugQueryVariables
  >({
    variables: { slug: params.productSlug },
    query: GetProductDetailsBySlugDocument,
  });

  return {
    props: { product: data.product }, // will be passed to the page component as props
  };
}
const sizesPoster = [
  { width: 50, height: 70, id: 1 },
  { width: 40, height: 50, id: 2 },
  { width: 30, height: 40, id: 3 },
  { width: 21, height: 30, id: 1 },
];
const ProductPage = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [sizePoster, setSizePoster] = useState(sizesPoster[0]);
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="grid grid-cols-3">
        <div className="mt-12">Categories</div>
        <section className="col-span-2 mt-10 text-[32px]">
          <div className="grid grid-cols-2">
            <h2 className="col-span-2">{product?.name}</h2>
            <div className="mt-5">
              <Image
                layout="responsive"
                objectFit="contain"
                width={292}
                height={452}
                alt={product?.name}
                src={product?.images[0].url}
              />
            </div>
            <div className="ml-4 text-xl mt-5 flex flex-col">
              <div className="bg-black text-center px-8 py-2 font-semibold text-white self-start">
                -30%
              </div>
              <div className="mt-6 flex flex-col gap-5">
                <label className="flex items-center cursor-pointer">
                  <span className="w-24">Rozmiar:</span>
                  <SelectExample discount={30} />
                </label>

                <label className="flex items-center">
                  <span className="w-24">Ilość:</span>
                  <div>
                    <input
                      className="p-2 bg-white border-[0.5px] border-black px-3 w-16 text-center h-10 cursor-pointer"
                      type="number"
                      min={1}
                    />
                    <span className="ml-1">szt</span>
                  </div>
                </label>
              </div>
              <ProductDescription />
            </div>
          </div>
        </section>
      </main>

      <footer>Footer</footer>
    </div>
  );
};

export default ProductPage;

function SelectExample({ discount }: { discount: number }) {
  const sizes = [
    { width: 21, height: 30, prize: 4300 },
    { width: 30, height: 40, prize: 6500 },
    { width: 40, height: 50, prize: 8700 },
    { width: 50, height: 70, prize: 10900 },
  ];

  function itemToString(
    item: { width: number; height: number; prize: number } | null
  ) {
    return item ? `${item.width} x ${item.height} cm` : "";
  }

  function Select() {
    const {
      isOpen,
      selectedItem,
      getToggleButtonProps,
      getMenuProps,
      highlightedIndex,
      getItemProps,
    } = useSelect({
      items: sizes,
      itemToString,
    });

    return (
      <div>
        <div>
          <button
            aria-label="toggle menu"
            className="p-2 bg-white flex justify-between border-[0.5px] border-black px-3 w-56"
            type="button"
            {...getToggleButtonProps()}
          >
            <div className="flex w-full justify-between">
              <div className="text-sm">
                {selectedItem ? itemToString(selectedItem) : "Wybierz rozmiar"}
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs line-through">
                  {selectedItem?.prize &&
                    priceWithDiscount(selectedItem?.prize, discount)}
                </div>
                <div className="text-sm text-discount font-semibold">
                  {selectedItem?.prize &&
                    changeValueCurrency(selectedItem?.prize)}
                </div>
              </div>
            </div>
          </button>
        </div>
        <ul
          {...getMenuProps()}
          className="max-h-80 overflow-auto absolute w-full max-w-[220px]"
        >
          {isOpen &&
            sizes.map((item, index) => (
              <li
                className="py-2 px-3 shadow-sm text-sm cursor-pointer bg-white"
                key={`${item.prize}${index}`}
                {...getItemProps({ item, index })}
              >
                <div className="flex w-full justify-between">
                  <div className="text-sm">{itemToString(item)}</div>
                  <div>
                    <div className="text-xs line-through">
                      {priceWithDiscount(item?.prize, discount)}
                    </div>
                    <div className="text-sm text-discount font-semibold">
                      {changeValueCurrency(item?.prize)}
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  }

  return <Select />;
}
