import { Outlet } from "@remix-run/react";
import { Footer } from "../footer";

export function RootLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
