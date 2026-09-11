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
  "sitemap.xml"
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
  [projects.includes('repo: "SignalBox"'), "SignalBox evidence"],
  [projects.includes('repo: "Intelligent-Support-Orchestrator-with-RAG-Async-Processing"'), "RAG backend evidence"],
  [robots.includes("sitemap.xml"), "robots sitemap reference"],
  [sitemap.includes("dimashjanibekov.github.io"), "sitemap canonical URL"]
];

const failed = assertions.filter(([ok]) => !ok);
if (failed.length) {
  for (const [, label] of failed) console.error(`FAIL: ${label}`);
  process.exit(1);
}

for (const [, label] of assertions) console.log(`OK: ${label}`);
