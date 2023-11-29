import { useFetcher } from "@remix-run/react";
import { SelectInput } from "~/components/custom-select";

type PaginationRowsInputProps = {
  formAction: string;
};

export function PaginationRowsInput({ formAction }: PaginationRowsInputProps) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="get" action={formAction}>
      <p className="text-xs">Rows per page</p>{" "}
      <SelectInput
        name="rows"
        id="rows"
        placeholder="rows"
        options={["10", "20", "40", "60", "80", "100"]}
        className="w-20"
      />
    </fetcher.Form>
  );
}
