import { useFetcher } from "@remix-run/react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "~/components/custom-button";

type PaginationButtonsProps = {
  formAction: string;
};

export function PaginationButtons({ formAction }: PaginationButtonsProps) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form
      method="post"
      action={formAction}
      className="flex gap-6 items-center p-4"
    >
      <div className="text-slate-500">
        Page <span className="text-black">1</span> of{" "}
        <span className="text-black">100</span>
      </div>
      <div className="flex gap-2">
        <Button
          name="page"
          id="first-page"
          value="first-page"
          variant="outline"
          size="icon"
        >
          <ChevronsLeft />
        </Button>
        <Button
          name="page"
          id="previous-page"
          value="previous-page"
          variant="outline"
          size="icon"
        >
          <ChevronLeft />
        </Button>
        <Button
          name="page"
          id="next-page"
          value="next-page"
          variant="outline"
          size="icon"
        >
          <ChevronRight />
        </Button>
        <Button
          name="page"
          id="last-page"
          value="last-page"
          variant="outline"
          size="icon"
        >
          <ChevronsRight />
        </Button>
      </div>
    </fetcher.Form>
  );
}
