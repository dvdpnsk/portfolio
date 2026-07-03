# Serkan David Pinske — Portfolio

Persönliche Portfolio-Website für Web-Entwicklung, IT-Sicherheit und KI-Lösungen.

## Tech Stack

- **React** — UI Framework
- **Vite** — Build Tool
- **Tailwind CSS** — Styling
- **Framer Motion** — Animationen
- **React Router** — Seitennavigation

## Seiten

| Route | Beschreibung |
|---|---|
| `/` | Startseite mit Hero und Projekten |
| `/info` | Über mich, Skills und Leistungen |
| `/contact` | Kontaktformular |
| `/project/:id` | Projekt-Detailseite |

## Projekte verwalten

Alle Projekte werden in `src/data/projects.js` gepflegt. Neues Projekt hinzufügen:

```js
{
  id: 'projekt-id',
  title: 'Projektname',
  category: 'Web Design & Development',
  year: '2025',
  description: 'Kurze Beschreibung.',
  tags: ['React', 'Tailwind'],
  image: 'URL zum Bild',
  color: '#f5f0eb',
  sections: [
    { number: '01', title: 'Überblick', text: 'Text...' },
    { number: '02', title: 'Lösung', text: 'Text...' },
  ],
}

Lokal starten

npm install
npm run dev

Deployment

npm run build

Der dist Ordner kann auf Netlify, Vercel oder einem beliebigen Hosting-Anbieter deployed werden.