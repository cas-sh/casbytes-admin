import { TableCell, TableFooter, TableRow } from "~/components/ui/table";
import { PaginationRowsInput } from "./pagination-rows-input";
import { PaginationButtons } from "./pagination-buttons";

type CustomTableFooterProps = {
  formAction: string;
};

export function CustomTableFooter({ formAction }: CustomTableFooterProps) {
  return (
    <TableFooter className="bg-slate-50">
      <TableRow>
        <TableCell colSpan={3}>
          <PaginationButtons formAction={formAction} />
        </TableCell>
        <TableCell>
          <PaginationRowsInput formAction={formAction} />
        </TableCell>
      </TableRow>
    </TableFooter>
  );
}
