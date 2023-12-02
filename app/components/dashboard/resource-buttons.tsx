import React from "react";
import { Button } from "../custom-button";
import { Link } from "@remix-run/react";
import { Plus } from "lucide-react";

export function ResourcesButtons() {
  return (
    <div className="flex flex-wrap gap-6">
      {items.map((item) => (
        <Button
          key={item.name}
          variant="outline"
          size="lg"
          className="capitalize"
          asChild
        >
          <Link to={item.link}>
            <Plus /> {item.name}
          </Link>
        </Button>
      ))}
    </div>
  );
}

const items = [
  {
    name: "add user",
    link: "/add-user",
  },
  {
    name: "add course",
    link: "/courses/add-course",
  },
  {
    name: "add motule",
    link: "/modules/add-module",
  },
  {
    name: "add lesson",
    link: "/lessons/add-lesson",
  },
  {
    name: "add quiz",
    link: "/quizs/add-quiz",
  },
  {
    name: "add exercise",
    link: "/exercises/add-exercise",
  },
  {
    name: "add workshop",
    link: "/workshops/add-workshop",
  },
  {
    name: "add event",
    link: "/events/add-event",
  },
];
