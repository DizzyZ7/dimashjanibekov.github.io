# Dimash Janibekov — Senior Backend Engineering Portfolio

Recruiter-first bilingual portfolio for **Senior Backend / Integration & Automation Engineer** positioning.

Public site: <https://dizzyz7.github.io/dimashjanibekov.github.io/>

## Positioning

The portfolio is deliberately centered on one professional line:

**Backend engineering → integrations/event processing → reliability/security → production ownership.**

AI/RAG, QA automation, monitoring, Go and TypeScript are shown as engineering breadth around that core rather than separate professions.

## Evidence model

The site separates three types of evidence:

- **Commercial experience** — MedTech, HoReCa integrations/automation and Python product development.
- **Active product engineering** — JANQOR, a private B2B operational control plane.
- **Public source evidence** — ChainScribe API, StormRelay, SignalBox, Intelligent Support Orchestrator, WTF, QA E2E, HomeLedger and other repositories.

Claims are intentionally scoped:

- `3+ years` refers to commercial engineering experience;
- independent engineering practice is shown separately from commercial employment;
- `up to 87%` refers only to selected recurring support/operational workflows in a specific integration layer, not all company workload;
- private work is labeled as private and is not linked to a non-public repository.

## What the portfolio emphasizes

- Python / FastAPI / PostgreSQL / Redis backend engineering;
- REST/OpenAPI, webhooks and system integrations;
- transactions, idempotency, deduplication, retries/backoff and replay;
- event-driven processing, durable queues and transactional outbox patterns;
- RBAC/OIDC, token security, HMAC and SSRF-aware integration design;
- Docker/Linux, CI/CD, observability and production recovery;
- RAG/LLM integration as a controlled backend capability;
- system analysis, BPMN, domain boundaries, API contracts and acceptance criteria.

## Local preview

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Verification

```bash
node verify-site.mjs
```

The check validates required files, bilingual content, SEO metadata, portfolio positioning, flagship project evidence, the scoped automation metric and private-project link safety.
