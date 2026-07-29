const english = {
  'skip': 'Skip to content',
  'nav.projects': 'projects',
  'nav.experience': 'experience',
  'nav.services': 'services',
  'nav.process': 'process',
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

  'paths.employer.label': 'for employers',
  'paths.employer.title': 'Backend engineer with end-to-end context',
  'paths.employer.text': 'Backend and automation are the core. System analysis helps turn ambiguous requirements into implementable contracts, while ML/LLM experience lets me build AI features as normal production systems rather than isolated demos.',
  'paths.employer.link': 'view experience →',
  'paths.business.label': 'for businesses',
  'paths.business.title': 'End-to-end delivery',
  'paths.business.text': 'Backend services, CRM/API integrations, automation and AI/RAG — from process analysis and architecture to launch, monitoring and support.',
  'paths.business.link': 'view services →',

  'stats.years': 'years of commercial experience',
  'stats.chains': 'restaurant chains supported in production',
  'stats.repos': 'public repositories and systems',
  'stats.award': 'place in an engineering case championship',

  'expertise.kicker': 'engineering profile',
  'expertise.title': 'One engineering core, four areas of depth',
  'expertise.desc': 'The main profile is backend and automation. System design and analysis help me make requirements implementable; ML/LLM is a deeper specialization built on the same production engineering foundation.',
  'expertise.side': 'technology map ↓',
  'expertise.1.title': 'Backend Engineering',
  'expertise.1.text': 'Python/Go services, REST APIs, business logic, PostgreSQL, Redis, background work, concurrency, idempotency and existing codebases.',
  'expertise.2.title': 'Automation & Integrations',
  'expertise.2.text': 'Integration layers between internal systems, CRM/helpdesk, 1C and external APIs: webhooks, retries, rate limits, deduplication, routing and reliable event delivery.',
  'expertise.3.title': 'System Design & Analysis',
  'expertise.3.text': 'AS-IS/TO-BE, API contracts, sequence flows, data models, statuses, business rules, failure scenarios and non-functional requirements before implementation starts.',
  'expertise.4.title': 'ML / LLM Engineering',
  'expertise.4.text': 'Inference serving, RAG, embeddings and vector search, model adaptation, structured output, evaluation and integration of models into production backends.',

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
  'ownership.label': 'my scope',
  'ownership.stormrelay': 'architecture · backend · infrastructure · security',
  'ownership.signalbox': 'architecture · backend · delivery reliability',
  'ownership.verdictmesh': 'architecture · backend · risk engine',
  'ownership.aimemo': 'product architecture · full-stack implementation',
  'ownership.voice': 'architecture · backend · edge integration',
  'ownership.telco': 'architecture · backend · telemetry',
  'ownership.homeledger': 'full-stack implementation · self-hosted deployment',
  'ownership.ryadom': 'architecture · backend · moderation flows',

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
  'experience.title': 'Development, automation and production operations',
  'experience.desc': 'Commercial work is separated from the longer independent engineering practice: the focus is on systems I designed, implemented, integrated and operated under real constraints.',
  'job.independent.period': '2019 — present',
  'job.independent.company': 'Independent development',
  'job.independent.role': 'Backend / Automation / ML Engineer',
  'job.independent.text': 'Since 2019 I have been developing independent engineering projects: backend services, integration and event-driven systems, automation tools and ML/LLM products. I take a task from requirements and system design through API/data modelling, implementation, testing, deployment and operation. Commercial project work is only one part of this period; I do not present the whole span as commercial employment.',
  'job.independent.1': 'Designed backend and event-driven systems with PostgreSQL, queues, deduplication, idempotency, audit trails, RBAC/OIDC and distributed tracing.',
  'job.independent.2': 'Developed ML/LLM systems with RAG, vector search, inference serving, model adaptation and AI backends where the model is part of the system architecture rather than a notebook prototype.',
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
  'job.techforward.period': 'December 2022 — August 2023',
  'job.techforward.role': 'Contract Python Backend Developer',
  'job.techforward.text': 'Backend for a cross-platform broadcast analytics application: data collection, processing and aggregation, APIs and analytical metrics.',
  'job.techforward.1': 'Designed backend interaction with the desktop client and APIs for analytical reports.',
  'job.techforward.2': 'Fixed defects, optimized data processing and maintained working release builds.',

  'proof.kicker': 'evidence',
  'proof.title': 'Concrete facts behind the profile',
  'proof.desc': 'A few verifiable markers of production scope, engineering work and education.',
  'proof.production.value': '5 chains',
  'proof.production.title': 'Production integrations',
  'proof.production.text': 'Integration and automation work for TOKYO-CITY, BAHROMA, VILLA VERDE, CRISTAL and City Confectioneries No. 1.',
  'proof.award.value': '1st place',
  'proof.award.title': 'Engineering case championship',
  'proof.award.text': 'Peter the Great Engineering Case Championship: an industrial offline speech recognition and synthesis concept.',
  'proof.education.value': '2027',
  'proof.education.title': 'Information Systems and Technologies',
  'proof.education.text': 'Peter the Great St. Petersburg Polytechnic University, expected bachelor graduation.',

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
  'approach.3': '<strong>Requirements that can be implemented:</strong> contracts, data models, failure scenarios and explicit acceptance criteria.',
  'approach.4': '<strong>Existing-code capability:</strong> stabilisation and development without an unnecessary rewrite.',
  'approach.5': '<strong>AI as engineering, not a demo:</strong> retrieval, inference and model outputs integrated into normal backend reliability patterns.',
  'approach.6': '<strong>Direct communication:</strong> engineering decisions and ownership are not lost between roles.',

  'stack.kicker': 'technologies',
  'stack.title': 'Stack by engineering area',
  'stack.desc': 'The stack is intentionally grouped around the work I want to do: backend, automation/integrations, system design and ML/LLM. Technologies outside that core stay in the specific projects where they are relevant.',
  'stack.backend': 'Services, APIs and business logic',
  'stack.data': 'Storage, queues and background processing',
  'stack.integrations': 'Automation and connections between systems',
  'stack.system': 'Requirements, contracts and production design',
  'stack.ai': 'Inference, retrieval and model adaptation',

  'cta.title': 'Need a backend engineer who can own the system beyond one endpoint?',
  'cta.text': 'For a role, we can discuss backend, automation, integration or ML/LLM scope. For a project, I can take the problem from requirements and architecture to a working, observable service.',
  'cta.write': 'message @dizzy_dev',
  'cta.email': 'email',
  'cta.github': 'open GitHub',
  'footer.resume': 'PDF resume'
};

