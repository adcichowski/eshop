import { NewsletterComp } from "components/Forms/Newsletter/Newsletter";
import { Header } from "components/Header/Header";
import { Toast } from "components/Toast/Toast";
import { useToastContext } from "context/ToastContext/ToastContext";
import { useRef } from "react";

export function Layout({ children }: { readonly children: React.ReactNode }) {
  const { toasts } = useToastContext();
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div>
        <Header />
        <div className="max-w-[1440px] mx-auto relative">
          <Toast />
          {children}
        </div>
      </div>

      <NewsletterComp HeaderTag="h3" />
    </div>
  );
}
