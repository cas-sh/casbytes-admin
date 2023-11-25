import { Checkbox as ShCheckbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type CheckboxProps = {
  className?: string;
  label?: string;
} & React.ComponentPropsWithoutRef<typeof ShCheckbox>;

export function Checkbox({ className, label, ...props }: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <ShCheckbox {...props} />
      <Label htmlFor={props?.id} className="capitalize">
        {label}
      </Label>
    </div>
  );
}
