import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type CustomTooltipProps = {
  tooltipTrigger: React.ReactNode;
  tooltipContent: React.ReactNode;
};

export function CustomTooltip({
  tooltipTrigger,
  tooltipContent,
}: CustomTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{tooltipTrigger}</TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
