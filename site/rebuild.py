#!/usr/bin/env python3
"""
rebuild.py — nav/footer 변경 후 실행하면 9개 페이지에 자동 반영됩니다.
사용법: python3 rebuild.py
"""
import re, glob, os

BASE = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(BASE, '_nav.html'), 'r', encoding='utf-8') as f:
    NAV_HTML = f.read().strip()

with open(os.path.join(BASE, '_footer.html'), 'r', encoding='utf-8') as f:
    FOOTER_HTML = f.read().strip()

# Page → active nav key
PAGE_NAV = {
    'index.html':     'home',
    'same-day.html':  'same-day',
    'resources.html': 'resources',
    'about.html':     'about',
    'contact.html':   'contact',
    'quote.html':     'quote',
    'services.html':  'services',
    'pricing.html':   'pricing',
    'portfolio.html': 'portfolio',
    'login.html':     'login',
}

pages = glob.glob(os.path.join(BASE, '*.html'))
pages = [p for p in pages if not os.path.basename(p).startswith('_')]

for path in pages:
    fname = os.path.basename(path)
    nav_key = PAGE_NAV.get(fname)

    with open(path, 'r', encoding='utf-8') as f:
        c = f.read()

    # Build page-specific nav with active class injected
    if nav_key:
        nav = re.sub(
            r'(data-nav="' + re.escape(nav_key) + r'")',
            r'\1 class="active"',
            NAV_HTML
        )
        # If the element already had a class attribute (e.g. class="btn-account"),
        # the substitution above creates a second class="..." on the same tag.
        # Merge them into one instead of leaving invalid duplicate attributes.
        nav = re.sub(
            r'class="([^"]*)"( data-nav="' + re.escape(nav_key) + r'") class="active"',
            r'class="\1 active"\2',
            nav
        )
    else:
        nav = NAV_HTML

    # Replace site-nav placeholder OR existing <style>...</style>* + <nav ...>...</nav>
    if '<div id="site-nav"></div>' in c:
        c = c.replace('<div id="site-nav"></div>', nav)
    else:
        # NAV_HTML ships its own <style> block(s) (nav-prod-panel dropdown CSS)
        # right before <nav>. Earlier versions of this script only replaced the
        # <nav> tag itself, leaving stale style blocks behind on every rerun —
        # strip any of those duplicates too, or they silently pile up forever.
        c = re.sub(
            r'(?:<style>(?:(?!</style>).)*?nav-prod-panel(?:(?!</style>).)*?</style>\s*)*<nav\b[^>]*>.*?</nav>',
            nav,
            c,
            flags=re.DOTALL
        )

    # Replace site-footer placeholder OR existing <footer ...>...</footer> + toast/clipboard
    if '<div id="site-footer"></div>' in c:
        c = c.replace('<div id="site-footer"></div>', FOOTER_HTML)
    else:
        # Remove old inline footer + clipboard JS if present
        c = re.sub(r'<footer\b[^>]*>.*?</footer>', '', c, flags=re.DOTALL)
        c = re.sub(r'\s*<div class="copy-toast"[^>]*></div>\s*<script>\s*\(function\(\).*?\}\)\(\);\s*</script>', '', c, flags=re.DOTALL)
        # Insert before </body>
        c = c.replace('</body>', FOOTER_HTML + '\n</body>')

    # Remove the fetch-based loader script (no longer needed)
    c = re.sub(r'\s*<script>\s*\(function\(\)\s*\{[^<]*loadPartial[^<]*\}\)\(\);\s*</script>', '', c, flags=re.DOTALL)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(c)
    print(f'✓ {fname}')

print('\n완료 — 9개 페이지 nav/footer 업데이트됨.')
