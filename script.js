(() => {
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const projects = window.PORTFOLIO_PROJECTS || [];
  const github = 'https://github.com/DizzyZ7/';
  let lang = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'ru';

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }

  function projectCopy(project) { return project[lang] || project.ru || project.en || {}; }

  function renderProjects() {
    const featured = $('#featured');
    const selected = $('#selected');
    if (!featured || !selected) return;
    const featureList = projects.filter(p => p.featured).slice(0, 5);
    const selectedList = projects.filter(p => !p.featured).slice(0, 10);

    featured.innerHTML = featureList.map((p, index) => {
      const c = projectCopy(p);
      const labels = lang === 'en'
        ? ['Challenge', 'Architecture', 'Engineering']
        : ['Задача', 'Архитектура', 'Инженерия'];
      return `<article class="case">
        <div class="caseSide">
          <div><span class="caseIndex">0${index + 1} / ${esc(p.category)}</span><h3>${esc(p.name)}</h3><small>${esc(p.status)}</small></div>
          <div class="tags">${(p.stack || []).map(x => `<span>${esc(x)}</span>`).join('')}</div>
          <a class="repo" href="${github}${encodeURIComponent(p.repo)}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
        <div class="caseBody"><p class="caseSummary">${esc(c.summary)}</p>
          <div class="caseEvidence">
            <div><b>${labels[0]}</b><p>${esc(c.problem)}</p></div>
            <div><b>${labels[1]}</b><p>${esc(c.architecture)}</p></div>
            <div><b>${labels[2]}</b><p>${esc(c.engineering)}</p></div>
          </div>
        </div>
      </article>`;
    }).join('');

    selected.innerHTML = selectedList.map(p => {
      const c = projectCopy(p);
      return `<article class="work"><small>${esc(p.category)}</small><div><h3>${esc(p.name)}</h3><p>${esc(c.summary)}</p></div><a href="${github}${encodeURIComponent(p.repo)}" target="_blank" rel="noopener noreferrer">repo ↗</a></article>`;
    }).join('');
  }

  function applyLanguage() {
    document.documentElement.lang = lang;
    $$('[data-ru][data-en]').forEach(el => {
      const value = el.dataset[lang];
      if (value.includes('<i>')) el.innerHTML = value;
      else el.textContent = value;
    });
    const button = $('#lang');
    if (button) button.textContent = lang === 'ru' ? 'EN' : 'RU';
    document.title = lang === 'ru'
      ? 'Димаш Джанибеков — Backend / Systems Engineer'
      : 'Dimash Janibekov — Backend / Systems Engineer';
    const description = lang === 'ru'
      ? 'Backend, distributed systems, automation, security-aware architecture и AI engineering. 3+ года коммерческой разработки; независимые системы с 2019 года.'
      : 'Backend, distributed systems, automation, security-aware architecture and AI engineering. 3+ years of commercial development; independent systems since 2019.';
    $('meta[name="description"]')?.setAttribute('content', description);
    renderProjects();
  }

  $('#lang')?.addEventListener('click', () => {
    lang = lang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('portfolio-language', lang);
    applyLanguage();
  });
  $('#print')?.addEventListener('click', () => window.print());
  applyLanguage();
})();