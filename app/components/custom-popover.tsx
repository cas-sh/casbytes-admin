import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

type CustomPopoverProps = {
  popoverTrigger: React.ReactNode;
  popoverContent: React.ReactNode;
  popoverContentClassName?: string;
  popoverTriggerClassName?: string;
};

export function CustomPopover({
  popoverTrigger,
  popoverContent,
  popoverContentClassName,
  popoverTriggerClassName,
}: CustomPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger className={popoverTriggerClassName} asChild>
        {popoverTrigger}
      </PopoverTrigger>
      <PopoverContent className={popoverContentClassName}>
        {popoverContent}
      </PopoverContent>
    </Popover>
  );
}
