import React from "react";

export function RegisterForm() {
  return (
    <section aria-labelledby="sectionRegister">
      <form>
        <h2 id="sectionRegister">Zarejestruj się</h2>
        <label>
          E-mail:
          <input type="email" />
        </label>
        <label>
          Hasło:
          <input type="password" />
        </label>
        <label>
          Powtórz hasło:
          <input type="text" className="stroke-gray stroke-1" />
        </label>
      </form>
    </section>
  );
}
