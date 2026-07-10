from pathlib import Path

index_path = Path('index.html')
styles_path = Path('styles.css')
s = index_path.read_text(encoding='utf-8')

s = s.replace(
    'Backend, fullstack, автоматизация, Telegram-боты, CRM/API-интеграции и AI/RAG-решения. Открыт к работе в команде и проектам для бизнеса.',
    'Backend и fullstack-разработка, архитектура API, интеграции, автоматизация, инфраструктура, безопасность и AI/RAG. Открыт к работе в сильной команде и проектному сотрудничеству.'
)
s = s.replace(
    'Проектирую и запускаю backend-сервисы, интеграции, ботов, внутренние инструменты и AI/RAG-системы.',
    'Проектирую и запускаю backend-сервисы, интеграции, очереди, внутренние инструменты, AI/RAG-системы и production-инфраструктуру.'
)
s = s.replace(
    '<p class="hero-lead">Backend/fullstack-инженер с коммерческим опытом в автоматизации, API-интеграциях и эксплуатации сервисов. Рассматриваю работу в продуктовой команде и беру проекты для бизнеса как самозанятый.</p>',
    '<p class="hero-lead">Backend/fullstack-инженер с 3+ годами коммерческого опыта. Проектирую API, интеграции, очереди, внутренние сервисы, ботов и AI/RAG-системы; умею заходить в существующий код, разбирать инциденты и доводить решение до стабильной эксплуатации.</p>'
)
s = s.replace(
    '<div class="hero-note">Удаленно · РФ · оформление по договору, чек самозанятого · русский / английский</div>',
    '<div class="hero-note">Удаленно · РФ и распределенные команды · штат, контракт или проектное сотрудничество · русский / English C1</div>'
)
s = s.replace(
    '''            <li><span aria-hidden="true" style="color:var(--teal);font-weight:700;">✓</span><span>Python, FastAPI, Django, PostgreSQL, Redis, Docker</span></li>
            <li><span aria-hidden="true" style="color:var(--teal);font-weight:700;">✓</span><span>CRM/helpdesk, REST API, webhooks, Telegram, AI/RAG</span></li>
            <li><span aria-hidden="true" style="color:var(--teal);font-weight:700;">✓</span><span>Опыт Tech Lead и эксплуатации production-систем</span></li>''',
    '''            <li><span aria-hidden="true" style="color:var(--teal);font-weight:700;">✓</span><span>Python ecosystem: FastAPI, Django, Flask, asyncio, Celery</span></li>
            <li><span aria-hidden="true" style="color:var(--teal);font-weight:700;">✓</span><span>PostgreSQL, Redis, SQLAlchemy, очереди и фоновые задачи</span></li>
            <li><span aria-hidden="true" style="color:var(--teal);font-weight:700;">✓</span><span>Интеграции, observability, безопасность и эксплуатация production</span></li>'''
)
s = s.replace(
    '<p>Backend/fullstack-разработка, интеграции, внутренние сервисы, техническое лидерство, разбор инцидентов и поддержка существующего кода.</p>',
    '<p>Backend / Integration / Automation Engineer: архитектура сервисов, API, данные, очереди, инфраструктура, code review, инциденты и развитие существующих систем.</p>'
)
s = s.replace(
    '<p>Боты, CRM/API-интеграции, backend-сервисы, админки, парсеры и AI/RAG-инструменты — от разбора процесса до запуска.</p>',
    '<p>Проектный подряд: боты, CRM/API-интеграции, backend-сервисы, админки, парсеры и AI/RAG — от схемы процесса до запуска и поддержки.</p>'
)
s = s.replace(
    '<div class="stat"><div class="stat-num">5</div><div class="stat-label">флагманских кейсов</div></div>',
    '<div class="stat"><div class="stat-num">5</div><div class="stat-label">ресторанных сетей в одной экосистеме</div></div>'
)
s = s.replace(
    '<div class="stat"><div class="stat-num">20+</div><div class="stat-label">технологий в рабочем стеке</div></div>',
    '<div class="stat"><div class="stat-num">30+</div><div class="stat-label">технологий и платформ в рабочем стеке</div></div>'
)

expertise = '''
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
'''
if 'id="expertise"' not in s:
    s = s.replace('    <section class="section" id="projects">', expertise + '\n    <section class="section" id="projects">')

