# Ying & Yang - Official Website

En modern Next.js-webbplats för artist/DJ-duon Ying & Yang, inspirerad av r3hab.com.

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Installation

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000) i din webbläsare.

## Projektstruktur

```
app/
  components/     # Alla React-komponenter
  globals.css     # Globala Tailwind-stilar
  layout.tsx      # Root layout med metadata
  page.tsx        # Huvudsida med alla sektioner
public/           # Statiska filer (bilder, audio)
```

## Anpassning

Se instruktioner i toppen av `app/page.tsx` för hur du:
- Byter bilder
- Justerar fade-överlapp mellan Hero och Shows-sektioner
- Uppdaterar dummy-data

## Funktioner

- ✅ Sticky navbar med transparent/solid transition
- ✅ Hero med parallax-effekt
- ✅ Sömlös fade-överlapp mellan sektioner
- ✅ Responsiv design för alla enheter
- ✅ Framer Motion-animationer
- ✅ Tillgänglighet (ARIA-labels, fokusstilar)
- ✅ SEO-optimerad med metadata

