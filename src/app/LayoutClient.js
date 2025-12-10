"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function LayoutClient({ children }) {
  const pathname = usePathname();

  // Pages where navbar & footer should NOT appear
  const hideOn = ["/login", "/signup"];

  const shouldHideLayout = hideOn.includes(pathname);

  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <main>{children}</main>
      {!shouldHideLayout && <Footer />}
    </>
  );
}
