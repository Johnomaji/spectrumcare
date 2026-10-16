import { cn } from "./cn";
import { accentSolid, type Accent } from "./accents";

export function CheckList({
  items,
  accent = "green",
  columns = 1,
  className,
}: {
  items: readonly string[];
  accent?: Accent;
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-x-8 gap-y-3",
        columns === 2 ? "sm:grid-cols-2" : "",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
              accentSolid[accent],
            )}
          >
            ✓
          </span>
          <span className="text-sm leading-relaxed text-brand-charcoal sm:text-base">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
