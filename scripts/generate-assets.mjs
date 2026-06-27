#!/usr/bin/env node
/**
 * Neo Eco Cleaning - Vertex AI asset generation.
 *
 * Uses Google Cloud Application Default Credentials (ADC) to call:
 *   - Imagen 4 Fast (imagen-4.0-fast-generate-001) for stills
 *   - Veo 3.0 Fast (veo-3.0-fast-generate-001) for short muted hero loops
 *
 * Post-processes with sharp (WebP + AVIF + sized JPG) and ffmpeg (mp4/webm/poster).
 * Idempotent: skips an asset if its primary output already exists. Pass --force to regenerate,
 * or one or more asset ids to generate only those.
 *
 * Run:  node scripts/generate-assets.mjs            (all, skipping existing)
 *       node scripts/generate-assets.mjs --force    (regenerate all)
 *       node scripts/generate-assets.mjs hero-lobby service-jet-washing
 */
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { writeFile, mkdir, readFile, access } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const execFileP = promisify(execFile);

const PROJECT = process.env.GCLOUD_PROJECT || "radlabs-497004";
const LOCATION = "us-central1";
const IMAGE_MODEL = "imagen-4.0-fast-generate-001";
const VIDEO_MODEL = "veo-3.0-fast-generate-001";
const ENDPOINT = `https://${LOCATION}-aiplatform.googleapis.com/v1/projects/${PROJECT}/locations/${LOCATION}/publishers/google/models`;

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT_IMG = path.join(ROOT, "public", "media", "images");
const OUT_VID = path.join(ROOT, "public", "media", "video");
const RAW = path.join(ROOT, ".asset-cache");

const args = process.argv.slice(2);
const FORCE = args.includes("--force");
const ONLY = args.filter((a) => !a.startsWith("--"));

const STYLE =
  "professional architectural and editorial photography, bright natural daylight, crisp, clean, " +
  "premium, eco-friendly green undertone, UK setting, realistic, high detail, no text, no words, " +
  "no logos, no watermarks, no signage, no recognisable human faces";

