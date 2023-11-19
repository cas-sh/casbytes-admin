import React from "react";
import { Outlet } from "@remix-run/react";
import NavBar from "~/components/nav-bar";
import { SideBar } from "~/components/side-bar";
import { cn } from "~/libs/shadcn";
import { Section } from "~/components/section";

export default function AuthAppRoute() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <NavBar />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Section
        className={cn(
          "duration-300",
          isOpen ? "ml-0 md:ml-56" : "ml-0 md:ml-20",
        )}
      >
        <Outlet />
      </Section>
    </>
  );
}
