const english = {
  'skip': 'Skip to content',
  'nav.projects': 'projects',
  'nav.experience': 'experience',
  'nav.services': 'services',
  'nav.process': 'process',
  'nav.resume': 'resume PDF',
  'nav.write': 'message me',
  'hero.eyebrow': 'backend · fullstack · automation · cybersecurity',
  'hero.title': 'I build systems that <em>remove repetitive work</em> and hold up in production',
  'hero.lead': 'Python Backend / Integration Engineer with 3+ years of commercial experience. I design APIs, integration layers, queues, internal services, bots and AI/RAG systems; I am comfortable entering an existing codebase, investigating incidents and taking a solution to stable operation.',
  'hero.telegram': 'contact on Telegram',
  'hero.cases': 'view case studies',
  'hero.note': 'Saint Petersburg · office, hybrid or remote · employment, contract or project work · Russian / English C1 / Czech B2',
  'profile.name': 'Dimash Janibekov',
  'profile.role': 'Python Backend / Integration Engineer',
  'profile.item1': '3+ years of commercial experience',
  'profile.item2': 'Python ecosystem: FastAPI, Django, Flask, asyncio and Celery',
  'profile.item3': 'PostgreSQL, Redis, SQLAlchemy, queues and background jobs',
  'profile.item4': 'Integrations, observability, security and production operations',
  'profile.status': 'open to strong teams and selected projects',
  'paths.employer.label': 'for employers',
  'paths.employer.title': 'Engineer for a product team',
  'paths.employer.text': 'Backend / Integration / Automation Engineer: service architecture, APIs, data, queues, infrastructure, code review, incidents and continuous system development.',
  'paths.employer.link': 'view experience →',
  'paths.business.label': 'for businesses',
  'paths.business.title': 'End-to-end delivery',
  'paths.business.text': 'Bots, CRM/API integrations, backend services, internal tools and AI/RAG — from process mapping and architecture to launch and support.',
  'paths.business.link': 'view services →',
  'stats.years': 'years of commercial experience',
  'stats.lead': 'technical leadership experience',
  'stats.repos': 'public repositories and systems',
  'expertise.kicker': 'engineering profile',
  'expertise.title': 'I do more than write code — I design the complete system boundary',
  'expertise.desc': 'I can own a backend module, an integration layer or the whole technical cycle: from data model and API to deployment, observability and secure operation.',
  'expertise.side': 'full technology map ↓',
  'expertise.1.title': 'Backend & architecture',
  'expertise.1.text': 'Modular services, REST APIs, webhooks, authentication, business logic, idempotency and legacy systems.',
  'expertise.2.title': 'Data & asynchronous work',
  'expertise.2.text': 'Database schemas, migrations, transactions, caching, queues, background tasks and reliable event processing.',
  'expertise.3.title': 'Integrations & automation',
  'expertise.3.text': 'CRM, helpdesk, 1C, forms, messengers, loyalty systems and external APIs in a single workflow.',
  'expertise.4.title': 'Infrastructure & reliability',
  'expertise.4.text': 'Containers, Linux, CI/CD, structured logging, monitoring, diagnosis and service recovery.',
  'expertise.5.title': 'Security',
  'expertise.5.text': 'RBAC, JWT/OIDC, validation, secret management, rate limiting and secure integration boundaries.',
  'expertise.6.title': 'AI, RAG & computer vision',
  'expertise.6.text': 'LLM integrations, knowledge-base retrieval, embeddings, vector stores, text and video processing.',
  'projects.kicker': 'portfolio',
  'projects.title': 'Projects framed by problem and outcome',
  'projects.desc': 'Not just a repository list: each case shows the operational problem, the engineering solution and the resulting value.',
  'projects.side': 'The repositories expose architecture, documentation and code.',
  'filter.all': 'all',
  'filter.featured': 'flagship',
  'filter.other': 'other work',
  'case.problem': 'problem',
  'case.solution': 'solution',
  'case.value': 'value',
  'project.repo': 'repository ↗',
  'project.stormrelay.sub': 'Event correlation and incident-response control plane',
  'project.stormrelay.problem': 'Alerts from different sources are duplicated, lose context and require manual correlation.',
  'project.stormrelay.solution': 'CloudEvents-compatible ingestion, deduplication, incident lifecycle, policies, durable runbooks, RBAC/OIDC and audit history.',
  'project.stormrelay.value': 'A single observable path from webhook to response, connected through OpenTelemetry traces.',
  'project.signalbox.sub': 'Webhook/API gateway for events, requests and notifications',
  'project.signalbox.problem': 'Events arrive out of order, are duplicated or disappear when a receiver is temporarily unavailable.',
  'project.signalbox.solution': 'A gateway with persistence, deduplication, idempotency, queues and controlled retry delivery.',
  'project.signalbox.value': 'Events remain stored and are delivered predictably even during external service failures.',
  'project.verdictmesh.sub': 'Probabilistic analysis and controlled paper-trading platform',
  'project.verdictmesh.problem': 'A single forecast or language model is not sufficiently auditable for risk-sensitive decisions.',
  'project.verdictmesh.solution': 'Independent analytical roles, deterministic consensus, evidence trails, fail-closed rules and a separate risk engine.',
  'project.verdictmesh.value': 'Every decision preserves evidence, uncertainty and the explicit reason for refusal.',
  'project.aimemo.sub': 'Voice-first PWA for notes, tasks, semantic search and weekly insights',
  'project.aimemo.problem': 'Voice thoughts and quick notes accumulate while tasks, patterns and useful connections stay hidden.',
  'project.aimemo.solution': 'Recording, transcription, AI analysis, embeddings, semantic search, processing queues and OAuth.',
  'project.aimemo.value': 'The product works locally and can scale into a cloud service without rebuilding the interface.',
  'project.voice.title': 'Autonomous voice alerting system',
  'project.voice.sub': 'Offline STT/TTS platform with an industrial alert lifecycle',
  'project.voice.problem': 'Critical commands and alerts must not depend on cloud availability.',
  'project.voice.solution': 'Separate STT, TTS and orchestrator services, MQTT, retries, idempotency, acknowledgements and escalation levels.',
  'project.voice.value': 'The system runs locally and preserves an observable lifecycle for every alert.',
  'project.telco.sub': 'Autonomous monitoring for telecom and packet-core infrastructure',
  'project.telco.problem': 'Nodes, BGP peers, interfaces and SLAs are checked in separate tools and incidents lose context.',
  'project.telco.solution': 'Async ICMP/TCP/BGP/SNMP checks, topology discovery, SLA engine, anomaly detection and metrics.',
  'project.telco.value': 'NOC teams receive one degradation context before lengthy manual diagnosis.',
  'project.homeledger.sub': 'Self-hosted household inventory, warranty and maintenance tracker',
  'project.homeledger.problem': 'Receipts, warranties and maintenance dates are scattered and easily forgotten.',
  'project.homeledger.solution': 'A mobile client, backend API, roles, JWT, PostgreSQL and local deployment.',
  'project.homeledger.value': 'One private catalogue without dependence on a third-party SaaS.',
  'project.ryadom.sub': 'Local mutual-aid platform with moderation and reputation',
  'project.ryadom.problem': 'Local requests for help are easily lost and require trust between strangers.',
  'project.ryadom.solution': 'Statuses, location, response flows, ratings, anti-spam, moderation and an audit trail.',
  'project.ryadom.value': 'A controlled workflow from publishing a request to completing the response.',
  'experience.kicker': 'experience',
  'experience.title': 'Commercial development and production operations',
  'experience.desc': 'I have worked with new and existing code, external platforms, incidents, SLAs and real operational constraints.',
  'job.independent.period': 'January 2026 — present',
  'job.independent.company': 'Independent development',
  'job.independent.role': 'Backend & Automation Developer',
  'job.independent.text': 'Designing and shipping production-style backend, integration and AI systems: architecture, APIs, data, Docker, CI/CD, observability, testing and documentation.',
  'job.independent.1': 'Built event-driven platforms with deduplication, durable queues, RBAC/OIDC, audit trails and OpenTelemetry.',
  'job.independent.2': 'Delivered AI/RAG, computer vision, Telegram and full-stack products with reproducible local setups.',
  'job.medclick.period': 'October 2025 — January 2026',
  'job.medclick.role': 'Technical Specialist / Tech Lead',
  'job.medclick.text': 'Supported and developed an online platform: backend, integrations, SQL logic, Telegram bots, technical documentation and Linux infrastructure.',
  'job.medclick.1': 'Coordinated developer tasks and kept context connected between business, support and engineering.',
  'job.medclick.2': 'Participated in incident diagnosis, service recovery and reliability improvements.',
  'job.horeca.period': 'November 2023 — October 2025',
  'job.horeca.role': 'Automation & Systems Integration Engineer',
  'job.horeca.text': 'Developed and supported integration infrastructure for restaurant operations: CRM/helpdesk, 1C, loyalty, Telegram, analytics and process automation.',
  'job.horeca.1': 'Designed API integrations across Usedesk, Mindbox, 1C, websites, loyalty platforms and internal services.',
  'job.horeca.2': 'Automated request routing, SLAs, statuses, notifications and recurring data processing.',
  'job.techforward.period': 'December 2022 — August 2023',
  'job.techforward.role': 'Contract Python Developer',
  'job.techforward.text': 'Backend logic for a cross-platform broadcast analytics application: statistics processing, aggregation and delivery.',
  'job.techforward.1': 'Designed APIs for analytical reports and helped integrate them with a desktop client.',
  'job.techforward.2': 'Fixed defects, optimized data processing and maintained working builds.',
  'services.kicker': 'for businesses',
  'services.title': 'What I can deliver end to end',
  'services.desc': 'Solutions for processes where requests get lost, data is copied manually and teams repeat the same actions.',
  'service.1.title': 'Telegram bots & Mini Apps',
  'service.1.text': 'Requests, bookings, notifications, user areas, moderation and service workflows.',
  'service.2.title': 'CRM & API integrations',
  'service.2.text': 'Bitrix24, amoCRM, Usedesk, Mindbox, 1C, websites, forms and external APIs.',
  'service.3.title': 'Websites & user portals',
  'service.3.text': 'Interfaces connected to data, roles, business logic and external systems.',
  'service.4.title': 'Internal admin tools',
  'service.4.text': 'Panels for requests, orders, statuses, reports, roles and permissions.',
  'service.5.title': 'Parsers & data processing',
  'service.5.text': 'Collection, cleaning, matching, export and recurring automation.',
  'service.6.title': 'Knowledge-base AI/RAG',
  'service.6.text': 'Answers for customers and employees with document retrieval and controlled sources.',
  'service.7.title': 'Backend services & MVPs',
  'service.7.text': 'Architecture, API, database, interface, deployment and further development.',
  'service.8.title': 'Reliability review',
  'service.8.text': 'Logging, monitoring, error handling, permissions and secure integrations.',
  'service.9.title': 'Existing project support',
  'service.9.text': 'Understanding unfamiliar code, fixing defects, refactoring and adding features without a pointless rewrite.',
  'process.kicker': 'workflow',
  'process.title': 'How project delivery works',
  'process.desc': 'One engineer keeps the context connected from business process to production logs.',
  'process.1.title': 'Understand the process and pain',
  'process.1.text': 'Identify what is manual, where data gets lost and what outcome defines success.',
  'process.2.title': 'Define the first version',
  'process.2.text': 'Separate essential MVP functions from improvements that can follow validation.',
  'process.3.title': 'Agree on architecture, timing and budget',
  'process.3.text': 'Make the solution structure, stages, risks and acceptance criteria explicit.',
  'process.4.title': 'Build against real scenarios',
  'process.4.text': 'Account for external API failures, duplicates, retries, permissions and invalid data.',
  'process.5.title': 'Launch and observe',
  'process.5.text': 'Configure logs and error handling, then validate the system in its working environment.',
  'process.6.title': 'Document and develop further',
  'process.6.text': 'Document key components, support operations and add new workflows.',
  'approach.kicker': 'approach',
  'approach.title': 'What a team or customer receives',
  'approach.1': '<strong>A strong backend foundation:</strong> business logic, databases, APIs, integrations and background work.',
  'approach.2': '<strong>Production awareness:</strong> logs, monitoring, external failures and recovery.',
  'approach.3': '<strong>Security by default:</strong> validation, permissions, secrets and minimal trust in input.',
  'approach.4': '<strong>Existing-code capability:</strong> stabilisation and development without an unnecessary rewrite.',
  'approach.5': '<strong>A fast prototype:</strong> validate the result before the project becomes large and expensive.',
  'approach.6': '<strong>Direct communication:</strong> engineering decisions and ownership are not lost between roles.',
  'stack.kicker': 'technologies',
  'stack.title': 'Stack by system layer',
  'stack.desc': 'The primary focus is Python/backend, integrations and production. Full-stack, infrastructure, AI and security skills preserve context across product layers.',
  'stack.backend': 'Services, APIs and business logic',
  'stack.data': 'Storage, caches and background processes',
  'stack.integrations': 'Connections between external and internal systems',
  'stack.infrastructure': 'Delivery and operation',
  'stack.quality': 'Quality and system health',
  'stack.security': 'Application and integration security',
  'stack.ai': 'Intelligent product features',
  'stack.frontend': 'Interfaces for users and teams',
  'stack.languages': 'Work in mixed codebases',
  'cta.title': 'Need an engineer for your team or a system that replaces manual routine?',
  'cta.text': 'For a role, we can discuss the team and technical scope. For a project, we will map the process, choose a sensible format and define the first deliverable.',
  'cta.write': 'message @dizzy_dev',
  'cta.github': 'open GitHub',
  'footer.resume': 'PDF resume'
};

