from pathlib import Path

index_path = Path("index.html")
s = index_path.read_text(encoding="utf-8")

replacements = []

replacements.append((
    '<div class="stat"><div class="stat-num">5</div><div class="stat-label">ресторанных сетей в одной экосистеме</div></div>',
    '<div class="stat"><div class="stat-num">Tech Lead</div><div class="stat-label">опыт технического лидерства</div></div>'
))

replacements.append((
    '<div class="tech-row"><span class="tech">FastAPI</span><span class="tech">PostgreSQL</span><span class="tech">Redis</span><span class="tech">webhooks</span></div>',
    '<div class="tech-row"><span class="tech">Go</span><span class="tech">PostgreSQL</span><span class="tech">pgx</span><span class="tech">Docker</span></div>'
))

old_social = '''          <article class="project-card featured reveal" data-group="featured">
            <div class="project-top">
              <div class="project-icon" style="background:var(--pink-bg);color:var(--pink);">◇</div>
              <span class="project-badge" style="background:var(--pink-bg);color:var(--pink);">контент</span>
            </div>
            <div class="project-tags"><span class="tag">автоматизация</span><span class="tag">очереди</span><span class="tag">интеграции</span></div>
            <h3 class="project-title">Social Content Bridge</h3>
            <p class="project-sub">Синхронизация контента Telegram и Teletype → VK</p>
            <div class="case-grid">
              <div class="case-block"><span class="case-label" style="color:var(--coral);">проблема</span><p>Редактор вручную переносит публикации между площадками и постоянно проверяет форматирование.</p></div>
              <div class="case-block"><span class="case-label" style="color:var(--blue);">решение</span><p>Очередь публикаций, режим предварительного ревью, retry, планирование и панель управления.</p></div>
              <div class="case-value"><strong>польза</strong><span>Контент выходит синхронно, а редактор тратит время только на финальное утверждение.</span></div>
            </div>
            <div class="project-footer">
              <div class="tech-row"><span class="tech">Python</span><span class="tech">Telegram API</span><span class="tech">VK API</span><span class="tech">PostgreSQL</span></div>
              <span class="repo-link">private repository</span>
            </div>
          </article>'''

new_verdict = '''          <article class="project-card featured reveal" data-group="featured">
            <div class="project-top">
              <div class="project-icon" style="background:var(--purple-bg);color:var(--purple);">◇</div>
              <span class="project-badge" style="background:var(--purple-bg);color:var(--purple);">AI / risk</span>
            </div>
            <div class="project-tags"><span class="tag">multi-agent</span><span class="tag">risk engine</span><span class="tag">audit</span></div>
            <h3 class="project-title">VerdictMesh</h3>
            <p class="project-sub">Автономная платформа вероятностного анализа и контролируемого paper trading</p>
            <div class="case-grid">
              <div class="case-block"><span class="case-label" style="color:var(--coral);">проблема</span><p>Один прогноз или одна языковая модель не дают достаточной проверяемости для решений, связанных с риском.</p></div>
              <div class="case-block"><span class="case-label" style="color:var(--blue);">решение</span><p>Четыре независимые аналитические роли, детерминированный consensus, CLOB-данные, fail-closed правила и отдельный risk engine.</p></div>
              <div class="case-value"><strong>польза</strong><span>Каждое решение сохраняет доказательства, неопределенность и причину отказа; модель не может обойти риск-контур или получить доступ к исполнению.</span></div>
            </div>
            <div class="project-footer">
              <div class="tech-row"><span class="tech">FastAPI</span><span class="tech">PostgreSQL</span><span class="tech">Alembic</span><span class="tech">Docker</span><span class="tech">Claude</span></div>
              <a class="repo-link" href="https://github.com/DizzyZ7/verdictmesh" target="_blank" rel="noopener noreferrer">репозиторий ↗</a>
            </div>
          </article>'''
replacements.append((old_social, new_verdict))

