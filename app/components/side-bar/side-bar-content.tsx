import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SignOutButton } from "../sign-out-button";
import { cn } from "~/libs/shadcn";
import icon from "~/assets/icon.png";
import logo from "~/assets/logo.png";

import { Button } from "../ui/button";

type SideBarContentProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export function SideBarContent({
  isOpen,
  setIsOpen,
  children,
}: SideBarContentProps) {
  function toggleSideBar() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="flex-col flex h-32 justify-between items-center gap-4 p-4 bg-stone-300">
        <img
          src={isOpen ? logo : icon}
          alt="CASBytes"
          width={isOpen ? 150 : 40}
          className={cn(isOpen ? "w-[150px]" : "w-[40px]")}
        />{" "}
        <Button
          variant="outline"
          onClick={toggleSideBar}
          className={cn(
            "rounded-sm bg-inherit px-2 border-2",
            isOpen && "self-end border-red-500",
          )}
          aria-label={isOpen ? "close sidebar" : "open sidebar"}
        >
          {isOpen ? (
            <ChevronLeft size={22} className="text-red-500" />
          ) : (
            <ChevronRight size={22} />
          )}
        </Button>
      </div>
      <hr />
      <div
        className={cn(
          isOpen && "px-8",
          "flex flex-col gap-4 py-6 px-6 overflow-y-auto",
        )}
      >
        {children}
        <hr />
        <SignOutButton isOpen={isOpen} />
      </div>
    </>
  );
}
