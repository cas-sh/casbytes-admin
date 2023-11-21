import React from "react";
import { Outlet } from "@remix-run/react";
import {
  CalendarCheck,
  CalendarDays,
  Contact2,
  LayoutDashboard,
  ListChecks,
  MessageSquarePlus,
  UserCircle2,
  Users,
} from "lucide-react";
import { TooltipProvider } from "~/components/ui/tooltip";
import { cn } from "~/libs/shadcn";
import { SideBar } from "~/components/side-bar";
import { Section } from "~/components/section";
import MobileNav from "~/components/mobile-nav";

export default function AuthAppRoute() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <TooltipProvider>
      <MobileNav navLinks={navLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
      <SideBar navLinks={navLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Section
        className={cn(
          "duration-300",
          isOpen ? "ml-0 md:ml-52" : "ml-0 md:ml-16",
        )}
      >
        <Outlet />
      </Section>
    </TooltipProvider>
  );
}

// export function ErrorBoundary() {
//   return <ErrorUI error={error} />;
// }

const navLinks = [
  {
    icon: <LayoutDashboard size={30} />,
    name: "dashboard",
    link: "dashboard",
  },
  {
    icon: <CalendarDays size={30} />,
    name: "calendar",
    link: "calendar",
  },
  {
    icon: <CalendarCheck size={30} />,
    name: "events",
    link: "event",
  },

  {
    icon: <Users size={30} />,
    name: "students",
    link: "students",
  },
  {
    icon: <MessageSquarePlus size={30} />,
    name: "feedback",
    link: "feedback",
  },
  {
    icon: <Contact2 size={30} />,
    name: "workshops",
    link: "workshop",
  },
  {
    icon: <ListChecks size={30} />,
    name: "submissions",
    link: "submission",
  },
  // {
  //   icon: <ListChecks size={30} />,
  //   name: "discord",
  //   link: "discord",
  // },
  {
    icon: <UserCircle2 size={30} />,
    name: "my account",
    link: "my-account",
  },
];
