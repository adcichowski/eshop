type ProductAttributesProps = {
  readonly category: string;
  readonly paperWeight: number;
  readonly orientation: string;
  readonly color: string;
  readonly finish: string;
  readonly whiteFrame: boolean;
};
export const ProductAttributes = ({
  paperWeight,
  whiteFrame,
  category,
  color,
  orientation,
  finish,
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
      <div className="flex flex-col mt-2">
        {Object.entries(displayAttributes).map(([attribute, info]) => (
          <div key={attribute} className="relative">
            <dl className="grid grid-cols-2 justify-between max-w-xs bg-opacity-60">
              <dt className="uppercase text-xs">{attribute}</dt>
              <dd className="uppercase text-xs">{info}</dd>
            </dl>
            <hr className="my-[6px] h-[0.4px] max-w-[377px] border-gray-100" />
          </div>
        ))}
      </div>
    </section>
  );
};