const russianOverrides = {
  'hero.eyebrow': 'backend · automation · system design · ml/llm',
  'hero.lead': 'Backend & Automation Engineer с 3+ годами коммерческого опыта и собственными инженерными проектами с 2019 года. Основной стек — Python, FastAPI, PostgreSQL, Redis, asyncio и Go. Проектирую API, интеграционные и event-driven сервисы, автоматизирую бизнес-процессы, разбираю требования и модели данных, довожу системы до стабильной эксплуатации. Отдельное направление — ML/LLM: inference, RAG, model adaptation и production AI backend.',
  'hero.note': 'Санкт-Петербург · офис, гибрид или удаленно · штат, контракт или проектное сотрудничество · русский / English B2 / Czech B2',
  'profile.role': 'Backend & Automation Engineer',
  'profile.item1': '3+ года коммерческой разработки; собственные проекты — с 2019',
  'profile.item2': 'Python / FastAPI / asyncio / PostgreSQL / Redis + Go',
  'profile.item3': 'API, интеграции, очереди, event-driven и автоматизация',
  'profile.item4': 'System design, production engineering и ML/LLM systems',
  'profile.status': 'открыт к сильной инженерной команде и технически содержательным проектам',
  'paths.employer.title': 'Backend-инженер с полным контекстом системы',
  'paths.employer.text': 'Backend и автоматизация — основной профиль. Системный анализ помогает превращать неоднозначные требования в реализуемые контракты, а ML/LLM-опыт — строить AI-функции как обычные production-системы, а не отдельные демо.',
  'paths.business.text': 'Backend-сервисы, CRM/API-интеграции, автоматизация и AI/RAG — от разбора процесса и архитектуры до запуска, мониторинга и поддержки.',
  'expertise.title': 'Одно инженерное ядро, четыре направления глубины',
  'expertise.desc': 'Основной профиль — backend и автоматизация. System design и анализ помогают делать требования реализуемыми; ML/LLM — отдельная глубокая специализация на той же production-инженерной базе.',
  'experience.title': 'Разработка, автоматизация и эксплуатация',
  'experience.desc': 'Коммерческий опыт отделен от более длинной независимой инженерной практики: здесь важны системы, которые я проектировал, реализовывал, интегрировал и сопровождал в реальных ограничениях.',
  'job.independent.period': '2019 — настоящее время',
  'job.independent.role': 'Backend / Automation / ML Engineer',
  'job.independent.text': 'С 2019 года развиваю собственные инженерные проекты: backend-сервисы, интеграционные и event-driven системы, инструменты автоматизации и ML/LLM-продукты. Беру задачу от требований и проектирования до API, модели данных, реализации, тестирования, deployment и эксплуатации. Коммерческая проектная разработка — только часть этого периода; весь промежуток не выдаю за коммерческий стаж.',
  'job.independent.1': 'Проектировал backend и event-driven системы с PostgreSQL, очередями, дедупликацией, идемпотентностью, audit trail, RBAC/OIDC и distributed tracing.',
  'job.independent.2': 'Развивал ML/LLM-системы: RAG, vector search, inference serving, model adaptation и AI backend, где модель является частью архитектуры системы, а не notebook-прототипом.',
  'job.independent.3': 'Python использую как основной язык; Go — там, где компактный конкурентный сервис или event-processing компонент выигрывает от его модели выполнения.',
  'job.medclick.role': 'Backend & Integration Engineer / Tech Lead',
  'job.medclick.text': 'Развитие внутренней MedTech-платформы: backend, REST/webhook-интеграции, PostgreSQL/SQL, Telegram-сервисы и Linux-инфраструктура. Разбирал требования и существующую логику системы, согласовывал технические решения и сопровождал изменения до production.',
  'job.medclick.1': 'Координировал технические задачи и удерживал единый контекст между бизнесом, поддержкой и разработкой.',
  'job.medclick.2': 'Разбирал инциденты по логам, SQL и цепочкам интеграций; работал с validation, retries, дедупликацией и восстановлением сервисов.',
  'job.horeca.role': 'Automation & Integration Engineer',
  'job.horeca.text': 'Развивал интеграционный контур пяти ресторанных сетей: Usedesk, Mindbox, LoyaltyPlant, 1С, CRM, Telegram и внутренние сервисы. Проектировал API/webhook-взаимодействие, автоматизацию бизнес-процессов и обработку событий между системами.',
  'job.horeca.1': 'Автоматизировал маршрутизацию обращений, SLA, статусы, уведомления, отчеты и регулярные операции с данными — до 87% типовых сценариев.',
  'job.horeca.2': 'Решал production-проблемы интеграций: дубли и повторные события, частичные сбои, rate limits, неконсистентные данные и восстановление цепочек обработки.',
  'job.techforward.role': 'Python Backend Developer, контракт',
  'job.techforward.text': 'Backend кроссплатформенного приложения аналитики трансляций: сбор, обработка и агрегация данных, API и аналитические метрики.',
  'job.techforward.1': 'Проектировал взаимодействие backend с desktop-клиентом и API для аналитических отчетов.',
  'job.techforward.2': 'Исправлял ошибки, оптимизировал обработку данных и поддерживал рабочие release-сборки.',
  'proof.title': 'Конкретные факты за профилем',
  'proof.desc': 'Несколько проверяемых маркеров production-масштаба, инженерной работы и профильной базы.',
  'approach.3': '<strong>Реализуемые требования:</strong> контракты, модели данных, сценарии сбоев и явные критерии приемки.',
  'approach.5': '<strong>AI как инженерную систему, а не демо:</strong> retrieval, inference и результаты модели встроены в обычные паттерны надежного backend.',
  'stack.title': 'Стек по инженерным направлениям',
  'stack.desc': 'Стек намеренно собран вокруг задач, на которых хочу фокусироваться: backend, автоматизация и интеграции, system design и ML/LLM. Остальные технологии остаются внутри конкретных проектов, где они действительно нужны.',
  'stack.backend': 'Сервисы, API и бизнес-логика',
  'stack.data': 'Хранение, очереди и фоновые процессы',
  'stack.integrations': 'Автоматизация и связь между системами',
  'stack.system': 'Требования, контракты и production design',
  'stack.ai': 'Inference, retrieval и адаптация моделей',
  'cta.title': 'Нужен backend-инженер, который держит контекст шире одного endpoint?',
  'cta.text': 'По вакансии можно обсудить backend, automation/integration или ML/LLM-направление. В проекте могу провести задачу от требований и архитектуры до работающего наблюдаемого сервиса.'
};

