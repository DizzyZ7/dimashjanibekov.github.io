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

  function renderProjects() {
    const featured = $("#featured");
    const selected = $("#selected");
    if (!featured || !selected) return;

    const labels = language === "en"
      ? ["Challenge", "Architecture", "Engineering proof"]
      : ["Задача", "Архитектура", "Инженерное доказательство"];

    featured.innerHTML = projects
      .filter(project => project.featured)
      .map((project, index) => {
        const copy = copyFor(project);
        const repoUrl = `${githubBase}${encodeURIComponent(project.repo)}`;
        return `
          <article class="project">
            <div class="project__meta">
              <div>
                <span class="project__index">0${index + 1} / ${escapeHtml(project.category)}</span>
                <h3>${escapeHtml(project.name)}</h3>
                <span class="project__status">${escapeHtml(statusFor(project))}</span>
              </div>
              <div>
                <div class="tags">${(project.stack || []).map(item => `<span>${escapeHtml(item)}</span>`).join("")}</div>
                <a class="text-link" href="${repoUrl}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
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
        const repoUrl = `${githubBase}${encodeURIComponent(project.repo)}`;
        return `
          <article class="work">
            <small>${escapeHtml(project.category)}</small>
            <div><h3>${escapeHtml(project.name)}</h3><p>${escapeHtml(copy.summary)}</p></div>
            <a href="${repoUrl}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(project.name)} on GitHub">repo ↗</a>
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
      ? "Димаш Джанибеков — Backend / Integration & Automation Engineer"
      : "Dimash Janibekov — Backend / Integration & Automation Engineer";

    const description = isRussian
      ? "Backend, интеграции и автоматизация: Python, Go, PostgreSQL, REST/OpenAPI, webhooks, надежность и AI/RAG. 3+ года коммерческой разработки."
      : "Backend, integration and automation engineering with Python, Go, PostgreSQL, REST/OpenAPI, webhooks, reliability and AI/RAG. 3+ years of commercial experience.";
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
