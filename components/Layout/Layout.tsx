import { Header } from "components/Header/Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      {children}
      <div>Footer</div>
    </div>
  );
}