const russianText = new Map();
const russianHtml = new Map();

document.querySelectorAll('[data-i18n]').forEach((element) => russianText.set(element, element.textContent));
document.querySelectorAll('[data-i18n-html]').forEach((element) => russianHtml.set(element, element.innerHTML));

let currentLanguage = localStorage.getItem('portfolio-language') || 'ru';

const metadata = {
  ru: {
    title: 'Димаш Джанибеков — Python Backend / Integration Engineer',
    description: 'Backend и fullstack-разработка, архитектура API, интеграции, автоматизация, инфраструктура, безопасность и AI/RAG.'
  },
  en: {
    title: 'Dimash Janibekov — Python Backend / Integration Engineer',
    description: 'Backend and full-stack development, API architecture, integrations, automation, infrastructure, security and AI/RAG.'
  }
};

function applyLanguage(language) {
  currentLanguage = language === 'en' ? 'en' : 'ru';
  document.documentElement.classList.add('is-translating');
  document.documentElement.lang = currentLanguage;
  localStorage.setItem('portfolio-language', currentLanguage);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = currentLanguage === 'en' && english[key] ? english[key] : russianText.get(element);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    element.innerHTML = currentLanguage === 'en' && english[key] ? english[key] : russianHtml.get(element);
  });

  document.querySelectorAll('[data-lang]').forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  document.title = metadata[currentLanguage].title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', metadata[currentLanguage].description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata[currentLanguage].title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata[currentLanguage].description);
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', currentLanguage === 'en' ? 'en_US' : 'ru_RU');

  requestAnimationFrame(() => document.documentElement.classList.remove('is-translating'));
}

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

const filters = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');

filters.forEach((button) => {
  button.setAttribute('aria-pressed', String(button.classList.contains('active')));
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    projectCards.forEach((card) => {
      const visible = filter === 'all' || card.dataset.group === filter;
      card.classList.toggle('hidden', !visible);
      card.setAttribute('aria-hidden', String(!visible));
    });
  });
});

const printResume = () => {
  const previousTitle = document.title;
  document.title = currentLanguage === 'en' ? 'Dimash_Janibekov_Resume' : 'Dimash_Janibekov_Rezume';
  window.print();
  document.title = previousTitle;
};

document.querySelectorAll('[data-print], #printResume').forEach((button) => button.addEventListener('click', printResume));

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

applyLanguage(currentLanguage);
