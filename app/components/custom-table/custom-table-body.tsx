import { TableBody } from "../ui/table";

type CustomTableBodyProps = {
  children: React.ReactNode;
};

export function CustomTableBody({ children }: CustomTableBodyProps) {
  return <TableBody>{children}</TableBody>;
}