/** Stills: rendered 16:9 by Imagen, then cover-cropped by sharp to the target dimensions. */
const IMAGES = [
  // Heroes + OG
  { id: "hero-block-exterior", w: 1920, h: 1080, prompt: "Exterior of a modern North London residential apartment block on a bright morning, contemporary brick and render facade, balconies, neat green landscaping and a clean communal path, blue sky" },
  { id: "hero-lobby", w: 1920, h: 1080, prompt: "Interior of a pristine modern communal residential lobby, polished floor, glass entrance doors, soft daylight, spotless and welcoming, plants in the corner" },
  { id: "og-default", w: 1200, h: 630, prompt: "A spotless modern communal residential corridor with fresh green plant accents, bright and clean, premium look, lots of negative space on one side" },

  // Service images (3:2-ish)
  { id: "service-block-cleaning", w: 1200, h: 800, prompt: "A spotless communal corridor and lobby inside a residential block of flats, freshly cleaned floors, tidy and bright, professional cleaning result" },
  { id: "service-pressure-washing", w: 1200, h: 800, prompt: "A worker in clean uniform pressure washing a residential block forecourt and paving, visible clean stripe contrast between cleaned and dirty paving, water spray, daytime" },
  { id: "service-jet-washing", w: 1200, h: 800, prompt: "Close action of high pressure jet washing communal block paving, bright clean path emerging from grime, water spray and droplets, professional equipment" },
  { id: "service-carpet-cleaning", w: 1200, h: 800, prompt: "Professional carpet cleaning machine cleaning a communal hallway carpet in a residential block, freshly cleaned brighter carpet lane, tidy corridor" },
  { id: "service-window-cleaning", w: 1200, h: 800, prompt: "Communal windows and glass entrance of a residential block being cleaned to a streak free shine, reflections of green trees, bright day" },
  { id: "service-end-of-tenancy-cleaning", w: 1200, h: 800, prompt: "An empty modern flat interior freshly deep cleaned, spotless kitchen and floors, bright daylight through windows, move in ready" },
  { id: "service-stone-cleaning", w: 1200, h: 800, prompt: "Restored clean natural stone and masonry facade of a period residential building, soft cleaning result, clean stone detail, daylight" },

  // Feature / supporting
  { id: "eco-green", w: 1200, h: 800, prompt: "Eco friendly cleaning concept, natural green cleaning products and microfibre cloths arranged neatly with fresh green leaves and water droplets, bright minimal, sustainable" },
  { id: "communal-stairwell", w: 1000, h: 1250, prompt: "A pristine clean communal stairwell in a residential block, spotless steps and handrail, bright natural light from a tall window" },
  { id: "communal-bin-store", w: 1200, h: 800, prompt: "A clean and well organised communal bin store area at a residential block, tidy bins, swept clean floor, bright" },
  { id: "communal-car-park", w: 1200, h: 800, prompt: "A clean residential block underground or covered car park, freshly swept and pressure washed concrete, bright lighting, orderly" },

  // Area headers (2:1)
  { id: "area-north-london", w: 1600, h: 800, prompt: "Pleasant North London residential street with Victorian terraced houses and modern apartment blocks, leafy trees, bright day, generic non landmark" },
  { id: "area-central-london", w: 1600, h: 800, prompt: "Elegant Central London mansion block residential street, classic architecture, clean pavements, bright day, generic non landmark" },
  { id: "area-west-london", w: 1600, h: 800, prompt: "Affluent West London residential street with white stucco houses and modern flats, leafy and clean, bright day, generic non landmark" },
  { id: "area-east-london", w: 1600, h: 800, prompt: "Modern East London residential development with contemporary apartment blocks and canal side, clean and bright, generic non landmark" },
  { id: "area-watford", w: 1600, h: 800, prompt: "Suburban Hertfordshire residential development near Watford with modern low rise apartment blocks, green communal landscaping, clean paths, bright day" },
  { id: "area-london-generic", w: 1600, h: 800, prompt: "Typical London residential block of flats with communal garden and clean paved courtyard, leafy and bright, generic non landmark" },

  // Case study illustrative (clearly generated)
  { id: "case-jet-courtyard", w: 1400, h: 900, prompt: "A communal block paving courtyard half restored by jet washing, dramatic clean versus mossy dirty contrast across the paving, residential block behind" },
  { id: "case-jet-entrance", w: 1400, h: 900, prompt: "A residential block communal entrance with steps and path freshly jet washed, bright clean stone, welcoming first impression" },
  { id: "case-jet-steps", w: 1400, h: 900, prompt: "Communal external steps of a residential block cleaned of green algae and mould by jet washing, safe clean grippy surface, before and after feel" },
  { id: "case-carpet-hallway", w: 1400, h: 900, prompt: "A communal hallway carpet in a residential block looking noticeably brighter and cleaner after professional deep cleaning, tidy doors along the corridor" },
];

/** Short muted background loops. */
const VIDEOS = [
  { id: "hero-lobby", seconds: 6, prompt: "Slow cinematic dolly shot gliding forward through a pristine bright modern residential communal lobby, polished reflective floor, glass doors ahead, soft daylight, green plant accents, no people, no text, calm and premium" },
];

async function token() {
  const { stdout } = await execFileP("gcloud", ["auth", "application-default", "print-access-token"], { maxBuffer: 1 << 20 });
  return stdout.trim();
}

