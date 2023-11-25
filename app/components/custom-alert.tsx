import { AlertCircle, AlertTriangle, Info } from "lucide-react";
import { Alert as ShAlert, AlertDescription, AlertTitle } from "./ui/alert";

type AlertProps = {
  className?: string;
  variant?: "default" | "warning" | "destructive" | null | undefined;
  title: string;
  description?: string;
};

export function CustomAlert({
  className,
  variant = "default",
  title,
  description,
}: AlertProps) {
  return (
    <ShAlert className={className} variant={variant}>
      {variant === "default" ? (
        <Info className="h-4 w-4" />
      ) : variant === "warning" ? (
        <AlertTriangle className="h-4 w-4 text-yellow-500" />
      ) : (
        <AlertCircle className="h-4 w-4" />
      )}
      <AlertTitle aria-label={title}>{title}</AlertTitle>
      {description ? (
        <AlertDescription aria-label={description}>
          {description}
        </AlertDescription>
      ) : null}
    </ShAlert>
  );
}
