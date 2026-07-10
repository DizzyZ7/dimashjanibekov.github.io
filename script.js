const enhancePortfolio = () => {
  const description = document.querySelector('meta[name="description"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (description) {
    description.content = 'Backend и fullstack-разработка, архитектура API, интеграции, автоматизация, инфраструктура, безопасность и AI/RAG. Открыт к работе в сильной команде и проектному сотрудничеству.';
  }
  if (ogDescription) {
    ogDescription.content = 'Проектирую и запускаю backend-сервисы, интеграции, очереди, внутренние инструменты, AI/RAG-системы и production-инфраструктуру.';
  }

  const heroLead = document.querySelector('.hero-lead');
  const heroNote = document.querySelector('.hero-note');
  if (heroLead) {
    heroLead.textContent = 'Backend/fullstack-инженер с 3+ годами коммерческого опыта. Проектирую API, интеграции, очереди, внутренние сервисы, ботов и AI/RAG-системы; умею заходить в существующий код, разбирать инциденты и доводить решение до стабильной эксплуатации.';
  }
  if (heroNote) {
    heroNote.textContent = 'Удаленно · РФ и распределенные команды · штат, контракт или проектное сотрудничество · русский / English C1';
  }

  const profileList = document.querySelector('.profile-list');
  if (profileList) {
    profileList.innerHTML = `
      <li><span aria-hidden="true" class="profile-check">✓</span><span>3+ года коммерческого опыта и опыт Tech Lead</span></li>
      <li><span aria-hidden="true" class="profile-check">✓</span><span>Python ecosystem: FastAPI, Django, Flask, asyncio, Celery</span></li>
      <li><span aria-hidden="true" class="profile-check">✓</span><span>PostgreSQL, Redis, SQLAlchemy, очереди и фоновые задачи</span></li>
      <li><span aria-hidden="true" class="profile-check">✓</span><span>Интеграции, observability, безопасность и эксплуатация production</span></li>
    `;
  }

  const pathwayCards = document.querySelectorAll('.path-card');
  if (pathwayCards[0]) {
    const text = pathwayCards[0].querySelector('p');
    if (text) text.textContent = 'Backend / Integration / Automation Engineer: архитектура сервисов, API, данные, очереди, инфраструктура, code review, инциденты и развитие существующих систем.';
  }
  if (pathwayCards[1]) {
    const text = pathwayCards[1].querySelector('p');
    if (text) text.textContent = 'Проектный подряд: боты, CRM/API-интеграции, backend-сервисы, админки, парсеры и AI/RAG — от схемы процесса до запуска и поддержки.';
  }

  const stats = document.querySelectorAll('.stat');
  if (stats[1]) {
    stats[1].querySelector('.stat-num').textContent = '5';
    stats[1].querySelector('.stat-label').textContent = 'ресторанных сетей в одной экосистеме';
  }
  if (stats[2]) {
    stats[2].querySelector('.stat-num').textContent = '30+';
    stats[2].querySelector('.stat-label').textContent = 'технологий и платформ в рабочем стеке';
  }

  const projects = document.getElementById('projects');
  if (projects && !document.getElementById('expertise')) {
    projects.insertAdjacentHTML('beforebegin', `
      <section class="section expertise-section" id="expertise">
        <div class="container">
          <div class="section-head reveal">
            <div>
              <span class="section-kicker">инженерный профиль</span>
              <h2 class="section-title">Не только пишу код — проектирую весь контур системы</h2>
              <p class="section-desc">Могу закрыть отдельный backend-модуль, интеграционный слой или полный технический цикл: от модели данных и API до деплоя, наблюдаемости и безопасной эксплуатации.</p>
            </div>
            <a class="section-side expertise-link" href="#stack">полная карта технологий ↓</a>
          </div>
          <div class="expertise-grid reveal">
            <article class="expertise-card"><span class="expertise-index">01</span><h3>Backend и архитектура</h3><p>Модульные сервисы, REST API, webhooks, авторизация, бизнес-логика, идемпотентность и работа с legacy.</p><div class="expertise-tags"><span>FastAPI</span><span>Django</span><span>asyncio</span></div></article>
            <article class="expertise-card"><span class="expertise-index">02</span><h3>Данные и асинхронность</h3><p>Схемы БД, миграции, транзакции, кеширование, очереди, фоновые задачи и надежная обработка событий.</p><div class="expertise-tags"><span>PostgreSQL</span><span>Redis</span><span>Celery</span></div></article>
            <article class="expertise-card"><span class="expertise-index">03</span><h3>Интеграции и автоматизация</h3><p>CRM, helpdesk, 1С, формы, мессенджеры, программы лояльности и внешние API в едином процессе.</p><div class="expertise-tags"><span>Usedesk</span><span>Mindbox</span><span>Telegram</span></div></article>
            <article class="expertise-card"><span class="expertise-index">04</span><h3>Infrastructure и reliability</h3><p>Контейнеризация, Linux, CI/CD, structured logging, мониторинг, диагностика и восстановление сервисов.</p><div class="expertise-tags"><span>Docker</span><span>Grafana</span><span>Kibana</span></div></article>
            <article class="expertise-card"><span class="expertise-index">05</span><h3>Безопасность</h3><p>RBAC, JWT, валидация, управление секретами, rate limiting и безопасные границы интеграций.</p><div class="expertise-tags"><span>Cybersecurity</span><span>RBAC</span><span>secure API</span></div></article>
            <article class="expertise-card"><span class="expertise-index">06</span><h3>AI, RAG и Computer Vision</h3><p>LLM-интеграции, поиск по базе знаний, embeddings, vector storage, обработка текста и видеопотока.</p><div class="expertise-tags"><span>Qdrant</span><span>LangChain</span><span>OpenCV</span></div></article>
          </div>
        </div>
      </section>
    `);
  }

  const pricingSide = document.querySelector('#pricing .section-side');
  if (pricingSide) {
    pricingSide.textContent = 'Проектный формат: фиксированная стоимость этапа, MVP или почасовое развитие существующей системы.';
  }

  const stackSection = document.getElementById('stack');
  if (stackSection) {
    const title = stackSection.querySelector('.section-title');
    const desc = stackSection.querySelector('.section-desc');
    const groups = stackSection.querySelector('.stack-groups');
    if (title) title.textContent = 'Стек по слоям системы';
    if (desc) desc.textContent = 'Основной фокус — Python/backend, интеграции и production. Fullstack, infrastructure, AI и безопасность позволяют не терять контекст между слоями продукта.';
    if (groups) {
      groups.innerHTML = `
        <article class="stack-group stack-primary"><div class="stack-head"><h3>Core backend</h3><span>основной</span></div><p>Сервисы, API и бизнес-логика</p><div class="stack-pills"><span class="tag">Python</span><span class="tag">FastAPI</span><span class="tag">Django</span><span class="tag">Flask</span><span class="tag">asyncio</span><span class="tag">Pydantic</span></div></article>
        <article class="stack-group"><div class="stack-head"><h3>Data & async</h3></div><p>Хранение, кеши и фоновые процессы</p><div class="stack-pills"><span class="tag">PostgreSQL</span><span class="tag">MySQL</span><span class="tag">SQLite</span><span class="tag">Redis</span><span class="tag">SQLAlchemy</span><span class="tag">Alembic</span><span class="tag">Celery</span><span class="tag">queues</span></div></article>
        <article class="stack-group"><div class="stack-head"><h3>API & integrations</h3></div><p>Связь внешних и внутренних систем</p><div class="stack-pills"><span class="tag">REST API</span><span class="tag">webhooks</span><span class="tag">Telegram Bot API</span><span class="tag">VK API</span><span class="tag">Usedesk</span><span class="tag">Mindbox</span><span class="tag">1С</span><span class="tag">CRM</span></div></article>
        <article class="stack-group"><div class="stack-head"><h3>Infrastructure</h3></div><p>Доставка и эксплуатация</p><div class="stack-pills"><span class="tag">Docker</span><span class="tag">Linux</span><span class="tag">Nginx</span><span class="tag">Git</span><span class="tag">GitHub Actions</span><span class="tag">CI/CD</span><span class="tag">self-hosted</span></div></article>
        <article class="stack-group"><div class="stack-head"><h3>Observability & QA</h3></div><p>Контроль качества и состояния системы</p><div class="stack-pills"><span class="tag">Grafana</span><span class="tag">Kibana</span><span class="tag">structured logging</span><span class="tag">monitoring</span><span class="tag">Pytest</span><span class="tag">Playwright</span><span class="tag">E2E</span></div></article>
        <article class="stack-group"><div class="stack-head"><h3>Security</h3></div><p>Безопасность приложений и интеграций</p><div class="stack-pills"><span class="tag">JWT</span><span class="tag">RBAC</span><span class="tag">input validation</span><span class="tag">secrets</span><span class="tag">rate limiting</span><span class="tag">secure API design</span></div></article>
        <article class="stack-group"><div class="stack-head"><h3>AI / ML / CV</h3></div><p>Интеллектуальные функции продукта</p><div class="stack-pills"><span class="tag">OpenAI API</span><span class="tag">LLM</span><span class="tag">LangChain</span><span class="tag">RAG</span><span class="tag">Qdrant</span><span class="tag">embeddings</span><span class="tag">OpenCV</span></div></article>
        <article class="stack-group"><div class="stack-head"><h3>Frontend & mobile</h3></div><p>Интерфейсы для пользователей и команд</p><div class="stack-pills"><span class="tag">React</span><span class="tag">Next.js</span><span class="tag">TypeScript</span><span class="tag">JavaScript</span><span class="tag">HTML / CSS</span><span class="tag">Flutter</span></div></article>
        <article class="stack-group"><div class="stack-head"><h3>Additional languages</h3></div><p>Работа в смешанных кодовых базах</p><div class="stack-pills"><span class="tag">Node.js</span><span class="tag">PHP / Yii2</span><span class="tag">Go</span><span class="tag">Java / Kotlin</span></div></article>
      `;
    }
  }

  const ctaText = document.querySelector('.cta-content p');
  if (ctaText) {
    ctaText.textContent = 'По вакансии обсудим роль, команду и технические задачи. По проекту — разберем процесс, выберем разумный формат сотрудничества и определим первую версию решения.';
  }

  if (!document.getElementById('portfolioEnhancements')) {
    const style = document.createElement('style');
    style.id = 'portfolioEnhancements';
    style.textContent = `
      .profile-check{color:var(--teal);font-weight:700;flex:0 0 auto}
      .expertise-section{background:linear-gradient(180deg,#fff 0%,var(--bg-warm) 100%)}
      .expertise-link{color:var(--purple);font-weight:500;text-decoration:none}
      .expertise-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
      .expertise-card{position:relative;min-height:225px;padding:22px;overflow:hidden;border:1px solid var(--border-soft);border-radius:16px;background:rgba(255,255,255,.92);box-shadow:var(--shadow-sm);transition:transform .18s,border-color .18s,box-shadow .18s}
      .expertise-card:hover{transform:translateY(-2px);border-color:var(--border);box-shadow:var(--shadow-md)}
      .expertise-index{display:inline-flex;margin-bottom:28px;color:var(--purple);font-family:"EB Garamond",serif;font-size:22px;line-height:1}
      .expertise-card h3{margin-bottom:8px;font-size:14px;font-weight:600}
      .expertise-card p{margin-bottom:16px;color:var(--text-2);font-size:12px;line-height:1.58}
      .expertise-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto}
      .expertise-tags span{padding:4px 8px;border-radius:6px;background:var(--bg-soft);color:var(--text-3);font-size:9.8px}
      #stack .stack-groups{grid-template-columns:repeat(3,1fr)}
      #stack .stack-group{min-height:185px}
      #stack .stack-group.stack-primary{border-color:#cbc6ef;background:linear-gradient(145deg,#fff 0%,#f4f2ff 100%)}
      .stack-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:4px}
      .stack-head h3{margin-bottom:0}
      .stack-head>span{padding:3px 7px;border-radius:999px;background:var(--purple-bg);color:var(--purple);font-size:8.5px;font-weight:700;letter-spacing:.7px;text-transform:uppercase}
      #stack .stack-group>p{min-height:34px;margin-bottom:12px;color:var(--text-3);font-size:10.5px;line-height:1.45}
      @media(max-width:980px){.expertise-grid{grid-template-columns:repeat(2,1fr)}#stack .stack-groups{grid-template-columns:repeat(2,1fr)}}
      @media(max-width:720px){.expertise-grid{grid-template-columns:1fr}.expertise-card{min-height:0}#stack .stack-groups{grid-template-columns:1fr}#stack .stack-group{min-height:0}}
      @media print{.expertise-card{box-shadow:none;break-inside:avoid}}
    `;
    document.head.appendChild(style);
  }
};

enhancePortfolio();

const filters = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    projectCards.forEach((card) => {
      const visible = filter === 'all' || card.dataset.group === filter;
      card.classList.toggle('hidden', !visible);
    });
  });
});

const printResume = () => {
  const previousTitle = document.title;
  document.title = 'Dimash_Janibekov_Backend_Fullstack_Resume';
  window.print();
  document.title = previousTitle;
};

document.querySelectorAll('[data-print], #printResume').forEach((button) => {
  button.addEventListener('click', printResume);
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealItems.forEach((item) => observer.observe(item));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
