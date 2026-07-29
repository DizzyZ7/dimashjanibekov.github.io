const english = {
  'skip': 'Skip to content',
  'nav.profile': 'profile',
  'nav.projects': 'projects',
  'nav.experience': 'experience',
  'nav.stack': 'stack',
  'nav.resume': 'resume PDF',
  'nav.write': 'message me',

  'hero.eyebrow': 'backend · automation · system design · ml/llm',
  'hero.title': 'I design backend and automation that <em>survive real integrations</em> and production',
  'hero.lead': 'Backend & Automation Engineer with 3+ years of commercial experience and independent engineering projects since 2019. My core stack is Python, FastAPI, PostgreSQL, Redis, asyncio and Go. I design APIs, integration and event-driven services, automate business processes, work through requirements and data models, and take systems to stable production. A separate focus is ML/LLM engineering: inference, RAG, model adaptation and production AI backends.',
  'hero.telegram': 'contact on Telegram',
  'hero.cases': 'view case studies',
  'hero.note': 'Saint Petersburg · office, hybrid or remote · employment, contract or project work · Russian / English B2 / Czech B2',

  'profile.name': 'Dimash Janibekov',
  'profile.role': 'Backend & Automation Engineer',
  'profile.item1': '3+ years of commercial development; independent projects since 2019',
  'profile.item2': 'Python / FastAPI / asyncio / PostgreSQL / Redis + Go',
  'profile.item3': 'APIs, integrations, queues, event-driven systems and automation',
  'profile.item4': 'System design, production engineering and ML/LLM systems',
  'profile.status': 'open to a strong engineering team and technically meaningful projects',

  'stats.years': 'years of commercial development',
  'stats.independent': 'start of independent engineering projects',
  'stats.chains': 'restaurant chains supported in production',
  'stats.award': 'in an engineering case championship',

  'expertise.kicker': 'engineering profile',
  'expertise.title': 'One engineering core, four areas of depth',
  'expertise.desc': 'The main profile is backend and automation. System design and analysis turn ambiguous requirements into implementable solutions; ML/LLM is a deeper specialization built on the same production engineering foundation.',
  'expertise.side': 'stack and technologies ↓',
  'expertise.1.title': 'Backend Engineering',
  'expertise.1.text': 'Python/Go services, REST APIs, business logic, PostgreSQL, Redis, background work, concurrency, idempotency and existing codebases.',
  'expertise.2.title': 'Automation & Integrations',
  'expertise.2.text': 'Integration layers between internal systems, CRM/helpdesk, 1C and external APIs: webhooks, retries, rate limits, deduplication, routing and reliable event delivery.',
  'expertise.3.title': 'System Design & Analysis',
  'expertise.3.text': 'AS-IS/TO-BE, API contracts, sequence flows, data models, statuses, business rules, failure scenarios and non-functional requirements before implementation starts.',
  'expertise.4.title': 'ML / LLM Engineering',
  'expertise.4.text': 'Inference serving, RAG, embeddings/vector search, model adaptation, structured output, evaluation and model integration into production backends.',

  'projects.kicker': 'portfolio',
  'projects.title': 'Systems where architecture, reliability and outcome matter',
  'projects.desc': 'Not a technology catalogue: each case explains the problem, engineering solution, my ownership and why the system exists.',
  'projects.side': 'Public projects link to GitHub; my LLM infrastructure remains private.',
  'filter.all': 'all',
  'filter.backend': 'backend / automation',
  'filter.ml': 'ml / llm',
  'case.problem': 'problem',
  'case.solution': 'solution',
  'case.value': 'value',
  'ownership.label': 'my scope',
  'project.repo': 'repository ↗',
  'project.private': 'private infrastructure',

  'project.llm.badge': 'private ai platform',
  'project.llm.sub': 'Private environment for training, adapting and serving open-weight LLMs on dedicated GPU infrastructure',
  'ownership.llm': 'architecture · model adaptation · inference · backend · observability',
  'project.llm.problem': 'I wanted one controlled path from datasets and checkpoints to a production API without tying the application to a single SaaS provider, model or serving runtime.',
  'project.llm.solution': 'An open-weight base, my own data/checkpoint/evaluation lineage, SFT and PEFT, vLLM serving, RAG, structured output, separated inference/application layers, BF16 and quantized serving profiles.',
  'project.llm.value': 'One reproducible environment for experiments and applied AI services: evaluation, rollout, observability and rollback without rebuilding the product layer.',

  'project.stormrelay.sub': 'Event correlation and incident-response control plane',
  'ownership.stormrelay': 'architecture · backend · infrastructure · security',
  'project.stormrelay.problem': 'Events from different sources are duplicated, lose context and require manual correlation.',
  'project.stormrelay.solution': 'CloudEvents-compatible ingestion, deduplication, incident lifecycle, policies, durable runbooks, RBAC/OIDC and audit history.',
  'project.stormrelay.value': 'One observable path from webhook to response, connected through OpenTelemetry traces.',

  'project.signalbox.sub': 'Webhook/API gateway for events, requests and notifications',
  'ownership.signalbox': 'architecture · backend · delivery reliability',
  'project.signalbox.problem': 'Events arrive out of order, are duplicated or disappear when a receiver is temporarily unavailable.',
  'project.signalbox.solution': 'A gateway with persistence, deduplication, idempotency, queues and controlled retry delivery.',
  'project.signalbox.value': 'Events stay stored and are delivered predictably even during external service failures.',

  'project.verdictmesh.sub': 'Probabilistic analysis and controlled paper-trading platform',
  'ownership.verdictmesh': 'architecture · backend · risk engine',
  'project.verdictmesh.problem': 'A single forecast or language model is not sufficiently auditable for risk-sensitive decisions.',
  'project.verdictmesh.solution': 'Independent analytical roles, deterministic consensus, evidence trails, fail-closed rules and a separate risk engine.',
  'project.verdictmesh.value': 'Every decision preserves evidence, uncertainty and the explicit reason for refusal.',

  'project.aimemo.sub': 'Voice-first PWA for notes, tasks, semantic search and weekly insights',
  'ownership.aimemo': 'product architecture · backend/data · AI integration',
  'project.aimemo.problem': 'Voice thoughts and quick notes accumulate while tasks, recurring themes and useful connections stay hidden.',
  'project.aimemo.solution': 'Recording, transcription, AI analysis, embeddings, semantic search, a processing queue and OAuth.',
  'project.aimemo.value': 'The product turns unstructured notes into searchable context, themes and actions.',

  'project.voice.title': 'Autonomous voice alerting system',
  'project.voice.sub': 'Offline STT/TTS platform with an industrial alert lifecycle',
  'ownership.voice': 'architecture · backend · edge integration',
  'project.voice.problem': 'Critical commands and alerts must not depend on cloud availability.',
  'project.voice.solution': 'Separate STT, TTS and orchestrator services, MQTT, retries, idempotency, acknowledgements and escalation levels.',
  'project.voice.value': 'The system runs locally and preserves an observable lifecycle for every alert.',

  'project.telco.sub': 'Autonomous monitoring for telecom and packet-core infrastructure',
  'ownership.telco': 'architecture · backend · telemetry',
  'project.telco.problem': 'Nodes, BGP peers, interfaces and SLAs are checked in separate tools and incidents lose context.',
  'project.telco.solution': 'Async ICMP/TCP/BGP/SNMP checks, topology discovery, SLA engine, anomaly detection and metrics.',
  'project.telco.value': 'NOC teams receive one degradation context before lengthy manual diagnosis.',

  'experience.kicker': 'experience',
  'experience.title': 'Development, automation and production operations',
  'experience.desc': 'Commercial work is separated from the longer independent engineering practice: the focus is on systems I designed, implemented, integrated and operated under real constraints.',
  'job.independent.period': '2019 — present',
  'job.independent.company': 'Independent development',
  'job.independent.role': 'Backend / Automation / ML Engineer',
  'job.independent.text': 'Since 2019 I have been developing independent engineering projects: backend services, integration and event-driven systems, automation tools and ML/LLM products. I take a task from requirements and system design through API/data modelling, implementation, testing, deployment and operation. Commercial project work is only one part of this period; I do not present the whole span as commercial employment.',
  'job.independent.1': 'Designed backend and event-driven systems with PostgreSQL, queues, deduplication, idempotency, audit trails, RBAC/OIDC and distributed tracing.',
  'job.independent.2': 'Developed ML/LLM systems with RAG, vector search, inference serving, model adaptation and AI backends where the model is part of the architecture rather than a notebook prototype.',
  'job.independent.3': 'Use Python as the primary language and Go where a compact concurrent service or event-processing component benefits from it.',

  'job.medclick.period': 'October 2025 — January 2026',
  'job.medclick.role': 'Backend & Integration Engineer / Tech Lead',
  'job.medclick.text': 'Development of an internal MedTech platform: backend, REST/webhook integrations, PostgreSQL/SQL, Telegram services and Linux infrastructure. Analysed requirements and existing system behaviour, aligned technical decisions and supported changes through production.',
  'job.medclick.1': 'Coordinated technical tasks and kept one context between business, support and engineering.',
  'job.medclick.2': 'Investigated incidents through logs, SQL and integration chains; worked with validation, retries, deduplication and service recovery.',

  'job.horeca.period': 'November 2023 — October 2025',
  'job.horeca.role': 'Automation & Integration Engineer',
  'job.horeca.text': 'Developed the integration layer for five restaurant chains across Usedesk, Mindbox, LoyaltyPlant, 1C, CRM, Telegram and internal services. Designed API/webhook interaction, process automation and event handling between systems.',
  'job.horeca.1': 'Automated request routing, SLAs, statuses, notifications, reporting and recurring data operations — up to 87% of typical scenarios.',
  'job.horeca.2': 'Handled production integration problems: duplicate and repeated events, partial failures, rate limits, inconsistent data and recovery of processing chains.',

  'job.techforward.period': 'December 2022 — November 2023',
  'job.techforward.role': 'Contract Python Backend Developer',
  'job.techforward.text': 'Backend for a cross-platform broadcast analytics application: data collection, processing and aggregation, APIs and analytical metrics.',
  'job.techforward.1': 'Designed backend interaction with the desktop client and APIs for analytical reports.',
  'job.techforward.2': 'Fixed defects, optimized data processing and maintained working release builds for Windows, macOS and Linux through CI/CD.',

  'proof.kicker': 'evidence',
  'proof.title': 'Concrete facts behind the profile',
  'proof.desc': 'A few verifiable markers of production scope, engineering work and education.',
  'proof.production.title': 'Production integrations',
  'proof.production.text': 'Integration and automation work for TOKYO-CITY, BAHROMA, VILLA VERDE, CRISTAL and City Confectioneries No. 1.',
  'proof.award.title': 'Engineering case championship',
  'proof.award.text': 'Peter the Great Engineering Case Championship: an industrial offline speech recognition and synthesis concept.',
  'proof.education.title': 'Information Systems and Technologies',
  'proof.education.text': 'Institute of Computer Science and Cybersecurity at Peter the Great St. Petersburg Polytechnic University; engineering-focused study.',

  'approach.kicker': 'approach',
  'approach.title': 'What an engineering team gets',
  'approach.1': '<strong>A strong backend foundation:</strong> business logic, databases, APIs, integrations and background work.',
  'approach.2': '<strong>Production awareness:</strong> logs, metrics, external failures, retries, idempotency and recovery.',
  'approach.3': '<strong>Implementable requirements:</strong> contracts, data models, sequence flows, failure scenarios and explicit acceptance criteria.',
  'approach.4': '<strong>Existing-code capability:</strong> understand the system and risks first, then change it — no rewrite for the sake of rewrite.',
  'approach.5': '<strong>AI as engineering, not a demo:</strong> retrieval, inference and model output are integrated into normal backend reliability patterns.',
  'approach.6': '<strong>Ownership:</strong> I can keep context from a requirement and architectural decision through production logs and the next iteration.',

  'stack.kicker': 'technologies',
  'stack.title': 'Stack by engineering area',
  'stack.desc': 'Not a list of everything I have touched. These are the technologies that support the core profile: backend, automation/integrations, system design and ML/LLM.',
  'stack.primary': 'core',
  'stack.backend': 'Services, APIs and business logic',
  'stack.data': 'Storage, queues and background processing',
  'stack.integrations': 'Automation and connections between systems',
  'stack.system': 'Requirements, contracts and production operation',
  'stack.ai': 'Inference, retrieval and model adaptation',

  'cta.title': 'Need a backend engineer who keeps context beyond one endpoint?',
  'cta.text': 'I am open to backend, automation/integration and ML/LLM work. I can join an existing system or take a new problem from requirements and architecture to a working, observable service.',
  'cta.write': 'message @dizzy_dev',
  'cta.email': 'email',
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
    title: 'Димаш Джанибеков — Backend & Automation Engineer | Python, Go, ML/LLM',
    description: 'Backend и automation engineering на Python/Go: API, PostgreSQL, event-driven интеграции, системный анализ и ML/LLM-сервисы. 3+ года коммерческой разработки, собственные проекты с 2019 года.'
  },
  en: {
    title: 'Dimash Janibekov — Backend & Automation Engineer | Python, Go, ML/LLM',
    description: 'Backend and automation engineering with Python/Go: APIs, PostgreSQL, event-driven integrations, system design and ML/LLM services. 3+ years of commercial development and independent projects since 2019.'
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
      const groups = (card.dataset.group || '').split(/\s+/).filter(Boolean);
      const visible = filter === 'all' || groups.includes(filter);
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
  }, { threshold: 0.08 });
  revealItems.forEach((item) => observer.observe(item));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

applyLanguage(currentLanguage);
