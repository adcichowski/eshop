import { Newsletter } from "components/Forms/Newsletter/Newsletter";
import { Header } from "components/Header/Header";

export function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex grow flex-col">{children}</main>
      <Newsletter HeaderTag="h3" />
    </>
  );
}
