import { Link } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

type BackButtonProps = {
  className?: string;
  buttonText?: string;
  to: string;
  children?: React.ReactNode;
};

export function BackButton({
  className,
  buttonText,
  to,
  children,
}: BackButtonProps) {
  return (
    <Button variant="ghost" className={className} asChild>
      <Link to={to}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        {buttonText}
        {children}
      </Link>
    </Button>
  );
}
