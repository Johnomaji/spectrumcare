/**
 * A href that is still a bracketed placeholder, e.g. "[Page link]".
 * These render as inert elements rather than links that go nowhere.
 */
export function isPlaceholderHref(href: string): boolean {
  return href.trim().startsWith("[");
}

export function isExternalHref(href: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(href);
}

/** Strip the brackets so a placeholder still reads sensibly on screen. */
export function placeholderLabel(href: string): string {
  return href.trim().replace(/^\[|\]$/g, "");
}
