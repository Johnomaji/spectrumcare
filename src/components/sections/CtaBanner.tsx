import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/components/ui/cn";
import type { LinkRef } from "./types";

type BannerTone = "orange" | "green" | "red" | "teal" | "blue" | "charcoal";

const toneClass: Record<BannerTone, string> = {
  orange: "bg-brand-orange",
  green: "bg-brand-green",
  red: "bg-brand-red",
  teal: "bg-brand-teal",
  blue: "bg-brand-blue",
  charcoal: "bg-brand-charcoal",
};

export function CtaBanner({
  id,
  headline,
  body,
  buttons,
  tone = "orange",
}: {
  id?: string;
  headline: string;
  body?: string;
  buttons: readonly LinkRef[];
  tone?: BannerTone;
}) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("py-14 text-white sm:py-16", toneClass[tone])}
    >
      <Container className="text-center">
        <h2 id={headingId} className="text-2xl font-bold text-white sm:text-3xl">
          {headline}
        </h2>
        {body ? (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90">
            {body}
          </p>
        ) : null}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {buttons.map((button, index) => (
            <Button
              key={button.href}
              href={button.href}
              size="lg"
              variant={index === 0 ? "onColor" : "onColorOutline"}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
}
