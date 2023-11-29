import { SelectInput } from "~/components/custom-select";

export function TableSelectInput() {
  return (
    <SelectInput
      id="sort-by"
      name="sortBy"
      placeholder="ASC"
      options={["ASC", "DESC"]}
      className="w-20"
    />
  );
}
