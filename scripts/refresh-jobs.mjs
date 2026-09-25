import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = readFileSync(resolve(root, "src/radar.js"), "utf8");
const exportOffset = source.lastIndexOf("\nexport default {");
if (exportOffset < 0) throw new Error("Radar source export was not found.");

const runtimePath = resolve(root, ".radar-runtime.mjs");
writeFileSync(runtimePath, `${source.slice(0, exportOffset)}\nexport { BASELINE, refreshJobs, enrichApplicationLinks };\n`);

function logicalKey(job) {
  return `${job.company}|${job.title}`.toLowerCase().replace(/[\s\-_–—（）(),，/]/g, "");
}

function mergeJobs(...lists) {
  const byUrl = new Map();
  for (const list of lists) {
    for (const job of list || []) {
      if (job?.url && job.date_posted >= "2026-07-01") byUrl.set(job.url, job);
    }
  }
  const logical = new Map();
  for (const job of byUrl.values()) {
    const key = logicalKey(job);
    const prior = logical.get(key);
    const score = (job.apply_url ? 10000 : 0) + (job.description || "").length;
    const priorScore = prior ? (prior.apply_url ? 10000 : 0) + (prior.description || "").length : -1;
    if (!prior || score > priorScore) logical.set(key, job);
  }
  return [...logical.values()].sort((a, b) => b.date_posted.localeCompare(a.date_posted) || a.company.localeCompare(b.company, "zh-CN"));
}

let previous = { jobs: [], last_finished: null };
try { previous = JSON.parse(readFileSync(resolve(root, "data/jobs.json"), "utf8")); } catch { /* First run. */ }

try {
  const runtime = await import(`${pathToFileURL(runtimePath).href}?v=${Date.now()}`);
  let result;
  try {
    result = await runtime.refreshJobs({});
  } catch (error) {
    console.warn(`Live search failed; preserving previous snapshot: ${error?.message || error}`);
    result = { jobs: runtime.BASELINE, last_finished: previous.last_finished, message: "本轮检索失败，已保留上一轮结果" };
  }
  const merged = mergeJobs(runtime.BASELINE, previous.jobs, result.jobs);
  const jobs = await runtime.enrichApplicationLinks(merged);
  const snapshot = {
    jobs,
    last_finished: result.last_finished || previous.last_finished || new Date().toISOString(),
    message: result.message || `定时检索完成：当前共 ${jobs.length} 条职位`,
  };
  mkdirSync(resolve(root, "data"), { recursive: true });
  writeFileSync(resolve(root, "data/jobs.json"), `${JSON.stringify(snapshot, null, 2)}\n`);
  console.log(`${snapshot.message}；合并后 ${jobs.length} 条。`);
} finally {
  rmSync(runtimePath, { force: true });
}
