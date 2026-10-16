"use client";

import { useActionState } from "react";
import { submitForm } from "@/lib/submitForm";
import { initialFormState, type FormState } from "@/lib/forms";
import {
  FormMessage,
  Honeypot,
  SelectField,
  SubmitButton,
  TextAreaField,
  TextField,
} from "./Fields";

export function EnquiryForm() {
  const [state, action] = useActionState(
    (_previous: FormState, data: FormData) => submitForm("enquiry", data),
    initialFormState,
  );

  return (
    <form action={action} className="relative space-y-4">
      <Honeypot />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField name="firstName" label="First name" required autoComplete="given-name" error={state.errors?.firstName} />
        <TextField name="lastName" label="Last name" required autoComplete="family-name" error={state.errors?.lastName} />
      </div>
      <TextField name="email" label="Email address" type="email" required autoComplete="email" error={state.errors?.email} />
      <TextField name="phone" label="Phone / WhatsApp" type="tel" autoComplete="tel" error={state.errors?.phone} />
      <SelectField
        name="role"
        label="I am a…"
        required
        placeholder="Select one"
        options={["Parent", "School", "Professional", "Donor", "Other"]}
        error={state.errors?.role}
      />
      <TextAreaField
        name="message"
        label="How can we help?"
        required
        rows={4}
        error={state.errors?.message}
      />
      <FormMessage state={state} />
      <SubmitButton>Send message</SubmitButton>
    </form>
  );
}
