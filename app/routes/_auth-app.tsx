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

const navLinks = [
  {
    icon: <BiSolidDashboard className={"text-slate-300 hover:text-white"} />,
    name: "dashboard",
    link: "/admin",
  },
  {
    icon: <FaRegCalendarAlt className={"text-slate-300 hover:text-white"} />,
    name: "calendar",
    link: "calendar",
  },
  {
    icon: <BiCalendarEvent className={"text-slate-300 hover:text-white"} />,
    name: "events",
    link: "event",
  },

  {
    icon: <FaPeopleGroup className={"text-slate-300 hover:text-white"} />,
    name: "students",
    link: "students",
  },
  {
    icon: <VscFeedback className={"text-slate-300 hover:text-white"} />,
    name: "feedback",
    link: "feedback",
  },
  {
    icon: <BsPersonWorkspace className={"text-slate-300 hover:text-white"} />,
    name: "workshops",
    link: "workshop",
  },
  {
    icon: <FaTasks className={"text-slate-300 hover:text-white"} />,
    name: "submissions",
    link: "submission",
  },
  {
    icon: <FaDiscord className={"text-slate-300 hover:text-white"} />,
    name: "discord",
    link: "discord",
  },
  {
    icon: <BsPersonCircle className={"text-slate-300 hover:text-white"} />,
    name: "my account",
    link: "my-account",
  },
];
