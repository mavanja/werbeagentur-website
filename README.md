# Werbeagentur Website

Marketing-Website fuer eine Werbeagentur.

## Tech-Stack

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Formulare:** React Hook Form + Zod
- **E-Mail:** Nodemailer (Kontaktformular)
- **Deployment:** Docker auf Coolify

## Projektstruktur

```
src/
  app/           # Next.js App Router (Seiten + Layouts)
  components/    # Wiederverwendbare UI-Komponenten
  sections/      # Seiten-Sektionen (Hero, Services, etc.)
  lib/           # Utilities, Config, API-Helpers
  types/         # TypeScript-Typen
  content/       # Statische Inhalte (Texte, Case Studies)
public/
  images/        # Bilder und Assets
  fonts/         # Custom Fonts
```

## Setup

```bash
npm install
npm run dev
```

## Seiten

- `/` – Startseite (Hero, Leistungen-Teaser, Referenzen-Teaser, CTA)
- `/leistungen` – Alle Leistungen im Detail
- `/referenzen` – Case Studies / Projektbeispiele
- `/agentur` – Ueber die Agentur, Team, Werte
- `/kontakt` – Kontaktformular + Infos
- `/impressum` – Impressum
- `/datenschutz` – Datenschutzerklaerung