old_support = '''          <article class="project-card featured reveal" data-group="featured">
            <div class="project-top">
              <div class="project-icon" style="background:var(--teal-bg);color:var(--teal);">◇</div>
              <span class="project-badge" style="background:var(--teal-bg);color:var(--teal);">AI / RAG</span>
            </div>
            <div class="project-tags"><span class="tag">поддержка</span><span class="tag">база знаний</span><span class="tag">async</span></div>
            <h3 class="project-title">Intelligent Support Orchestrator</h3>
            <p class="project-sub">RAG-система для поддержки по внутренним документам</p>
            <div class="case-grid">
              <div class="case-block"><span class="case-label" style="color:var(--coral);">проблема</span><p>Операторы повторно отвечают на типовые вопросы, хотя информация уже есть в документации.</p></div>
              <div class="case-block"><span class="case-label" style="color:var(--blue);">решение</span><p>Поиск по базе знаний, генерация ответа с контекстом и эскалация сложных случаев человеку.</p></div>
              <div class="case-value"><strong>польза</strong><span>Типовые вопросы обрабатываются быстрее, а оператор получает уже собранный контекст.</span></div>
            </div>
            <div class="project-footer">
              <div class="tech-row"><span class="tech">FastAPI</span><span class="tech">Celery</span><span class="tech">Redis</span><span class="tech">Qdrant</span><span class="tech">LangChain</span></div>
              <a class="repo-link" href="https://github.com/DizzyZ7/Intelligent-Support-Orchestrator-with-RAG-Async-Processing" target="_blank" rel="noopener noreferrer">репозиторий ↗</a>
            </div>
          </article>'''

new_ai_memo = '''          <article class="project-card featured reveal" data-group="featured">
            <div class="project-top">
              <div class="project-icon" style="background:var(--pink-bg);color:var(--pink);">◇</div>
              <span class="project-badge" style="background:var(--pink-bg);color:var(--pink);">fullstack AI</span>
            </div>
            <div class="project-tags"><span class="tag">PWA</span><span class="tag">semantic search</span><span class="tag">SaaS</span></div>
            <h3 class="project-title">AI Memo</h3>
            <p class="project-sub">Voice-first PWA для заметок, задач, смыслового поиска и еженедельных инсайтов</p>
            <div class="case-grid">
              <div class="case-block"><span class="case-label" style="color:var(--coral);">проблема</span><p>Голосовые мысли и быстрые заметки накапливаются, но задачи, повторяющиеся темы и важные связи остаются скрытыми.</p></div>
              <div class="case-block"><span class="case-label" style="color:var(--blue);">решение</span><p>Запись голоса, транскрибация, AI-анализ, embeddings, semantic search, очередь обработки, OAuth и облачное хранение.</p></div>
              <div class="case-value"><strong>польза</strong><span>Продукт работает сразу в локальном demo-режиме и постепенно масштабируется до облачного сервиса без переписывания интерфейса.</span></div>
            </div>
            <div class="project-footer">
              <div class="tech-row"><span class="tech">Next.js 15</span><span class="tech">React 19</span><span class="tech">TypeScript</span><span class="tech">tRPC</span><span class="tech">Prisma</span><span class="tech">pgvector</span></div>
              <a class="repo-link" href="https://github.com/DizzyZ7/AI-MEMO" target="_blank" rel="noopener noreferrer">репозиторий ↗</a>
            </div>
          </article>'''
replacements.append((old_support, new_ai_memo))

old_wtf = '''          <article class="project-card reveal" data-group="other">
            <div class="project-top"><div class="project-icon" style="background:var(--coral-bg);color:var(--coral);">◇</div></div>
            <div class="project-tags"><span class="tag">self-hosted</span><span class="tag">task management</span></div>
            <h3 class="project-title">WTF / Work Task Flow</h3>
            <p class="project-sub">Платформа управления задачами для команд без привязки к чужому SaaS.</p>
            <div class="project-footer"><div class="tech-row"><span class="tech">fullstack</span><span class="tech">self-hosted</span></div><a class="repo-link" href="https://github.com/DizzyZ7/WTF_Tast_Manager" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
          </article>'''

