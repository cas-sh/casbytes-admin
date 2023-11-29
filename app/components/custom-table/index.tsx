import React from "react";
import { CustomTableBody } from "./custom-table-body";
import { CustomTableFooter } from "./custom-table-footer";
import { CustomTableHeader } from "./custom-table-header";
import { Table } from "../ui/table";

type CustomTableProps = {
  formAction: string;
  children: React.ReactNode;
  tableHeaderItems: string[];
  searchInputPlaceholder: string;
};

function CustomTable({
  children,
  formAction,
  tableHeaderItems,
  searchInputPlaceholder,
}: CustomTableProps) {
  return (
    <Table className="bg-white rounded-md drop-shadow-md">
      <CustomTableHeader
        tableHeaderItems={tableHeaderItems}
        searchInputPlaceHolder={searchInputPlaceholder}
      />
      <CustomTableBody>{children}</CustomTableBody>
      <CustomTableFooter formAction={formAction} />
    </Table>
  );
}

export { CustomTable };
export { TableActionButtons } from "./table-action-buttons";
export { TableStatusTooltip } from "./table-status-tooltip";