async function imagenCall(prompt, tok) {
  const body = {
    instances: [{ prompt: `${prompt}. ${STYLE}` }],
    parameters: { sampleCount: 1, aspectRatio: "16:9", personGeneration: "dont_allow", addWatermark: false },
  };
  const res = await fetch(`${ENDPOINT}/${IMAGE_MODEL}:predict`, {
    method: "POST",
    headers: { Authorization: `Bearer ${tok}`, "x-goog-user-project": PROJECT, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`Imagen HTTP ${res.status}: ${JSON.stringify(json).slice(0, 300)}`);
  const b64 = json?.predictions?.[0]?.bytesBase64Encoded;
  if (!b64) throw new Error(`Imagen no image (filtered=${json?.predictions?.[0]?.raiFilteredReason || json?.raiMediaFilteredReasons || "?"}): ${JSON.stringify(json).slice(0, 200)}`);
  return Buffer.from(b64, "base64");
}

async function processImage(id, w, h, png) {
  const img = sharp(png).resize(w, h, { fit: "cover", position: "attention" });
  const webp = await img.clone().webp({ quality: 74 }).toBuffer();
  await writeFile(path.join(OUT_IMG, `${id}.webp`), webp);
  // AVIF for the few hero/LCP assets; JPG fallback for all
  const jpg = await img.clone().jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  await writeFile(path.join(OUT_IMG, `${id}.jpg`), jpg);
  if (["hero-block-exterior", "hero-lobby", "og-default"].includes(id)) {
    const avif = await img.clone().avif({ quality: 55 }).toBuffer();
    await writeFile(path.join(OUT_IMG, `${id}.avif`), avif);
  }
  return { webp: webp.length, jpg: jpg.length };
}

async function veoStart(prompt, seconds, tok) {
  const body = {
    instances: [{ prompt: `${prompt}. ${STYLE}` }],
    parameters: { sampleCount: 1, durationSeconds: seconds, aspectRatio: "16:9", generateAudio: false, personGeneration: "dont_allow" },
  };
  const res = await fetch(`${ENDPOINT}/${VIDEO_MODEL}:predictLongRunning`, {
    method: "POST",
    headers: { Authorization: `Bearer ${tok}`, "x-goog-user-project": PROJECT, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`Veo start HTTP ${res.status}: ${JSON.stringify(json).slice(0, 300)}`);
  return json.name;
}

async function veoPoll(opName, tok) {
  for (let i = 0; i < 40; i++) {
    const res = await fetch(`${ENDPOINT}/${VIDEO_MODEL}:fetchPredictOperation`, {
      method: "POST",
      headers: { Authorization: `Bearer ${tok}`, "x-goog-user-project": PROJECT, "Content-Type": "application/json" },
      body: JSON.stringify({ operationName: opName }),
    });
    const json = await res.json();
    if (json.done) {
      const v = json?.response?.videos?.[0]?.bytesBase64Encoded;
      if (!v) throw new Error(`Veo done but no video: ${JSON.stringify(json).slice(0, 300)}`);
      return Buffer.from(v, "base64");
    }
    await new Promise((r) => setTimeout(r, 15000));
  }
  throw new Error("Veo timed out");
}

async function processVideo(id, mp4) {
  const rawPath = path.join(RAW, `${id}.raw.mp4`);
  await writeFile(rawPath, mp4);
  const outMp4 = path.join(OUT_VID, `${id}.mp4`);
  const outWebm = path.join(OUT_VID, `${id}.webm`);
  const posterPng = path.join(RAW, `${id}.poster.png`);
  // Compress mp4 (h264, no audio, capped height 1080), make webm, extract poster
  await execFileP("ffmpeg", ["-y", "-i", rawPath, "-an", "-vf", "scale=-2:1080", "-c:v", "libx264", "-crf", "26", "-preset", "veryslow", "-movflags", "+faststart", outMp4], { maxBuffer: 1 << 26 });
  await execFileP("ffmpeg", ["-y", "-i", rawPath, "-an", "-vf", "scale=-2:1080", "-c:v", "libvpx-vp9", "-crf", "34", "-b:v", "0", outWebm], { maxBuffer: 1 << 26 }).catch((e) => console.warn(`  webm skipped: ${e.message.slice(0, 80)}`));
  await execFileP("ffmpeg", ["-y", "-i", rawPath, "-frames:v", "1", posterPng], { maxBuffer: 1 << 26 });
  const posterBuf = await sharp(posterPng).resize(1920, 1080, { fit: "cover" }).jpeg({ quality: 80, mozjpeg: true }).toBuffer();
  await writeFile(path.join(OUT_IMG, `${id}-poster.jpg`), posterBuf);
}

const manifest = [];

async function run() {
  await mkdir(OUT_IMG, { recursive: true });
  await mkdir(OUT_VID, { recursive: true });
  await mkdir(RAW, { recursive: true });
  const tok = await token();

  // Images with small concurrency
  const todo = IMAGES.filter((x) => (ONLY.length ? ONLY.includes(x.id) : true)).filter((x) => FORCE || !existsSync(path.join(OUT_IMG, `${x.id}.webp`)));
  console.log(`Images to generate: ${todo.length} (skipping ${IMAGES.length - todo.length} existing)`);
  const CONC = 4;
  for (let i = 0; i < todo.length; i += CONC) {
    const batch = todo.slice(i, i + CONC);
    await Promise.all(
      batch.map(async (item) => {
        try {
          let png;
          for (let attempt = 0; attempt < 3; attempt++) {
            try { png = await imagenCall(item.prompt, attempt === 0 ? tok : await token()); break; }
            catch (e) { console.warn(`  retry ${item.id} (${attempt + 1}): ${e.message.slice(0, 120)}`); if (attempt === 2) throw e; }
          }
          const sizes = await processImage(item.id, item.w, item.h, png);
          manifest.push({ id: item.id, type: "image", source: "generated (Imagen 4 Fast)", webpKB: Math.round(sizes.webp / 1024) });
          console.log(`  ok image ${item.id} (${Math.round(sizes.webp / 1024)} KB webp)`);
        } catch (e) {
          console.error(`  FAIL image ${item.id}: ${e.message}`);
          manifest.push({ id: item.id, type: "image", source: "FAILED", error: e.message.slice(0, 200) });
        }
      })
    );
  }

  // Videos sequentially (each starts an LRO then polls)
  const vids = VIDEOS.filter((x) => (ONLY.length ? ONLY.includes(x.id) : true)).filter((x) => FORCE || !existsSync(path.join(OUT_VID, `${x.id}.mp4`)));
  console.log(`Videos to generate: ${vids.length}`);
  for (const v of vids) {
    try {
      console.log(`  starting video ${v.id}...`);
      const op = await veoStart(v.prompt, v.seconds, await token());
      const mp4 = await veoPoll(op, await token());
      await processVideo(v.id, mp4);
      manifest.push({ id: v.id, type: "video", source: "generated (Veo 3.0 Fast)" });
      console.log(`  ok video ${v.id}`);
    } catch (e) {
      console.error(`  FAIL video ${v.id}: ${e.message}`);
      manifest.push({ id: v.id, type: "video", source: "FAILED", error: e.message.slice(0, 200) });
    }
  }

  // Write ASSETS.md
  const lines = [
    "# Generated Asset Manifest",
    "",
    "All media below was generated with Google Vertex AI (Imagen 4 Fast for stills, Veo 3.0 Fast for video) via ADC.",
    "These are brand-consistent, illustrative assets. Swap any of them for real job photography when available (real photos outperform generated for trust and local relevance).",
    "",
    "| Asset | Type | Source | Notes |",
    "| --- | --- | --- | --- |",
    ...manifest.map((m) => `| \`${m.id}\` | ${m.type} | ${m.source} | ${m.error ? "ERROR: " + m.error : (m.webpKB ? m.webpKB + " KB webp" : "")} |`),
    "",
    "## Real photo TODOs",
    "- Case-study images (`case-*`) are illustrative. Replace with the genuine before/after job photos from the Watford and Chiswick Gate jobs.",
    "- Client logos (MVN Block, Rendall & Rittner) are NOT generated; supply real logo files.",
  ];
  await writeFile(path.join(ROOT, "ASSETS.md"), lines.join("\n"));
  console.log("Wrote ASSETS.md");
  const failed = manifest.filter((m) => m.source === "FAILED");
  console.log(`DONE. ${manifest.length} assets, ${failed.length} failed.`);
  if (failed.length) process.exitCode = 1;
}

run().catch((e) => { console.error("FATAL", e); process.exit(1); });
