import type { TypeHeadlineTags } from "types/types";
import { defaultSchema } from "../schemas/defaultSchema";
import { useForm } from "../useForm";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { fetcher } from "utils/fetcher";
import { Input } from "components/Inputs/components/Input";
import { useRouter } from "next/router";
import Dynamic from "next/dynamic";

const DISCOUNT_PERCENT = "10%";
export type NewsletterProps = {
  readonly HeaderTag: TypeHeadlineTags;
};

const checkIsCookieMailerLite = () => {
  const COOKIE_VALUE_MAILERLITE = "ML=1";
  const cookie = document.cookie;
  return cookie === COOKIE_VALUE_MAILERLITE;
};

const PATHS_RENDER = ["/account", "/"];

export const NewsletterComp = Dynamic<NewsletterProps>(
  () =>
    import(
      /* webpackChunkName: "newsletter" */
      "./Newsletter"
    ).then(() => Newsletter),
  {
    ssr: false,
  }
);

function Newsletter({ HeaderTag }: NewsletterProps) {
  const router = useRouter();
  const isCookieAvaible = checkIsCookieMailerLite();
  const schemaEmail = Yup.object({ email: defaultSchema.email });
  const { errors, register, handleSubmit } = useForm<{
    readonly email: string;
  }>(schemaEmail);
  const { mutate } = useMutation(
    ["addToNewsletter"],
    async (data: { readonly email: string }) => {
      await fetcher("/api/newsletter", {
        method: "POST",
        body: data,
      });
    }
  );
  const onSumbit = handleSubmit((data) => {
    mutate(data);
  });
  if (!PATHS_RENDER.includes(router.asPath)) {
    return <></>;
  }
  return !isCookieAvaible ? (
    <section
      className="w-full bg-primary py-5"
      role="dialog"
      aria-labelledby="newsletterHeading"
      aria-describedby="newsletterDescription"
    >
      <div className="flex items-center flex-col">
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
            </span>
            <span>zniżki na pierwsze zakupy</span>
            <form
              noValidate
              className="text-base block ml-2 h-20"
              onSubmit={onSumbit}
            >
              <fieldset className="my-2 xl:my-0 inline">
                <div className="flex">
                  <div className="flex flex-col max-h-5">
                    <Input
                      id="newsletterEmail"
                      text="Your email"
                      hideLabel
                      {...register("email")}
                      error={errors?.email?.message}
                    />
                  </div>
                  <button
                    className="border-2 py-2 px-2 w-32 font-semibold border-black uppercase"
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
  ) : (
    <></>
  );
}
