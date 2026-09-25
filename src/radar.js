const START_DATE = "2026-07-01";
const PLUGIN_VERSION = "0.8.0";
const PLUGIN_FILENAME = `local-job-autofill-v${PLUGIN_VERSION}.zip`;
const PLUGIN_SHA256 = "4bd6a70221a7ef7240a4aaee47bfaec9ba52be97fee701354d75176c462fec11";
const PLUGIN_ARCHIVE_BASE64 = "__PLUGIN_ARCHIVE_BASE64__";

const BASELINE = [
  ["2026-09-10","北京车之家信息技术有限公司","法务专员（2027校园招聘）","参与合同及法律文书审核、互联网与广告业务合规、知识产权管理、争议解决及法务数字化建设。要求2027届法学专业本科及以上学历，英语六级及法律职业资格、相关实习经历优先。","https://www.nowcoder.com/jobs/detail/466952","民营企业|上市公司集团","牛客招聘职位页","北京"],
  ["2026-09-08","南京银行股份有限公司","总行定向培训生岗—法律合规方向","通过总行多岗位培养参与金融监管、法律风险研判、合同审核等工作。面向2027届法学类硕士及以上毕业生，民商法、经济法方向优先。","https://www.nowcoder.com/jobs/detail/466977","地方国企|上市公司集团","牛客招聘职位页","南京"],
  ["2026-09-08","南京银行股份有限公司","法律专业定向培训生岗","培养合同法律审查、诉讼、案件处置及资产保全等银行法律能力。面向2027届法学类本科及以上毕业生，工作地点覆盖南京、苏州和扬州。","https://www.nowcoder.com/jobs/detail/466968","地方国企|上市公司集团","牛客招聘职位页","南京、苏州、扬州"],
  ["2026-08-26","安克创新科技股份有限公司","海外法务专员（2027校园招聘）","负责中英文合同和法律文件拟制审核、商务谈判支持、业务法律咨询及合同全流程合规管理。要求2027届法律相关专业本科及以上学历，法律职业资格优先。","https://www.nowcoder.com/jobs/detail/463139","民营企业|上市公司集团","牛客招聘职位页","深圳"],
  ["2026-08-04","未岚大陆（北京）科技有限公司","法律顾问（2027校园招聘）","覆盖境内外合同、跨境业务、海外与数据合规、争议解决及法务运营，涉及欧盟DSA、CRA等监管研究。要求2027届法学硕士，英语可作为工作语言，法律职业资格及相关实习经历优先。","https://www.nowcoder.com/jobs/detail/465672","民营企业","牛客招聘职位页","北京"],
  ["2026-09-24","深圳担保集团有限公司","风控/法务经理（2027校园招聘）","风控方向负责风险资产处置、债务追偿及业务法律风险前置审查；法务方向负责起草审核法律文本、投融资项目合规审查、全面风险与合规管理及政策研究。要求法律或法学类专业硕士研究生及以上学历，通过法律职业资格考试。","https://m.yingjiesheng.com/job-008-096-499.html","地方国企","北京航空航天大学就业信息转载页","深圳"],
  ["2026-09-22","中国移动通信集团云南有限公司","法务合规管理（2027校园招聘）","面向法学、民商法学、知识产权法、宪法与行政法、经济法等专业；要求取得国家法律职业资格A证。岗位分布于省公司及16个州市分公司，网申截止2026年10月15日。","https://job.tiangong.edu.cn/correcruit/content/id/56357.html","央企|上市公司集团|世界500强集团","高校就业中心招聘页","云南省"],
  ["2026-09-22","北京掌上先机网络科技有限公司","法务专员—校招/实习（J15258）","负责合同及其他法律文本的起草、审查和修改，处理合同争议；负责规章制度拟定及法律审核；参与投融资、并购、重组等境内外法律项目。法学相关专业、通过法律职业资格考试或具有企业法务/律所实习经历者优先。","https://career.hebut.edu.cn/home/correcruit/content/id/79519.html","港澳台资","高校就业中心招聘页","北京"],
  ["2026-09-21","辽宁象屿铝业有限公司","象屿铝业本部—法务岗","完成跨区域及专业部门轮岗，协助企业合同管理、日常法律咨询、非诉纠纷处置、法制宣传与培训，并参与流程改进和跨部门协作。法律专业本科及以上学历，法律职业资格考试通过者优先。","https://career.hebut.edu.cn/home/correcruit/content/id/80398.html","地方国企|世界500强集团","高校就业中心招聘页","辽宁省，可接受外派"],
  ["2026-09-15","中国石油天然气股份有限公司吉林石化分公司","企管法规岗","面向法学、民商法学、诉讼法学等专业的应届毕业生岗位。本科及以上学历，外语成绩须达到集团统一要求；投递期为2026年9月9日至10月15日。","https://career.hebut.edu.cn/home/correcruit/content/id/80628.html","央企|上市公司集团|世界500强集团","高校就业中心招聘页","吉林省"],
  ["2026-09-11","中车南京浦镇车辆有限公司","法务岗","负责公司及所属企业的合同管理、合同审查、合规管理、法律事务和法律咨询。要求法律或法学相关专业，具备法务类证书优先；能够接受短期外派，外语流利者优先。","https://job.tiangong.edu.cn/correcruit/content/id/56068.html","央企|上市公司集团","高校就业中心招聘页","江苏省"],
  ["2026-09-10","中国电信股份有限公司河北分公司","综合法务（2027校园招聘）","面向本科及以上应届毕业生的综合法务岗位，属于河北电信2027校园招聘岗位类别之一。具体岗位需求与报名条件以中国电信招聘网站为准。","https://career.hebut.edu.cn/home/correcruit/content/id/80373.html","央企|上市公司集团|世界500强集团","高校就业中心招聘页","河北省"],
  ["2026-09-09","中信金属股份有限公司","法务助理","负责中国法及境外法律项下的大宗商品国际贸易合同审核、合规风险识别、争议解决支持，以及投资项目尽职调查和法律文件审阅。要求法学、经济法、国际法、诉讼法等相关专业，英语可用于合同和跨境业务沟通。","https://career.nankai.edu.cn/correcruit/content/id/118385.html","央企|上市公司集团|世界500强集团","高校就业中心招聘页","北京"],
  ["2026-09-03","北京世纪好未来教育科技有限公司","法务类—综合法务/专利法务","法务类岗位包括综合法务和专利法务，面向本科、硕士及博士毕业生。具体岗位职责和投递要求以好未来校园招聘官网为准。","https://career.nankai.edu.cn/correcruit/content/id/117621.html","民营企业|上市公司集团","高校就业中心招聘页","北京"],
  ["2026-09-03","北京协合运维风电技术有限公司","职能类管培生（法务方向）","法务方向主要负责合同合规性审查、法律咨询和知识产权保护，纳入职能类管培生培养。要求法学等对应专业本科及以上学历，具备相关实习经历者优先。","https://career.nankai.edu.cn/correcruit/content/id/110503.html","民营企业|上市公司集团","高校就业中心招聘页","北京"],
  ["2026-09-03","超聚变数字技术有限公司","法务类（2027届校园招聘）","超聚变2027届校园招聘中的法务类岗位，招聘范围覆盖国内多地，并列有新加坡、首尔、东京、吉隆坡、巴黎等海外工作地点。具体岗位职责和地点以公司校园招聘系统为准。","https://career.hebut.edu.cn/home/correcruit/content/id/80046.html","","高校就业中心招聘页","中国内地多地及海外"],
  ["2026-09-02","特变电工股份有限公司新疆变压器厂","法务岗","负责合同评审与履约风险、诉讼仲裁、知识产权、投资并购以及贸易合规；贸易合规部分涉及出口管制、经济制裁、敏感国别合同审核和客户黑名单筛查。法学等相关专业。","https://career.hebut.edu.cn/home/correcruit/content/id/79897.html","民营企业|上市公司集团","高校就业中心招聘页","天津市、新疆维吾尔自治区"],
  ["2026-08-28","中建长江国际工程有限公司","海外法务管理岗","中建三局国际工程公司海外业务平台的法务岗位，招聘法学、国际法、民商法、经济法、知识产权法等专业毕业生，参与国际工程和一带一路相关海外业务。职位有效期至2027年5月31日。","https://m.yingjiesheng.com/job-008-042-080.html","央企|上市公司集团|世界500强集团","四川大学就业信息转载页","北京；海外业务"],
  ["2026-08-27","卫星化学股份有限公司","法务专员","负责起草审核合同及法律文件、提供日常法律咨询与合规支持，并参与知识产权保护和争议解决。要求法学相关专业硕士学历，英语口语流利或有海外留学经历者优先。","https://jy.scu.edu.cn/index/index/employjobdetail.html?data=MDAwMDAwMDAwMJG6n3_Ed6imi4qQtLh4Y92Ku9Sqsnbddricp9CWi5qikaeWacSdqLqGfaK2w4iil5C4zNbGiL-E","民营企业|上市公司集团","四川大学就业中心招聘页","浙江嘉兴、平湖及江苏连云港"],
  ["2026-08-17","盈峰环境科技集团股份有限公司","合规律师 Compliance Lawyer","协助日常合同审核、法规政策跟踪、法律检索与案例查询、基础法律分析报告撰写，以及法务流程、文档和跨部门协调支持。要求2027届法学相关专业硕士及以上学历。","https://m.yingjiesheng.com/job-008-029-879.html","民营企业|上市公司集团","前程无忧招聘信息转载页","长沙岳麓区"],
  ["2026-07-15","罗思（Rouse）","Paralegal / 律师助理","罗思招聘官网列示的上海律师助理职位，招聘人数若干。岗位具体职责与申请条件需在职位详情页进一步核实。","https://www.hotjob.cn/wt/Rouse/web/index/campus","外企","罗思招聘官网","上海"],
  ["2026-07-13","某北京头部律师事务所（Randstad代招）","Associate—跨境交易初级律师","加入跨境交易团队，参与境外投资、跨国并购、外商直接投资及公司合规，负责中英文法律研究、交易文件起草、法律尽调和境内外项目协调。要求通过法律职业资格考试，英语可作为工作语言。","https://cn-lb-prod.prd.bluexcn.randstad.cn/en/jobs/associate_beijing_90M0149611_19261_CN/","律师事务所","Randstad招聘页","北京"],
  ["2026-09-20","国家开发银行大连市分行","法律合规类（2027校园招聘）","为业务开发和内部管理提供法律支持，并从事内控合规管理、依法收贷和监管对接。要求法学或法律相关专业硕士研究生及以上学历，取得法律职业资格证书者优先。报名截止2026年10月7日。","https://career.nankai.edu.cn/correcruit/content/id/118907.html","央企","南开大学就业信息网","大连"],
  ["2026-09-18","网易游戏（互娱）","法务实习生（合规）","协助审核及比对合同和法律文件、办理证照与法律文件递送、开展法律问题调研。面向2027年以后毕业的在校生，要求每周到岗5天并连续实习4个月以上。","https://jobs.ultraai.site/jobs/netease/71979","民营企业|上市公司集团","职先机招聘页","杭州"],
  ["2026-09-11","天津泰达实业集团有限公司","风控合规部实习生","参与重大决策、合同和规章制度的法律合规审核，协助纠纷案件及合同台账管理。法学专业，本科及以上，招聘1人。","https://career.nankai.edu.cn/correcruit/content/id/118597.html","地方国企","南开大学就业信息网","天津"],
  ["2026-09-10","中国建设银行股份有限公司福建省分行","管理培训生（法律合规方向）","主要从事法律事务、风险内控等工作，重点招收法律相关专业毕业生；培养后安排至法律事务或风险合规部门。面向2027届校园招聘。","https://job.tiangong.edu.cn/correcruit/content/id/55986.html","央企|上市公司集团|世界500强集团","天津工业大学就业信息网","福建省内多地"],
  ["2026-09-09","北京四达时代软件技术股份有限公司","法务专员（法语）","协助建立海外法律管理体系，提供所辖国家法律咨询，处理境外诉讼纠纷并审查各类合同。要求法学本科及以上，法语可作为工作语言，能接受海外出差。","https://career.hebut.edu.cn/home/correcruit/content/id/80333.html","民营企业","河北工业大学就业指导中心","北京；海外出差"],
  ["2026-09-07","广发证券股份有限公司","合规法务岗（2027校园招聘）","岗位方向包括合规审核、法务和衍生品合规，工作地点广州；要求法律、金融经济或财务等相关背景。","https://career.nankai.edu.cn/correcruit/content/id/118078.html","上市公司集团","南开大学就业信息网","广州"],
  ["2026-09-05","跨维智能","法务管培生（2027校园招聘）","参与合同审阅、境内外业务法律支持与合规工作，英语可作为工作语言；法律职业资格A证或海外法学背景优先。","https://www.wondercv.com/xiaozhao/shenzhen-embodied-ai-27-autumn-recruitment-14253-484144/","民营企业","超级简历招聘页","深圳"],
  ["2026-09-02","厦门象屿股份有限公司","法务岗（2027校园招聘）","协助重大项目尽调并提供法律建议，参与项目设计和法律文件起草，管理合规风险并负责合同及制度审核。","https://career.nankai.edu.cn/correcruit/content/id/117501.html","地方国企|上市公司集团|世界500强集团","南开大学就业信息网","厦门"],
  ["2026-09-02","中交城市投资控股有限公司","法务合规岗（2027校园招聘）","审核合同、协议及规章制度，跟进诉讼纠纷并对接上级法务部门和外部律所。要求2027届法学相关专业硕士及以上学历。","https://xiaozhaobao.com.cn/job/3105881","央企|上市公司集团|世界500强集团","校招宝招聘页","上海、浙江"],
  ["2026-09-01","深圳成谷科技有限公司","法务专员（2027校园招聘）","深圳成谷科技2027届秋季校园招聘职能类岗位，面向海内外高校应届毕业生，工作地点深圳。","https://career.hebut.edu.cn/home/correcruit/content/id/79859.html","民营企业","河北工业大学就业指导中心","深圳"],
  ["2026-08-24","华安财产保险股份有限公司天津分公司","法务专员（2027校园招聘）","参与风险内控、合规制度落地、监管对接及反洗钱工作。面向2027届法学、审计等相关专业毕业生，法考通过者优先。","https://career.hebut.edu.cn/home/correcruit/content/id/79441.html","","河北工业大学就业指导中心","天津"],
  ["2026-08-20","广州虹科电子科技有限公司","法务专员 Legal & Compliance","负责合同审核、法律风险评估、争议解决、知识产权保护及法律培训。要求法学本科及以上，英文可用于文件起草、谈判和涉外法律事务。","https://career.hebut.edu.cn/home/correcruit/content/id/79327.html","民营企业","河北工业大学就业指导中心","广州"]
].map(([date_posted,company,title,description,url,tags,source,location]) => ({date_posted,company,title,description,url,tags,source,location}));

