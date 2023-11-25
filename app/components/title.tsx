import { cn } from "~/libs/shadcn";

type TitleProps = {
  title: string;
  className?: string;
};

export function Title({ title, className }: TitleProps) {
  return (
    <h2 className={cn("text-xl mb-4 capitalize text-zinc-600", className)}>
      {title}
    </h2>
  );
}
