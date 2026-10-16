"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/Button";
import { HONEYPOT } from "@/lib/forms";
import { cn } from "@/components/ui/cn";
import type { FormState } from "@/lib/forms";

const fieldClass =
  "min-h-12 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-charcoal/60 focus:border-brand-blue focus:outline-none";

function Error({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-xs font-medium text-brand-red">
      {message}
    </p>
  );
}

type BaseProps = {
  name: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
};

export function TextField({
  name,
  label,
  required,
  error,
  type = "text",
  autoComplete,
  className,
}: BaseProps & { type?: "text" | "email" | "tel"; autoComplete?: string }) {
  const errorId = `${name}-error`;
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-brand-ink">
        {label}
        {required ? <span className="text-brand-red"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(fieldClass, error && "border-brand-red")}
      />
      <Error id={errorId} message={error} />
    </div>
  );
}

export function SelectField({
  name,
  label,
  required,
  error,
  options,
  placeholder,
  className,
}: BaseProps & { options: readonly string[]; placeholder: string }) {
  const errorId = `${name}-error`;
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-brand-ink">
        {label}
        {required ? <span className="text-brand-red"> *</span> : null}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(fieldClass, error && "border-brand-red")}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Error id={errorId} message={error} />
    </div>
  );
}

export function TextAreaField({
  name,
  label,
  required,
  error,
  rows = 4,
  className,
}: BaseProps & { rows?: number }) {
  const errorId = `${name}-error`;
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-brand-ink">
        {label}
        {required ? <span className="text-brand-red"> *</span> : null}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(fieldClass, "min-h-28 resize-y", error && "border-brand-red")}
      />
      <Error id={errorId} message={error} />
    </div>
  );
}

export function FileField({
  name,
  label,
  required,
  error,
  accept,
  hint,
  className,
}: BaseProps & { accept?: string; hint?: string }) {
  const errorId = `${name}-error`;
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-brand-ink">
        {label}
        {required ? <span className="text-brand-red"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type="file"
        accept={accept}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "w-full rounded-xl border border-brand-line bg-white p-2.5 text-sm text-brand-charcoal file:mr-3 file:min-h-9 file:rounded-full file:border-0 file:bg-brand-blue file:px-4 file:text-sm file:font-semibold file:text-white",
          error && "border-brand-red",
        )}
      />
      {hint ? <p className="mt-1.5 text-xs text-brand-charcoal">{hint}</p> : null}
      <Error id={errorId} message={error} />
    </div>
  );
}

export function SubmitButton({
  children,
  className,
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} variant={variant} className={className}>
      {pending ? "Sending…" : children}
    </Button>
  );
}

/** Announces the result of a submission to everyone, including screen readers. */
export function FormMessage({ state }: { state: FormState }) {
  if (state.status === "idle" || !state.message) return null;
  return (
    <p
      role="status"
      className={cn(
        "rounded-xl px-4 py-3 text-sm font-medium",
        state.status === "success"
          ? "bg-brand-green/10 text-brand-green"
          : "bg-brand-red/10 text-brand-red",
      )}
    >
      {state.message}
    </p>
  );
}

/**
 * Spam trap. People never see this field, so anything typed into it marks the
 * submission as a bot. Positioned off-screen rather than hidden with
 * `display: none`, which crawlers recognise.
 */
export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
      <label htmlFor={HONEYPOT}>Leave this field empty</label>
      <input id={HONEYPOT} name={HONEYPOT} type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
