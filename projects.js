window.PORTFOLIO_PROJECTS = [
  {
    name: "Sentinel",
    repo: "Sentinel",
    category: "Security / AI / Platform",
    status: "public",
    featured: true,
    stack: ["Python", "FastAPI", "PostgreSQL", "GPT-5.6", "Docker", "SARIF"],
    ru: {
      summary: "Local-first security control plane: от детерминированного сигнала до проверяемого патча, regression proof и решения человека.",
      problem: "SAST дает шум, а свободный AI-review может галлюцинировать уязвимости и небезопасные исправления.",
      architecture: "Изолированный workspace → AST/static triage → secret-safe context → structured AI verdict → patch escrow → non-executing regression proof → human gate.",
      engineering: "Fail-closed release policy, immutable evidence, SHA-256 integrity, SARIF, baseline/delta gates, risk intelligence и воспроизводимый evaluation corpus."
    },
    en: {
      summary: "A local-first security control plane that turns deterministic signals into reviewable patches, regression proof and explicit human decisions.",
      problem: "Traditional SAST can be noisy while unconstrained AI review can hallucinate findings or unsafe fixes.",
      architecture: "Isolated workspace → AST/static triage → secret-safe context → structured AI verdict → patch escrow → non-executing regression proof → human gate.",
      engineering: "Fail-closed release policy, immutable evidence, SHA-256 integrity, SARIF, baseline/delta gates, risk intelligence and a reproducible evaluation corpus."
    }
  },
  {
    name: "StormRelay",
    repo: "StormRelay",
    category: "Distributed Systems / SRE",
    status: "public",
    featured: true,
    stack: ["Go", "PostgreSQL", "NATS JetStream", "OIDC", "OpenTelemetry", "Docker"],
    ru: {
      summary: "Self-hosted control plane для корреляции событий, incident response и надежной автоматизации.",
      problem: "Webhook-события из разных источников дублируются, теряют контекст и требуют ручной корреляции и восстановления.",
      architecture: "Authenticated ingestion → CloudEvents-compatible model → JetStream → transactional consumers → incidents → policies → durable runbooks/plugins → audit trail.",
      engineering: "At-least-once семантика без ложных exactly-once claims, дедупликация через PostgreSQL, fail-closed RBAC, guarded OIDC, tracing через async boundaries, failure drills и SDK."
    },
    en: {
      summary: "A self-hosted event-correlation and incident-response control plane with durable automation.",
      problem: "Webhook events from multiple sources are duplicated, lose context and require manual correlation and recovery.",
      architecture: "Authenticated ingestion → CloudEvents-compatible model → JetStream → transactional consumers → incidents → policies → durable runbooks/plugins → audit trail.",
      engineering: "At-least-once semantics without false exactly-once claims, PostgreSQL deduplication, fail-closed RBAC, guarded OIDC, tracing across async boundaries, failure drills and SDKs."
    }
  },
  {
    name: "SignalBox",
    repo: "SignalBox",
    category: "Go / Integration Platform",
    status: "public",
    featured: true,
    stack: ["Go", "PostgreSQL", "HMAC", "OpenAPI", "Prometheus", "Docker"],
    ru: {
      summary: "Компактный Go-native webhook gateway с durable delivery, replay, аудитом и встроенной admin UI.",
      problem: "Команды снова и снова пишут glue-code для webhook verification, хранения, дедупликации, retries и уведомлений.",
      architecture: "Webhook → rate limit → token hash lookup → deduplication → PostgreSQL event log → delivery queue → Telegram / signed HTTP forwarding.",
      engineering: "Token hashing/rotation, HMAC forwarding, SSRF guard, retry/backoff queue, cursor pagination, metrics, backup/restore, CodeQL и Trivy."
    },
    en: {
      summary: "A compact Go-native webhook gateway with durable delivery, replay, auditability and an embedded admin UI.",
      problem: "Teams repeatedly rebuild glue code for webhook verification, storage, deduplication, retries and notifications.",
      architecture: "Webhook → rate limit → token hash lookup → deduplication → PostgreSQL event log → delivery queue → Telegram / signed HTTP forwarding.",
      engineering: "Token hashing and rotation, HMAC forwarding, SSRF protection, retry/backoff queue, cursor pagination, metrics, backup/restore, CodeQL and Trivy."
    }
  },
  {
    name: "Intelligent Support Orchestrator",
    repo: "Intelligent-Support-Orchestrator-with-RAG-Async-Processing",
    category: "AI / Backend",
    status: "public",
    featured: true,
    stack: ["Python", "FastAPI", "Celery", "Redis", "Qdrant", "RAG"],
    ru: {
      summary: "RAG backend для поддержки, где тяжелая retrieval/LLM работа вынесена из синхронного API path.",
      problem: "Knowledge-base ответы требуют retrieval и LLM processing, которые не должны блокировать request lifecycle.",
      architecture: "Client/helpdesk → FastAPI → Redis broker → Celery worker → LLM/RAG pipeline ↔ Qdrant / knowledge base.",
      engineering: "Разделение API и worker workloads, document ingestion, semantic retrieval и воспроизводимый Docker Compose deployment."
    },
    en: {
      summary: "A RAG support backend that keeps retrieval and LLM workloads outside the synchronous API path.",
      problem: "Knowledge-base answers require retrieval and LLM processing that should not block request handling.",
      architecture: "Client/helpdesk → FastAPI → Redis broker → Celery worker → LLM/RAG pipeline ↔ Qdrant / knowledge base.",
      engineering: "Separated API and worker workloads, document ingestion, semantic retrieval and reproducible Docker Compose deployment."
    }
  },
  {
    name: "SME Cashflow Copilot",
    repo: "sme-cashflow-copilot",
    category: "Product / Decision Systems",
    status: "public",
    featured: true,
    stack: ["Python", "Streamlit", "HTTP API", "SQLite", "Docker", "CI"],
    ru: {
      summary: "Decision-support продукт для 14-дневного cashflow forecasting, сценариев и объяснимых действий до кассового разрыва.",
      problem: "Малому бизнесу недостаточно видеть доходы и расходы: важно заранее понимать ликвидность и конкретные варианты действий.",
      architecture: "CSV/Excel ingestion → forecast/risk engine → scenario engine → confidence/learning layer → SQLite audit → CLI/UI/API.",
      engineering: "Before/after recalculation, what-if scenarios, persisted rules, audit trail, thin-client API mode, local fallback, health checks и CI."
    },
    en: {
      summary: "A decision-support product for 14-day cashflow forecasting, scenarios and explainable actions before a liquidity gap.",
      problem: "Small businesses need more than revenue and cost totals: they need near-term liquidity visibility and concrete actions.",
      architecture: "CSV/Excel ingestion → forecast/risk engine → scenario engine → confidence/learning layer → SQLite audit → CLI/UI/API.",
      engineering: "Before/after recalculation, what-if scenarios, persisted rules, audit trail, thin-client API mode, local fallback, health checks and CI."
    }
  },
  {
    name: "TelcoNet Guardian",
    repo: "TelcoNet-Guardian",
    category: "Network Automation",
    status: "public",
    featured: false,
    stack: ["Python", "asyncio", "FastAPI", "SNMP", "Prometheus", "Kubernetes"],
    ru: { summary: "Async monitoring и automation для network/packet-core: ICMP/TCP, BGP, SNMP, SLA, topology и anomaly signals." },
    en: { summary: "Async monitoring and automation for network/packet-core systems: ICMP/TCP, BGP, SNMP, SLA, topology and anomaly signals." }
  },
  { name: "AI-MEMO", repo: "AI-MEMO", category: "AI / Product", status: "public", featured: false, stack: ["AI", "PWA", "Semantic Search"], ru: {summary:"Voice-first продукт для заметок, задач, semantic search и AI-insights."}, en:{summary:"A voice-first product for notes, tasks, semantic search and AI insights."} },
  { name: "autoops-brain", repo: "autoops-brain", category: "Automation / AI", status: "public", featured: false, stack: ["Automation", "AI"], ru:{summary:"Эксперименты на стыке operational automation и AI decision support."}, en:{summary:"Experiments at the intersection of operational automation and AI decision support."} },
  { name: "qa-microservices-e2e-playwright-py", repo: "qa-microservices-e2e-playwright-py", category: "QA / Reliability", status: "public", featured: false, stack:["Python","Playwright","E2E"], ru:{summary:"E2E-контур для проверки микросервисных пользовательских сценариев."}, en:{summary:"An E2E testing layer for microservice user flows."} },
  { name: "CS2 Skin Price Predictor", repo: "CS2_Skin_Price_Predictor", category: "ML / Data", status: "public", featured: false, stack:["Python","ML"], ru:{summary:"ML-проект вокруг оценки рыночных данных игровых предметов."}, en:{summary:"An ML project around market data and game-item price estimation."} },
  { name: "dodo-cv-table-detector", repo: "dodo-cv-table-detector", category: "Computer Vision", status: "public", featured: false, stack:["Python","CV"], ru:{summary:"Computer-vision detector для распознавания структурированных объектов на изображении."}, en:{summary:"A computer-vision detector for structured objects in images."} },
  { name: "home-ledger", repo: "home-ledger", category: "Fullstack / Data", status: "public", featured: false, stack:["Data","Product"], ru:{summary:"Прикладной продукт для учета и работы с домашними финансовыми данными."}, en:{summary:"An applied product for personal ledger data and workflows."} },
  { name: "telegram-antispam-bot", repo: "telegram-antispam-bot", category: "Automation / Telegram", status: "public", featured: false, stack:["Python","Telegram","Moderation"], ru:{summary:"Automation для модерации Telegram с operational сценариями и хранением состояния."}, en:{summary:"Telegram moderation automation with operational flows and persistent state."} },
  { name: "go_url_shortener", repo: "go_url_shortener", category: "Go / Backend", status: "public", featured: false, stack:["Go","HTTP"], ru:{summary:"Компактный backend-сервис на Go, показывающий breadth вне основного Python-стека."}, en:{summary:"A compact Go backend service demonstrating breadth beyond the primary Python stack."} }
];