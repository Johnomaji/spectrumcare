import type { NextConfig } from "next";

/**
 * Two deployment shapes from one codebase.
 *
 * Default — a Node server (Vercel, a VPS, or shared hosting with a Node app).
 * Every page is prerendered; `/api/forms` receives form submissions and keeps
 * FORM_WEBHOOK_URL on the server. Add BUILD_STANDALONE=1 to also emit
 * `.next/standalone` for self-hosting.
 *
 * STATIC_EXPORT=1 — a folder of plain HTML for hosting with no Node at all.
 * The `/api/forms` route is left out (its `.node.ts` filename is excluded from
 * `pageExtensions`), so the browser posts to a hosted form service through
 * NEXT_PUBLIC_FORM_ENDPOINT instead.
 *
 * Cache Components (and with it Partial Prefetching) is deliberately off.
 * It requires route files to omit `export const dynamic`, while a static
 * export requires `dynamic = "force-static"` on sitemap.ts and robots.ts —
 * the two cannot both hold. The site has no dynamic data to cache, so keeping
 * one set of source files for both targets is worth more here.
 */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const turbopack = {
  rules: {
    "*.css": { loaders: ["@tailwindcss/turbopack"], as: "*.css" },
  },
};

const nextConfig: NextConfig = isStaticExport
  ? {
      output: "export",
      // Routes ending in `.node.ts` need a server, so they are skipped here.
      pageExtensions: ["tsx", "ts", "jsx", "js"],
      // Apache and LiteSpeed serve `/about/index.html` cleanly.
      trailingSlash: true,
      // No image optimizer without a server.
      images: { unoptimized: true },
      turbopack,
    }
  : {
      output: process.env.BUILD_STANDALONE ? "standalone" : undefined,
      pageExtensions: ["node.ts", "tsx", "ts", "jsx", "js"],
      turbopack,
    };

export default nextConfig;
