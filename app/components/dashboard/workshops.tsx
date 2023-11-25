import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { Title } from "../title";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../custom-button";

export function Workshops() {
  return (
    <div className="w-full">
      <Title title="workshops" />
      <Table className="text-sm w-full">
        <TableHeader>
          <TableRow className="text-zinc-600">
            <TableCell>Title</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Duration</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-slate-200 p-1 mb-1">
            <Link to="/workshops">
              <TableCell className="text-blue-600">The power of AI</TableCell>
            </Link>
            <TableCell>23/09/2024</TableCell>
            <TableCell>10:00 AM</TableCell>
            <TableCell>2 hours</TableCell>
          </TableRow>
          <TableRow className="bg-slate-200 p-1 mb-1">
            <TableCell className="text-blue-500">The power of AI</TableCell>
            <TableCell>23/09/2024</TableCell>
            <TableCell>10:00 AM</TableCell>
            <TableCell>2 hours</TableCell>
          </TableRow>
          <TableRow className="bg-slate-200 p-1 mb-1">
            <Link to="/workshops">
              <TableCell className="text-blue-500">
                The impact of AI in the present world
              </TableCell>
            </Link>
            <TableCell>23/09/2024</TableCell>
            <TableCell>10:00 AM</TableCell>
            <TableCell>2 hours</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Link to="/workshops">
        <Button variant="ghost" className="flex items-center mt-4 capitalize">
          workshops <ArrowRight className="ml-4" />
        </Button>
      </Link>
    </div>
  );
}
