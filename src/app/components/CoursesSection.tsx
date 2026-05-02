import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const levels = [
{ code: 'A2', label: 'Grundlegende Kenntnisse', color: 'bg-blue-100 text-blue-800' },
{ code: 'B1', label: 'Fortgeschrittene Grundkenntnisse', color: 'bg-teal-100 text-teal-800' },
{ code: 'B2', label: 'Selbstständige Verwendung', color: 'bg-amber-100 text-amber-800' },
{ code: 'C1', label: 'Fachkundige Sprachkenntnisse', color: 'bg-orange-100 text-orange-800' }];


const courseFeatures = [
'Klarer Lehrplan nach GER',
'Live-Unterricht mit Lehrkraft',
'Interaktive Übungen',
'Offizielles Zertifikat'];


const konvFeatures = [
'Freies Sprechen auf Deutsch',
'Alltagsthemen aus Deutschland',
'Kultur, Bürokratie, Gesellschaft',
'Praxisnahe Situationen üben'];


export default function CoursesSection() {
  return (
    <section id="kurse" className="py-20 bg-background scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
            <span className="w-8 h-px bg-accent" />
            Unsere Kurse
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight text-balance">
            Zwei Kurswege, ein Ziel
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ob strukturiertes Sprachtraining oder lebendiges Konversationstraining, wir haben den richtigen Kurs für dich.
          </p>
        </div>

        {/* Courses grid: 2 cards */}
        {/* BENTO GRID AUDIT: 2 cards total
             Row 1: [col-1: SprachkursCard cs-1] [col-2: KonversationCard cs-1]
             Placed 2/2 cards ✓ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card 1: Sprachkurse */}
          {/* col-1: SprachkursCard */}
          <div className="reveal-left bg-white rounded-3xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-500 group card-shine flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <AppImage
                src="/assets/images/Frau-Laptop.png"
                alt="Frau am Laptop"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 text-primary text-xs font-bold rounded-full">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Klassische Sprachkurse
                </span>
              </div>
            </div>

            <div className="p-7 flex flex-col flex-1">
              <h3 className="text-2xl font-extrabold text-primary mb-2">Sprachkurse A2–C1</h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Strukturierter Sprachunterricht nach dem Gemeinsamen Europäischen Referenzrahmen. Lerne Grammatik, Wortschatz und Aussprache auf Deutsch, von Anfang an.
                Eine Niveaustufe umfasst erfahrungsgemäß ca. 80 Unterrichtseinheiten (je 45 Min).
              </p>

              {/* Level badges */}
              {/* BENTO GRID AUDIT for level badges: 4 badges inline
                   Row 1: [A2] [B1] [B2] [C1] — all inline, no grid, 4/4 ✓ */}
              <div className="flex flex-wrap gap-2 mb-6">
                {levels?.map((level) =>
                <span key={level?.code} className={`px-3 py-1 rounded-full text-xs font-bold ${level?.color}`}>
                    {level?.code}
                  </span>
                )}
              </div>

              <ul className="space-y-2.5 mb-7 flex-1">
                {courseFeatures?.map((feat) =>
                <li key={feat} className="flex items-center gap-2.5 text-sm text-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {feat}
                  </li>
                )}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-primary/20 text-sm">

                Sprachkurs anfragen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 2: Konversationskurse */}
          {/* col-2: KonversationCard */}
          <div className="reveal-right bg-primary rounded-3xl overflow-hidden border border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-500 group card-shine flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <AppImage
                src="/assets/images/Videocall2.png"
                alt="Erwachsene im Videocall"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
              <div className="absolute bottom-4 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent text-white text-xs font-bold rounded-full">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Konversationskurse
                </span>
              </div>
            </div>

            <div className="p-7 flex flex-col flex-1">
              <h3 className="text-2xl font-extrabold text-white mb-2">Konversation & Leben in DE</h3>
              <p className="text-white/70 mb-5 leading-relaxed">
                Sprich von Anfang an. Lerne echtes Alltagsdeutsch und verstehe, wie das Leben in Deutschland wirklich aussieht: Kultur, Bürokratie, Gesellschaft.
              </p>

              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/20 text-accent border border-accent/30">
                  Alle Niveaus
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20">
                  Praxisnah
                </span>
              </div>

              <ul className="space-y-2.5 mb-7 flex-1">
                {konvFeatures?.map((feat) =>
                <li key={feat} className="flex items-center gap-2.5 text-sm text-white/90">
                    <span className="w-5 h-5 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {feat}
                  </li>
                )}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-bold rounded-2xl hover:bg-amber-600 transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-accent/30 text-sm">

                Konversationskurs anfragen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}