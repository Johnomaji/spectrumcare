import { site } from "@/content/site";
import {
  HONEYPOT,
  SUCCESS_MESSAGE,
  validate,
  type FormKind,
  type FormState,
} from "./forms";

/**
 * Where the browser posts a form.
 *
 * Unset (the default): posts to this site's own /api/forms route, which
 * validates again on the server and forwards to FORM_WEBHOOK_URL. That route
 * only exists in builds that run on a Node server.
 *
 * Set: posts straight to that URL instead — a hosted form service such as
 * Formspree or Web3Forms. This is what the static export uses, since a static
 * site has no server of its own.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim();
const OWN_ENDPOINT = "/api/forms";

const fallbackMessage = `We could not send your message. Please call or WhatsApp us on ${site.phone} and we will pick it up right away.`;

function isOwnResponse(body: unknown): body is FormState {
  return (
    typeof body === "object" &&
    body !== null &&
    "status" in body &&
    typeof (body as FormState).status === "string"
  );
}

/**
 * Submits a form from the browser. Used as the action of every form on the
 * site, so the same code path serves both deployment modes.
 */
export async function submitForm(
  kind: FormKind,
  data: FormData,
): Promise<FormState> {
  // Silently accept anything that trips the honeypot: a bot filled a field
  // that is hidden from people.
  if (typeof data.get(HONEYPOT) === "string" && data.get(HONEYPOT) !== "") {
    return { status: "success", message: SUCCESS_MESSAGE[kind] };
  }

  const errors = validate(kind, data);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the fields below.", errors };
  }

  data.set("formKind", kind);

  try {
    const response = await fetch(ENDPOINT ?? OWN_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });

    const body = await response.json().catch(() => null);

    if (isOwnResponse(body)) return body;

    if (!response.ok) {
      return { status: "error", message: fallbackMessage };
    }
  } catch {
    return { status: "error", message: fallbackMessage };
  }

  return { status: "success", message: SUCCESS_MESSAGE[kind] };
}
