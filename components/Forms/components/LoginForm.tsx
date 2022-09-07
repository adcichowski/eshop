import { Button } from "components/Button/Button";
import { StaticLink } from "components/StaticLink/StaticLink";
import React from "react";

export function LoginForm() {
  return (
    <section className="max-w-[435px] w-full" aria-labelledby="sectionLogin">
      <form>
        <fieldset className="flex flex-col items-center text-left">
          <h2 id="sectionLogin" className="text-2xl self-stretch mb-6">
            Zaloguj się
          </h2>
          <label className="flex w-full flex-col">
            E-mail:
            <input
              className="border border-gray rounded-sm py-0.5 px-2"
              type="email"
            />
          </label>
          <label className="flex w-full flex-col">
            Hasło:
            <input
              className="border border-gray rounded-sm py-0.5 px-2"
              type="password"
            />
          </label>
        </fieldset>
        <Button
          variant="primary"
          className="px-12 py-4 rounded-[10px] mt-6 text-lg"
        >
          Zaloguj się
        </Button>
        <p className="mt-3">
          Nie pamiętasz{" "}
          <StaticLink aria-label="to remind account" href="/remaind">
            <span className="font-bold">Kliknij Tutaj</span>
          </StaticLink>
        </p>
      </form>
    </section>
  );
}
