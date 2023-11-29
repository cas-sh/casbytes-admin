import React from "react";
import { useFetcher } from "@remix-run/react";
import { MoreVertical } from "lucide-react";
import { CustomPopover } from "~/components/custom-popover";
import { Button } from "~/components/custom-button";
import { ViewButton } from "./view-button";
import { EditButton } from "./edit-button";
import { PublishButton } from "./publish-button";
import { DeleteButton } from "./delete-button";

type TableActionButtonsProps = {
  item: any;
  viewUrl: string;
  editUrl: string;
  formAction: string;
  publishDialogTitle: string;
  publishDialogDescription: string | React.ReactNode;
  unPublishDialogTitle: string;
  unPublishDialogDescription: string | React.ReactNode;
  deleteDialogTitle: string;
  deleteDialogDescription: string | React.ReactNode;
  publishDialogActionOnConfirm: () => void;
  unPublishDialogActionOnConfirm: () => void;
  deleteDialogActionOnConfirm: () => void;
};

export function TableActionButtons({
  item,
  viewUrl,
  editUrl,
  formAction,
  publishDialogTitle,
  publishDialogDescription,
  unPublishDialogTitle,
  unPublishDialogDescription,
  deleteDialogTitle,
  deleteDialogDescription,
  publishDialogActionOnConfirm,
  unPublishDialogActionOnConfirm,
  deleteDialogActionOnConfirm,
}: TableActionButtonsProps) {
  const fetcher = useFetcher();

  return (
    <CustomPopover
      popoverContentClassName="w-auto"
      popoverTrigger={
        <Button variant="ghost" size="icon">
          <MoreVertical />
        </Button>
      }
      popoverContent={
        <fetcher.Form method="post" action={formAction}>
          <ul>
            <li>
              <ViewButton viewUrl={viewUrl} />
            </li>
            <li>
              <EditButton editUrl={editUrl} />
            </li>
            <li>
              <PublishButton
                item={item}
                publishDialogTitle={publishDialogTitle}
                publishDialogDescription={publishDialogDescription}
                publishDialogActionOnConfirm={publishDialogActionOnConfirm}
                unPublishDialogTitle={unPublishDialogTitle}
                unPublishDialogDescription={unPublishDialogDescription}
                unPublishDialogActionOnConfirm={unPublishDialogActionOnConfirm}
              />
            </li>
            <li>
              <DeleteButton
                deleteDialogTitle={deleteDialogTitle}
                deleteDialogDescription={deleteDialogDescription}
                deleteDialogActionOnConfirm={deleteDialogActionOnConfirm}
              />
            </li>
          </ul>
        </fetcher.Form>
      }
    />
  );
}
