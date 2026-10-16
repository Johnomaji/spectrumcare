import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { isPlaceholderHref } from "@/components/ui/links";
import { site } from "@/content/site";

function Detail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
        {label}
      </dt>
      <dd className="mt-1 text-sm leading-relaxed text-brand-charcoal">{children}</dd>
    </div>
  );
}

function ContactValue({
  value,
  scheme,
}: {
  value: string;
  scheme: "tel" | "mailto";
}) {
  if (isPlaceholderHref(value)) return <>{value}</>;
  const href =
    scheme === "tel" ? `tel:${value.replace(/[^+\d]/g, "")}` : `mailto:${value}`;
  return (
    <a href={href} className="text-brand-blue underline underline-offset-4">
      {value}
    </a>
  );
}

export function ContactSection({
  id = "contact",
  headline = "Visit us in Lugbe, Abuja",
}: {
  id?: string;
  headline?: string;
}) {
  const headingId = `${id}-heading`;
  return (
    <Section id={id} tone="mist" labelledBy={headingId}>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeading id={headingId} headline={headline} />
          <dl className="mt-6 space-y-5">
            <Detail label="Address">
              {site.centre}, {site.address.street}, {site.address.area},{" "}
              {site.address.city}, {site.address.state}, {site.address.country}
            </Detail>
            <Detail label="Phone / WhatsApp">
              <ContactValue value={site.phone} scheme="tel" />
            </Detail>
            <Detail label="Email">
              <ContactValue value={site.email} scheme="mailto" />
            </Detail>
            <Detail label="Opening hours">{site.openingHours}</Detail>
          </dl>

          {/*
            Replace this block with the Google Maps embed iframe for the
            Spectrum Care Inclusive Center once the address is confirmed.
          */}
          <div
            role="img"
            aria-label="Map placeholder. Google Map pinned on the Spectrum Care Inclusive Center, Lugbe."
            className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-green to-brand-teal"
          >
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"
            />
            <div className="absolute inset-0 flex items-center justify-center text-4xl">
              <span aria-hidden="true">📍</span>
            </div>
            <p className="absolute inset-x-3 bottom-3 rounded-lg bg-black/45 px-3 py-1.5 text-[11px] text-white">
              Map: Google Map pinned on the Spectrum Care Inclusive Center, Lugbe.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-bold text-brand-ink">Have an enquiry?</h3>
          <p className="mt-2 text-sm text-brand-charcoal">
            Tell us a little about your child or your organisation and we will
            come back to you.
          </p>
          <div className="mt-6">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
