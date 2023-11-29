import { Link } from "@remix-run/react";
import { Eye } from "lucide-react";
import { Button } from "~/components/custom-button";

type ViewButtonProps = {
  viewUrl: string;
};

export function ViewButton({ viewUrl }: ViewButtonProps) {
  return (
    <Button type="button" variant="ghost" asChild>
      <Link to={viewUrl}>
        <Eye className="mr-2 h-4 w-4" /> View
      </Link>
    </Button>
  );
}
