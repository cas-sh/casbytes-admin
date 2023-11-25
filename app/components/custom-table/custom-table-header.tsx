import { Input } from "../custom-input";
import { SelectInput } from "../custom-select";
import { TableHead, TableHeader, TableRow } from "../ui/table";

type CustomTableHeaderProps = {
  headItems: string[];
  searchInputPlaceHolder: string;
};

export function CustomTableHeader({
  headItems,
  searchInputPlaceHolder,
}: CustomTableHeaderProps) {
  return (
    <TableHeader>
      <TableRow className="bg-slate-200">
        <TableHead colSpan={3} className="p-4 capitalize">
          <Input
            id="search"
            name="search"
            placeholder={searchInputPlaceHolder}
            className="w-1/2"
          />
        </TableHead>
        <TableHead className="items-end">
          <SelectInput
            id="sort-by"
            name="sort-by"
            placeholder="ASC"
            groupLabel="sort by"
            options={["ASC", "DESC"]}
            className="w-20"
          />
        </TableHead>
      </TableRow>
      <TableRow className="px-2 font-black text-md uppercase">
        {headItems.map((item, index) => (
          <TableHead key={`${item}-${index}`}>{item}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
}
