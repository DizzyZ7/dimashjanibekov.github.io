from pathlib import Path

path = Path('index.html')
s = path.read_text(encoding='utf-8')

pairs = [
    ('<h3 class="project-title">Concierge Lead Gen Bot</h3>', '<h3 class="project-title">Thailand Lead Radar</h3>'),
    ('<div class="project-tags"><span class="tag">mobile</span><span class="tag">finance</span></div>', '<div class="project-tags"><span class="tag">mobile</span><span class="tag">self-hosted</span><span class="tag">home inventory</span></div>'),
]

for old, new in pairs:
    if old not in s:
        raise RuntimeError(f'Missing fragment: {old}')
    s = s.replace(old, new, 1)

path.write_text(s, encoding='utf-8')
