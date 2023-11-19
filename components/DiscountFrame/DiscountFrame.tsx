const variants = {
  big: "px-8 py-2 font-semibold",
  standard: "px-4 py-1",
  small: "px-[5px] py-[2px] text-xs",
} as const;

export const DiscountFrame = ({
  sale,
  size = "standard",
}: {
  readonly sale: number | undefined | null;
  size?: keyof typeof variants;
}) =>
  sale ? (
    <div
      className={`bg-black text-center text-white ${variants[size]}`}
    >{`-${sale}%`}</div>
  ) : (
    <></>
  );
