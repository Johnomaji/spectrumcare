/**
 * Shared form types and validation.
 *
 * This module is isomorphic on purpose: the browser uses it to catch mistakes
 * before a request is made, and the API route uses the same rules again on the
 * server when the site is deployed with a Node runtime.
 */

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Field name → error message. */
  errors?: Record<string, string>;
};

export const initialFormState: FormState = { status: "idle", message: "" };

export type FormKind = "enquiry" | "application" | "newsletter";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const MAX_CV_BYTES = 5 * 1024 * 1024;

type Rule = { name: string; label: string; type?: "email" };

const RULES: Record<FormKind, Rule[]> = {
  enquiry: [
    { name: "firstName", label: "First name" },
    { name: "lastName", label: "Last name" },
    { name: "email", label: "Email address", type: "email" },
    { name: "role", label: "This field" },
    { name: "message", label: "Your message" },
  ],
  application: [
    { name: "fullName", label: "Full name" },
    { name: "email", label: "Email address", type: "email" },
    { name: "phone", label: "Phone / WhatsApp" },
    { name: "roleOfInterest", label: "Role of interest" },
  ],
  newsletter: [{ name: "email", label: "Email address", type: "email" }],
};

function text(data: FormData, key: string): string {
  const value = data.get(key);
  return typeof value === "string" ? value.trim() : "";
}

/** Returns a field → message map; empty when the submission is valid. */
export function validate(kind: FormKind, data: FormData): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const rule of RULES[kind]) {
    const value = text(data, rule.name);
    if (!value) {
      errors[rule.name] = `${rule.label} is required.`;
      continue;
    }
    if (rule.type === "email" && !EMAIL_PATTERN.test(value)) {
      errors[rule.name] = "Please enter a valid email address.";
    }
  }

  if (kind === "application") {
    const cv = data.get("cv");
    const file = cv instanceof File && cv.size > 0 ? cv : null;
    if (!file) {
      errors.cv = "Please attach your CV.";
    } else if (file.size > MAX_CV_BYTES) {
      errors.cv = "Please keep your CV under 5MB.";
    }
  }

  return errors;
}

export const SUCCESS_MESSAGE: Record<FormKind, string> = {
  enquiry:
    "Thank you. Your message has reached our team and we will be in touch shortly.",
  application:
    "Thank you for applying. We review every application and will contact you if there is a good match.",
  newsletter: "You are on the list. Look out for our next update.",
};

/** The honeypot field name; a real person never fills this in. */
export const HONEYPOT = "company_website";
