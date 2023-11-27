export function SubsectionWrapper({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}) {
  return (
    <div className="w-full pb-4 max-w-sm">
      <header className="bg-green-100 py-1 text-center">
        <h3>{title}</h3>
      </header>
      <section className="mt-4 flex w-full flex-col gap-y-2 px-4 text-sm">
        {children}
      </section>
    </div>
  );
}
