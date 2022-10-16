import type { TypeHeadlineTags } from "types/types";
import { defaultSchema } from "../schemas/defaultSchema";
import { useForm } from "../useForm";
import * as Yup from "yup";
import { Input } from "components/Inputs/Inputs";
import type { SyntheticEvent } from "react";
const DISCOUNT_PERCENT = "10%";

export function Newsletter({
  HeaderTag,
}: {
  readonly HeaderTag: TypeHeadlineTags;
}) {
  const { errors, register, handleSubmit } = useForm(
    Yup.object({ email: defaultSchema.email })
  );
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };
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
          className="uppercase font-semibold text-2xl text-center md:text-left"
        >
          Zapisz się do naszego newslettera
        </HeaderTag>

        <div
          className="w-3/4 text-center text-2xl mt-3"
          id="newsletterDescription"
        >
          <div className="-mt-2 inline-flex items-center flex-wrap justify-center">
            <span>Zyskaj</span>
            <span className="text-4xl mx-1 my-1 text-white font-semibold">
              {DISCOUNT_PERCENT}
            </span>{" "}
            <span>zniżki na pierwsze zakupy</span>
            <form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="text-base block ml-2 h-20"
            >
              <fieldset className="my-2 xl:my-0 inline">
                <div className="flex">
                  <div className="flex flex-col max-h-5">
                    <Input
                      id="newsletterEmail"
                      text="Your email"
                      hideLabel
                      {...register("email")}
                      error={String(errors?.email?.message ?? "")}
                    />
                  </div>
                  <button
                    className="border-2 py-2 px-2 w-32 font-semibold border-black uppercase "
                    type="submit"
                  >
                    Zapisz się
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="text-sm font-medium mt-1">
            i otrzymuj informację o nowościach oraz promocjach
          </div>
        </div>
      </div>
    </section>
  );
}
