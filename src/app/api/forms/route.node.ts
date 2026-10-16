import { NextResponse } from "next/server";
import { site } from "@/content/site";
import {
  HONEYPOT,
  SUCCESS_MESSAGE,
  validate,
  type FormKind,
  type FormState,
} from "@/lib/forms";

/**
 * Receives every form on the site and forwards it to the Foundation's chosen
 * destination.
 *
 * The filename ends in `.node.ts` so this route exists only in builds that run
 * on a Node server. The static export build leaves it out (see
 * `pageExtensions` in next.config.ts) and the browser posts to a hosted form
 * service instead.
 *
 * Set FORM_WEBHOOK_URL to any endpoint that accepts a JSON POST — a form
 * service, an automation, or your own mailer. Until it is set, nothing is
 * delivered and the visitor is told to call instead, rather than being thanked
 * for a message that went nowhere.
 */
const WEBHOOK_URL = process.env.FORM_WEBHOOK_URL;

const KINDS: FormKind[] = ["enquiry", "application", "newsletter"];

function json(state: FormState, status = 200) {
  return NextResponse.json(state, { status });
}

export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ status: "error", message: "We could not read that submission." }, 400);
  }

  const kind = String(data.get("formKind") ?? "") as FormKind;
  if (!KINDS.includes(kind)) {
    return json({ status: "error", message: "Unknown form." }, 400);
  }

  // Checked here as well as in the browser: a bot can post straight to this
  // route. Answer as though it succeeded and deliver nothing.
  const trap = data.get(HONEYPOT);
  if (typeof trap === "string" && trap !== "") {
    return json({ status: "success", message: SUCCESS_MESSAGE[kind] });
  }

  const errors = validate(kind, data);
  if (Object.keys(errors).length > 0) {
    return json(
      { status: "error", message: "Please check the fields below.", errors },
      422,
    );
  }

  const payload: Record<string, unknown> = {
    kind,
    submittedAt: new Date().toISOString(),
  };
  for (const [key, value] of data.entries()) {
    if (key === "formKind" || key === HONEYPOT) continue;
    payload[key] =
      value instanceof File
        ? // The file itself is not forwarded. Add storage, or an email service
          // that accepts attachments, when you choose a provider.
          { fileName: value.name, fileSize: value.size }
        : value;
  }

  if (!WEBHOOK_URL) {
    console.warn(
      `[forms] FORM_WEBHOOK_URL is not set — the "${kind}" submission was not delivered.`,
      payload,
    );
    return json({
      status: "error",
      message: `We could not send your message automatically. Please call or WhatsApp us on ${site.phone} and we will pick it up right away.`,
    });
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`Form endpoint responded with ${response.status}`);
  } catch (error) {
    console.error(`[forms] Failed to deliver "${kind}" submission.`, error);
    return json({
      status: "error",
      message: `Something went wrong sending your message. Please try again, or call us on ${site.phone}.`,
    });
  }

  return json({ status: "success", message: SUCCESS_MESSAGE[kind] });
}
