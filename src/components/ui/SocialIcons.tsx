import { site } from "@/content/site";
import { cn } from "./cn";
import { isPlaceholderHref } from "./links";

const paths: Record<string, string> = {
  facebook:
    "M13.5 21v-7.5h2.5l.4-2.9h-2.9V8.7c0-.8.2-1.4 1.4-1.4h1.6V4.7c-.3 0-1.3-.1-2.4-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.7v2.9h2.5V21z",
  linkedin:
    "M7.1 9.3H4.3V21h2.8zM5.7 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4M21 14.3c0-3.1-1.7-4.6-3.9-4.6-1.8 0-2.6 1-3 1.7V9.3H11V21h2.8v-6.3c0-1.5.8-2.3 1.9-2.3s1.6.8 1.6 2.3V21H21z",
  instagram:
    "M12 7.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8m0 7.2a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6M16.6 6.3a1 1 0 1 0 0 2.1 1 1 0 0 0 0-2.1M12 4.6c2.4 0 2.7 0 3.6.1 2.5.1 3.6 1.3 3.7 3.7 0 .9.1 1.2.1 3.6s0 2.7-.1 3.6c-.1 2.4-1.2 3.6-3.7 3.7-.9 0-1.2.1-3.6.1s-2.7 0-3.6-.1c-2.5-.1-3.6-1.3-3.7-3.7 0-.9-.1-1.2-.1-3.6s0-2.7.1-3.6C4.8 6 5.9 4.8 8.4 4.7c.9 0 1.2-.1 3.6-.1M12 3c-2.4 0-2.8 0-3.7.1C5 3.2 3.2 5 3.1 8.3 3 9.2 3 9.6 3 12s0 2.8.1 3.7c.1 3.3 1.9 5.1 5.2 5.2.9 0 1.3.1 3.7.1s2.8 0 3.7-.1c3.3-.1 5.1-1.9 5.2-5.2 0-.9.1-1.3.1-3.7s0-2.8-.1-3.7C20.8 5 19 3.2 15.7 3.1 14.8 3 14.4 3 12 3",
  youtube:
    "M21.6 8.2a2.5 2.5 0 0 0-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 3.8 2.5 2.5 0 0 0 1.8 1.8C5.8 18 12 18 12 18s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-3.8M10 14.9V9.1l5.2 2.9z",
};

export function SocialIcons({
  className,
  itemClassName,
  size = 16,
}: {
  className?: string;
  itemClassName?: string;
  size?: number;
}) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {site.socials.map((social) => {
        const icon = (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width={size}
            height={size}
            aria-hidden="true"
          >
            <path d={paths[social.icon]} />
          </svg>
        );
        const shared = cn(
          "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
          itemClassName,
        );

        return (
          <li key={social.label}>
            {isPlaceholderHref(social.href) ? (
              <span
                className={cn(shared, "opacity-60")}
                title={`${social.label} link not set yet`}
                aria-label={`${social.label} (link not set yet)`}
              >
                {icon}
              </span>
            ) : (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={shared}
                aria-label={social.label}
              >
                {icon}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}
