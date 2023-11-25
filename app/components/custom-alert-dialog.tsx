import React from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog as ShAlertDialog,
} from "./ui/alert-dialog";
import { Button } from "./custom-button";

type AlertDialogProps = {
  dialogTrigger: React.ReactNode;
  dialogTitle: string;
  dialogDescription?: string | React.ReactNode;
  dialogCancel?: string;
  dialogAction?: string;
  dialogActionText?: string;
  dialogActionOnConfirm: () => void;
} & React.ComponentProps<typeof ShAlertDialog>;

export function AlertDialog({
  dialogTrigger,
  dialogTitle,
  dialogDescription,
  dialogCancel,
  dialogAction,
  dialogActionText,
  dialogActionOnConfirm,
}: AlertDialogProps) {
  return (
    <ShAlertDialog>
      <AlertDialogTrigger asChild>{dialogTrigger}</AlertDialogTrigger>
      <AlertDialogContent className="border-blue-500">
        <AlertDialogHeader>
          <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
          <AlertDialogDescription>{dialogDescription}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            {dialogCancel ? (
              dialogCancel
            ) : (
              <Button variant="outline" className="border-red-500 text-red-600">
                Cancel
              </Button>
            )}
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            {dialogAction ? (
              dialogAction
            ) : (
              <Button onClick={dialogActionOnConfirm}>
                {dialogActionText ? dialogActionText : "Confirm"}
              </Button>
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ShAlertDialog>
  );
}
