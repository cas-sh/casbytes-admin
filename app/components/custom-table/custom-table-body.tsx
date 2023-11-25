import { BookCheck, Eye, FileEdit, MoreVertical, Trash2 } from "lucide-react";
import { Button } from "../custom-button";
import { CustomPopover } from "../custom-popover";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { Link, useFetcher } from "@remix-run/react";
import { AlertDialog } from "../custom-alert-dialog";

type CustomTableBodyProps = {
  bodyItems: any[];
  viewUrl: string;
  editUrl: string;
  publishDialogTitle: string;
  publishDialogDescription: string;
  deleteDialogTitle: string;
  deleteDialogDescription: string | React.ReactNode;
  publishDialogActionOnConfirm: () => void;
  deleteDialogActionOnConfirm: () => void;
};

export function CustomTableBody({
  bodyItems,
  viewUrl,
  editUrl,
  publishDialogTitle,
  publishDialogDescription,
  deleteDialogTitle,
  deleteDialogDescription,
  publishDialogActionOnConfirm,
  deleteDialogActionOnConfirm,
}: CustomTableBodyProps) {
  const fetcher = useFetcher();
  return (
    <TableBody>
      {bodyItems.map((item, index) => (
        <TableRow key={`${item}-${index}`} className="bg-slate-100 py-2">
          {Object.values(item).map((value: unknown, index: number) => (
            <TableCell key={`${value}-${index}`}>
              {typeof value === "string" ? String(value) : ""}
            </TableCell>
          ))}
          <TableCell>
            <CustomPopover
              popoverContentClassName="w-auto"
              popoverTrigger={
                <Button variant="ghost" size="icon">
                  <MoreVertical />
                </Button>
              }
              popoverContent={
                <fetcher.Form>
                  <ul>
                    <li>
                      <Button type="button" variant="ghost" asChild>
                        <Link to={viewUrl}>
                          <Eye className="mr-2 h-4 w-4" /> View
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <Button type="button" variant="ghost" asChild>
                        <Link to={editUrl}>
                          <FileEdit className="mr-2 h-4 w-4" /> Edit
                        </Link>
                      </Button>
                    </li>
                    <li>
                      <AlertDialog
                        dialogTitle={publishDialogTitle}
                        dialogDescription={publishDialogDescription}
                        dialogActionOnConfirm={publishDialogActionOnConfirm}
                        dialogTrigger={
                          <Button name="intent" value="publish" variant="ghost">
                            <BookCheck className="mr-2 h-4 w-4" /> Publish
                          </Button>
                        }
                      />
                    </li>
                    <li>
                      <AlertDialog
                        dialogTitle={deleteDialogTitle}
                        dialogDescription={deleteDialogDescription}
                        dialogActionOnConfirm={deleteDialogActionOnConfirm}
                        dialogTrigger={
                          <Button
                            type="submit"
                            name="intent"
                            value="delete"
                            variant="ghost"
                            className="text-red-600 border-red-500 hover:text-red-600 hover:border-red-500"
                          >
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </Button>
                        }
                      />
                    </li>
                  </ul>
                </fetcher.Form>
              }
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}
