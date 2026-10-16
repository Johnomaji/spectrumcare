import Link from "next/link";
import { cn } from "./cn";
import { isExternalHref, isPlaceholderHref } from "./links";

type Variant = "primary" | "secondary" | "onColor" | "onColorOutline" | "ghost";
type Size = "md" | "lg";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-brand-orange text-white shadow-sm hover:bg-brand-orange/90 active:bg-brand-orange/80",
  secondary:
    "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
  onColor: "bg-white text-brand-ink shadow-sm hover:bg-white/90",
  onColorOutline: "border-2 border-white text-white hover:bg-white/15",
  ghost: "text-brand-blue hover:bg-brand-blue/10",
};

const sizeClass: Record<Size, string> = {
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-7 py-3 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors";

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  type,
  disabled,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  /** Optional click handler, e.g. to close a menu on navigate. */
  onClick?: () => void;
}) {
  const classes = cn(base, variantClass[variant], sizeClass[size], className);

  if (!href) {
    return (
      <button
        type={type ?? "button"}
        disabled={disabled}
        onClick={onClick}
        className={cn(classes, disabled && "cursor-not-allowed opacity-60")}
      >
        {children}
      </button>
    );
  }

  if (isPlaceholderHref(href)) {
    return (
      <span
        className={cn(classes, "cursor-not-allowed opacity-60")}
        title="Add the real link before publishing"
      >
        {children}
      </span>
    );
  }

  if (isExternalHref(href)) {
    const isHttp = href.startsWith("http");
    return (
      <a
        href={href}
        onClick={onClick}
        className={classes}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classes}>
      {children}
    </Link>
  );
}

/** The small "Explore therapy →" style link used inside cards. */
export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const content = (
    <>
      {children}
      <span aria-hidden="true">→</span>
    </>
  );
  const classes = cn(
    "inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold",
    className,
  );

  if (isPlaceholderHref(href)) {
    return (
      <span
        className={cn(classes, "opacity-60")}
        title="Add the real link before publishing"
      >
        {content}
      </span>
    );
  }

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
