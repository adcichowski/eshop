import clsx from "clsx";

type ProductAttributesProps = {
  readonly category: string;
  readonly paperWeight: number;
  readonly orientation: string;
  readonly color: string;
  readonly finish: string;
  readonly whiteFrame: boolean;
  readonly sale: string | undefined | null;
};
export const ProductAttributes = ({
  paperWeight,
  whiteFrame,
  category,
  color,
  orientation,
  finish,
  sale,
}: ProductAttributesProps) => {
  const displayAttributes = {
    category,
    color,
    "Paper Weight": (
      <>
        {paperWeight} <span className="lowercase">g/m2</span>
      </>
    ),
    orientation,
    finish,
    "White Frame": whiteFrame ? "included" : "not included",
  };
  return (
    <section aria-labelledby="descriptionProduct" className="mt-3">
      <h4 id="descriptionProduct" className="text-lg">
        Attributes
      </h4>
      <div className={`mt-2 flex flex-col ${clsx(!sale && "gap-y-1")}`}>
        {Object.entries(displayAttributes).map(([attribute, info]) => (
          <div key={attribute} className="relative">
            <dl className="grid max-w-xs grid-cols-2 justify-between bg-opacity-60">
              <dt className="text-xs uppercase">{attribute}</dt>
              <dd className="text-xs uppercase">{info}</dd>
            </dl>
            <hr className="my-[6px] h-[0.4px] max-w-[377px] border-gray-100" />
          </div>
        ))}
      </div>
    </section>
  );
};
