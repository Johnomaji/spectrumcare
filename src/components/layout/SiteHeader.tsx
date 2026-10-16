"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { cn } from "@/components/ui/cn";
import { isPlaceholderHref } from "@/components/ui/links";
import { mainNav, site } from "@/content/site";

function ContactBit({ value, scheme }: { value: string; scheme: "tel" | "mailto" }) {
  if (isPlaceholderHref(value)) {
    return <span className="text-white/70">{value}</span>;
  }
  const href =
    scheme === "tel" ? `tel:${value.replace(/[^+\d]/g, "")}` : `mailto:${value}`;
  return (
    <a href={href} className="text-white/80 hover:text-white">
      {value}
    </a>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="hidden bg-brand-charcoal text-xs lg:block">
        <Container className="flex h-9 items-center justify-between">
          <p className="flex items-center gap-3">
            <ContactBit value={site.phone} scheme="tel" />
            <span aria-hidden="true" className="text-white/30">
              ·
            </span>
            <ContactBit value={site.email} scheme="mailto" />
          </p>
          <div className="flex items-center gap-3">
            <SocialIcons
              size={14}
              itemClassName="h-7 w-7 text-white/80 hover:bg-white/10 hover:text-white"
            />
            <Link
              href="/join-our-team"
              className="font-semibold text-white underline underline-offset-4 hover:text-brand-yellow"
            >
              Join Our Team
            </Link>
          </div>
        </Container>
      </div>

      {/* Main bar */}
      <div className="bg-white">
        <Container className="flex h-[4.5rem] items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "inline-flex min-h-11 items-center rounded-full px-3 text-[0.8rem] font-medium transition-colors",
                      isActive(item.href)
                        ? "text-brand-blue"
                        : "text-brand-charcoal hover:text-brand-blue",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/donate" className="hidden sm:inline-flex">
              Donate
            </Button>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-line text-brand-ink xl:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-brand-line bg-white xl:hidden"
        >
          <Container className="py-4">
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "flex min-h-12 items-center border-b border-brand-line text-base font-medium",
                        isActive(item.href) ? "text-brand-blue" : "text-brand-ink",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <Button href="/donate" size="lg" onClick={closeMenu}>
                Donate
              </Button>
              <Button
                href="/#contact"
                variant="secondary"
                size="lg"
                onClick={closeMenu}
              >
                Get Support
              </Button>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-brand-line pt-4">
              <p className="text-xs text-brand-charcoal">{site.phone}</p>
              <SocialIcons
                size={16}
                itemClassName="bg-brand-mist text-brand-charcoal hover:text-brand-blue"
              />
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