const ownership = {
  'StormRelay': ['ownership.stormrelay', 'архитектура · backend · infrastructure · безопасность'],
  'SignalBox': ['ownership.signalbox', 'архитектура · backend · надежность доставки'],
  'VerdictMesh': ['ownership.verdictmesh', 'архитектура · backend · risk engine'],
  'AI Memo': ['ownership.aimemo', 'архитектура продукта · fullstack-реализация'],
  'Автономная голосовая система оповещений': ['ownership.voice', 'архитектура · backend · edge-интеграция'],
  'TelcoNet Guardian': ['ownership.telco', 'архитектура · backend · телеметрия'],
  'HomeLedger': ['ownership.homeledger', 'fullstack-реализация · self-hosted deployment'],
  'Ryadom Bot': ['ownership.ryadom', 'архитектура · backend · модерационные сценарии']
};

function setText(key, text) {
  const element = document.querySelector(`[data-i18n="${key}"]`);
  if (element) element.textContent = text;
}

function strengthenPositioning() {
  document.title = 'Димаш Джанибеков — Backend & Automation Engineer | Python, Go, ML/LLM';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Backend и automation engineering на Python/Go: API, PostgreSQL, event-driven интеграции, системный анализ и ML/LLM-сервисы. 3+ года коммерческой разработки, собственные проекты с 2019 года.');
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Димаш Джанибеков — Backend & Automation Engineer');
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Python/Go backend, автоматизация и интеграции, system design и ML/LLM engineering.');

  const schema = document.querySelector('script[type="application/ld+json"]');
  if (schema) {
    try {
      const data = JSON.parse(schema.textContent);
      data.jobTitle = 'Backend & Automation Engineer';
      schema.textContent = JSON.stringify(data, null, 2);
    } catch (_) {}
  }

  Object.entries(russianOverrides).forEach(([key, value]) => {
    const textNode = document.querySelector(`[data-i18n="${key}"]`);
    if (textNode) textNode.textContent = value;
    const htmlNode = document.querySelector(`[data-i18n-html="${key}"]`);
    if (htmlNode) htmlNode.innerHTML = value;
  });

  const heroTitle = document.querySelector('[data-i18n-html="hero.title"]');
  if (heroTitle) heroTitle.innerHTML = 'Проектирую backend и автоматизацию, которые <em>выдерживают реальные интеграции</em> и продакшен';

  const expertiseGrid = document.querySelector('.expertise-grid');
  if (expertiseGrid) {
    expertiseGrid.innerHTML = `
      <article class="expertise-card"><span class="expertise-index">01</span><h3 data-i18n="expertise.1.title">Backend Engineering</h3><p data-i18n="expertise.1.text">Сервисы на Python/Go, REST API, бизнес-логика, PostgreSQL, Redis, фоновые задачи, конкурентность, идемпотентность и работа с существующим кодом.</p><div class="expertise-tags"><span>Python</span><span>FastAPI</span><span>PostgreSQL</span></div></article>
      <article class="expertise-card"><span class="expertise-index">02</span><h3 data-i18n="expertise.2.title">Automation & Integrations</h3><p data-i18n="expertise.2.text">Интеграционные контуры между внутренними системами, CRM/helpdesk, 1С и внешними API: webhooks, retries, rate limits, дедупликация, маршрутизация и надежная доставка событий.</p><div class="expertise-tags"><span>REST/OpenAPI</span><span>Webhooks</span><span>NATS</span></div></article>
      <article class="expertise-card"><span class="expertise-index">03</span><h3 data-i18n="expertise.3.title">System Design & Analysis</h3><p data-i18n="expertise.3.text">AS-IS/TO-BE, API contracts, sequence flows, модели данных, статусы, бизнес-правила, failure scenarios и нефункциональные требования до начала реализации.</p><div class="expertise-tags"><span>BPMN</span><span>UML</span><span>ERD</span></div></article>
      <article class="expertise-card"><span class="expertise-index">04</span><h3 data-i18n="expertise.4.title">ML / LLM Engineering</h3><p data-i18n="expertise.4.text">Inference serving, RAG, embeddings/vector search, model adaptation, structured output, evaluation и интеграция моделей в production backend.</p><div class="expertise-tags"><span>vLLM</span><span>Qdrant / pgvector</span><span>PyTorch</span></div></article>`;
  }

  const independentJob = document.querySelector('[data-i18n="job.independent.period"]')?.closest('.job');
  if (independentJob) {
    const list = independentJob.querySelector('.job-list');
    if (list && !list.querySelector('[data-i18n="job.independent.3"]')) {
      const li = document.createElement('li');
      li.dataset.i18n = 'job.independent.3';
      li.textContent = russianOverrides['job.independent.3'];
      list.appendChild(li);
    }
    const tags = independentJob.querySelector('.job-tags');
    if (tags) tags.innerHTML = '<span class="tech">Python</span><span class="tech">Go</span><span class="tech">FastAPI</span><span class="tech">PostgreSQL</span><span class="tech">Redis</span><span class="tech">LLM</span>';
  }

  const medclickJob = document.querySelector('[data-i18n="job.medclick.period"]')?.closest('.job');
  if (medclickJob) {
    const tags = medclickJob.querySelector('.job-tags');
    if (tags) tags.innerHTML = '<span class="tech">Python</span><span class="tech">PostgreSQL</span><span class="tech">REST API</span><span class="tech">Webhooks</span><span class="tech">Linux</span>';
  }

  const horecaJob = document.querySelector('[data-i18n="job.horeca.period"]')?.closest('.job');
  if (horecaJob) {
    const tags = horecaJob.querySelector('.job-tags');
    if (tags) tags.innerHTML = '<span class="tech">Python</span><span class="tech">SQL</span><span class="tech">REST API</span><span class="tech">Webhooks</span><span class="tech">BPMN</span>';
  }

  const techforwardJob = document.querySelector('[data-i18n="job.techforward.period"]')?.closest('.job');
  if (techforwardJob) {
    const tags = techforwardJob.querySelector('.job-tags');
    if (tags) tags.innerHTML = '<span class="tech">Python</span><span class="tech">API</span><span class="tech">Data processing</span><span class="tech">CI/CD</span>';
  }

  const stackGroups = document.querySelector('.stack-groups');
  if (stackGroups) {
    stackGroups.innerHTML = `
      <article class="stack-group stack-primary"><div class="stack-head"><h3>Backend</h3><span>основной</span></div><p data-i18n="stack.backend">Сервисы, API и бизнес-логика</p><div class="stack-pills"><span class="tag">Python</span><span class="tag">FastAPI</span><span class="tag">asyncio</span><span class="tag">Pydantic</span><span class="tag">Go</span></div></article>
      <article class="stack-group"><div class="stack-head"><h3>Data & async</h3></div><p data-i18n="stack.data">Хранение, очереди и фоновые процессы</p><div class="stack-pills"><span class="tag">PostgreSQL</span><span class="tag">Redis</span><span class="tag">SQLAlchemy</span><span class="tag">Alembic</span><span class="tag">Celery</span><span class="tag">NATS</span></div></article>
      <article class="stack-group"><div class="stack-head"><h3>Automation & integrations</h3></div><p data-i18n="stack.integrations">Автоматизация и связь между системами</p><div class="stack-pills"><span class="tag">REST API</span><span class="tag">OpenAPI</span><span class="tag">Webhooks</span><span class="tag">CRM / Helpdesk</span><span class="tag">1С</span><span class="tag">Telegram API</span></div></article>
      <article class="stack-group"><div class="stack-head"><h3>System design & production</h3></div><p data-i18n="stack.system">Требования, контракты и production design</p><div class="stack-pills"><span class="tag">BPMN</span><span class="tag">UML</span><span class="tag">ERD</span><span class="tag">Docker</span><span class="tag">Linux</span><span class="tag">OpenTelemetry</span><span class="tag">Grafana</span></div></article>
      <article class="stack-group"><div class="stack-head"><h3>ML / LLM</h3></div><p data-i18n="stack.ai">Inference, retrieval и адаптация моделей</p><div class="stack-pills"><span class="tag">PyTorch</span><span class="tag">Hugging Face</span><span class="tag">vLLM</span><span class="tag">RAG</span><span class="tag">Qdrant</span><span class="tag">pgvector</span><span class="tag">LoRA / QLoRA</span><span class="tag">OpenCV</span></div></article>`;
  }
}

