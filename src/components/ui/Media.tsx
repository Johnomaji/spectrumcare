import Image from "next/image";
import { cn } from "./cn";
import { accentGradient, type Accent } from "./accents";

export type MediaProps = {
  /** Describes the photograph to shoot or source. Doubles as the alt text. */
  note: string;
  /** Drop a real photo in /public and set this path to replace the placeholder. */
  src?: string;
  accent?: Accent;
  aspect?: "banner" | "wide" | "landscape" | "square" | "portrait";
  rounded?: boolean;
  className?: string;
  priority?: boolean;
};

const aspectClass = {
  banner: "aspect-[16/6]",
  wide: "aspect-[16/8]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
} as const;

function CameraIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-9 w-9"
      aria-hidden="true"
    >
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.3l1.2-2h7.9l1.2 2h2.4A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" />
      <circle cx="12" cy="13" r="3.4" />
    </svg>
  );
}

/**
 * A photograph slot. Until a real image is supplied it renders the coloured
 * placeholder block from the blueprint, captioned with the photo brief.
 */
export function Media({
  note,
  src,
  accent = "blue",
  aspect = "landscape",
  rounded = true,
  className,
  priority,
}: MediaProps) {
  const shape = cn(
    "relative w-full overflow-hidden",
    aspectClass[aspect],
    rounded && "rounded-2xl",
    className,
  );

  if (src) {
    return (
      <div className={shape}>
        <Image
          src={src}
          alt={note}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(shape, "bg-gradient-to-br", accentGradient[accent])}
      role="img"
      aria-label={`Photo placeholder. ${note}`}
    >
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-white/10"
      />
      <div className="absolute inset-0 flex items-center justify-center text-white/80">
        <CameraIcon />
      </div>
      <p className="absolute inset-x-3 bottom-3 rounded-lg bg-black/45 px-3 py-1.5 text-[11px] font-medium leading-snug text-white">
        {note}
      </p>
    </div>
  );
}
