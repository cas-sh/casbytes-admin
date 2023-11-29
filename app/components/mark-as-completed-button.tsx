import { Link } from "@remix-run/react";
import { CheckCircle } from "lucide-react";
import { Button } from "./custom-button";

type MarkAsCompletedButtonProps = {
  className?: string;
  to: string;
};

export function MarkAsCompletedButton({
  className = "",
  to,
  ...props
}: MarkAsCompletedButtonProps) {
  return (
    <Button
      variant="ghost"
      aria-label="mark as completed"
      className={className}
      {...props}
      asChild
    >
      <Link prefetch="intent" to={to}>
        <CheckCircle className="text-blue-500 hover:text-white-100 inline mr-2" />
        mark as completed
      </Link>
    </Button>
  );
}
