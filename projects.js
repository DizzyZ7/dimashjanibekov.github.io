window.PORTFOLIO_PROJECTS = [
  {
    name: "JANQOR",
    repo: null,
    url: null,
    category: "B2B SaaS / Operational Control Plane",
    status: {
      ru: "private · active product development",
      en: "private · active product development"
    },
    featured: true,
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy async", "Redis", "Celery"],
    ru: {
      summary: "Operational control plane поверх существующих CRM, касс, 1С, мессенджеров и других источников: выявляет потери и риски, запускает управляемые действия, сохраняет доказательства и считает подтвержденный эффект.",
      challenge: "Бизнес-потери часто размазаны между системами, а обычная BI-панель показывает факт слишком поздно и не замыкает цикл от обнаружения до подтвержденного результата.",
      architecture: "Sources/connectors → normalize → detect → incident/evidence → approve/act → transactional outbox → verify → Value Ledger / operator UI.",
      proof: "Multi-tenant boundaries, tenant/location-scoped operator credentials, transactional outbox, readiness/telemetry, pilot bootstrap, value reporting и PostgreSQL E2E. Первый вертикальный рынок — рестораны и кафе."
    },
    en: {
      summary: "An operational control plane above existing CRM, POS, ERP, messaging and operational sources: it detects loss/risk patterns, executes governed actions, preserves evidence and measures recovered value.",
      challenge: "Operational loss is usually fragmented across systems; a dashboard may reveal it too late and does not close the loop from detection to verified business effect.",
      architecture: "Sources/connectors → normalize → detect → incident/evidence → approve/act → transactional outbox → verify → Value Ledger / operator UI.",
      proof: "Multi-tenant boundaries, tenant/location-scoped operator credentials, transactional outbox, readiness/telemetry, pilot bootstrap, value reporting and PostgreSQL E2E. Restaurants and small food-service chains are the first vertical."
    }
  },
  {
    name: "ChainScribe API",
    repo: "ChainScribe-API",
    category: "Python / Security-Focused Backend",
    status: {
      ru: "public · production-style backend",
      en: "public · production-style backend"
    },
    featured: true,
    stack: ["Python", "Django Ninja", "PostgreSQL", "Redis", "JWT", "Docker"],
    ru: {
      summary: "Backend публикационной платформы с двумя схемами аутентификации, жесткими ownership-границами, аудитом и security-oriented CI.",
      challenge: "CRUD сам по себе не доказывает backend-зрелость: нужны корректная авторизация, защита от IDOR/mass assignment, безопасный lifecycle токенов, транзакции, журналирование и проверяемый release path.",
      architecture: "Django Ninja API → auth / transactional services → PostgreSQL; Redis для rate limiting; immutable audit events и structured logs для security-relevant действий.",
      proof: "Argon2, opaque tokens с SHA-256-only storage, JWT rotation/blacklist, row locks, ownership enforcement, credential redaction, PostgreSQL integration tests, Docker smoke journey, 101 tests и 94% branch-aware coverage."
    },
    en: {
      summary: "A publishing backend with dual authentication, strict ownership boundaries, immutable auditing and security-oriented CI.",
      challenge: "CRUD alone does not prove backend maturity: authorization, IDOR/mass-assignment controls, token lifecycle, transactions, auditability and a reviewable release path matter.",
      architecture: "Django Ninja API → auth / transactional services → PostgreSQL; Redis for rate limiting; immutable audit events and structured logs for security-relevant actions.",
      proof: "Argon2, opaque tokens with SHA-256-only storage, JWT rotation/blacklist, row locks, ownership enforcement, credential redaction, PostgreSQL integration tests, Docker smoke journey, 101 tests and 94% branch-aware coverage."
    }
  },
  {
    name: "StormRelay",
    repo: "StormRelay",
    category: "Distributed Systems / SRE",
    status: {
      ru: "public · milestones 0–4 implemented",
      en: "public · milestones 0–4 implemented"
    },
    featured: true,
    stack: ["Go", "PostgreSQL", "NATS JetStream", "OIDC", "OpenTelemetry"],
    ru: {
      summary: "Self-hosted control plane для event correlation, incident response и durable automation с четкими failure semantics.",
      challenge: "События из разных источников дублируются, теряют контекст и требуют ручной корреляции, acknowledgement и восстановления после частичных сбоев.",
      architecture: "Authenticated webhooks → CloudEvents-compatible normalization → JetStream → transactional consumers → incidents → policies → durable runbooks/plugins → append-only audit.",
      proof: "At-least-once без ложного exactly-once claim, PostgreSQL uniqueness/dedup, DLQ/retries, fail-closed RBAC, guarded OIDC, OpenTelemetry через async boundaries, failure drills и reproducible benchmarks."
    },
    en: {
      summary: "A self-hosted control plane for event correlation, incident response and durable automation with explicit failure semantics.",
      challenge: "Events from multiple sources are duplicated, lose context and require manual correlation, acknowledgement and recovery after partial failures.",
      architecture: "Authenticated webhooks → CloudEvents-compatible normalization → JetStream → transactional consumers → incidents → policies → durable runbooks/plugins → append-only audit.",
      proof: "At-least-once without a false exactly-once claim, PostgreSQL uniqueness/deduplication, DLQ/retries, fail-closed RBAC, guarded OIDC, OpenTelemetry across async boundaries, failure drills and reproducible benchmarks."
    }
  },
  {
    name: "SignalBox",
    repo: "SignalBox",
    category: "Go / Integration Platform",
    status: {
      ru: "public · production-oriented gateway",
      en: "public · production-oriented gateway"
    },
    featured: true,
    stack: ["Go", "PostgreSQL", "HMAC", "OpenAPI", "Prometheus"],
    ru: {
      summary: "Компактный self-hosted webhook gateway с durable delivery, replay, audit trail и встроенной admin UI.",
      challenge: "Команды постоянно повторяют glue-code: проверка webhook, хранение, дедупликация, retries, уведомления, replay и диагностика доставки.",
      architecture: "Webhook → rate limit → token-hash lookup → deduplication → PostgreSQL event log → durable delivery queue → Telegram / HMAC-signed HTTP forwarding.",
      proof: "SHA-256 token storage/rotation, HMAC forwarding, SSRF guard, retry/backoff queue, cursor pagination, Prometheus metrics, backup/restore, CodeQL, Trivy и GHCR publishing."
    },
    en: {
      summary: "A compact self-hosted webhook gateway with durable delivery, replay, auditability and an embedded admin UI.",
      challenge: "Teams repeatedly rebuild glue code for webhook verification, storage, deduplication, retries, notifications, replay and delivery diagnostics.",
      architecture: "Webhook → rate limit → token-hash lookup → deduplication → PostgreSQL event log → durable delivery queue → Telegram / HMAC-signed HTTP forwarding.",
      proof: "SHA-256 token storage/rotation, HMAC forwarding, SSRF guard, retry/backoff queue, cursor pagination, Prometheus metrics, backup/restore, CodeQL, Trivy and GHCR publishing."
    }
  },
  {
    name: "Intelligent Support Orchestrator",
    repo: "Intelligent-Support-Orchestrator-with-RAG-Async-Processing",
    category: "AI Backend / RAG",
    status: { ru: "public · reproducible local stack", en: "public · reproducible local stack" },
    featured: false,
    ru: { summary: "RAG backend: FastAPI принимает запросы, Celery/Redis выносят тяжелую обработку из request lifecycle, Qdrant хранит векторный контекст внутренней базы знаний." },
    en: { summary: "A RAG backend where FastAPI accepts requests, Celery/Redis move heavy work outside the request lifecycle and Qdrant stores vector context from an internal knowledge base." }
  },
  {
    name: "WTF / Work Task Flow",
    repo: "WTF_Tast_Manager",
    category: "Fullstack / Domain Architecture",
    featured: false,
    ru: { summary: "Self-hosted task/project platform: доменная модель вынесена в независимый core, отдельно подключаются PostgreSQL, REST/OpenAPI, realtime collaboration и UI." },
    en: { summary: "A self-hosted task/project platform whose domain model lives in an independent core and is adapted separately to PostgreSQL, REST/OpenAPI, realtime collaboration and UI." }
  },
  {
    name: "QA Microservices E2E",
    repo: "qa-microservices-e2e-playwright-py",
    category: "Quality / Reliability",
    featured: false,
    ru: { summary: "E2E framework, который проверяет полный API → UI → PostgreSQL path, а не только HTTP-ответ: fixtures, cleanup, DB assertions, traces/screenshots, Allure и CI." },
    en: { summary: "An E2E framework validating the full API → UI → PostgreSQL path rather than only HTTP responses: fixtures, cleanup, DB assertions, traces/screenshots, Allure and CI." }
  },
  {
    name: "HomeLedger",
    repo: "home-ledger",
    category: "Mobile + Backend Product",
    featured: false,
    ru: { summary: "Self-hosted приложение учета вещей, гарантий и обслуживания: Flutter-клиент, FastAPI backend, PostgreSQL, JWT, миграции, тесты и Docker Compose." },
    en: { summary: "A self-hosted household inventory, warranty and maintenance product with a Flutter client, FastAPI backend, PostgreSQL, JWT, migrations, tests and Docker Compose." }
  },
  {
    name: "AI Ticket Agent",
    repo: "ai-ticket-agent",
    category: "AI / Support Automation",
    featured: false,
    ru: { summary: "FastAPI-сервис AI-assisted обработки обращений: category, priority и draft reply, PostgreSQL/Redis persistence и явная защита от duplicate requests." },
    en: { summary: "A FastAPI service for AI-assisted ticket processing: category, priority and draft reply, PostgreSQL/Redis persistence and explicit duplicate-request handling." }
  },
  {
    name: "TelcoNet Guardian",
    repo: "TelcoNet-Guardian",
    category: "Network Automation / Monitoring",
    featured: false,
    ru: { summary: "Async monitoring/automation для ICMP/TCP, BGP, SNMP и SLA с Prometheus/Grafana и операционными alert-сценариями." },
    en: { summary: "Async monitoring and automation for ICMP/TCP, BGP, SNMP and SLAs with Prometheus/Grafana and operational alert flows." }
  },
  {
    name: "Dodo CV Table Detector",
    repo: "dodo-cv-table-detector",
    category: "Computer Vision",
    featured: false,
    ru: { summary: "Lightweight OpenCV pipeline для occupancy states по ROI/background modeling с temporal smoothing, event timeline и CSV/JSON export." },
    en: { summary: "A lightweight OpenCV occupancy-state pipeline using ROI/background modeling, temporal smoothing, an event timeline and CSV/JSON export." }
  },
  {
    name: "SME Cashflow Copilot",
    repo: "sme-cashflow-copilot",
    category: "Decision Support / Data",
    featured: false,
    ru: { summary: "Cash-flow forecast, liquidity-gap detection и what-if сценарии с FastAPI/Pandas и auditable outputs." },
    en: { summary: "Cash-flow forecasting, liquidity-gap detection and what-if scenarios with FastAPI/Pandas and auditable outputs." }
  },
  {
    name: "WorkNest API",
    repo: "worknest-api",
    category: "Python Backend",
    featured: false,
    ru: { summary: "Фокусный production-style FastAPI backend с PostgreSQL-ready wiring, SQLAlchemy, Alembic, Docker и Pytest." },
    en: { summary: "A focused production-style FastAPI backend with PostgreSQL-ready wiring, SQLAlchemy, Alembic, Docker and Pytest." }
  }
];