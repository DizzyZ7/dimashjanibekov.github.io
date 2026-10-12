import { readFile, access } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "projects.js",
  "IMG_5457.png",
  "assets/dimash-janibekov.webp",
  "favicon.svg",
  "robots.txt",
  "sitemap.xml",
  "cases/vinflow.html",
  "cases/stormrelay.html",
  "cases/catoku.html",
  "cases/case.css",
  "cases/case.js"
];

await Promise.all(requiredFiles.map(file => access(file)));

const [html, css, script, projects, robots, sitemap] = await Promise.all([
  readFile("index.html", "utf8"),
  readFile("styles.css", "utf8"),
  readFile("script.js", "utf8"),
  readFile("projects.js", "utf8"),
  readFile("robots.txt", "utf8"),
  readFile("sitemap.xml", "utf8")
]);

const assertions = [
  [html.includes('lang="ru"'), "default document language"],
  [html.includes("data-ru=") && html.includes("data-en="), "bilingual content"],
  [html.includes("Senior Backend / Integration &amp; Automation Engineer"), "senior backend positioning"],
  [html.includes("3+ года коммерческой"), "commercial experience claim"],
  [html.includes("Метрика относится к выделенным типовым support-"), "87% metric scope disclaimer"],
  [html.includes("команды из 6 человек"), "MedTech coordination evidence"],
  [html.includes("пяти ресторанных сетей"), "five-chain integration evidence"],
  [html.includes("DizzyZ7"), "GitHub profile link"],
  [html.includes('rel="canonical"'), "canonical metadata"],
  [html.includes('id="focus"'), "engineering focus section"],
  [html.includes("Рассматриваю работу и инженерные проекты"), "role and project availability"],
  [!/(?:самозанят|самозанятост|self-employed|ГПХ|ТК\s*РФ|ИП\s)/i.test(html), "no employment arrangement copy"],
  [html.includes('application/ld+json'), "structured data"],
  [css.includes("@media (max-width: 760px)"), "mobile breakpoint"],
  [css.includes("prefers-reduced-motion"), "reduced motion support"],
  [css.includes("@media print"), "print stylesheet"],
  [script.includes("escapeHtml"), "safe project rendering"],
  [script.includes("projectUrl"), "private/public project link handling"],
  [projects.includes('name: "JANQOR"'), "JANQOR active product evidence"],
  [projects.includes('url: null'), "private JANQOR link safety"],
  [projects.includes('repo: "ChainScribe-API"'), "ChainScribe evidence"],
  [projects.includes('repo: "StormRelay"'), "StormRelay evidence"],
  [projects.includes('repo: "vinflow"'), "VINFLOW evidence"],
  [projects.includes('repo: "cat-sudoku"'), "Catoku evidence"],
  [projects.includes('repo: "ISLUMI"'), "ISLUMI evidence"],
  [projects.includes('repo: "Grass"'), "TOUCH GRASS evidence"],
  [projects.includes('repo: "SignalBox"'), "SignalBox evidence"],
  [projects.includes('repo: "Intelligent-Support-Orchestrator-with-RAG-Async-Processing"'), "RAG backend evidence"],
  [html.includes('cases/vinflow.html') && html.includes('cases/stormrelay.html') && html.includes('cases/catoku.html'), "homepage case links"],
  [projects.includes('caseStudy: "cases/vinflow.html"') && projects.includes('caseStudy: "cases/stormrelay.html"') && projects.includes('caseStudy: "cases/catoku.html"'), "project card case links"],
  [script.includes("caseStudyLink"), "dynamic case link renderer"],
  [sitemap.includes("cases/vinflow.html") && sitemap.includes("cases/stormrelay.html") && sitemap.includes("cases/catoku.html"), "sitemap case URLs"],
  [robots.includes("sitemap.xml"), "robots sitemap reference"],
  [sitemap.includes("dimashjanibekov.github.io"), "sitemap canonical URL"]
];

for (const slug of ["vinflow", "stormrelay", "catoku"]) {
  const htmlCase = await readFile(`cases/${slug}.html`, "utf8");
  const checks = [
    [htmlCase.includes('<html lang="ru">'), "default Russian language"],
    [htmlCase.includes("data-ru=") && htmlCase.includes("data-en="), "bilingual case copy"],
    [htmlCase.includes('rel="canonical"'), "canonical metadata"],
    [htmlCase.includes('id="architecture"') && htmlCase.includes('id="evidence"'), "architecture and evidence"],
    [htmlCase.includes("CURRENT LIMITATIONS"), "explicit limitations"],
    [htmlCase.includes('href="../index.html#contact"'), "contact navigation"],
    [/(?:Иллюстративн|Концепт|Схематичн)/.test(htmlCase), "synthetic UI disclaimer"],
    [!/(?:самозанят|самозанятост|self-employed|ГПХ|ТК\\s*РФ|ИП\\s)/i.test(htmlCase), "no employment arrangement copy"]
  ];
  for (const [ok, label] of checks) assertions.push([ok, `${slug}: ${label}`]);
}
const failed = assertions.filter(([ok]) => !ok);
if (failed.length) {
  for (const [, label] of failed) console.error(`FAIL: ${label}`);
  process.exit(1);
}

for (const [, label] of assertions) console.log(`OK: ${label}`);
