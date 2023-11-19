import { cn } from "~/libs/shadcn";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Alert } from "./alert";

type FormInputProps = {
  type?: string;
  className?: string;
  message?: string;
  autoComplete?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function FormInput({
  type = "text",
  className = "",
  message = "",
  autoComplete = "off",
  ...props
}: FormInputProps) {
  return (
    <div className="w-full">
      <Label htmlFor={props?.id} className="capitalize">
        {props?.placeholder}
      </Label>
      <Input
        {...props}
        type={type}
        aria-labelledby={props?.placeholder}
        autoComplete={autoComplete}
        className={cn("w-full", className)}
      />
      {message ? (
        <Alert title={message} variant="destructive" className="mt-4" />
      ) : null}
    </div>
  );
}
