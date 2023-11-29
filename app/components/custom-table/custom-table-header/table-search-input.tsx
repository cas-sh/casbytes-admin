import { Input } from "~/components/custom-input";

type TableSearchInputProps = {
  searchInputPlaceHolder: string;
};

export default function TableSearchInput({
  searchInputPlaceHolder,
}: TableSearchInputProps) {
  return (
    <Input
      id="search"
      name="search"
      placeholder={searchInputPlaceHolder}
      className="w-1/2"
    />
  );
}
