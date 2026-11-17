# Portfolio — Natalia Borzyk

Strona pod adresem **portfolio.nataliaborzyk.com** (GitHub Pages).

## Pliki
- `index.html` — strona główna
- `etsy-stores.html` — case study 5 sklepów Etsy
- `case-study.html` — case study naklejek 3D Vintage Murals
- `catalogue.html`, `honey-labels.html`, `darymex.html`, `patterns.html`, `digital.html`, `logos.html` — krótkie strony projektów
- `style.css` — wygląd obu stron
- `lang.js` — przełącznik EN/PL (pamięta wybór)
- `images/` — zdjęcia; listę nazw znajdziesz w `images/README.md`

## Jak zmienić tekst
- **Angielski**: bezpośrednio w `index.html` / `case-study.html`.
- **Polski**: na dole tego samego pliku, w bloku `window.PL = { ... }`.
  Zmieniaj tylko tekst w cudzysłowie, nie ruszaj nazw przed dwukropkiem.

## Publikacja (jednorazowo)
1. GitHub → **New** → nazwa `portfolio` → Public → Create repository.
2. **Add file → Upload files** → przeciągnij całą zawartość tego folderu (razem z folderem `images`) → Commit changes.
3. **Settings → Pages** → Branch: `main` → Save.
4. W tym samym miejscu, **Custom domain**: `portfolio.nataliaborzyk.com` → Save.
5. **Aruba → Gestione DNS → Add record**: typ `CNAME`, hostname `portfolio`, wartość `nataliaborzyk.github.io`, TTL 1 hour.
6. Gdy GitHub pokaże zielony komunikat → zaznacz **Enforce HTTPS**.

Nie zmieniaj istniejących rekordów A ani `mail` w Arubie.

## Zasady tekstów po polsku
Polskie teksty mają brzmieć naturalnie, a nie jak tłumaczenie z angielskiego:
- pełne zdania zamiast wyliczanek po dwukropku („zajmowałam się analizą rynku, nazwami…”, nie „analiza rynku, nazwy…”),
- myślnik (–) zamiast średnika i dwukropka tam, gdzie po polsku brzmi to lepiej,
- unikać kalk z angielskiego (np. „Przy każdym: …”, „zdobyły wierne grono” → „szybko zdobyły wiernych fanów”),
- czasowniki w 1. osobie, rodzaj żeński („stworzyłam”, „prowadziłam”).
Wzorcowe zdanie: „Dla drukarni stworzyłam od zera i prowadziłam pięć sklepów z dekoracjami ściennymi – zajmowałam się analizą rynku, nazwami, identyfikacją wizualną i projektem każdej oferty.”
