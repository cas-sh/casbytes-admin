import { Form } from "@remix-run/react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { cn } from "~/libs/shadcn";

export function SignOutButton({ isOpen }: { isOpen: boolean }) {
  return (
    <Form
      method="POST"
      action="/sign-out"
      data-testid="sign-out-form"
      className="mx-auto"
    >
      <Button
        type="submit"
        variant="destructive"
        className={cn("p-2 flex gap-4 duration-300", isOpen && "slef-start")}
      >
        <LogOut size={20} /> {isOpen && "Sign Out"}
      </Button>
    </Form>
  );
}
