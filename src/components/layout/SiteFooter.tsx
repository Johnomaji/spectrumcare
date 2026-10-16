import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { isPlaceholderHref } from "@/components/ui/links";
import { footerNav, site } from "@/content/site";

function ContactLine({ value, scheme }: { value: string; scheme: "tel" | "mailto" }) {
  if (isPlaceholderHref(value)) {
    return <span>{value}</span>;
  }
  const href =
    scheme === "tel" ? `tel:${value.replace(/[^+\d]/g, "")}` : `mailto:${value}`;
  return (
    <a href={href} className="hover:text-white">
      {value}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-brand-charcoal text-sm text-white/75">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo onColor />
            <p className="mt-4 max-w-xs leading-relaxed">{site.tagline}</p>
            <SocialIcons
              className="mt-5"
              itemClassName="bg-white/10 text-white hover:bg-white/20"
            />
          </div>

          {footerNav.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-sm font-semibold text-white">{column.heading}</h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="text-sm font-semibold text-white">Visit Us</h2>
            <address className="mt-4 space-y-2.5 not-italic leading-relaxed">
              <p>
                {site.centre}, {site.address.street}, {site.address.area},{" "}
                {site.address.city}, {site.address.state}, {site.address.country}
              </p>
              <p>
                <ContactLine value={site.phone} scheme="tel" />
              </p>
              <p>
                <ContactLine value={site.email} scheme="mailto" />
              </p>
            </address>
          </div>
        </div>

        {/* Logo colour rule */}
        <div aria-hidden="true" className="mt-12 flex h-1.5 overflow-hidden rounded-full">
          <span className="flex-1 bg-brand-blue" />
          <span className="flex-1 bg-brand-red" />
          <span className="flex-1 bg-brand-yellow" />
          <span className="flex-1 bg-brand-green" />
          <span className="flex-1 bg-brand-teal" />
          <span className="flex-1 bg-brand-orange" />
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-center sm:gap-3 sm:text-center">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <span aria-hidden="true" className="hidden text-white/30 sm:inline">·</span>
          <p>{site.registration}</p>
          <span aria-hidden="true" className="hidden text-white/30 sm:inline">·</span>
          <p className="flex gap-3">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
