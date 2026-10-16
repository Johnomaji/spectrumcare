// A static string is required here, and it keeps this file valid in both the
// server build and the static export. See next.config.ts.
export const dynamic = "force-static";

export { buildSitemap as default } from "@/lib/metadataRoutes";
