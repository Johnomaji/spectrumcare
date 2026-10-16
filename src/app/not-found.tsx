import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="mist" width="narrow" className="py-24 text-center sm:py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-blue">
        Page not found
      </p>
      <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
        We could not find that page.
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-brand-charcoal">
        The link may be old, or the page may have moved. Let us point you back
        to something useful.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" size="lg">
          Back to home
        </Button>
        <Button href="/what-we-do" variant="secondary" size="lg">
          See what we do
        </Button>
      </div>
    </Section>
  );
}
