import { readFile, writeFile, mkdir, copyFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const dist = path.join(root, "dist");
let html = await readFile(path.join(dist, "dev.html"), "utf8");

const scriptTag = html.match(
  /<script\b[^>]*\bsrc="(\/assets\/[^\"]+\.js)"[^>]*><\/script>/,
);
const styleTag = html.match(
  /<link\b[^>]*\bhref="(\/assets\/[^\"]+\.css)"[^>]*>/,
);
if (!scriptTag || !styleTag) {
  throw new Error("Could not find the compiled JavaScript and CSS in dist/dev.html");
}

let script = await readFile(path.join(dist, scriptTag[1]), "utf8");
let style = await readFile(path.join(dist, styleTag[1]), "utf8");
html = html.replace(scriptTag[0], "").replace(styleTag[0], "__INLINE_STYLE__");

for (const [asset, mime] of [
  ["/images/dream-house.png", "image/png"],
  ["/fonts/manrope-variable.ttf", "font/ttf"],
  ["/favicon.svg", "image/svg+xml"],
]) {
  const bytes = await readFile(path.join(dist, asset));
  const data = `data:${mime};base64,${bytes.toString("base64")}`;
  html = html.replaceAll(asset, data);
  style = style.replaceAll(asset, data);
  script = script.replaceAll(asset, data);
}

html = html
  .replace("__INLINE_STYLE__", `<style>${style}</style>`)
  .replace(
    "</body>",
    `<script type="module">${script.replaceAll("</script", "<\\/script")}</script></body>`,
  )
  .replace(/^[ \t]+$/gm, "");

await mkdir(path.join(root, "ready-site"), { recursive: true });
for (const destination of [
  path.join(root, "index.html"),
  path.join(root, "ready-site", "index.html"),
  path.join(dist, "index.html"),
]) {
  await writeFile(destination, html);
}
await copyFile(
  path.join(root, "public", "fonts", "OFL.txt"),
  path.join(root, "ready-site", "Manrope-font-license.txt"),
);
console.log("Standalone site saved to index.html, ready-site/index.html, and dist/index.html");
