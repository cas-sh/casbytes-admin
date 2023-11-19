import { Checkbox as ShCheckbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type CheckboxProps = {
  className?: string;
  text?: string;
} & React.ComponentPropsWithoutRef<typeof ShCheckbox>;

export function Checkbox({ className, text, ...props }: CheckboxProps) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <ShCheckbox {...props} />
        <Label htmlFor={props?.id}>{text}</Label>
      </div>
    </div>
  );
}
