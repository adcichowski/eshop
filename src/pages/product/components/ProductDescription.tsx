export const ProductDescription = () => {
  return (
    <section aria-labelledby="descriptionProduct">
      <h4 id="descriptionProduct">Cechy produktu</h4>
      <dl className="relative">
        <div className="flex justify-between max-w-xs before:w-full before:-bottom-1 content-none before:h-[0.4px] before:bg-black bg-opacity-60 before:absolute before:max-w-[370px]">
          <dt>Temat</dt>
          <dd>Zwierzęta</dd>
        </div>
      </dl>
    </section>
  );
};
