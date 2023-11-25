import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SelectInputProps = {
  placeholder?: string;
  options: string[];
  label?: string;
  groupLabel?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentPropsWithoutRef<typeof SelectTrigger>;

export function SelectInput({
  options = [],
  placeholder = options[0],
  label,
  groupLabel,
  onChange,
  ...props
}: SelectInputProps) {
  return (
    <Select>
      <Label htmlFor={props?.id} className="-mb-7">
        {label}
      </Label>
      <SelectTrigger className="w-full" id={props?.id} {...props}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent onChange={onChange}>
        <SelectGroup>
          <SelectLabel>{groupLabel}</SelectLabel>
          <hr />
          {options.map((option, index) => (
            <SelectItem key={`${option}-${index}`} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
