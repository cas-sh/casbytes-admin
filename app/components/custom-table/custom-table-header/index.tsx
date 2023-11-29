import { TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { TableSelectInput } from "./table-select-input";
import TableSearchInput from "./table-search-input";

type CustomTableHeaderProps = {
  tableHeaderItems: string[];
  searchInputPlaceHolder: string;
};

export function CustomTableHeader({
  tableHeaderItems,
  searchInputPlaceHolder,
}: CustomTableHeaderProps) {
  return (
    <TableHeader>
      <TableRow className="bg-slate-200">
        <TableHead colSpan={3} className="p-4 capitalize">
          <TableSearchInput searchInputPlaceHolder={searchInputPlaceHolder} />
        </TableHead>
        <TableHead className="items-end">
          <TableSelectInput />
        </TableHead>
      </TableRow>
      <TableRow className="px-2 font-black text-md uppercase">
        {tableHeaderItems.map((item, index) => (
          <TableHead key={`${item}-${index}`}>{item}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
