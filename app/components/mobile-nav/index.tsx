import React from "react";
import { NavBar } from "./nav-bar";
import { NavContent } from "./nav-content";
import { Link } from "@remix-run/react";
import { Button } from "../ui/button";
import { SignOutButton } from "../sign-out-button";

type MobileNavProps = {
  navLinks: {
    icon: React.ReactNode;
    name: string;
    link: string;
  }[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNav({
  navLinks,
  isOpen,
  setIsOpen,
}: MobileNavProps) {
  function handleLinkClick() {
    setIsOpen(false);
  }
  return (
    <>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavContent isOpen={isOpen}>
        <ul className="space-y-2">
          {navLinks.map((item, index) => (
            <li key={`items-${index}`} aria-label={item.name}>
              <Button
                variant="link"
                onClick={handleLinkClick}
                className="text-lg capitalize"
                asChild
              >
                <Link to={item.link}>{item.name}</Link>
              </Button>
            </li>
          ))}
        </ul>
        <SignOutButton
          isOpen={isOpen}
          className="text-red-500 hover:opacity-70"
        />
      </NavContent>
    </>
  );
}
