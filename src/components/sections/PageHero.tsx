import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/components/ui/cn";
import type { LinkRef } from "./types";

export type HeroTheme = "sunset" | "ocean" | "forest" | "amber" | "night" | "deep";

const themeClass: Record<HeroTheme, string> = {
  sunset: "from-brand-red via-brand-red to-brand-orange",
  ocean: "from-brand-blue via-brand-blue to-brand-teal",
  forest: "from-brand-green via-brand-green to-brand-teal",
  amber: "from-brand-orange via-brand-orange to-brand-yellow",
  night: "from-brand-blue via-[#1f3a93] to-brand-charcoal",
  deep: "from-brand-teal via-brand-blue to-brand-charcoal",
};

export function PageHero({
  eyebrow,
  headline,
  subheadline,
  buttons = [],
  media,
  theme = "ocean",
  size = "page",
}: {
  eyebrow: string;
  headline: string;
  subheadline: string;
  buttons?: LinkRef[];
  /** Photo brief for the banner photograph. */
  media?: string;
  theme?: HeroTheme;
  size?: "page" | "home";
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br text-white",
        themeClass[theme],
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 right-32 hidden h-72 w-72 rounded-full bg-white/5 lg:block"
      />

      <Container
        className={cn(
          "relative",
          size === "home" ? "py-16 sm:py-24 lg:py-28" : "py-12 sm:py-16 lg:py-20",
        )}
      >
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]">
            {eyebrow}
          </p>
          <h1
            className={cn(
              "mt-5 font-bold leading-[1.1] text-white",
              size === "home"
                ? "text-4xl sm:text-5xl lg:text-6xl"
                : "text-3xl sm:text-4xl lg:text-5xl",
            )}
          >
            {headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            {subheadline}
          </p>
          {buttons.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {buttons.map((button, index) => (
                <Button
                  key={button.href}
                  href={button.href}
                  size="lg"
                  variant={index === 0 ? "primary" : "onColorOutline"}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>

        {media ? (
          <p className="mt-10 max-w-md rounded-lg bg-black/25 px-3 py-2 text-[11px] leading-snug text-white/85 lg:absolute lg:bottom-6 lg:right-8 lg:mt-0">
            {media}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
