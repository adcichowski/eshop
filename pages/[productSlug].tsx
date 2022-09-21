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

import { InferGetStaticPathsType } from "types/utils";

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
                width={392}
                height={552}
                alt={product?.name}
                src={product?.images[0].url}
              />
            </div>
            <div className="ml-4 text-xl mt-5 flex flex-col">
              <DiscountProduct />

              <div className="mt-6 flex">
                <div>Rozmiar:</div>

                <SelectExample />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
      <footer>Footer</footer>
    </div>
  );
};

export default ProductPage;

const DiscountProduct = () => (
  <div className="bg-black text-center px-8 py-2 font-semibold text-white self-start">
    -30%
  </div>
);

function SelectExample() {
  const sizes = [
    { width: 21, height: 30, prize: 4300 },
    { width: 30, height: 40, prize: 6500 },
    { width: 40, height: 50, prize: 8700 },
    { width: 50, height: 70, prize: 10900 },
  ];

  function itemToString(
    item: { width: number; height: number; prize: number } | null
  ) {
    return item ? `${item.width}x${item.height} ${item.prize}` : "";
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
            className="p-2 bg-white flex justify-between border-2 border-black px-3 w-60"
            type="button"
            {...getToggleButtonProps()}
          >
            <span>{selectedItem ? selectedItem.width : "Wybierz rozmiar"}</span>
          </button>
        </div>
        <ul {...getMenuProps()} className="max-h-80 overflow-auto">
          {isOpen &&
            sizes.map((item, index) => (
              <li
                className="py-2 px-3 shadow-sm flex flex-col max-w-40 max-w-[220px]"
                key={`${item.prize}${index}`}
                {...getItemProps({ item, index })}
              >
                <span>{item.width}</span>
                <span className="text-sm text-gray-700">{item.height}</span>
              </li>
            ))}
        </ul>
      </div>
    );
  }

  return <Select />;
}
