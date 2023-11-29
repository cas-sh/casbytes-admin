import { cn } from "~/libs/shadcn";
import { Label } from "./ui/label";

type CheckboxProps = {
  id: string;
  name: string;
  label: string;
  checked?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Checkbox({
  id,
  name,
  label,
  checked,
  onChange,
  className,
  ...props
}: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        onChange={onChange}
        className={cn(
          "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500",
          className,
        )}
        {...props}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
}
