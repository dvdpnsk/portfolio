export const projects = [
  {
    id: 'friseursalon',
    title: 'Amara Studio',
    category: 'Web Design & Development',
    year: '2026',
    description: 'Volles Buchungssystem für einen Beauty-Salon — kein Mockup, sondern eine produktiv nutzbare Web-App mit echter Datenbank, Admin-Bereich und automatisierten E-Mails.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    image: '/projects/amara-studio/hero-crop.png',
    color: '#ece7e0',
    liveUrl: 'https://demo-salon-henna.vercel.app',
  },
  {
    id: 'restaurant',
    title: 'Restaurant Mezze',
    category: 'Web Design & Development',
    year: '2025',
    description: 'Digitale Speisekarte, Reservierungssystem und Google Maps Integration für ein lokales Restaurant.',
    tags: ['React', 'Tailwind', 'Vite'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    color: '#f0f4f0',
    sections: [
      {
        number: '01',
        title: 'Überblick',
        text: 'Das Restaurant hatte keine digitale Präsenz und verlor Kunden an Konkurrenten mit besserer Online-Sichtbarkeit.',
      },
      {
        number: '02',
        title: 'Lösung',
        text: 'Eine elegante Website mit digitaler Speisekarte, Online-Reservierung und Integration in Google Maps.',
      },
    ],
  },
  {
    id: 'chatbot',
    title: 'KI-Chatbot Demo',
    category: 'KI & Automatisierung',
    year: '2025',
    description: 'Einbettbarer Kundenservice-Chatbot der Anfragen automatisch beantwortet — 24/7.',
    tags: ['React', 'KI', 'API'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    color: '#f0f0f5',
    sections: [
      {
        number: '01',
        title: 'Überblick',
        text: 'Kleine Unternehmen verlieren potenzielle Kunden wenn Anfragen außerhalb der Öffnungszeiten nicht beantwortet werden.',
      },
      {
        number: '02',
        title: 'Lösung',
        text: 'Ein KI-gestützter Chatbot der auf der Website eingebettet wird und häufige Fragen automatisch beantwortet.',
      },
    ],
  },
]