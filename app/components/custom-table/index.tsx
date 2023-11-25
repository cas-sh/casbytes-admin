import React from "react";
import { CustomTableBody } from "./custom-table-body";
import { CustomTableFooter } from "./custom-table-footer";
import { CustomTableHeader } from "./custom-table-header";
import { Table } from "../ui/table";

type CustomTableProps = {
  headerItems: string[];
  bodyItems: any[];
  viewUrl: string;
  editUrl: string;
  formAction: string;
  publishDialogTitle: string;
  publishDialogDescription: string;
  deleteDialogTitle: string;
  deleteDialogDescription: string | React.ReactNode;
  publishDialogActionOnConfirm: () => void;
  deleteDialogActionOnConfirm: () => void;
  searchInputPlaceholder: string;
};

export function CustomTable({
  headerItems = ["one", "two", "three"],
  bodyItems = [{ one: "one", two: "two", three: "three" }],
  viewUrl,
  editUrl,
  formAction,
  publishDialogTitle,
  publishDialogDescription,
  deleteDialogTitle,
  deleteDialogDescription,
  publishDialogActionOnConfirm,
  deleteDialogActionOnConfirm,
  searchInputPlaceholder,
}: CustomTableProps) {
  return (
    <Table className="text-md w-full bg-white rounded-md drop-shadow-md">
      <CustomTableHeader
        headItems={headerItems}
        searchInputPlaceHolder={searchInputPlaceholder}
      />
      <CustomTableBody
        bodyItems={bodyItems}
        viewUrl={viewUrl}
        editUrl={editUrl}
        publishDialogTitle={publishDialogTitle}
        publishDialogDescription={publishDialogDescription}
        publishDialogActionOnConfirm={publishDialogActionOnConfirm}
        deleteDialogTitle={deleteDialogTitle}
        deleteDialogDescription={deleteDialogDescription}
        deleteDialogActionOnConfirm={deleteDialogActionOnConfirm}
      />
      <CustomTableFooter formAction={formAction} />
    </Table>
  );
}
