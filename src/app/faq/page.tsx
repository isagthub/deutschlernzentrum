'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

const faqCategories = [
  {
    category: 'Kurse & Angebot',
    items: [
      {
        q: 'Welche Kurse bietet das Deutschlernzentrum an?',
        a: 'Wir bieten drei Kursarten an: Sprachkurse A2–C1 nach GER, Konversationskurse für alle Niveaus sowie Prüfungsvorbereitungskurse für Telc- und Goethe-Zertifikate.',
      },
      {
        q: 'Für wen sind die Kurse geeignet?',
        a: 'Unsere Kurse richten sich an Jugendliche und Erwachsene jeden Alters, die Deutsch lernen oder verbessern möchten – ob für den Alltag, den Beruf oder eine offizielle Prüfung.',
      },
      {
        q: 'Wie lange dauert eine Niveaustufe?',
        a: 'Eine Niveaustufe (z. B. A2 oder B1) umfasst erfahrungsgemäß ca. 80 Unterrichtseinheiten à 45 Minuten. Das genaue Tempo hängt von dir und deiner Gruppe ab.',
      },
      {
        q: 'Kann ich mehrere Kursarten kombinieren?',
        a: 'Ja. Du kannst z. B. einen Sprachkurs mit einem Konversationskurs kombinieren. Sprich uns einfach an, wir finden gemeinsam das passende Modell.',
      },
    ],
  },
  {
    category: 'Unterricht & Lehrkräfte',
    items: [
      {
        q: 'Wer unterrichtet bei euch?',
        a: 'Alle unsere Lehrkräfte beherrschen Deutsch auf muttersprachlichem Niveau und sind als Sprachlehrer und Sprachlehrerinnen zertifiziert. Außerdem haben sie Erfahrung in der Jugend- und Erwachsenenlehre.',
      },
      {
        q: 'Wie läuft der Unterricht ab?',
        a: 'Der Unterricht findet 100% online und live statt. Du triffst dich mit deinem Lehrer oder deiner Lehrerin in einer Videokonferenz. Der Unterricht findet vollkommen live statt und du lernst mit einer echten Lehrkraft.',
      },
      {
        q: 'In welcher Sprache wird unterrichtet?',
        a: 'Alle Kurse laufen ausschließlich auf Deutsch – von Stunde 1 an. Das fördert aktives Sprechen und schnelles Lernen.',
      },
      {
        q: 'Wie groß sind die Gruppen?',
        a: 'Im Gruppenkurs lernen 3–5 Teilnehmende zusammen. Das garantiert echte Aufmerksamkeit und viel Sprechzeit für jeden.',
      },
    ],
  },
  {
    category: 'Preise & Buchung',
    items: [
      {
        q: 'Was kostet ein Kurs?',
        a: 'Der Einzelkurs/Privatkurs kostet 45 € pro Kurseinheit (45 Min) – du darfst bis zu 2 Personen kostenlos mitbringen. Der Gruppenkurs kostet 15 € pro Person pro Kurseinheit.',
      },
      {
        q: 'Gibt es eine Mindestanzahl an Stunden?',
        a: 'Nein. Du buchst so viele Stunden, wie du brauchst – ohne Mindestanzahl oder Vertragsbindung.',
      },
      {
        q: 'Was ist im Preis enthalten?',
        a: 'Alle Preise beinhalten den online Unterricht mit einer zertifizierten Lehrkraft und das Teilnahmezertifikat nach Levelabschluss.',
      },
      {
        q: 'Wie melde ich mich an?',
        a: 'Schreib uns über das Kontaktformular, per E-Mail oder WhatsApp. Wir melden uns schnellstmöglich und besprechen alles Weitere mit dir.',
      },
    ],
  },
  {
    category: 'Zertifikate & Prüfungen',
    items: [
      {
        q: 'Erhalte ich ein Zertifikat?',
        a: 'Ja. Nach Abschluss jedes GER-Levels erhältst du ein offizielles Teilnahmezertifikat von uns als Sprachschule.',
      },
      {
        q: 'Bereitet ihr auf offizielle Prüfungen vor?',
        a: 'Ja. Wir bieten gezielte Prüfungsvorbereitungskurse für Telc- und Goethe-Zertifikate an. Die Prüfung selbst legst du beim jeweiligen Prüfungsinstitut ab.',
      },
      {
        q: 'Welche Niveaus werden für Telc und Goethe angeboten?',
        a: 'Wir bereiten auf die Niveaus B1 bis C1 vor. Für spezifische Anfragen (z. B. A2 für Einbürgerung) kontaktiere uns bitte direkt.',
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/40 transition-colors duration-200"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-foreground pr-4">{q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="reveal-up max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
                <span className="w-8 h-px bg-accent" />
                FAQ
                <span className="w-8 h-px bg-accent" />
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight mb-6">
                Häufige Fragen
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hier findest du Antworten auf die häufigsten Fragen rund um unsere Kurse, Preise und den Unterricht.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="pb-20 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((cat) => (
                <div key={cat.category} className="reveal-up">
                  <h2 className="text-xl font-extrabold text-primary mb-5 flex items-center gap-3">
                    <span className="w-8 h-px bg-accent" />
                    {cat.category}
                  </h2>
                  <div className="space-y-3">
                    {cat.items.map((item) => (
                      <FaqItem key={item.q} q={item.q} a={item.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Still have questions */}
            <div className="mt-16 reveal-up bg-primary rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/30 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-2xl font-extrabold text-white mb-3">Noch Fragen?</h2>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Wir helfen dir gerne weiter – per WhatsApp, E-Mail oder über unser Kontaktformular.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary font-bold rounded-full hover:bg-muted transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
                    Kontakt aufnehmen
                  </Link>
                  <a href="https://wa.me/4915175034355" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/30 text-white font-bold rounded-full hover:border-white hover:bg-white/10 transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollRevealInit />
    </>
  );
}
