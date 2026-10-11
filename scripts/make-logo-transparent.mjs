import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const inPath = path.resolve("public/brand/logo-mark.png");
const outPath = path.resolve("public/brand/logo-sc.png");

const img = sharp(inPath).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

// Keep only red-ish pixels (the mark), make everything else transparent.
// This works better than "light background" because the source has a textured paper halo.
const out = Buffer.from(data);
for (let i = 0; i < out.length; i += 4) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];

  const rg = r - g;
  const rb = r - b;
  const isRedish = r > 95 && rg > 22 && rb > 18;

  if (!isRedish) out[i + 3] = 0;
}

await sharp(out, { raw: info })
  .png({ compressionLevel: 9 })
  .toFile(outPath);

await fs.access(outPath);
console.log(`Wrote ${outPath}`);

