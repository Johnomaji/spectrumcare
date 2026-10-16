/**
 * Build wrapper so the two deployment modes work the same on Windows, macOS
 * and Linux without adding a cross-env dependency.
 *
 *   node scripts/build.mjs             → server build (Vercel, Node host)
 *   node scripts/build.mjs standalone  → server build + .next/standalone
 *   node scripts/build.mjs static      → static export into out/
 */
import { spawnSync } from "node:child_process";
import { delimiter, join } from "node:path";
import { fileURLToPath } from "node:url";

const mode = process.argv[2] ?? "server";
const env = { ...process.env };

if (mode === "static") env.STATIC_EXPORT = "1";
else if (mode === "standalone") env.BUILD_STANDALONE = "1";
else if (mode !== "server") {
  console.error(`Unknown build mode "${mode}". Use server, standalone or static.`);
  process.exit(1);
}

// Works whether this is run through npm or as `node scripts/build.mjs`,
// which does not put node_modules/.bin on PATH by itself.
const binDir = join(fileURLToPath(new URL("..", import.meta.url)), "node_modules", ".bin");
env.PATH = `${binDir}${delimiter}${env.PATH ?? ""}`;

const result = spawnSync("next", ["build"], { stdio: "inherit", env, shell: true });
process.exit(result.status ?? 1);
