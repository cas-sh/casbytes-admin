import { Form } from "@remix-run/react";
import { Button } from "./custom-button";
import { cn } from "~/libs/shadcn";

export function SignOutButton({
  className,
  isOpen,
  icon,
}: {
  className?: string;
  isOpen?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <Form
      method="post"
      action="/sign-out"
      data-testid="sign-out-form"
      className="flex justify-start"
    >
      <Button
        type="submit"
        variant="link"
        className={cn(
          "flex p-4 self-start gap-4 duration-300 text-lg text-slate-200 hover:text-white w-full",
          className,
        )}
      >
        {icon ? icon : null} {isOpen && "Sign Out"}
      </Button>
    </Form>
  );
}