function enhancePortfolio() {
  const stats = document.querySelector('.stats-row');
  if (stats) {
    stats.innerHTML = `
      <div class="stat"><div class="stat-num">3+</div><div class="stat-label" data-i18n="stats.years">года коммерческого опыта</div></div>
      <div class="stat"><div class="stat-num">5</div><div class="stat-label" data-i18n="stats.chains">ресторанных сетей в production</div></div>
      <div class="stat"><div class="stat-num">60+</div><div class="stat-label" data-i18n="stats.repos">публичных репозиториев и систем</div></div>
      <div class="stat"><div class="stat-num">1 место</div><div class="stat-label" data-i18n="stats.award">в инженерном кейс-чемпионате</div></div>`;
  }

  document.querySelectorAll('.project-card').forEach((card) => {
    const title = card.querySelector('.project-title')?.textContent.trim();
    const config = ownership[title];
    const subtitle = card.querySelector('.project-sub');
    if (!config || !subtitle || card.querySelector('.project-ownership')) return;

    const row = document.createElement('div');
    row.className = 'project-ownership';
    row.innerHTML = `<span class="ownership-label" data-i18n="ownership.label">моя зона</span><span data-i18n="${config[0]}">${config[1]}</span>`;
    subtitle.insertAdjacentElement('afterend', row);
  });

  const experience = document.querySelector('#experience');
  if (experience && !document.querySelector('#proof')) {
    experience.insertAdjacentHTML('afterend', `
      <section class="section proof-section" id="proof">
        <div class="container">
          <div class="section-head reveal">
            <div>
              <span class="section-kicker" data-i18n="proof.kicker">подтверждения</span>
              <h2 class="section-title" data-i18n="proof.title">Конкретные факты за профилем</h2>
              <p class="section-desc" data-i18n="proof.desc">Несколько проверяемых маркеров production-масштаба, инженерной работы и профильной базы.</p>
            </div>
          </div>
          <div class="proof-grid reveal">
            <article class="proof-card">
              <div class="proof-value" data-i18n="proof.production.value">5 сетей</div>
              <h3 data-i18n="proof.production.title">Интеграции в production</h3>
              <p data-i18n="proof.production.text">Работа с процессами ТОКИО-CITY, BAHROMA, VILLA VERDE, CRISTAL и «Городских кондитерских №1».</p>
            </article>
            <article class="proof-card">
              <div class="proof-value" data-i18n="proof.award.value">1 место</div>
              <h3 data-i18n="proof.award.title">Инженерный кейс-чемпионат</h3>
              <p data-i18n="proof.award.text">Peter the Great Engineering Case Championship: концепция промышленной offline-системы распознавания и синтеза речи.</p>
            </article>
            <article class="proof-card">
              <div class="proof-value" data-i18n="proof.education.value">2027</div>
              <h3 data-i18n="proof.education.title">Информационные системы и технологии</h3>
              <p data-i18n="proof.education.text">Санкт-Петербургский политехнический университет Петра Великого, ожидаемое окончание бакалавриата.</p>
            </article>
          </div>
        </div>
      </section>`);
  }

  const ctaActions = document.querySelector('.cta-actions');
  if (ctaActions && !ctaActions.querySelector('[href^="mailto:"]')) {
    const email = document.createElement('a');
    email.className = 'btn btn-secondary';
    email.href = 'mailto:dizzyod.z7@gmail.com';
    email.dataset.i18n = 'cta.email';
    email.textContent = 'email';
    ctaActions.insertBefore(email, ctaActions.lastElementChild);
  }

  const footerLinks = document.querySelector('.footer-links');
  if (footerLinks && !footerLinks.querySelector('[href^="mailto:"]')) {
    const email = document.createElement('a');
    email.href = 'mailto:dizzyod.z7@gmail.com';
    email.textContent = 'Email';
    footerLinks.insertBefore(email, footerLinks.lastElementChild);
  }
}

strengthenPositioning();
enhancePortfolio();

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
