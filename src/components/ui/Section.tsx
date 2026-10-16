import { Container } from "./Container";
import { cn } from "./cn";

type Tone = "white" | "mist" | "tinted";

const toneClass: Record<Tone, string> = {
  white: "bg-white",
  mist: "bg-brand-mist",
  tinted: "bg-brand-teal/5",
};

export function Section({
  id,
  tone = "white",
  children,
  className,
  width,
  labelledBy,
}: {
  id?: string;
  tone?: Tone;
  children: React.ReactNode;
  className?: string;
  width?: "default" | "narrow";
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-14 sm:py-20", toneClass[tone], className)}
    >
      <Container width={width}>{children}</Container>
    </section>
  );
}
