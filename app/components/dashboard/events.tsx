import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Title } from "../title";
import { Link } from "@remix-run/react";
import { Button } from "../custom-button";
import { ArrowRight } from "lucide-react";

export default function Events() {
  return (
    <div className="w-full">
      <Title title="Events" />
      <Table className="text-sm w-full">
        <TableHeader>
          <TableRow className="text-zinc-600 p-1 mb-1">
            <TableCell>Event name</TableCell>
            <TableCell>start date</TableCell>
            <TableCell>end date</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-slate-200 p-1 mb-1">
            <Link to="/events">
              <TableCell className="text-blue-600">
                Onboarding of core curriculum students
              </TableCell>
            </Link>
            <TableCell>23/09/2024 10:00 AM</TableCell>
            <TableCell>23/09/2024 10:00 AM</TableCell>
          </TableRow>
          <TableRow className="bg-slate-200 p-1 mb-1">
            <Link to="/events">
              <TableCell className="text-blue-600">Onboarding</TableCell>
            </Link>
            <TableCell>23/09/2024 10:00 AM</TableCell>
            <TableCell>23/09/2024 10:00 AM</TableCell>
          </TableRow>
          <TableRow className="bg-slate-200 p-1 mb-1">
            <Link to="/events">
              <TableCell className="text-blue-600">Onboarding</TableCell>
            </Link>
            <TableCell>23/09/2024 10:00 AM</TableCell>
            <TableCell>23/09/2024 10:00 AM</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Link to="/events">
        <Button variant="ghost" className="flex items-center mt-4 capitalize">
          events <ArrowRight className="ml-4" />
        </Button>
      </Link>
    </div>
  );
}
