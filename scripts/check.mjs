import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const data = JSON.parse(readFileSync(resolve(root, "public/jobs.json"), "utf8"));
if (!Array.isArray(data.jobs)) throw new Error("Jobs payload is invalid.");
const forbiddenHosts = /deizao\.net|yingjiesheng\.com|wondercv\.com|xiaozhaobao\.com\.cn|ultraai\.site|\.edu\.cn/i;
if (data.jobs.some(job => forbiddenHosts.test(new URL(job.url).hostname))) throw new Error("A non-direct or aggregation link was published.");
const html = readFileSync(resolve(root, "public/index.html"), "utf8");
if (!html.includes("法律职位检索") || html.includes("法律职位雷达")) throw new Error("Website title was not updated.");
if (!html.includes("每日 09:00、14:00、18:00 自动更新") || html.includes("/api/refresh")) throw new Error("Static schedule UI was not built correctly.");
const zip = readFileSync(resolve(root, "public/downloads/local-job-autofill-v0.8.0.zip"));
const digest = createHash("sha256").update(zip).digest("hex");
if (digest !== "4bd6a70221a7ef7240a4aaee47bfaec9ba52be97fee701354d75176c462fec11") throw new Error("Plugin archive checksum mismatch.");
console.log(`Validation passed: ${data.jobs.length} jobs, plugin v0.8.0.`);
