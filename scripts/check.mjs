import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const data = JSON.parse(readFileSync(resolve(root, "public/jobs.json"), "utf8"));
if (!Array.isArray(data.jobs) || data.jobs.length < 29) throw new Error("Expected at least 29 jobs.");
const html = readFileSync(resolve(root, "public/index.html"), "utf8");
if (!html.includes("每日 09:00、14:00、18:00 自动更新") || html.includes("/api/refresh")) throw new Error("Static schedule UI was not built correctly.");
const zip = readFileSync(resolve(root, "public/downloads/local-job-autofill-v0.8.0.zip"));
const digest = createHash("sha256").update(zip).digest("hex");
if (digest !== "4bd6a70221a7ef7240a4aaee47bfaec9ba52be97fee701354d75176c462fec11") throw new Error("Plugin archive checksum mismatch.");
console.log(`Validation passed: ${data.jobs.length} jobs, plugin v0.8.0.`);
