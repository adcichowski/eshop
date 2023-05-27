import { NewsletterComp } from "components/Forms/Newsletter/Newsletter";
import { Header } from "components/Header/Header";

export function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <div>
        <Header />
        <main className="relative mx-auto max-w-[1440px]">{children}</main>
      </div>

      <NewsletterComp HeaderTag="h3" />
    </div>
  );
}
