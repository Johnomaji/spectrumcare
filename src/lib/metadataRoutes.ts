import type { MetadataRoute } from "next";
import { mainNav, site } from "@/content/site";

/**
 * Shared by the sitemap and robots route files.
 *
 * Those files come in `.node.ts` and `.static.ts` pairs because a static
 * export needs `dynamic = "force-static"` while a Cache Components build
 * forbids it. `pageExtensions` in next.config.ts picks the right one, and
 * both call straight into here so there is only one implementation.
 */
/**
 * The static export is built with `trailingSlash`, so its canonical URLs end
 * in a slash. The sitemap has to use the same form or the two disagree.
 */
function absolute(path: string): string {
  const withSlash =
    process.env.STATIC_EXPORT === "1" && path !== "/" ? `${path}/` : path;
  return new URL(withSlash, site.url).toString();
}

export function buildSitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...mainNav.map((item) => item.href), "/donate"];

  return paths.map((path) => ({
    url: absolute(path),
    changeFrequency: path === "/latest" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

export function buildRobots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/privacy", "/terms"] },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
  };
}
