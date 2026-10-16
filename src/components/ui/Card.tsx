import { cn } from "./cn";
import { accentBar, type Accent } from "./accents";

/** White rounded card with a coloured top bar, per the blueprint's card style. */
export function Card({
  accent = "blue",
  children,
  className,
  as: Tag = "div",
}: {
  accent?: Accent;
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  return (
    <Tag
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white shadow-sm",
        className,
      )}
    >
      <span aria-hidden="true" className={cn("block h-1.5 w-full", accentBar[accent])} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">{children}</div>
    </Tag>
  );
}

export function Badge({
  children,
  accent = "orange",
}: {
  children: React.ReactNode;
  accent?: Accent;
}) {
  const tone: Record<Accent, string> = {
    blue: "bg-brand-blue/10 text-brand-blue",
    red: "bg-brand-red/10 text-brand-red",
    yellow: "bg-brand-yellow/20 text-brand-ink",
    green: "bg-brand-green/10 text-brand-green",
    teal: "bg-brand-teal/10 text-brand-teal",
    orange: "bg-brand-orange/10 text-brand-orange",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide",
        tone[accent],
      )}
    >
      {children}
    </span>
  );
}
