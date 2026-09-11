(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const projects = window.PORTFOLIO_PROJECTS || [];
  const githubBase = "https://github.com/DizzyZ7/";

  let language = "ru";
  try {
    language = localStorage.getItem("portfolio-language") === "en" ? "en" : "ru";
  } catch (_) {
    language = "ru";
  }

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function copyFor(project) {
    return project[language] || project.ru || project.en || {};
  }

  function statusFor(project) {
    if (typeof project.status === "string") return project.status;
    return project.status?.[language] || project.status?.ru || "public";
  }

  function projectUrl(project) {
    if (project.url === null || (!project.url && !project.repo)) return null;
    if (project.url) return project.url;
    return `${githubBase}${encodeURIComponent(project.repo)}`;
  }

  function projectLink(project, label = "GitHub ↗") {
    const url = projectUrl(project);
    if (!url) {
      return `<span class="project__status">${language === "ru" ? "private / NDA-safe" : "private / NDA-safe"}</span>`;
    }
    return `<a class="text-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
  }

  function renderProjects() {
    const featured = $("#featured");
    const selected = $("#selected");
    if (!featured || !selected) return;

    const labels = language === "en"
      ? ["Problem", "Architecture", "Engineering proof"]
      : ["Задача", "Архитектура", "Инженерное доказательство"];

    featured.innerHTML = projects
      .filter(project => project.featured)
      .map((project, index) => {
        const copy = copyFor(project);
        return `
          <article class="project">
            <div class="project__meta">
              <div>
                <span class="project__index">${String(index + 1).padStart(2, "0")} / ${escapeHtml(project.category)}</span>
                <h3>${escapeHtml(project.name)}</h3>
                <span class="project__status">${escapeHtml(statusFor(project))}</span>
              </div>
              <div>
                <div class="tags">${(project.stack || []).map(item => `<span>${escapeHtml(item)}</span>`).join("")}</div>
                ${projectLink(project)}
              </div>
            </div>
            <div class="project__body">
              <p class="project__summary">${escapeHtml(copy.summary)}</p>
              <div class="project__evidence">
                <div><b>${labels[0]}</b><p>${escapeHtml(copy.challenge)}</p></div>
                <div><b>${labels[1]}</b><p>${escapeHtml(copy.architecture)}</p></div>
                <div><b>${labels[2]}</b><p>${escapeHtml(copy.proof)}</p></div>
              </div>
            </div>
          </article>`;
      })
      .join("");

    selected.innerHTML = projects
      .filter(project => !project.featured)
      .map(project => {
        const copy = copyFor(project);
        const url = projectUrl(project);
        const link = url
          ? `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(project.name)} on GitHub">repo ↗</a>`
          : `<span aria-label="private project">private</span>`;
        return `
          <article class="work">
            <small>${escapeHtml(project.category)}</small>
            <div><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(copy.summary)}</p></div>
            ${link}
          </article>`;
      })
      .join("");
  }

  function applyLanguage() {
    document.documentElement.lang = language;

    $$('[data-ru][data-en]').forEach(element => {
      const value = element.dataset[language] || "";
      if (value.includes("<")) element.innerHTML = value;
      else element.textContent = value;
    });

    const languageButton = $("#lang");
    if (languageButton) {
      languageButton.textContent = language === "ru" ? "EN" : "RU";
      languageButton.setAttribute(
        "aria-label",
        language === "ru" ? "Switch to English" : "Переключить на русский"
      );
    }

    const isRussian = language === "ru";
    document.title = isRussian
      ? "Димаш Джанибеков — Senior Backend / Integration & Automation Engineer"
      : "Dimash Janibekov — Senior Backend / Integration & Automation Engineer";

    const description = isRussian
      ? "Senior Backend / Integration & Automation Engineer: Python, FastAPI, PostgreSQL, Redis, REST/OpenAPI, event-driven системы, надежность, security и AI/RAG. 3+ года коммерческой разработки."
      : "Senior Backend / Integration & Automation Engineer: Python, FastAPI, PostgreSQL, Redis, REST/OpenAPI, event-driven systems, reliability, security and AI/RAG. 3+ years of commercial experience.";
    $('meta[name="description"]')?.setAttribute("content", description);
    $('meta[property="og:description"]')?.setAttribute("content", description);
    $('meta[property="og:title"]')?.setAttribute("content", document.title);

    renderProjects();
  }

  $("#lang")?.addEventListener("click", () => {
    language = language === "ru" ? "en" : "ru";
    try {
      localStorage.setItem("portfolio-language", language);
    } catch (_) {
      // The language switch still works when storage is unavailable.
    }
    applyLanguage();
  });

  $("#print")?.addEventListener("click", () => window.print());
  applyLanguage();
})();
