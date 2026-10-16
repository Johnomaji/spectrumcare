import Link from "next/link";
import { cn } from "./cn";

/**
 * Text wordmark standing in for the logo artwork.
 *
 * The supplied logo reads "CARE LIMITED"; the website needs a Foundation
 * version. When the artwork arrives, replace this component's markup with the
 * SVG and keep the same props.
 */
const LETTERS: { char: string; className: string }[] = [
  { char: "S", className: "text-brand-blue" },
  { char: "P", className: "text-brand-blue" },
  { char: "E", className: "text-brand-yellow" },
  { char: "C", className: "text-brand-green" },
  { char: "T", className: "text-brand-teal" },
  { char: "R", className: "text-brand-orange" },
  { char: "U", className: "text-brand-red" },
  { char: "M", className: "text-brand-blue" },
];

export function Logo({
  href = "/",
  onColor = false,
  className,
}: {
  href?: string;
  onColor?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("inline-flex flex-col leading-none", className)}
      aria-label="Spectrum Care Foundation — home"
    >
      <span aria-hidden="true" className="text-2xl font-extrabold tracking-tight sm:text-[1.7rem]">
        {LETTERS.map((letter, index) => (
          <span key={index} className={letter.className}>
            {letter.char}
          </span>
        ))}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "mt-1 text-[0.6rem] font-semibold tracking-[0.22em]",
          onColor ? "text-white/80" : "text-brand-charcoal",
        )}
      >
        CARE FOUNDATION
      </span>
    </Link>
  );
}
