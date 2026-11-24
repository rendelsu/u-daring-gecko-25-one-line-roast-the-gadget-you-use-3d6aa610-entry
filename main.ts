const fs = require("node:fs");
const path = require("node:path");

const line = "My phone dies at 4 p.m. every day — it has a better work-life balance than I do.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line, "utf8");
