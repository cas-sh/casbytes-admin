import React from "react";
import { Users2 } from "lucide-react";
import { DashboardCard } from "./card";
import { Link } from "@remix-run/react";

export function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Link to={`/${card.title}`} key={`${card.title}-${index}`}>
          <DashboardCard
            cardContent={card.content}
            cardIcon={card.icon}
            cardTitle={card.title}
          />
        </Link>
      ))}
    </div>
  );
}

const cards = [
  {
    title: "courses",
    content: "2500",
    icon: <Users2 />,
  },
  {
    title: "modules",
    content: "2500",
    icon: <Users2 />,
  },
  {
    title: "lessons",
    content: "2500",
    icon: <Users2 />,
  },
  {
    title: "students",
    content: "2500",
    icon: <Users2 />,
  },
  {
    title: "students",
    content: "2500",
    icon: <Users2 />,
  },
  {
    title: "students",
    content: "2500",
    icon: <Users2 />,
  },
  {
    title: "students",
    content: "2500",
    icon: <Users2 />,
  },
];
