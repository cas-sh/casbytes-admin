import { cn } from "~/libs/shadcn";

type TitleProps = {
  className?: string;
  title: string;
};

export function PageTitle({ className, title }: TitleProps) {
  return (
    <h1
      aria-label={title}
      className={cn(
        "bg-slate-200/70 px-4 py-2 border-b border-l-8 border-blue-500 text-lg max-w-4xl w-full capitalize",
        className,
      )}
    >
      {title}
    </h1>
  );
}
