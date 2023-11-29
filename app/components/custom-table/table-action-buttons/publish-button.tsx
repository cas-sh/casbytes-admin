import { useNavigation } from "@remix-run/react";
import { BookCheck, BookX, Loader2 } from "lucide-react";
import { AlertDialog } from "~/components/custom-alert-dialog";
import { Button } from "~/components/custom-button";

type PublishButtonProps = {
  item: any;
  publishDialogTitle: string;
  publishDialogDescription: string | React.ReactNode;
  unPublishDialogTitle: string;
  unPublishDialogDescription: string | React.ReactNode;
  publishDialogActionOnConfirm: () => void;
  unPublishDialogActionOnConfirm: () => void;
};

export function PublishButton({
  item,
  publishDialogTitle,
  publishDialogDescription,
  unPublishDialogTitle,
  unPublishDialogDescription,
  publishDialogActionOnConfirm,
  unPublishDialogActionOnConfirm,
}: PublishButtonProps) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const isSubmitting = navigation.state === "submitting";
  return (
    <AlertDialog
      dialogTitle={item.isPublished ? unPublishDialogTitle : publishDialogTitle}
      dialogDescription={
        item.isPublished ? unPublishDialogDescription : publishDialogDescription
      }
      dialogActionOnConfirm={
        item.isPublished
          ? unPublishDialogActionOnConfirm
          : publishDialogActionOnConfirm
      }
      dialogTrigger={
        <Button
          name="intent"
          variant="ghost"
          disabled={isLoading || isSubmitting}
          value={item.isPublished ? "unpublish" : "publish"}
        >
          {item.isPublished ? (
            <div className="text-yellow-600 flex gap-2">
              {isLoading || isSubmitting ? (
                <Loader2 className="animate-spin h-4 w-4" />
              ) : (
                <BookX className="h-4 w-4" />
              )}{" "}
              Unpublish
            </div>
          ) : (
            <div className="text-green-600 flex gap-2">
              {isLoading || isSubmitting ? (
                <Loader2 className="animate-spin h-4 w-4" />
              ) : (
                <BookCheck className="h-4 w-4" />
              )}{" "}
              Publish
            </div>
          )}
        </Button>
      }
    />
  );
}
