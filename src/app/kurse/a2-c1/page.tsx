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
  title: 'Sprachkurse A2–C1 | Deutschlernzentrum',
  description: 'Strukturierter Deutschunterricht nach GER für die Niveaus A2, B1, B2 und C1. Live-Unterricht mit zertifizierten Muttersprachlerinnen.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/kurse/a2-c1`,
  },
  openGraph: {
    title: 'Sprachkurse A2–C1 | Deutschlernzentrum',
    description: 'Strukturierter Deutschunterricht nach GER. Live-Unterricht mit zertifizierten Lehrkräften.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/kurse/a2-c1`,
    type: 'website',
    images: [
      {
        url: '/assets/images/Frau-Laptop.png',
        width: 1200,
        height: 630,
        alt: 'Frau lernt Deutsch am Laptop',
      },
    ],
  },
};

const levels = [
  { code: 'A2', label: 'Grundlegende Kenntnisse', color: 'bg-blue-100 text-blue-800', desc: 'Du kannst einfache Sätze verstehen und dich in vertrauten Situationen verständigen.' },
  { code: 'B1', label: 'Fortgeschrittene Grundkenntnisse', color: 'bg-teal-100 text-teal-800', desc: 'Du verstehst die Hauptpunkte klarer Standardsprache und kannst dich zusammenhängend ausdrücken.' },
  { code: 'B2', label: 'Selbstständige Verwendung', color: 'bg-amber-100 text-amber-800', desc: 'Du kannst komplexe Texte verstehen und dich spontan und fließend verständigen.' },
  { code: 'C1', label: 'Fachkundige Sprachkenntnisse', color: 'bg-orange-100 text-orange-800', desc: 'Du kannst anspruchsvolle Texte verstehen und dich spontan, fließend und präzise ausdrücken.' },
];

const features = [
  { icon: '📋', title: 'Klarer Lehrplan nach GER', desc: 'Jede Niveaustufe folgt dem Gemeinsamen Europäischen Referenzrahmen für Sprachen.' },
  { icon: '🎥', title: 'Live-Unterricht', desc: 'Echter Unterricht mit einer Lehrkraft – keine aufgezeichneten Videos, kein Selbststudium.' },
  { icon: '✍️', title: 'Interaktive Übungen', desc: 'Grammatik, Wortschatz, Aussprache und Schreiben – alles praxisnah geübt.' },
  { icon: '🏅', title: 'Offizielles Zertifikat', desc: 'Nach Abschluss jedes Levels erhältst du ein Teilnahmezertifikat von uns als Sprachschule.' },
];

export default function A2C1Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 reveal-up">
              <Link href="/kurse" className="hover:text-primary transition-colors">Kurse</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Sprachkurse A2–C1</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  <span className="w-8 h-px bg-accent" />
                  Klassische Sprachkurse
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight mb-6">
                  Sprachkurse<br />
                  <span className="text-accent">A2 bis C1</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Strukturierter Sprachunterricht nach dem Gemeinsamen Europäischen Referenzrahmen. Lerne Grammatik, Wortschatz und Aussprache auf Deutsch – von Anfang an. Eine Niveaustufe umfasst erfahrungsgemäß ca. 80 Unterrichtseinheiten à 45 Minuten.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {levels?.map((l) => (
                    <span key={l?.code} className={`px-4 py-2 rounded-full text-sm font-bold ${l?.color}`}>{l?.code}</span>
                  ))}
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
                  <AppImage src="/assets/images/Frau-Laptop.png" alt="Frau lernt Deutsch am Laptop" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Levels */}
        <section className="py-20 bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">Niveaustufen im Überblick</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Jede Stufe baut auf der vorherigen auf. Wir testen dein Niveau und empfehlen den passenden Einstieg.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
              {levels?.map((level) => (
                <div key={level?.code} className="reveal-up bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1.5 rounded-full text-sm font-extrabold ${level?.color}`}>{level?.code}</span>
                    <span className="text-sm font-semibold text-foreground">{level?.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{level?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">Was dich erwartet</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
              {features?.map((f) => (
                <div key={f?.title} className="reveal-up bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 text-center">
                  <div className="text-3xl mb-4">{f?.icon}</div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{f?.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f?.desc}</p>
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
