import React from "react";
import { Link } from "@remix-run/react";
import logo from "~/assets/logo.png";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

type NavBarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavBar({ isOpen, setIsOpen }: NavBarProps) {
  return (
    <nav className="flex md:hidden justify-between items-center p-6 bg-slate-300">
      <Link to="/dashboard">
        <img src={logo} alt="CASBytes" width={200} className="w-[200px]" />
      </Link>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="text-3xl font-extrabold"
        size="icon"
      >
        {isOpen ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
      </Button>
    </nav>
  );
}
