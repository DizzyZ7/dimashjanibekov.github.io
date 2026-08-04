window.PORTFOLIO_PROJECTS = [
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
      summary: "Self-hosted control plane для корреляции событий, incident response и надежной автоматизации.",
      challenge: "События из разных источников дублируются, теряют контекст и требуют ручной корреляции и восстановления.",
      architecture: "Authenticated webhooks → CloudEvents-compatible model → JetStream → transactional consumers → incidents → policies → durable runbooks → audit trail.",
      proof: "At-least-once без ложного exactly-once claim, PostgreSQL-дедупликация, fail-closed RBAC, guarded OIDC, tracing через async boundaries и failure drills."
    },
    en: {
      summary: "A self-hosted control plane for event correlation, incident response and durable automation.",
      challenge: "Events from multiple sources are duplicated, lose context and require manual correlation and recovery.",
      architecture: "Authenticated webhooks → CloudEvents-compatible model → JetStream → transactional consumers → incidents → policies → durable runbooks → audit trail.",
      proof: "At-least-once without a false exactly-once claim, PostgreSQL deduplication, fail-closed RBAC, guarded OIDC, tracing across async boundaries and failure drills."
    }
  },
  {
    name: "SignalBox",
    repo: "SignalBox",
    category: "Go / Integration Platform",
    status: {
      ru: "public · Docker Compose demo",
      en: "public · Docker Compose demo"
    },
    featured: true,
    stack: ["Go", "PostgreSQL", "HMAC", "OpenAPI", "Prometheus"],
    ru: {
      summary: "Компактный webhook gateway с durable delivery, replay, аудитом и встроенной admin UI.",
      challenge: "Команды снова и снова пишут glue-code для verification, хранения, дедупликации, retries и уведомлений.",
      architecture: "Webhook → rate limit → token hash lookup → deduplication → PostgreSQL event log → delivery queue → Telegram / signed HTTP forwarding.",
      proof: "Token hashing/rotation, HMAC forwarding, SSRF guard, retry/backoff queue, cursor pagination, backup/restore, CodeQL и Trivy."
    },
    en: {
      summary: "A compact webhook gateway with durable delivery, replay, auditability and an embedded admin UI.",
      challenge: "Teams repeatedly rebuild glue code for verification, storage, deduplication, retries and notifications.",
      architecture: "Webhook → rate limit → token hash lookup → deduplication → PostgreSQL event log → delivery queue → Telegram / signed HTTP forwarding.",
      proof: "Token hashing and rotation, HMAC forwarding, SSRF protection, retry/backoff queue, cursor pagination, backup/restore, CodeQL and Trivy."
    }
  },
  {
    name: "Intelligent Support Orchestrator",
    repo: "Intelligent-Support-Orchestrator-with-RAG-Async-Processing",
    category: "AI / Backend",
    status: {
      ru: "public · reproducible local stack",
      en: "public · reproducible local stack"
    },
    featured: true,
    stack: ["Python", "FastAPI", "Celery", "Redis", "Qdrant", "RAG"],
    ru: {
      summary: "RAG backend для поддержки, где retrieval и LLM-нагрузка вынесены из синхронного API path.",
      challenge: "Ingestion, retrieval и generation не должны блокировать request lifecycle или создавать дубли при повторной обработке.",
      architecture: "Client/helpdesk → FastAPI → Redis broker → Celery worker → RAG pipeline ↔ Qdrant / knowledge base.",
      proof: "Разделение API и worker workloads, нормализация и chunking, защита повторного ingestion и сохранение использованных источников."
    },
    en: {
      summary: "A RAG support backend that keeps retrieval and LLM workloads outside the synchronous API path.",
      challenge: "Ingestion, retrieval and generation should not block request handling or create duplicates on reprocessing.",
      architecture: "Client/helpdesk → FastAPI → Redis broker → Celery worker → RAG pipeline ↔ Qdrant / knowledge base.",
      proof: "Separated API and worker workloads, normalization and chunking, duplicate-ingestion protection and retained source context."
    }
  },
  {
    name: "VerdictMesh",
    repo: "verdictmesh",
    category: "AI Decision Systems",
    status: {
      ru: "public · paper-trading only",
      en: "public · paper-trading only"
    },
    featured: true,
    stack: ["Python", "FastAPI", "PostgreSQL", "Prometheus", "Structured AI"],
    ru: {
      summary: "Evidence-grounded система прогнозирования с детерминированным risk layer, paper broker и полным аудитом решений.",
      challenge: "Модель не должна обходить проверяемые правила риска, действовать без достаточных источников или скрывать неопределенность.",
      architecture: "Market/evidence ingestion → forecasting council → deterministic consensus → risk engine → paper broker → PostgreSQL audit.",
      proof: "Schema-constrained outputs, fail-closed rejection, persistence/recovery, readiness probes, structured logs, Prometheus metrics и CI."
    },
    en: {
      summary: "An evidence-grounded forecasting system with a deterministic risk layer, paper broker and full decision audit.",
      challenge: "The model must not bypass reviewable risk rules, act on weak evidence or conceal uncertainty.",
      architecture: "Market/evidence ingestion → forecasting council → deterministic consensus → risk engine → paper broker → PostgreSQL audit.",
      proof: "Schema-constrained outputs, fail-closed rejection, persistence/recovery, readiness probes, structured logs, Prometheus metrics and CI."
    }
  },
  {
    name: "AI Ticket Agent",
    repo: "ai-ticket-agent",
    category: "AI / Support Automation",
    featured: false,
    ru: {summary: "FastAPI-сервис классификации, приоритизации и подготовки ответа с PostgreSQL, Redis и явной обработкой дублей."},
    en: {summary: "A FastAPI service for classification, prioritization and reply drafting with PostgreSQL, Redis and explicit duplicate handling."}
  },
  {
    name: "SME Cashflow Copilot",
    repo: "sme-cashflow-copilot",
    category: "Decision Support",
    featured: false,
    ru: {summary: "14-дневный cashflow forecast, what-if сценарии, объяснимые действия и audit trail для малого бизнеса."},
    en: {summary: "A 14-day cashflow forecast, what-if scenarios, explainable actions and an audit trail for small businesses."}
  },
  {
    name: "Dodo CV Table Detector",
    repo: "dodo-cv-table-detector",
    category: "Computer Vision",
    featured: false,
    ru: {summary: "ROI и background modeling для real-time анализа состояний без тяжелой нейросети на каждом кадре."},
    en: {summary: "ROI and background modeling for real-time state analysis without a heavy neural network on every frame."}
  },
  {
    name: "TelcoNet Guardian",
    repo: "TelcoNet-Guardian",
    category: "Network Automation",
    featured: false,
    ru: {summary: "Async monitoring и automation для ICMP/TCP, BGP, SNMP, SLA, topology и anomaly signals."},
    en: {summary: "Async monitoring and automation for ICMP/TCP, BGP, SNMP, SLAs, topology and anomaly signals."}
  },
  {
    name: "QA Microservices E2E",
    repo: "qa-microservices-e2e-playwright-py",
    category: "Quality / Reliability",
    featured: false,
    ru: {summary: "Воспроизводимый E2E-контур на Python и Playwright для пользовательских сценариев микросервисной системы."},
    en: {summary: "A reproducible Python and Playwright E2E layer for user flows across a microservice system."}
  },
  {
    name: "Home Ledger",
    repo: "home-ledger",
    category: "Product / Data",
    featured: false,
    ru: {summary: "Прикладной продукт для финансовых данных и домашних процессов с акцентом на целостность и понятную модель."},
    en: {summary: "An applied personal-finance product focused on data integrity and an explicit domain model."}
  }
];
