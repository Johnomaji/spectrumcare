/**
 * The six logo colours, used to give each card, service and section its own
 * identity. Classes are written out in full (never interpolated) so Tailwind
 * can see them when it scans the source.
 */
export const ACCENTS = ["blue", "red", "yellow", "green", "teal", "orange"] as const;

export type Accent = (typeof ACCENTS)[number];

/** Cycle the palette across a list of cards. */
export function accentFor(index: number, from: readonly Accent[] = ACCENTS): Accent {
  return from[index % from.length];
}

/** Coloured top bar on a white card. */
export const accentBar: Record<Accent, string> = {
  blue: "bg-brand-blue",
  red: "bg-brand-red",
  yellow: "bg-brand-yellow",
  green: "bg-brand-green",
  teal: "bg-brand-teal",
  orange: "bg-brand-orange",
};

/**
 * Accent text. Yellow is never legible as text, so yellow headings fall back
 * to charcoal — a rule from the blueprint's design direction.
 */
export const accentText: Record<Accent, string> = {
  blue: "text-brand-blue",
  red: "text-brand-red",
  yellow: "text-brand-charcoal",
  green: "text-brand-green",
  teal: "text-brand-teal",
  orange: "text-brand-orange",
};

/** Solid fills for numbered badges and icon chips. */
export const accentSolid: Record<Accent, string> = {
  blue: "bg-brand-blue text-white",
  red: "bg-brand-red text-white",
  yellow: "bg-brand-yellow text-brand-ink",
  green: "bg-brand-green text-white",
  teal: "bg-brand-teal text-white",
  orange: "bg-brand-orange text-white",
};

/** Soft tinted backgrounds. */
export const accentSoft: Record<Accent, string> = {
  blue: "bg-brand-blue/10",
  red: "bg-brand-red/10",
  yellow: "bg-brand-yellow/15",
  green: "bg-brand-green/10",
  teal: "bg-brand-teal/10",
  orange: "bg-brand-orange/10",
};

/** Gradients used by the photo placeholders, mirroring the blueprint mockups. */
export const accentGradient: Record<Accent, string> = {
  blue: "from-brand-blue to-brand-teal",
  red: "from-brand-red to-brand-orange",
  yellow: "from-brand-yellow to-brand-green",
  green: "from-brand-green to-brand-teal",
  teal: "from-brand-teal to-brand-blue",
  orange: "from-brand-orange to-brand-yellow",
};
