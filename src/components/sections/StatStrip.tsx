import { Section } from "@/components/ui/Section";
import { accentText, type Accent } from "@/components/ui/accents";
import { cn } from "@/components/ui/cn";

export type Stat = { value: string; label: string; accent?: Accent };

export function StatStrip({
  stats,
  tone = "white",
}: {
  stats: Stat[];
  tone?: "white" | "mist";
}) {
  const order: Accent[] = ["blue", "red", "green", "teal"];
  return (
    <Section tone={tone} className="py-10 sm:py-12">
      <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          // Reversed column so the number reads first on screen while the
          // label stays the <dt> for assistive technology.
          <div key={stat.label} className="flex flex-col-reverse text-center">
            <dt className="mt-2 text-xs leading-snug text-brand-charcoal sm:text-sm">
              {stat.label}
            </dt>
            <dd
              className={cn(
                "text-3xl font-extrabold sm:text-4xl",
                accentText[stat.accent ?? order[index % order.length]],
              )}
            >
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
