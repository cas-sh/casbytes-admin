import React from "react";
import { cn } from "~/libs/shadcn";

type NavContentProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export function NavContent({ isOpen, children }: NavContentProps) {
  return (
    <nav
      className={cn(
        isOpen ? "flex" : "hidden",
        "flex-col md:hidden duration-300 ease-in-out absolute  divide-y-2 bg-slate-200 z-10 w-full border-b-2 drop-shadow-lg",
      )}
      id="nav"
    >
      {children}
    </nav>
  );
}