const WEB_QUERIES = [
  "site:zhaopin.com/jobdetail 法务 2027 校园招聘",
  "site:zhipin.com/job_detail 法务 应届 合规",
  "site:liepin.com/job 法务 1-3年",
  "site:jobs.51job.com 法务 应届生",
  "site:nowcoder.com/jobs/detail 法务 合规",
  "site:shixiseng.com/interns 法务 合规",
  "site:mokahr.com 法务 校园招聘 job",
  "site:hotjob.cn 法务 position detail",
  "企业招聘官网 法务 2027 校园招聘 jobId",
  "企业招聘官网 涉外律师 海外法务 职位详情",
];
const DISCOVERY_SEARCHES = [
  ["法务", 1], ["法务", 2], ["法务", 3],
  ["合规", 1], ["合规", 2], ["法律", 1],
];
const DISCOVERY_SOURCES = [
  { origin: "https://career.hebut.edu.cn", searchPath: "/home/correcruit/index.html", name: "河北工业大学就业指导中心" },
  { origin: "https://job.tiangong.edu.cn", searchPath: "/correcruit/index.html", name: "天津工业大学就业信息网" },
  { origin: "https://career.nankai.edu.cn", searchPath: "/correcruit/index.html", name: "南开大学就业信息网" },
  { origin: "https://career.tjcu.edu.cn", searchPath: "/correcruit/index.html", name: "天津商业大学就业信息网" },
];
const DISCOVERY_KEYWORDS = ["法务", "合规"];
const CORE_RE = /法务|律师|法律顾问|法律事务|法律专员|合规|知识产权|法规岗|legal|compliance/i;
const GENERIC_POST_RE = /招聘|校招|招募|简章|公告|岗位汇总|职能类|管理培训生/i;
const JOB_SIGNAL_RE = /招聘|职位|岗位|任职要求|岗位职责|工作职责|立即投递|校招|社招|应届|毕业生|实习|管培|jobdetail|\/jobs\/|career|hiring|apply|requirements/i;
const JUNIOR_RE = /校招|校园招聘|应届|毕业生|管培|实习|助理|专员|初级|1\s*[-–—至到]\s*3\s*年|[一二三123]\s*年(?:经验|以上|以内)/i;
const SENIOR_RE = /(?:[4-9]|[1-9]\d)\s*年(?:以上|经验)/;
const BLOCKED_LINK_HOST_RE = /(?:^|\.)(?:deizao\.net|yingjiesheng\.com|wondercv\.com|xiaozhaobao\.com\.cn|ultraai\.site|jobui\.com|kanzhun\.com|job592\.com|gaoxiaojob\.com)$/i;
const RECRUITMENT_PLATFORM_HOST_RE = /(?:^|\.)(?:zhaopin\.com|zhipin\.com|liepin\.com|51job\.com|nowcoder\.com|shixiseng\.com|randstad\.cn|hotjob\.cn|mokahr\.com|myworkdayjobs\.com|workdayjobs\.com|greenhouse\.io|lever\.co|smartrecruiters\.com|successfactors\.com|oraclecloud\.com)$/i;
const DIRECT_PATH_RE = /\/(?:jobs?|positions?|vacancies|requisitions|interns)\/[^/?#]{3,}|job[_-]?detail|position[_-]?detail|recruitment[_-]?detail|vacancy[_-]?detail|requisition[_-]?detail|post\.html|detail\.html|\/apply(?:\/|$)/i;
const DIRECT_QUERY_RE = /[?&](?:id|jobid|job_id|positionid|position_id|requisitionid|requisition_id|vacancyid|vacancy_id|postid|code)=[^&#]{2,}/i;
const GENERIC_DESTINATION_RE = /\/(?:jobs?|positions?)\/(?:index(?:\.html?)?|home|search|list|campus|social|school)(?:[/?#]|$)/i;

function isDirectApplicationUrl(jobOrUrl) {
  const raw = typeof jobOrUrl === "string" ? jobOrUrl : jobOrUrl?.url;
  if (!raw) return false;
  try {
    const url = new URL(raw);
    const host = url.hostname.toLowerCase();
    if (!/^https?:$/.test(url.protocol) || BLOCKED_LINK_HOST_RE.test(host) || /(?:^|\.)so\.com$/.test(host) || /\.edu\.cn$/.test(host)) return false;
    const target = `${url.pathname}${url.search}`;
    if (GENERIC_DESTINATION_RE.test(target)) return false;
    const hasDetail = DIRECT_PATH_RE.test(target) || DIRECT_QUERY_RE.test(target);
    if (!hasDetail) return false;
    if (RECRUITMENT_PLATFORM_HOST_RE.test(host)) return true;
    return /career|careers|jobs?|recruit|join|talent|hire|campus/i.test(`${host}${url.pathname}`);
  } catch {
    return false;
  }
}

const page = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>法律职位雷达</title><meta name="description" content="中国内地法律相关校招及初级社招职位汇总"><style>
:root{--ink:#13273f;--muted:#667487;--line:#dbe1e8;--paper:#fff;--canvas:#eef2f6;--accent:#b58520;--accent-dark:#7a5814;--danger:#a43b35}*{box-sizing:border-box}body{margin:0;background:var(--canvas);color:var(--ink);font:16px/1.55 ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif}.shell{width:min(1500px,calc(100% - 40px));margin:0 auto;padding:28px 0 56px}.topbar{display:flex;align-items:center;justify-content:space-between;gap:16px;background:var(--ink);color:#fff;border-radius:12px;padding:14px 18px;margin-bottom:24px;box-shadow:0 10px 28px rgba(19,39,63,.14)}.topbar-actions{display:flex;align-items:center;justify-content:flex-end;gap:14px}.refresh,.plugin-link{appearance:none;border:0;border-radius:8px;padding:11px 18px;font:750 15px/1 ui-sans-serif,sans-serif;cursor:pointer;text-decoration:none}.refresh{background:#e8c46a;color:#2c2108}.refresh:hover{background:#f1d582}.refresh:disabled{cursor:wait;opacity:.7}.plugin-link{background:#fff;color:var(--ink);white-space:nowrap}.plugin-link:hover{background:#edf2f7}.refresh-state{font-size:14px;color:#dce5ef;text-align:right}.refresh-state.error{color:#ffd0cb}header{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:20px}h1{font-family:Georgia,"Noto Serif SC",serif;font-size:clamp(28px,4vw,44px);line-height:1.1;letter-spacing:-.02em;margin:0}.meta{color:var(--muted);margin:8px 0 0}.count{font-weight:700;color:var(--accent-dark);white-space:nowrap}.filters{display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin:0 0 16px}.filter-label{font-weight:700;margin-right:4px}.filter-note{color:var(--muted);font-size:14px;margin-left:auto}.tag-filter,.clear-filter{appearance:none;border:1px solid #c9d1dc;background:#fff;color:#34465c;border-radius:999px;padding:8px 13px;font:600 14px/1 ui-sans-serif,sans-serif;cursor:pointer}.tag-filter:hover,.clear-filter:hover{border-color:var(--accent)}.tag-filter[aria-pressed="true"]{background:var(--ink);border-color:var(--ink);color:#fff}.clear-filter{color:var(--accent-dark);border-color:#d8bc7d}.table-wrap{overflow:auto;background:var(--paper);border:1px solid var(--line);border-radius:12px;box-shadow:0 12px 32px rgba(19,39,63,.08)}table{width:100%;min-width:980px;border-collapse:collapse;table-layout:fixed}th{position:sticky;top:0;z-index:1;background:var(--ink);color:#fff;text-align:left;font-size:14px;font-weight:600;letter-spacing:.04em;padding:15px 18px}td{vertical-align:top;border-bottom:1px solid var(--line);padding:18px;color:#26374d}tbody tr:last-child td{border-bottom:0}tbody tr:hover{background:#f8fafc}th:nth-child(1),td.date{width:132px}th:nth-child(2),td.company{width:190px}th:nth-child(3),td.title{width:230px}th:nth-child(5),td.link{width:132px}td.date{font-variant-numeric:tabular-nums;color:var(--muted)}td.company strong,td.title{font-weight:650}.company-tags{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}.company-tag{display:inline-block;padding:3px 7px;border-radius:4px;background:#edf1f5;color:#516176;font-size:12px;line-height:1.25}td.description{white-space:pre-line;word-break:break-word;color:#46566a}td.link a{display:inline-flex;align-items:center;white-space:nowrap;color:var(--accent-dark);font-weight:700;text-decoration:none;border-bottom:1px solid #d8bc7d}.empty{text-align:center!important;color:var(--muted);padding:64px 24px!important}.loading{opacity:.55}@media(max-width:700px){.shell{width:calc(100% - 24px);padding-top:14px}.topbar,header{align-items:flex-start;flex-direction:column}.topbar-actions{width:100%;align-items:flex-start;justify-content:space-between;flex-wrap:wrap}.refresh-state{text-align:left}.filter-note{width:100%;margin-left:0}.table-wrap{border-radius:9px}}</style></head><body><main class="shell"><section class="topbar" aria-label="网站工具"><button class="refresh" id="refresh" type="button">重新检索最新职位</button><div class="topbar-actions"><div class="refresh-state" id="refresh-state">页面打开不会自动检索</div><a class="plugin-link" href="/resume-autofill">简历自动填充插件</a></div></section><header><div><h1>法律职位雷达</h1><p class="meta" id="meta">中国内地 · 职位发布时间 2026-07-01 至今</p></div><div class="count"><span id="visible-count">—</span> 个职位</div></header><section class="filters" aria-label="按公司属性筛选"><span class="filter-label">公司属性</span><button type="button" class="tag-filter" data-tag="央企" aria-pressed="false">央企</button><button type="button" class="tag-filter" data-tag="地方国企" aria-pressed="false">地方国企</button><button type="button" class="tag-filter" data-tag="民营企业" aria-pressed="false">民营企业</button><button type="button" class="tag-filter" data-tag="外企" aria-pressed="false">外企</button><button type="button" class="tag-filter" data-tag="港澳台资" aria-pressed="false">港澳台资</button><button type="button" class="tag-filter" data-tag="上市公司集团" aria-pressed="false">上市公司集团</button><button type="button" class="tag-filter" data-tag="世界500强集团" aria-pressed="false">世界500强集团</button><button type="button" class="tag-filter" data-tag="律师事务所" aria-pressed="false">律师事务所</button><button type="button" class="clear-filter" id="clear-filter">清除</button><span class="filter-note">多选时仅显示同时符合全部标签的公司</span></section><div class="table-wrap" id="table-wrap" role="region" aria-label="法律职位列表" tabindex="0"><table><thead><tr><th>职位发布时间</th><th>公司名</th><th>职位名</th><th>职位描述</th><th>链接跳转</th></tr></thead><tbody id="jobs"><tr><td class="empty" colspan="5">正在读取上一次保存的结果…</td></tr></tbody></table></div></main><script>
const selected=new Set(),tbody=document.querySelector('#jobs'),count=document.querySelector('#visible-count'),state=document.querySelector('#refresh-state'),refresh=document.querySelector('#refresh'),wrap=document.querySelector('#table-wrap');let jobs=[];
const escUrl=u=>{try{const x=new URL(u);return /^https?:$/.test(x.protocol)?x.href:'#'}catch{return '#'}};
function cell(cls,text){const td=document.createElement('td');td.className=cls;td.textContent=text||'';return td}
function render(){tbody.replaceChildren();let visible=0;for(const job of jobs){const tags=(job.tags||'').split('|').filter(Boolean);if(![...selected].every(t=>tags.includes(t)))continue;visible++;const tr=document.createElement('tr');tr.append(cell('date',job.date_posted));const company=cell('company','');const strong=document.createElement('strong');strong.textContent=job.company;company.append(strong);const tagBox=document.createElement('div');tagBox.className='company-tags';for(const tag of tags){const span=document.createElement('span');span.className='company-tag';span.textContent=tag;tagBox.append(span)}company.append(tagBox);tr.append(company,cell('title',job.title),cell('description',job.description));const link=cell('link',''),a=document.createElement('a');a.href=escUrl(job.url);a.target='_blank';a.rel='noreferrer';a.textContent='查看职位 ↗';link.append(a);tr.append(link);tbody.append(tr)}if(!visible){const tr=document.createElement('tr'),td=cell('empty',jobs.length?'没有同时符合所选标签的职位':'暂无职位');td.colSpan=5;tr.append(td);tbody.append(tr)}count.textContent=String(visible)}
const CACHE_KEY='legal-job-radar-snapshot-v1';
function mergeJobs(...lists){const byUrl=new Map();for(const list of lists)for(const job of list||[])if(job&&job.url)byUrl.set(job.url,job);return [...byUrl.values()].sort((a,b)=>b.date_posted.localeCompare(a.date_posted)||a.company.localeCompare(b.company,'zh-CN'))}
function readCache(){try{return JSON.parse(localStorage.getItem(CACHE_KEY)||'null')}catch{return null}}
function saveCache(snapshot){try{localStorage.setItem(CACHE_KEY,JSON.stringify(snapshot))}catch{/* Private browsing or storage quota: the current page still works. */}}
async function load(){try{const cached=readCache();const r=await fetch('/api/jobs',{headers:{accept:'application/json'}});if(!r.ok)throw new Error('读取失败');const data=await r.json();jobs=mergeJobs(data.jobs,cached?.jobs);render();const finished=cached?.last_finished||data.last_finished;document.querySelector('#meta').textContent='中国内地 · 职位发布时间 2026-07-01 至今'+(finished?' · 上次检索 '+finished.replace('T',' ').slice(0,16):' · 尚未手动检索');state.textContent=data.status==='running'?'另一位访客正在检索，请稍后刷新':'页面打开不会自动检索'}catch(e){const cached=readCache();if(cached?.jobs?.length){jobs=cached.jobs;render();state.textContent='已读取此浏览器上次保存的结果'}else{state.textContent='暂时无法读取结果，请稍后重试';state.classList.add('error')}}}
for(const b of document.querySelectorAll('.tag-filter'))b.addEventListener('click',()=>{const t=b.dataset.tag;selected.has(t)?selected.delete(t):selected.add(t);b.setAttribute('aria-pressed',String(selected.has(t)));render()});document.querySelector('#clear-filter').addEventListener('click',()=>{selected.clear();document.querySelectorAll('.tag-filter').forEach(b=>b.setAttribute('aria-pressed','false'));render()});
refresh.addEventListener('click',async()=>{refresh.disabled=true;wrap.classList.add('loading');state.classList.remove('error');state.textContent='正在检索全网、校招聚合站与高校招聘源，通常需要 20–50 秒…';try{const r=await fetch('/api/refresh',{method:'POST',headers:{accept:'application/json'}});const data=await r.json();if(!r.ok)throw new Error(data.error||'检索失败');jobs=mergeJobs(data.jobs);saveCache({jobs,last_finished:data.last_finished});selected.clear();document.querySelectorAll('.tag-filter').forEach(b=>b.setAttribute('aria-pressed','false'));render();state.textContent=data.message;document.querySelector('#meta').textContent='中国内地 · 职位发布时间 2026-07-01 至今 · 上次检索 '+data.last_finished.replace('T',' ').slice(0,16)}catch(e){state.textContent=e.message+'；原有结果已保留';state.classList.add('error')}finally{refresh.disabled=false;wrap.classList.remove('loading')}});load();
</script></body></html>`;

const pluginPage = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>简历自动填充插件 v${PLUGIN_VERSION}</title><meta name="description" content="本地秋招填表助手安装与使用说明"><style>
:root{--ink:#13273f;--muted:#647386;--line:#d9e0e8;--paper:#fff;--canvas:#eef2f6;--accent:#b58520;--accent-soft:#f5e7bd}*{box-sizing:border-box}body{margin:0;background:var(--canvas);color:var(--ink);font:16px/1.75 ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif}.shell{width:min(900px,calc(100% - 32px));margin:0 auto;padding:28px 0 72px}.nav{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px}.back{color:var(--ink);font-weight:700;text-decoration:none}.back:hover{text-decoration:underline}.version{display:inline-flex;padding:6px 10px;border-radius:999px;background:var(--ink);color:#fff;font-size:14px;font-weight:700}.doc{background:var(--paper);border:1px solid var(--line);border-radius:16px;box-shadow:0 18px 44px rgba(19,39,63,.09);padding:clamp(24px,6vw,60px)}h1,h2,h3{font-family:Georgia,"Noto Serif SC",serif;line-height:1.25;color:var(--ink)}h1{font-size:clamp(32px,6vw,50px);margin:0 0 10px}h2{font-size:26px;margin:42px 0 12px;padding-top:8px;border-top:1px solid var(--line)}h3{font-size:19px;margin:26px 0 8px}.lead{font-size:18px;color:#43546a;margin:0 0 26px}.notice{background:#f7f1df;border-left:4px solid var(--accent);padding:14px 16px;border-radius:0 8px 8px 0}.doc li{margin:7px 0}.doc code{background:#edf1f5;padding:2px 5px;border-radius:4px;font-size:.92em}.download-box{margin-top:48px;padding:28px;border-radius:12px;background:var(--ink);color:#fff;text-align:center}.download-box h2{color:#fff;border:0;margin:0 0 8px;padding:0}.download-box p{color:#dbe4ee;margin:0 0 18px}.download{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:8px;background:#e8c46a;color:#2c2108;font-weight:800;text-decoration:none}.download:hover{background:#f1d582}.checksum{margin-top:14px!important;font:12px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace;overflow-wrap:anywhere;color:#aebdcd!important}@media(max-width:600px){.shell{width:min(100% - 20px,900px);padding-top:14px}.doc{padding:24px 20px;border-radius:12px}.nav{align-items:flex-start}.download{width:100%}}</style></head><body><main class="shell"><nav class="nav"><a class="back" href="/">← 返回法律职位雷达</a><span class="version">v${PLUGIN_VERSION}</span></nav><article class="doc"><h1>本地秋招填表助手</h1><p class="lead">这是一个 Chrome / Edge Manifest V3 扩展。它在浏览器本地读取简历、保存结构化求职资料，并在用户主动操作后填写当前招聘网页。</p><p class="notice"><strong>当前安装包版本：v${PLUGIN_VERSION}</strong>。插件不会自动提交申请，也不会点击声明、验证码、下一步或预览。</p>
<h2>安装</h2><h3>Chrome</h3><ol><li>下载页面底部的 v${PLUGIN_VERSION} 压缩包并解压。</li><li>打开 <code>chrome://extensions/</code>。</li><li>开启右上角“开发者模式”。</li><li>点击“加载已解压的扩展程序”。</li><li>选择解压后的插件文件夹。</li></ol><h3>Edge</h3><ol><li>下载并解压 v${PLUGIN_VERSION} 压缩包。</li><li>打开 <code>edge://extensions/</code>。</li><li>开启左侧“开发人员模式”。</li><li>点击“加载解压缩的扩展”。</li><li>选择解压后的插件文件夹。</li></ol>
<h2>使用</h2><ol><li>点击扩展图标，选择“打开本地资料库”。</li><li>选择 DOC、DOCX、文字型 PDF 或 Markdown 简历；核对自动提取结果，并补齐橙色字段。</li><li>教育、实习/工作、项目、荣誉奖项、竞赛和论文会分段显示，可逐段增删、调整顺序或修改。</li><li>点击“保存到本机”。</li><li>自行打开并登录招聘网站，进入申请表。</li><li>点击扩展图标，可先“只检查页面缺什么”，再选择“填充当前页面”；“放入简历附件”会要求再次确认。</li><li>人工检查所有内容后，再由你自行决定是否继续或提交。</li></ol><p>填写重复经历时，插件会比较本地记录数与网页已有行数，自动点击对应板块的“添加／新增”按钮补足行数，等待页面渲染后再逐条填写。网页已有记录不会被删除或覆盖。</p><p>同一份本地资料可在网页中重复使用。例如网站同时出现“姓名”和“确认姓名”，插件会填写所有能够匹配的空白字段。</p>
<h2>隐私与限制</h2><ul><li>简历解析不调用网络 API；资料保存在 <code>chrome.storage.local</code> 中。</li><li>扩展没有后台服务器，也没有分析统计代码。</li><li>主动把内容填入招聘网页后，该网站可能通过自动保存接收这些信息。</li><li>招聘系统常使用自定义下拉框、嵌套 iframe 或动态组件；无法安全识别时会留空或停止该板块。</li><li>行内新增式表单可自动补足多条记录；弹窗式编辑或多步骤向导可能仍需人工处理。</li><li>浏览器和网站可能阻止脚本设置文件框，附件失败时请手动选择文件。</li><li>DOCX 和 Markdown 直接在浏览器内解析；文字型 PDF 使用随扩展打包的 PDF.js，不调用在线服务。</li><li>扫描图片型 PDF 暂不支持 OCR；旧版 DOC 若解析不完整，请先在 Word 中另存为 DOCX。</li><li>身份证等敏感字段默认留空，除非用户在本地资料库主动填写。</li></ul>
<h2>安全设计</h2><ul><li>只填已有资料且当前为空的输入框，不覆盖页面已有值。</li><li>跳过密码、验证码、推荐码、邀请码、复选框和单选框。</li><li>不查找或触发“提交”“下一步”“预览”“同意”等按钮。</li><li>附件上传与普通字段填充分离，并要求用户再次确认。</li></ul><p>本插件包含 JSZip，许可证随压缩包提供。</p>
<section class="download-box"><h2>安装插件 v${PLUGIN_VERSION}</h2><p>下载压缩包后先解压，再按上方步骤加载插件文件夹。</p><a class="download" href="/downloads/${PLUGIN_FILENAME}" download="${PLUGIN_FILENAME}">下载插件压缩包 v${PLUGIN_VERSION}</a><p class="checksum">SHA-256：${PLUGIN_SHA256}</p></section></article></main></body></html>`;

function pluginArchive() {
  const binary = atob(PLUGIN_ARCHIVE_BASE64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

function json(data, status = 200) {
  return Response.json(data, { status, headers: { "cache-control": "no-store" } });
}

function decode(value) {
  return value.replace(/<br\s*\/?\s*>/gi, "\n").replace(/<[^>]*>/g, " ").replace(/&nbsp;|&ensp;|&emsp;|&#160;/gi, " ").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).replace(/\s+/g, " ").trim();
}

function postedDate(text) {
  const match = text.match(/(2026)[-/.\u5e74](0?[1-9]|1[0-2])[-/.\u6708](0?[1-9]|[12]\d|3[01])(?:\u65e5)?/);
  if (!match) return "";
  const date = `${match[1]}-${match[2].padStart(2, "0")}-${match[3].padStart(2, "0")}`;
  return date >= START_DATE ? date : "";
}

function companyAndTitle(heading) {
  const siteLabel = /应届生求职网|BOSS直聘|智联招聘|猎聘|前程无忧|牛客网|校招宝|实习僧|职友集|看准网/i;
  const parts = heading.split(/\s*(?:_|\||｜|—|–)\s*/).map(x => x.trim()).filter(Boolean);
  const useful = parts.filter(x => !siteLabel.test(x) && !/^招聘(?:信息)?$/.test(x));
  const legalIndex = useful.findIndex(x => CORE_RE.test(x));
  const sourceCompany = heading.match(/[-_—–](.{2,60}?(?:有限责任公司|股份有限公司|有限公司|集团|银行|证券|保险|律师事务所))(?:北京|上海|深圳|广州|杭州|南京)?招聘信息/i);
  if (sourceCompany && legalIndex >= 0) {
    const role = useful[legalIndex].match(/(?:法务|法律合规|合规法律|合规|涉外律师|知识产权)[^_|\-—–]{0,100}/i)?.[0] || useful[legalIndex];
    return { company: sourceCompany[1], title: role };
  }
  const legalText = useful[legalIndex >= 0 ? legalIndex : 0] || heading;
  const companyMatch = legalText.match(/^(?:招聘信息\s*)?(.{2,55}?(?:有限责任公司|股份有限公司|有限公司|集团|银行|证券|保险|律师事务所))\s*(.*)$/);
  if (companyMatch && CORE_RE.test(companyMatch[2])) return { company: companyMatch[1], title: companyMatch[2] };
  if (legalIndex >= 0 && legalIndex + 1 < useful.length && !CORE_RE.test(useful[legalIndex + 1])) {
    return { title: useful[legalIndex], company: useful[legalIndex + 1] };
  }
  if (legalIndex > 0 && !CORE_RE.test(useful[legalIndex - 1])) {
    return { title: useful[legalIndex], company: useful[legalIndex - 1] };
  }
  const brandMatch = legalText.match(/^(华为|腾讯|阿里巴巴|字节跳动|网易|美团|京东|小米|百度)\s*(.*)$/);
  if (brandMatch && CORE_RE.test(brandMatch[2])) return { company: brandMatch[1], title: brandMatch[2] };
  return null;
}

function parseWebResults(html, query) {
  const rows = [];
  for (const match of html.matchAll(/<li[^>]*class=["'][^"']*res-list[^"']*["'][^>]*>([\s\S]*?)<\/li>/gi)) {
    const block = match[1];
    const headingMatch = block.match(/<h3[^>]*>[\s\S]*?<a[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
    const snippetMatch = block.match(/<(?:p|div)[^>]*class=["'][^"']*res-desc[^"']*["'][^>]*>([\s\S]*?)<\/(?:p|div)>/i);
    if (!headingMatch) continue;
    const heading = decode(headingMatch[2]);
    const snippet = decode(snippetMatch?.[1] || "");
    const text = `${heading} ${snippet}`;
    const date = postedDate(text);
    const identity = companyAndTitle(heading);
    if (!date || !identity || !CORE_RE.test(text) || !JOB_SIGNAL_RE.test(text)) continue;
    rows.push({ date_posted: date, ...identity, listTitle: identity.title, description: snippet.slice(0, 650), url: decode(headingMatch[1]), source: `360搜索公开网页索引（${query}）`, location: "", tags: "" });
  }
  return rows;
}

function parseDiscoveryList(html, source) {
  const rows = [];
  for (const block of html.match(/<li>[\s\S]*?<\/li>/gi) || []) {
    const titleMatch = block.match(/<a[^>]*class=["']lizw["'][^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/i);
    const companyMatch = block.match(/<a[^>]*class=["']ligs["'][^>]*>([\s\S]*?)<\/a>/i);
    const dateMatch = block.match(/<p>\s*(20\d{2}-\d{2}-\d{2})\s*<\/p>/i);
    const metaMatch = block.match(/<div[^>]*class=["']zw_cate["'][^>]*>([\s\S]*?)<\/div>/i);
    if (!titleMatch || !companyMatch || !dateMatch || dateMatch[1] < START_DATE) continue;
    const title = decode(titleMatch[2]);
    rows.push({ date_posted: dateMatch[1], company: decode(companyMatch[1]), title, listTitle: title, description: decode(metaMatch?.[1] || ""), url: new URL(titleMatch[1], source.origin).href, source: source.name, location: "", tags: "" });
  }
  return rows;
}

function parseDiscoveryFeed(data) {
  const rows = [];
  for (const item of data?.data || []) {
    const date = String(item.dateandtime || "").slice(0, 10);
    const roles = String(item.jobs || "").split(/[,，;；]/).map(x => x.trim()).filter(x => /法务|法律|合规|律师/i.test(x));
    if (date < START_DATE || !item.company || !roles.length) continue;
    const title = roles.slice(0, 4).join(" / ");
    rows.push({ date_posted: date, company: item.company, title, listTitle: title, description: `${item.title}；工作地点：${item.address || "待核实"}；法律相关岗位：${title}`, url: `https://www.deizao.net/m/index/gonggaoxq/nwid/${item.nid}`, source: "公开招聘线索", location: item.address || "", tags: inferTags(item.company) });
  }
  return rows;
}

function inferTags(company) {
  const tags = [];
  const central = /^(中国|中建|中铁|中车|中信|中交|国家|招商局|华润|保利)|中国移动|中国电信|中国石油|国家管网/;
  if (central.test(company)) tags.push("央企");
  if (/深圳担保|象屿|济南城建|泰达/.test(company)) tags.push("地方国企");
  if (/好未来|特变电工|卫星化学|盈峰环境|协合运维|网易|君乐宝|跨维|成谷|虹科|四达时代/.test(company)) tags.push("民营企业");
  if (/律师事务所/.test(company)) tags.push("律师事务所");
  if (/中国移动|中国电信|中国石油|中信|中建|中交|建设银行|象屿/.test(company)) tags.push("世界500强集团");
  if (/股份有限公司|中国移动|中国电信|中国石油|中车|中信|中建|中交|建设银行|广发证券|网易|象屿|好未来/.test(company)) tags.push("上市公司集团");
  return [...new Set(tags)].join("|");
}

async function fetchText(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal, headers: { "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/124 Safari/537.36", "accept-language": "zh-CN,zh;q=0.9,en;q=0.6", "accept": "text/html,application/xhtml+xml", ...(options.headers || {}) } });
    if (!response.ok) throw new Error(`${response.status} ${new URL(url).hostname}`);
    return await response.text();
  } finally { clearTimeout(timeout); }
}

function directLinksFromPage(html, baseUrl) {
  const values = [];
  for (const match of html.matchAll(/href\s*=\s*["']([^"']+)["']/gi)) values.push(match[1]);
  for (const match of html.matchAll(/https?:\\?\/\\?\/[^\s"'<>]+/gi)) values.push(match[0].replace(/\\\//g, "/"));
  const found = [];
  for (const raw of values) {
    try {
      const value = raw.replace(/&amp;/gi, "&").replace(/&#39;/gi, "'").replace(/&quot;/gi, '"');
      const candidate = new URL(value, baseUrl);
      const nested = [candidate.href];
      for (const key of ["url", "target", "redirect", "redirect_url", "link"]) {
        const target = candidate.searchParams.get(key);
        if (target) nested.push(new URL(target, baseUrl).href);
      }
      for (const href of nested) if (isDirectApplicationUrl(href) && !found.includes(href)) found.push(href);
    } catch { /* Ignore malformed links. */ }
  }
  return found;
}

function directSourceName(url) {
  const host = new URL(url).hostname.replace(/^www\./, "");
  if (/zhaopin\.com$/.test(host)) return "智联招聘职位页";
  if (/zhipin\.com$/.test(host)) return "BOSS直聘职位页";
  if (/liepin\.com$/.test(host)) return "猎聘职位页";
  if (/51job\.com$/.test(host)) return "前程无忧职位页";
  if (/nowcoder\.com$/.test(host)) return "牛客招聘职位页";
  if (/shixiseng\.com$/.test(host)) return "实习僧职位页";
  if (/randstad\.cn$/.test(host)) return "Randstad招聘职位页";
  return "企业招聘官网职位页";
}

async function resolveWebResult(job) {
  try {
    if (/^https?:\/\/(?:www\.)?so\.com\/link\?/i.test(job.url)) {
      const html = await fetchText(job.url);
      const target = html.match(/window\.location\.replace\(("(?:[^"\\]|\\.)*")\)/i)?.[1];
      if (target) job.url = JSON.parse(target);
    }
    if (!isDirectApplicationUrl(job)) {
      const html = await fetchText(job.url);
      const direct = directLinksFromPage(html, job.url)[0];
      if (direct) job.url = direct;
    }
    if (isDirectApplicationUrl(job)) job.source = directSourceName(job.url);
  } catch { /* Unresolved clues are discarded by the final direct-link filter. */ }
  job.tags = inferTags(job.company);
  return job;
}

async function searchSources() {
  const webTasks = WEB_QUERIES.map(query => async () => {
    const url = new URL("https://www.so.com/s");
    url.searchParams.set("q", query);
    url.searchParams.set("ie", "utf-8");
    return parseWebResults(await fetchText(url.href), query);
  });
  const discoveryTasks = DISCOVERY_SOURCES.flatMap(source => DISCOVERY_KEYWORDS.map(keyword => async () => {
    const body = new URLSearchParams({ keywords: keyword, sel_cate: "0", sel_area: "0" });
    const html = await fetchText(`${source.origin}${source.searchPath}`, { method: "POST", body, headers: { "content-type": "application/x-www-form-urlencoded" } });
    return parseDiscoveryList(html, source);
  }));
  const feedTasks = DISCOVERY_SEARCHES.map(([keyword, page]) => async () => {
    const body = new URLSearchParams({ keyw: keyword, page: String(page) });
    const raw = await fetchText("https://www.deizao.net/m/index/ajaxloading", { method: "POST", body, headers: { "content-type": "application/x-www-form-urlencoded" } });
    return parseDiscoveryFeed(JSON.parse(raw));
  });
  const resultLists = [];
  for (let i = 0; i < webTasks.length; i += 2) {
    const batch = await Promise.allSettled(webTasks.slice(i, i + 2).map(run => run()));
    for (const result of batch) if (result.status === "fulfilled") resultLists.push(result.value.sort((a, b) => b.date_posted.localeCompare(a.date_posted)));
  }
  for (const tasks of [discoveryTasks, feedTasks]) {
    const settled = await Promise.allSettled(tasks.map(run => run()));
    for (const result of settled) if (result.status === "fulfilled") resultLists.push(result.value.sort((a, b) => b.date_posted.localeCompare(a.date_posted)));
  }
  if (!resultLists.length) throw new Error("公开招聘源暂时均不可用");
  const found = new Map();
  for (let round = 0; found.size < 80 && round < 20; round += 1) {
    for (const list of resultLists) {
      const job = list[round];
      if (job) found.set(`${job.company}|${job.title}`.replace(/\s+/g, ""), job);
      if (found.size >= 80) break;
    }
  }
  const candidates = [...found.values()];
  const resolved = [];
  for (let i = 0; i < candidates.length; i += 5) {
    resolved.push(...await Promise.all(candidates.slice(i, i + 5).map(resolveWebResult)));
  }
  return resolved.filter(job => {
    const text = `${job.title} ${job.description}`;
    const listTitle = job.listTitle || job.title;
    const isLegalRole = CORE_RE.test(listTitle) || (GENERIC_POST_RE.test(listTitle) && CORE_RE.test(text));
    return isLegalRole && (!SENIOR_RE.test(text) || JUNIOR_RE.test(text)) && isDirectApplicationUrl(job);
  });
}

async function readJobs(env) {
  if (!env.DB) return { jobs: BASELINE, state: null };
  const [jobRows, state] = await Promise.all([
    env.DB.prepare("SELECT date_posted, company, title, description, url, tags, source, location FROM jobs WHERE date_posted >= ? ORDER BY date_posted DESC, company ASC").bind(START_DATE).all(),
    env.DB.prepare("SELECT last_started, last_finished, status, message FROM refresh_state WHERE id = 1").first(),
  ]);
  const merged = new Map(BASELINE.filter(isDirectApplicationUrl).map(job => [job.url, job]));
  for (const job of jobRows.results || []) if (isDirectApplicationUrl(job)) merged.set(job.url, job);
  const logical = new Map();
  for (const job of merged.values()) {
    const key = `${job.company}|${job.title}`.toLowerCase().replace(/[\s\-_–—（）(),，/]/g, "");
    const prior = logical.get(key);
    if (!prior || (job.description || "").length > (prior.description || "").length) logical.set(key, job);
  }
  const jobs = [...logical.values()].sort((a, b) => b.date_posted.localeCompare(a.date_posted) || a.company.localeCompare(b.company, "zh-CN"));
  return { jobs, state };
}

async function refreshJobs(env) {
  if (!env.DB) {
    const fresh = await searchSources();
    const merged = new Map(BASELINE.filter(isDirectApplicationUrl).map(job => [job.url, job]));
    for (const job of fresh) merged.set(job.url, job);
    const logical = new Map();
    for (const job of merged.values()) {
      const key = `${job.company}|${job.title}`.toLowerCase().replace(/[\s\-_–—（）(),，/]/g, "");
      const prior = logical.get(key);
      if (!prior || (job.description || "").length > (prior.description || "").length) logical.set(key, job);
    }
    const now = new Date().toISOString();
    return {
      jobs: [...logical.values()].sort((a, b) => b.date_posted.localeCompare(a.date_posted) || a.company.localeCompare(b.company, "zh-CN")),
      last_finished: now,
      message: `检索完成：新增或更新 ${fresh.length} 条公开职位`,
    };
  }
  await env.DB.prepare("INSERT OR IGNORE INTO refresh_state (id, status, message) VALUES (1, 'idle', '')").run();
  const started = new Date().toISOString();
  const lock = await env.DB.prepare("UPDATE refresh_state SET status = 'running', last_started = ?, message = '' WHERE id = 1 AND (status != 'running' OR datetime(last_started) < datetime('now', '-5 minutes'))").bind(started).run();
  if (!lock.meta?.changes) throw new Error("已有检索正在进行，请稍后再试");
  try {
    const fresh = await searchSources();
    const now = new Date().toISOString();
    const merged = new Map(BASELINE.filter(isDirectApplicationUrl).map(job => [job.url, job]));
    for (const job of fresh) merged.set(job.url, job);
    const statement = env.DB.prepare("INSERT INTO jobs (id, date_posted, company, title, description, url, tags, source, location, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) ON CONFLICT(url) DO UPDATE SET date_posted=excluded.date_posted, company=excluded.company, title=excluded.title, description=excluded.description, tags=excluded.tags, source=excluded.source, location=excluded.location, updated_at=excluded.updated_at");
    const writes = [];
    for (const job of merged.values()) {
      const id = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(job.url)).then(buffer => [...new Uint8Array(buffer)].map(x => x.toString(16).padStart(2, "0")).join(""));
      writes.push(statement.bind(id, job.date_posted, job.company, job.title, job.description || "", job.url, job.tags || "", job.source || "", job.location || "", now));
    }
    for (let i = 0; i < writes.length; i += 40) await env.DB.batch(writes.slice(i, i + 40));
    await env.DB.prepare("UPDATE refresh_state SET status = 'idle', last_finished = ?, message = ? WHERE id = 1").bind(now, `检索完成：新增或更新 ${fresh.length} 条公开职位`).run();
    return { ...(await readJobs(env)), last_finished: now, message: `检索完成：新增或更新 ${fresh.length} 条公开职位` };
  } catch (error) {
    await env.DB.prepare("UPDATE refresh_state SET status = 'error', message = ? WHERE id = 1").bind(String(error?.message || error)).run();
    throw error;
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "GET" && url.pathname === "/") return new Response(page, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store", "x-content-type-options": "nosniff" } });
    if (request.method === "GET" && url.pathname === "/resume-autofill") return new Response(pluginPage, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300", "x-content-type-options": "nosniff" } });
    if (request.method === "GET" && url.pathname === `/downloads/${PLUGIN_FILENAME}`) return new Response(pluginArchive(), { headers: { "content-type": "application/zip", "content-disposition": `attachment; filename="${PLUGIN_FILENAME}"`, "cache-control": "public, max-age=31536000, immutable", "x-content-type-options": "nosniff" } });
    if (request.method === "GET" && url.pathname === "/api/jobs") {
      try { const data = await readJobs(env); return json({ jobs: data.jobs, ...(data.state || {}) }); }
      catch (error) { return json({ error: "职位数据暂时不可用", detail: String(error?.message || error) }, 503); }
    }
    if (request.method === "POST" && url.pathname === "/api/refresh") {
      try { const data = await refreshJobs(env); return json({ jobs: data.jobs, last_finished: data.last_finished, message: data.message }); }
      catch (error) { const message = String(error?.message || error); return json({ error: message }, message.includes("正在进行") ? 409 : 502); }
    }
    return new Response("Not found", { status: 404 });
  },
};
