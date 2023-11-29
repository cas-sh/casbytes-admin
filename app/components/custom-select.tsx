import { CustomAlert } from "./custom-alert";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SelectInputProps = {
  id: string;
  name: string;
  value?: string;
  label?: string;
  message?: string;
  options: string[];
  className?: string;
  placeholder?: string;
  onValueChange?: (selectedValue: string) => void;
} & React.ComponentPropsWithoutRef<typeof Select>;

export function SelectInput({
  id,
  name,
  label,
  value,
  message,
  options,
  className,
  placeholder,
  onValueChange,
  ...props
}: SelectInputProps) {
  return (
    <div className="flex flex-col space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Select onValueChange={onValueChange} name={name} {...props}>
        <SelectTrigger className={className}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className={className}>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {message ? (
        <CustomAlert title={message} variant="destructive" className="mt-4" />
      ) : null}
    </div>
  );
}
