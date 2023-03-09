import type { TypeHeadlineTags } from "types/types";
import { defaultSchema } from "../schemas/defaultSchema";
import { useForm } from "../useForm";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { fetcher } from "utils/fetcher";
import { Input } from "components/Inputs/components/Input";
import { useRouter } from "next/router";
import Dynamic from "next/dynamic";
import { schemaResponseMailerLite } from "pages/api/newsletter";

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
      await fetcher<Yup.InferType<typeof schemaResponseMailerLite>["data"]>(
        "/api/newsletter",
        {
          method: "POST",
          body: data,
        }
      );
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
      <div className="flex flex-col items-center">
        <HeaderTag
          id="newsletterHeading"
          className="text-center text-2xl font-semibold uppercase md:text-left"
        >
          Zapisz się do naszego newslettera
        </HeaderTag>

        <div
          className="mt-3 w-3/4 text-center text-2xl"
          id="newsletterDescription"
        >
          <div className="-mt-2 inline-flex flex-wrap items-center justify-center">
            <span>Zyskaj</span>
            <span className="mx-1 my-1 text-4xl font-semibold text-white">
              {DISCOUNT_PERCENT}
            </span>
            <span>zniżki na pierwsze zakupy</span>
            <form
              noValidate
              className="ml-2 block h-20 text-base"
              onSubmit={onSumbit}
            >
              <fieldset className="my-2 inline xl:my-0">
                <div className="flex">
                  <div className="flex max-h-5 flex-col">
                    <Input
                      id="newsletterEmail"
                      text="Your email"
                      hideLabel
                      {...register("email")}
                      error={errors?.email?.message}
                    />
                  </div>
                  <button
                    className="w-32 border-2 border-black py-2 px-2 font-semibold uppercase"
                    type="submit"
                  >
                    Zapisz się
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
          <div className="mt-1 text-sm font-medium">
            i otrzymuj informację o nowościach oraz promocjach
          </div>
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
}
