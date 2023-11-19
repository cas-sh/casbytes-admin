import React from "react";
import { cn } from "~/libs/shadcn";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
};

export function Section({ className = "", children }: SectionProps) {
  return (
    <section className={cn("py-20 px-4 mx-auto w-full", className)}>
      {children}
    </section>
  );
}
