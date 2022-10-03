type TypeHeadersTag = "h1" | "h2" | "h3" | "h4" | "h5";
export function Newsletter({
  HeaderTag,
}: {
  readonly HeaderTag: TypeHeadersTag;
}) {
  const DISCOUNT_PERCENT = "10%";
  return (
    <section
      className="w-full bg-primary mb-6"
      role="dialog"
      aria-labelledby="newsletterHeading"
      aria-describedby="newsletterDescription"
    >
      <div className="my-5 flex items-center flex-col ">
        <HeaderTag
          id="newsletterHeading"
          className="uppercase font-semibold text-2xl"
        >
          Zapisz się do naszego newslettera
        </HeaderTag>

        <div
          className="w-3/4 text-center text-2xl mt-3"
          id="newsletterDescription"
        >
          Zyskaj{" "}
          <span className="text-4xl mx-1 my-1 text-white font-semibold">
            {DISCOUNT_PERCENT}
          </span>{" "}
          zniżki na pierwsze zakupy{" "}
          <form className="inline text-base">
            <fieldset className="inline">
              <label className="sr-only" htmlFor="email">
                Twój email
              </label>
              <input
                id="email"
                className="py-3 pl-3 w-60 placeholder:text-black placeholder:text-opacity-70 border-2 border-white"
                placeholder="Twój e-mail"
                type="email"
              />

              <button
                className="border-2 py-3 px-2 w-32 font-semibold border-black uppercase "
                type="submit"
              >
                Zapisz się
              </button>
            </fieldset>
          </form>
          <div className="text-sm font-medium mt-1">
            i otrzymuj informację o nowościach oraz promocjach
          </div>
        </div>
      </div>
    </section>
  );
}
