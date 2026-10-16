/**
 * An amber note addressed to the Foundation team, not to visitors.
 * Every one of these must be resolved and removed before launch —
 * see PLACEHOLDERS.md.
 */
export function TeamNote({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-8 rounded-xl border border-brand-yellow/60 bg-brand-yellow/10 p-4 text-sm italic leading-relaxed text-brand-charcoal">
      <span className="font-semibold not-italic">Note for team: </span>
      {children}
    </p>
  );
}
