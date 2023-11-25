import { cn } from "~/libs/shadcn";
import { Input as ShInput } from "./ui/input";
import { Label } from "./ui/label";
import { CustomAlert } from "./custom-alert";

type InputProps = {
  label?: string;
  className?: string;
  message?: string;
  autoComplete?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({
  label,
  className = "",
  message = "",
  autoComplete = "off",
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      <Label htmlFor={props?.id} className="capitalize">
        {label}
      </Label>
      <ShInput
        {...props}
        aria-labelledby={label ? label : props?.placeholder}
        autoComplete={autoComplete}
        className={cn("w-full", className)}
      />
      {message ? (
        <CustomAlert title={message} variant="destructive" className="mt-4" />
      ) : null}
    </div>
  );
}
