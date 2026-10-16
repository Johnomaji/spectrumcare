"use client";

import { useActionState } from "react";
import { submitForm } from "@/lib/submitForm";
import { initialFormState, type FormState } from "@/lib/forms";
import {
  FileField,
  FormMessage,
  Honeypot,
  SubmitButton,
  TextAreaField,
  TextField,
} from "./Fields";

export function ApplicationForm({ roles }: { roles: readonly string[] }) {
  const [state, action] = useActionState(
    (_previous: FormState, data: FormData) => submitForm("application", data),
    initialFormState,
  );

  return (
    <form action={action} className="relative space-y-4">
      <Honeypot />
      <TextField name="fullName" label="Full name" required autoComplete="name" error={state.errors?.fullName} />
      <TextField name="email" label="Email address" type="email" required autoComplete="email" error={state.errors?.email} />
      <TextField name="phone" label="Phone / WhatsApp" type="tel" required autoComplete="tel" error={state.errors?.phone} />
      <div>
        <label
          htmlFor="roleOfInterest"
          className="mb-1.5 block text-sm font-medium text-brand-ink"
        >
          Role of interest<span className="text-brand-red"> *</span>
        </label>
        <input
          id="roleOfInterest"
          name="roleOfInterest"
          list="role-options"
          required
          aria-invalid={state.errors?.roleOfInterest ? true : undefined}
          className="min-h-12 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink focus:border-brand-blue focus:outline-none"
        />
        <datalist id="role-options">
          {roles.map((role) => (
            <option key={role} value={role} />
          ))}
        </datalist>
        {state.errors?.roleOfInterest ? (
          <p className="mt-1.5 text-xs font-medium text-brand-red">
            {state.errors.roleOfInterest}
          </p>
        ) : null}
      </div>
      <FileField
        name="cv"
        label="Upload your CV"
        required
        accept=".pdf,.doc,.docx"
        hint="PDF or Word, up to 5MB."
        error={state.errors?.cv}
      />
      <TextAreaField
        name="motivation"
        label="Why Spectrum Care? (short note)"
        rows={3}
        error={state.errors?.motivation}
      />
      <FormMessage state={state} />
      <SubmitButton>Submit application</SubmitButton>
    </form>
  );
}
