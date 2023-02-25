import { NewsletterComp } from "components/Forms/Newsletter/Newsletter";
import { Header } from "components/Header/Header";
import { ToastsContainer } from "components/Toast/ToastsContainer";

export function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <div>
        <Header />
        <div className="relative mx-auto max-w-[1440px]">
          <ToastsContainer />
          {children}
        </div>
      </div>

      <NewsletterComp HeaderTag="h3" />
    </div>
  );
}
