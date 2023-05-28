import { NewsletterComp } from "components/Forms/Newsletter/Newsletter";
import { Header } from "components/Header/Header";

export function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col">
      <Header />
      <main className="flex grow flex-col">{children}</main>

      <NewsletterComp HeaderTag="h3" />
    </div>
  );
}
