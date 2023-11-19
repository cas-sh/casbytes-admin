import { cn } from "~/libs/shadcn";

type SideBarContainerProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

export function SideBarContainer({ isOpen, children }: SideBarContainerProps) {
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 hidden md:block z-50  h-screen bg-slate-800 text-slate-100  duration-300 ease-in-out",
        isOpen ? "w-56" : "w-20",
      )}
    >
      {children}
    </aside>
  );
}