new_voice_and_telco = '''          <article class="project-card featured reveal" data-group="featured">
            <div class="project-top">
              <div class="project-icon" style="background:var(--coral-bg);color:var(--coral);">◇</div>
              <span class="project-badge" style="background:var(--coral-bg);color:var(--coral);">offline alerting</span>
            </div>
            <div class="project-tags"><span class="tag">STT / TTS</span><span class="tag">edge</span><span class="tag">observability</span></div>
            <h3 class="project-title">Автономная голосовая система оповещений</h3>
            <p class="project-sub">Offline voice-платформа с распознаванием, синтезом речи и промышленным alert flow</p>
            <div class="case-grid">
              <div class="case-block"><span class="case-label" style="color:var(--coral);">проблема</span><p>Критические команды и тревоги не должны зависеть от облака, а оператору нужен контролируемый цикл подтверждения и эскалации.</p></div>
              <div class="case-block"><span class="case-label" style="color:var(--blue);">решение</span><p>Раздельные STT, TTS и orchestrator-сервисы, MQTT, retries, idempotency, raise/ack/pending API, таймауты и уровни эскалации.</p></div>
              <div class="case-value"><strong>польза</strong><span>Система работает локально на ПК или Raspberry Pi, управляет оборудованием и сохраняет наблюдаемый жизненный цикл каждой тревоги.</span></div>
            </div>
            <div class="project-footer">
              <div class="tech-row"><span class="tech">FastAPI</span><span class="tech">Vosk / Whisper</span><span class="tech">RHVoice / Piper</span><span class="tech">MQTT</span><span class="tech">Prometheus</span></div>
              <a class="repo-link" href="https://github.com/DizzyZ7/voice_project_rhvoice" target="_blank" rel="noopener noreferrer">репозиторий ↗</a>
            </div>
          </article>

          <article class="project-card featured reveal" data-group="featured">
            <div class="project-top">
              <div class="project-icon" style="background:var(--blue-bg);color:var(--blue);">◇</div>
              <span class="project-badge" style="background:var(--blue-bg);color:var(--blue);">network ops</span>
            </div>
            <div class="project-tags"><span class="tag">NOC</span><span class="tag">telemetry</span><span class="tag">anomaly detection</span></div>
            <h3 class="project-title">TelcoNet Guardian</h3>
            <p class="project-sub">Автономный мониторинг telecom и packet core инфраструктуры</p>
            <div class="case-grid">
              <div class="case-block"><span class="case-label" style="color:var(--coral);">проблема</span><p>Состояние узлов, BGP-соседей, интерфейсов и SLA часто проверяется разными инструментами и вручную сопоставляется во время инцидента.</p></div>
              <div class="case-block"><span class="case-label" style="color:var(--blue);">решение</span><p>Асинхронные ICMP/TCP/BGP/SNMP-проверки, topology discovery, SLA engine, anomaly detection, метрики и Telegram alerts.</p></div>
              <div class="case-value"><strong>польза</strong><span>Единый контур наблюдения быстрее показывает деградацию сети и дает NOC-команде контекст до ручной диагностики.</span></div>
            </div>
            <div class="project-footer">
              <div class="tech-row"><span class="tech">Python</span><span class="tech">asyncio</span><span class="tech">FastAPI</span><span class="tech">SNMP</span><span class="tech">Prometheus</span><span class="tech">Kubernetes</span></div>
              <a class="repo-link" href="https://github.com/DizzyZ7/TelcoNet-Guardian" target="_blank" rel="noopener noreferrer">репозиторий ↗</a>
            </div>
          </article>'''
replacements.append((old_wtf, new_voice_and_telco))