s = s.replace(
    '<div class="section-side">Для трудоустройства этот блок не относится к зарплатным ожиданиям.</div>',
    '<div class="section-side">Проектный формат: фиксированная стоимость этапа, MVP или почасовое развитие существующей системы.</div>'
)
s = s.replace(
    '<div><span class="section-kicker">технологии</span><h2 class="section-title">Рабочий стек</h2><p class="section-desc">Подбираю инструменты под задачу, а не пытаюсь уместить любую систему в один любимый фреймворк.</p></div>',
    '<div><span class="section-kicker">технологии</span><h2 class="section-title">Стек по слоям системы</h2><p class="section-desc">Основной фокус — Python/backend, интеграции и production. Fullstack, infrastructure, AI и безопасность позволяют не терять контекст между слоями продукта.</p></div>'
)

old_stack = '''        <div class="stack-groups reveal">
          <article class="stack-group"><h3>Backend</h3><div class="stack-pills"><span class="tag">Python</span><span class="tag">FastAPI</span><span class="tag">Django</span><span class="tag">Flask</span><span class="tag">Node.js</span><span class="tag">PHP / Yii2</span></div></article>
          <article class="stack-group"><h3>Data & queues</h3><div class="stack-pills"><span class="tag">PostgreSQL</span><span class="tag">Redis</span><span class="tag">SQLAlchemy</span><span class="tag">Alembic</span><span class="tag">Celery</span><span class="tag">Qdrant</span></div></article>
          <article class="stack-group"><h3>Frontend & mobile</h3><div class="stack-pills"><span class="tag">React</span><span class="tag">Next.js</span><span class="tag">TypeScript</span><span class="tag">HTML / CSS / JS</span><span class="tag">Flutter</span></div></article>
          <article class="stack-group"><h3>Infrastructure & AI</h3><div class="stack-pills"><span class="tag">Docker</span><span class="tag">Linux</span><span class="tag">GitHub Actions</span><span class="tag">CI/CD</span><span class="tag">OpenAI API</span><span class="tag">LangChain</span><span class="tag">RAG</span></div></article>
        </div>'''
new_stack = '''        <div class="stack-groups reveal">
          <article class="stack-group stack-primary"><div class="stack-head"><h3>Core backend</h3><span>основной</span></div><p>Сервисы, API и бизнес-логика</p><div class="stack-pills"><span class="tag">Python</span><span class="tag">FastAPI</span><span class="tag">Django</span><span class="tag">Flask</span><span class="tag">asyncio</span><span class="tag">Pydantic</span></div></article>
          <article class="stack-group"><div class="stack-head"><h3>Data & async</h3></div><p>Хранение, кеши и фоновые процессы</p><div class="stack-pills"><span class="tag">PostgreSQL</span><span class="tag">MySQL</span><span class="tag">SQLite</span><span class="tag">Redis</span><span class="tag">SQLAlchemy</span><span class="tag">Alembic</span><span class="tag">Celery</span><span class="tag">queues</span></div></article>
          <article class="stack-group"><div class="stack-head"><h3>API & integrations</h3></div><p>Связь внешних и внутренних систем</p><div class="stack-pills"><span class="tag">REST API</span><span class="tag">webhooks</span><span class="tag">Telegram Bot API</span><span class="tag">VK API</span><span class="tag">Usedesk</span><span class="tag">Mindbox</span><span class="tag">1С</span><span class="tag">CRM</span></div></article>
          <article class="stack-group"><div class="stack-head"><h3>Infrastructure</h3></div><p>Доставка и эксплуатация</p><div class="stack-pills"><span class="tag">Docker</span><span class="tag">Linux</span><span class="tag">Nginx</span><span class="tag">Git</span><span class="tag">GitHub Actions</span><span class="tag">CI/CD</span><span class="tag">self-hosted</span></div></article>
          <article class="stack-group"><div class="stack-head"><h3>Observability & QA</h3></div><p>Контроль качества и состояния системы</p><div class="stack-pills"><span class="tag">Grafana</span><span class="tag">Kibana</span><span class="tag">structured logging</span><span class="tag">monitoring</span><span class="tag">Pytest</span><span class="tag">Playwright</span><span class="tag">E2E</span></div></article>
          <article class="stack-group"><div class="stack-head"><h3>Security</h3></div><p>Безопасность приложений и интеграций</p><div class="stack-pills"><span class="tag">JWT</span><span class="tag">RBAC</span><span class="tag">input validation</span><span class="tag">secrets</span><span class="tag">rate limiting</span><span class="tag">secure API design</span></div></article>
          <article class="stack-group"><div class="stack-head"><h3>AI / ML / CV</h3></div><p>Интеллектуальные функции продукта</p><div class="stack-pills"><span class="tag">OpenAI API</span><span class="tag">LLM</span><span class="tag">LangChain</span><span class="tag">RAG</span><span class="tag">Qdrant</span><span class="tag">embeddings</span><span class="tag">OpenCV</span></div></article>
          <article class="stack-group"><div class="stack-head"><h3>Frontend & mobile</h3></div><p>Интерфейсы для пользователей и команд</p><div class="stack-pills"><span class="tag">React</span><span class="tag">Next.js</span><span class="tag">TypeScript</span><span class="tag">JavaScript</span><span class="tag">HTML / CSS</span><span class="tag">Flutter</span></div></article>
          <article class="stack-group"><div class="stack-head"><h3>Additional languages</h3></div><p>Работа в смешанных кодовых базах</p><div class="stack-pills"><span class="tag">Node.js</span><span class="tag">PHP / Yii2</span><span class="tag">Go</span><span class="tag">Java / Kotlin</span></div></article>
        </div>'''
