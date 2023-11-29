import { Link } from "@remix-run/react";
import { FileEdit } from "lucide-react";
import { Button } from "~/components/custom-button";

type EditButtonProps = {
  editUrl: string;
};

export function EditButton({ editUrl }: EditButtonProps) {
  return (
    <Button type="button" variant="ghost" asChild>
      <Link to={editUrl}>
        <FileEdit className="mr-2 h-4 w-4" /> Edit
      </Link>
    </Button>
  );
}
