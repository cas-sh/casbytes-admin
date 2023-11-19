import React from "react";
import { SideBarContainer } from "./side-bar-container";
import { SideBarContent } from "./side-bar-content";
import { Button } from "../ui/button";
type SideBarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function SideBar({ isOpen, setIsOpen }: SideBarProps) {
  const items = [1, 2, 3, 4, 5];
  return (
    <SideBarContainer isOpen={isOpen}>
      <SideBarContent isOpen={isOpen} setIsOpen={setIsOpen}>
        {items.map((item) => (
          <Button
            variant="link"
            key={item}
            className="h-8 bg-slate-500 rounded-sm"
          >
            {item}
          </Button>
        ))}
      </SideBarContent>
    </SideBarContainer>
  );
}
