import { CustomTooltip } from "../custom-tooltip";
import { BookCheck, BookX } from "lucide-react";

type CustomTooltipProps = {
  item: any;
};

export function TableStatusTooltip({ item }: CustomTooltipProps) {
  return (
    <CustomTooltip
      tooltipTrigger={
        item.isPublished ? (
          <div className="flex gap-2">
            <BookCheck className="h-6 w-6 text-green-600" />{" "}
            <span className="hidden md:block">Published</span>
          </div>
        ) : (
          <div className="flex gap-2">
            <BookX className="h-6 w-6 text-red-500" />{" "}
            <span className="hidden md:block">Not published</span>
          </div>
        )
      }
      tooltipContent={item.isPublished ? "Published" : "Not published"}
    />
  );
}
