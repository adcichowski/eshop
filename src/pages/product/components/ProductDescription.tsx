type ProductDescriptionProps = {
  category: string;
  paperWeight: number;
  orientation: string;
  color: string;
  finish: string;
  whiteFrame: boolean;
};
export const ProductDescription = ({
  paperWeight,
  whiteFrame,
  category,
  color,
  orientation,
  finish,
}: ProductDescriptionProps) => {
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
    <section aria-labelledby="descriptionProduct" className="mt-4">
      <h4 id="descriptionProduct" className="text-lg">
        Attributes
      </h4>
      <div className="flex flex-col mt-4">
        {Object.entries(displayAttributes).map(([attribute, info]) => (
          <div key={attribute} className="relative">
            <dl className="grid grid-cols-2 justify-between max-w-xs bg-opacity-60">
              <dt className="uppercase text-xs">{attribute}</dt>
              <dd className="uppercase text-xs">{info}</dd>
            </dl>
            <hr className="my-[6px] h-[0.4px] max-w-[377px] border-lightGray" />
          </div>
        ))}
      </div>
    </section>
  );
};
