"use client";

import { useActionState } from "react";
import { submitForm } from "@/lib/submitForm";
import { initialFormState, type FormState } from "@/lib/forms";
import {
  FormMessage,
  Honeypot,
  SelectField,
  SubmitButton,
  TextField,
} from "./Fields";

export function NewsletterForm() {
  const [state, action] = useActionState(
    (_previous: FormState, data: FormData) => submitForm("newsletter", data),
    initialFormState,
  );

  return (
    <form action={action} className="relative mx-auto mt-8 max-w-3xl space-y-4">
      <Honeypot />
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-end">
        <TextField
          name="email"
          label="Email address"
          type="email"
          required
          autoComplete="email"
          error={state.errors?.email}
        />
        <SelectField
          name="audience"
          label="I am a…"
          placeholder="Select one"
          options={["Parent", "Teacher", "Professional", "Supporter"]}
          error={state.errors?.audience}
        />
        <SubmitButton className="sm:mb-0.5">Subscribe</SubmitButton>
      </div>
      <FormMessage state={state} />
    </form>
  );
}