s = s.replace(old_stack, new_stack)
s = s.replace(
    '<p>Напишите в Telegram: по вакансии отправлю резюме и отвечу на технические вопросы, по проекту — разберу процесс и предложу первую версию решения.</p>',
    '<p>По вакансии обсудим роль, команду и технические задачи. По проекту — разберем процесс, выберем разумный формат сотрудничества и определим первую версию решения.</p>'
)

index_path.write_text(s, encoding='utf-8')

css = styles_path.read_text(encoding='utf-8')
if '/* Engineering profile */' not in css:
    css += '''

/* Engineering profile */
.expertise-section { background: linear-gradient(180deg, #fff 0%, var(--bg-warm) 100%); }
.expertise-link { color: var(--purple); font-weight: 500; text-decoration: none; }
.expertise-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.expertise-card { position: relative; min-height: 225px; padding: 22px; overflow: hidden; border: 1px solid var(--border-soft); border-radius: 16px; background: rgba(255,255,255,.92); box-shadow: var(--shadow-sm); transition: transform .18s, border-color .18s, box-shadow .18s; }
.expertise-card:hover { transform: translateY(-2px); border-color: var(--border); box-shadow: var(--shadow-md); }
.expertise-index { display: inline-flex; margin-bottom: 28px; color: var(--purple); font-family: "EB Garamond", serif; font-size: 22px; line-height: 1; }
.expertise-card h3 { margin-bottom: 8px; font-size: 14px; font-weight: 600; }
.expertise-card p { margin-bottom: 16px; color: var(--text-2); font-size: 12px; line-height: 1.58; }
.expertise-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: auto; }
.expertise-tags span { padding: 4px 8px; border-radius: 6px; background: var(--bg-soft); color: var(--text-3); font-size: 9.8px; }
.stack-groups { grid-template-columns: repeat(3, 1fr); }
.stack-group { min-height: 185px; }
.stack-group.stack-primary { border-color: #cbc6ef; background: linear-gradient(145deg, #fff 0%, #f4f2ff 100%); }
.stack-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 4px; }
.stack-head h3 { margin-bottom: 0; }
.stack-head > span { padding: 3px 7px; border-radius: 999px; background: var(--purple-bg); color: var(--purple); font-size: 8.5px; font-weight: 700; letter-spacing: .7px; text-transform: uppercase; }
.stack-group > p { min-height: 34px; margin-bottom: 12px; color: var(--text-3); font-size: 10.5px; line-height: 1.45; }
@media (max-width: 980px) { .expertise-grid { grid-template-columns: repeat(2, 1fr); } .stack-groups { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 720px) { .expertise-grid { grid-template-columns: 1fr; } .expertise-card { min-height: 0; } .stack-groups { grid-template-columns: 1fr; } .stack-group { min-height: 0; } }
@media print { .expertise-card { box-shadow: none; break-inside: avoid; } }
'''
styles_path.write_text(css, encoding='utf-8')

assert 'чек самозанятого' not in s
assert 'id="expertise"' in s
assert 'Core backend' in s
