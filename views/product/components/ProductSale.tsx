export const ProductSale = ({
  sale,
}: {
  readonly sale: string | undefined | null;
}) =>
  sale ? (
    <div className="mb-[22px] self-start bg-black px-8 py-2 text-center font-semibold text-white">
      {`-${sale}%`}
    </div>
  ) : (
    <></>
  );
