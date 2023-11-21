import React from "react";
import { SideBarContainer } from "./side-bar-container";
import { SideBarContent } from "./side-bar-content";
import { Button } from "../ui/button";
import { Link } from "@remix-run/react";
import { Tooltip } from "@radix-ui/react-tooltip";
import { TooltipContent, TooltipTrigger } from "../ui/tooltip";
type SideBarProps = {
  navLinks: {
    icon: React.ReactNode;
    name: string;
    link: string;
  }[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SideBar({ navLinks, isOpen, setIsOpen }: SideBarProps) {
  return (
    <SideBarContainer isOpen={isOpen}>
      <SideBarContent isOpen={isOpen} setIsOpen={setIsOpen}>
        {navLinks.map((item) => (
          <Tooltip key={item.name}>
            <Button
              variant="link"
              className="text-slate-200 hover:text-white"
              asChild
            >
              <Link
                to={item.link}
                className="flex gap-4 capitalize text-xl items-center"
              >
                <TooltipTrigger>{item.icon}</TooltipTrigger>
                {isOpen && item.name}
                <TooltipContent>
                  <p>{item.name}</p>
                </TooltipContent>
              </Link>
            </Button>
          </Tooltip>
        ))}
      </SideBarContent>
    </SideBarContainer>
  );
}
