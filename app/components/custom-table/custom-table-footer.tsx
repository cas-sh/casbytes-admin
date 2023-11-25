import { useFetcher } from "@remix-run/react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { TableCell, TableFooter, TableRow } from "../ui/table";
import { Button } from "../custom-button";
import { SelectInput } from "../custom-select";

type CustomTableFooterProps = {
  formAction: string;
};

export function CustomTableFooter({ formAction }: CustomTableFooterProps) {
  const fetcher = useFetcher();
  return (
    <TableFooter className="bg-slate-50">
      <TableRow>
        <TableCell colSpan={3}>
          {/* form */}
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
        </TableCell>
        <TableCell>
          {/* form */}
          <fetcher.Form method="get" action={formAction}>
            <p className="text-xs">Rows per page</p>{" "}
            <SelectInput
              name="rows"
              id="rows"
              options={["10", "20", "40", "60", "80", "100"]}
              className="w-20"
            />
          </fetcher.Form>
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
