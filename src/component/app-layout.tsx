"use client";

import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";
import { usePathname } from "next/navigation";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const AUTH_PAGES = ["/signin", "/signup"];
  const pathname = usePathname();

  if (AUTH_PAGES.includes(pathname)) {
    return <div>{children}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
