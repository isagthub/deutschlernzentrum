import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaSection from '@/app/components/CtaSection';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import AppImage from '@/components/ui/AppImage';

export const metadata: Metadata = {
  title: 'Prüfungsvorbereitung Telc & Goethe | Deutschlernzentrum',
  description: 'Gezielte Vorbereitung auf Telc- und Goethe-Zertifikatssprüfungen. Lerne Prüfungsstrategien, übe Prüfungsformate und bestehe deine Deutschprüfung.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/kurse/pruefungsvorbereitung`,
  },
  openGraph: {
    title: 'Prüfungsvorbereitung Telc & Goethe | Deutschlernzentrum',
    description: 'Gezielte Vorbereitung auf Telc- und Goethe-Zertifikatssprüfungen.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/kurse/pruefungsvorbereitung`,
    type: 'website',
    images: [
      {
        url: '/assets/images/Qualitaetskontrolle.png',
        width: 1200,
        height: 630,
        alt: 'Qualitätskontrolle im Deutschunterricht',
      },
    ],
  },
};

const exams = [
  {
    name: 'Telc',
    fullName: 'The European Language Certificates',
    levels: ['A2', 'B1', 'B2', 'C1', 'C2'],
    color: 'border-blue-200 bg-blue-50',
    badgeColor: 'bg-blue-100 text-blue-800',
    desc: 'Telc-Zertifikate sind staatlich anerkannte Sprachzertifikate, die in Deutschland und Europa weit verbreitet sind – z. B. für Einbürgerung, Visum oder Berufsanerkennung.',
  },
  {
    name: 'Goethe',
    fullName: 'Goethe-Institut Zertifikate',
    levels: ['A2', 'B1', 'B2', 'C1', 'C2'],
    color: 'border-amber-200 bg-amber-50',
    badgeColor: 'bg-amber-100 text-amber-800',
    desc: 'Goethe-Zertifikate sind weltweit anerkannte Deutschprüfungen des Goethe-Instituts – ideal für Studium, Arbeit und Einwanderung.',
  },
];

const preparation = [
  { icon: '/icons/Notizen.svg', title: 'Prüfungsformat kennenlernen', desc: 'Wir erklären den genauen Aufbau der Prüfung: Hören, Lesen, Schreiben, Sprechen.' },
  { icon: '/icons/Ziel.svg', title: 'Gezielte Strategien', desc: 'Du lernst, wie du Aufgaben effizient löst und keine Punkte verschenkst.' },
  { icon: '/icons/Wiederholen.svg', title: 'Übungsaufgaben & Musterprüfungen', desc: 'Wir üben mit echten Prüfungsaufgaben und simulieren die Prüfungssituation.' },
  { icon: '/icons/Sprechen.svg', title: 'Mündliche Prüfung trainieren', desc: 'Besondere Aufmerksamkeit für den Sprechteil – oft der schwierigste Teil.' },
  { icon: '/icons/Schreiben.svg', title: 'Schreiben üben', desc: 'Briefe, E-Mails und Texte nach Prüfungsstandard verfassen und korrigieren.' },
  { icon: '/icons/Lupe.svg', title: 'Individuelle Schwächen angehen', desc: 'Wir identifizieren deine Lücken und arbeiten gezielt daran.' },
];

export default function PruefungsvorbereitungPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 reveal-up">
              <Link href="/kurse" className="hover:text-primary transition-colors">Kurse</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Prüfungsvorbereitung</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  <span className="w-8 h-px bg-accent" />
                  Prüfungsvorbereitung
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-6">
                  Telc & Goethe –<br />
                  <span className="text-accent">Besteh deine Prüfung.</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Wir bereiten dich gezielt auf Telc- und Goethe-Zertifikatsprüfungen vor. Du lernst das Prüfungsformat kennen, übst mit echten Aufgaben und entwickelst die Strategien, die du brauchst, um zu bestehen.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 rounded-full text-sm font-bold bg-blue-100 text-blue-800">Telc</span>
                  <span className="px-4 py-2 rounded-full text-sm font-bold bg-amber-100 text-amber-800">Goethe</span>
                  <span className="px-4 py-2 rounded-full text-sm font-bold bg-primary/10 text-primary">A2–C2</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/kontakt" className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/20">
                    Kurs anfragen
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/preise" className="inline-flex items-center gap-2 px-6 py-3.5 border border-border bg-white text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300">
                    Preise ansehen
                  </Link>
                </div>
              </div>
              <div className="reveal-right">
                <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/15 border border-border">
                  <AppImage src="/assets/images/Qualitaetskontrolle.png" alt="Lernende bereiten sich auf eine Deutschprüfung vor" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exam types */}
        <section className="py-20 bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">Welche Prüfungen?</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Wir bereiten dich auf die zwei wichtigsten Deutschzertifikate vor.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto stagger-children">
              {exams?.map((exam) => (
                <div key={exam?.name} className={`reveal-up rounded-3xl p-8 border-2 ${exam?.color}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-4 py-2 rounded-full text-lg font-extrabold ${exam?.badgeColor}`}>{exam?.name}</span>
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">{exam?.fullName}</p>
                  <p className="text-sm text-foreground leading-relaxed mb-5">{exam?.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exam?.levels?.map((l) => (
                      <span key={l} className={`px-3 py-1 rounded-full text-xs font-bold ${exam?.badgeColor}`}>{l}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation content */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">So bereiten wir dich vor</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {preparation?.map((item) => (
                <div key={item?.title} className="reveal-up bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="mb-4 flex justify-center">
  <img
    src={item?.icon}
    alt={item?.title}
    className="w-10 h-10 transition-transform hover:scale-110"
  />
</div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{item?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollRevealInit />
    </>
  );
}
