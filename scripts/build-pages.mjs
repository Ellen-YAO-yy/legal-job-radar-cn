import { copyFileSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const output = resolve(root, "public");
const source = readFileSync(resolve(root, "src/radar.js"), "utf8");
const version = "0.8.0";
const filename = `local-job-autofill-v${version}.zip`;
const sha256 = "4bd6a70221a7ef7240a4aaee47bfaec9ba52be97fee701354d75176c462fec11";
const pageMatch = source.match(/const page = `([\s\S]*?)`;\n\nconst pluginPage/);
const pluginMatch = source.match(/const pluginPage = `([\s\S]*?)`;\n\nfunction pluginArchive/);
if (!pageMatch || !pluginMatch) throw new Error("Website templates were not found.");

const staticLoad = `async function load(){try{const r=await fetch('./jobs.json?v='+Date.now(),{cache:'no-store'});if(!r.ok)throw new Error('读取失败');const data=await r.json();jobs=mergeJobs(data.jobs);render();const finished=data.last_finished;document.querySelector('#meta').textContent='中国内地 · 职位发布时间 2026-07-01 至今'+(finished?' · 最近检索 '+new Date(finished).toLocaleString('zh-CN',{timeZone:'Asia/Shanghai',hour12:false}).slice(0,16):'');state.textContent='每日北京时间 09:00、14:00、18:00 自动检索'}catch(e){state.textContent='暂时无法读取结果，请稍后重试';state.classList.add('error')}}`;
const staticRefresh = `refresh.addEventListener('click',async()=>{refresh.disabled=true;wrap.classList.add('loading');state.classList.remove('error');state.textContent='正在读取最近一次定时检索结果…';try{await load();state.textContent='已读取最近一次定时检索结果'}finally{refresh.disabled=false;wrap.classList.remove('loading')}});load();`;

let page = pageMatch[1]
  .replace("重新检索最新职位", "读取最近一次检索结果")
  .replace("页面打开不会自动检索", "每日 09:00、14:00、18:00 自动更新")
  .replace("正在读取上一次保存的结果…", "正在读取最近一次检索结果…")
  .replace('href="/resume-autofill"', 'href="./resume-autofill/"')
  .replace(/async function load\(\)\{[\s\S]*?\}\nfor\(const b/, `${staticLoad}\nfor(const b`)
  .replace(/refresh\.addEventListener\('click',[\s\S]*?\);load\(\);/, staticRefresh);

let pluginPage = pluginMatch[1]
  .replaceAll("${PLUGIN_VERSION}", version)
  .replaceAll("${PLUGIN_FILENAME}", filename)
  .replaceAll("${PLUGIN_SHA256}", sha256)
  .replace('href="/"', 'href="../"')
  .replace(`href="/downloads/${filename}"`, `href="../downloads/${filename}"`);

rmSync(output, { recursive: true, force: true });
mkdirSync(resolve(output, "resume-autofill"), { recursive: true });
mkdirSync(resolve(output, "downloads"), { recursive: true });
writeFileSync(resolve(output, "index.html"), page);
writeFileSync(resolve(output, "resume-autofill/index.html"), pluginPage);
copyFileSync(resolve(root, `plugin/${filename}`), resolve(output, `downloads/${filename}`));
copyFileSync(resolve(root, "data/jobs.json"), resolve(output, "jobs.json"));
writeFileSync(resolve(output, "404.html"), "<!doctype html><meta charset=utf-8><title>页面不存在</title><p>页面不存在。<a href='./'>返回法律职位雷达</a></p>");
writeFileSync(resolve(output, ".nojekyll"), "");
console.log(`Built ${output}`);
