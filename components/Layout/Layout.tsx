import { Header } from "components/Header/Header";
import React from "react";

export function Layout({ children }: { readonly children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-[1440px] mx-auto my-0">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
