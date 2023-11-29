import { useNavigation } from "@remix-run/react";
import { Loader2, Trash2 } from "lucide-react";
import { AlertDialog } from "~/components/custom-alert-dialog";
import { Button } from "~/components/custom-button";

type DeleteButtonProps = {
  deleteDialogTitle: string;
  deleteDialogDescription: string | React.ReactNode;
  deleteDialogActionOnConfirm: () => void;
};

export function DeleteButton({
  deleteDialogTitle,
  deleteDialogDescription,
  deleteDialogActionOnConfirm,
}: DeleteButtonProps) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const isSubmitting = navigation.state === "submitting";
  return (
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
          disabled={isLoading || isSubmitting}
          className="text-red-600 border-red-500 hover:opacity-70 hover:text-red-600 hover:border-red-500"
        >
          {isLoading || isSubmitting ? (
            <Loader2 className="animate-spin mr-2 h-4 w-4" />
          ) : (
            <Trash2 className="mr-2 h-4 w-4" />
          )}{" "}
          Delete
        </Button>
      }
    />
  );
}