replacements.append((
    '<p class="project-sub">Мобильный учет личных финансов с backend API, авторизацией и контейнеризацией.</p>',
    '<p class="project-sub">Self-hosted приложение для учета домашнего имущества, гарантий, чеков и регулярного обслуживания.</p>'
))
replacements.append((
    '<div class="project-footer"><div class="tech-row"><span class="tech">Flutter</span><span class="tech">FastAPI</span><span class="tech">JWT</span></div><a class="repo-link" href="https://github.com/DizzyZ7/home-ledger" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>',
    '<div class="project-footer"><div class="tech-row"><span class="tech">Flutter</span><span class="tech">FastAPI</span><span class="tech">PostgreSQL</span><span class="tech">JWT</span></div><a class="repo-link" href="https://github.com/DizzyZ7/home-ledger" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>'
))

old_dodo = '''          <article class="project-card reveal" data-group="other">
            <div class="project-top"><div class="project-icon" style="background:var(--teal-bg);color:var(--teal);">◇</div></div>
            <div class="project-tags"><span class="tag">computer vision</span><span class="tag">analytics</span></div>
            <h3 class="project-title">Dodo CV Table Detector</h3>
            <p class="project-sub">Анализ занятости столика по видеопотоку для операционной аналитики.</p>
            <div class="project-footer"><div class="tech-row"><span class="tech">OpenCV</span><span class="tech">Python</span></div><a class="repo-link" href="https://github.com/DizzyZ7/dodo-cv-table-detector" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
          </article>'''

new_other = '''          <article class="project-card reveal" data-group="other">
            <div class="project-top"><div class="project-icon" style="background:var(--teal-bg);color:var(--teal);">◇</div></div>
            <div class="project-tags"><span class="tag">Telegram product</span><span class="tag">moderation</span><span class="tag">trust</span></div>
            <h3 class="project-title">Ryadom Bot</h3>
            <p class="project-sub">Платформа локальной взаимопомощи: заявки, отклики, рейтинги, модерация, жалобы, аудит и антиспам.</p>
            <div class="project-footer"><div class="tech-row"><span class="tech">aiogram 3</span><span class="tech">PostgreSQL</span><span class="tech">SQLAlchemy async</span><span class="tech">Alembic</span></div><a class="repo-link" href="https://github.com/DizzyZ7/ryadom-bot" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
          </article>

          <article class="project-card reveal" data-group="other">
            <div class="project-top"><div class="project-icon" style="background:var(--amber-bg);color:var(--amber);">◇</div></div>
            <div class="project-tags"><span class="tag">simulation</span><span class="tag">Java</span><span class="tag">game systems</span></div>
            <h3 class="project-title">CHRONICA</h3>
            <p class="project-sub">Симуляция живого мира для Minecraft: цивилизации, дипломатия, экономика, торговля, память NPC и процедурная история.</p>
            <div class="project-footer"><div class="tech-row"><span class="tech">Java 21</span><span class="tech">NeoForge</span><span class="tech">SavedData</span><span class="tech">JUnit 5</span></div><a class="repo-link" href="https://github.com/DizzyZ7/CHRONICA" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
          </article>'''
replacements.append((old_dodo, new_other))

replacements.append((
    '<div class="tech-row"><span class="tech">Python</span><span class="tech">FastAPI</span><span class="tech">Docker</span><span class="tech">CI/CD</span></div>',
    '<div class="tech-row"><span class="tech">Python</span><span class="tech">Streamlit</span><span class="tech">SQLite</span><span class="tech">Docker</span><span class="tech">HTTP API</span></div>'
))

replacements.append((
    '<div class="tech-row"><span class="tech">Telegram Bot API</span><span class="tech">LLM API</span><span class="tech">PostgreSQL</span></div>',
    '<div class="tech-row"><span class="tech">aiogram 3</span><span class="tech">Telethon</span><span class="tech">Claude</span><span class="tech">PostgreSQL</span><span class="tech">Alembic</span></div>'
))

for old, new in replacements:
    if old not in s:
        raise RuntimeError(f"Expected fragment not found: {old[:120]!r}")
    s = s.replace(old, new, 1)

index_path.write_text(s, encoding="utf-8")
