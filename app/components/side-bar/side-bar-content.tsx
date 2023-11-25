import React from "react";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import { SignOutButton } from "../sign-out-button";
import { cn } from "~/libs/shadcn";
import icon from "~/assets/icon.png";
import logo from "~/assets/logo.png";

import { Button } from "../ui/button";
import { Link } from "@remix-run/react";

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
      <div className="flex-col flex h-32 justify-between items-center gap-4 p-4 bg-gray-300">
        <Link to="/dashboard">
          <img
            src={isOpen ? logo : icon}
            alt="CASBytes"
            width={isOpen ? 150 : 40}
            className={cn(isOpen ? "w-[150px]" : "w-[40px]")}
          />
        </Link>
        <Button
          variant="ghost"
          onClick={toggleSideBar}
          className={cn("p-1 hover:opacity-80", isOpen && "self-end")}
          aria-label={isOpen ? "close sidebar" : "open sidebar"}
        >
          {isOpen ? (
            <ChevronLeft size={35} className="text-red-500" />
          ) : (
            <ChevronRight size={35} className="text-black" />
          )}
        </Button>
      </div>
      <hr />
      <div
        className={cn("flex flex-col items-start gap-6 py-6 overflow-y-auto")}
      >
        {children}
        <hr className="text-white" />
        <SignOutButton
          icon={
            <LogOut
              size={30}
              className="text-red-500 hover:opacity-70 duration-300"
            />
          }
          isOpen={isOpen}
        />
      </div>
    </>
  );
}
