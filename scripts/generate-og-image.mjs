/**
 * Regenerates public/og.png, the social sharing preview.
 *
 *   node scripts/generate-og-image.mjs
 *
 * It is written to a file rather than generated per request so that the same
 * image works on every host, including static hosting where an extensionless
 * route would be served with the wrong content type.
 */
import { writeFile } from "node:fs/promises";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";

const WIDTH = 1200;
const HEIGHT = 630;
const PALETTE = ["#0162B5", "#E01220", "#FFBE11", "#24A74B", "#009680", "#FB530F"];

const image = new ImageResponse(
  h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #0162B5 0%, #014a8c 55%, #01335f 100%)",
        padding: 72,
        color: "white",
        fontFamily: "sans-serif",
      },
    },
    h("div", { style: { display: "flex", fontSize: 30, letterSpacing: 6 } },
      "SPECTRUM CARE FOUNDATION"),
    h(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      h("div", { style: { fontSize: 66, fontWeight: 700, lineHeight: 1.15 } },
        "Every mind is different."),
      h("div", { style: { fontSize: 66, fontWeight: 700, lineHeight: 1.15 } },
        "Every child deserves to thrive."),
      h("div", { style: { fontSize: 30, marginTop: 24, opacity: 0.9 } },
        "Inclusive Center · Lugbe, Abuja, Nigeria"),
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          gap: 6,
          padding: 6,
          borderRadius: 12,
          background: "rgba(255,255,255,0.95)",
        },
      },
      ...PALETTE.map((colour) =>
        h("div", {
          key: colour,
          style: { flex: 1, height: 12, borderRadius: 6, backgroundColor: colour },
        }),
      ),
    ),
  ),
  { width: WIDTH, height: HEIGHT },
);

await writeFile("public/og.png", Buffer.from(await image.arrayBuffer()));
console.log(`Wrote public/og.png (${WIDTH}x${HEIGHT})`);
