import { NewsletterComp } from "components/Forms/Newsletter/Newsletter";
import { Header } from "components/Header/Header";

export function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Header />
        <div className="max-w-[1440px] mx-auto my-0">
          <div className="w-full">{children}</div>
        </div>
      </div>
      <NewsletterComp HeaderTag="h3" />
    </div>
  );
}
