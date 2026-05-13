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
  title: 'Konversationskurse | Deutschlernzentrum',
  description: 'Lerne echtes Alltagsdeutsch und verstehe das Leben in Deutschland. Konversationskurse für alle Niveaus – online und live.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/kurse/konversation`,
  },
  openGraph: {
    title: 'Konversationskurse | Deutschlernzentrum',
    description: 'Echtes Alltagsdeutsch und Leben in Deutschland. Für alle Niveaus.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/kurse/konversation`,
    type: 'website',
    images: [
      {
        url: '/assets/images/Videocall2.png',
        width: 1200,
        height: 630,
        alt: 'Gruppe von Erwachsenen im Online-Videocall',
      },
    ],
  },
};

const topics = [
  { emoji: '🏠', title: 'Wohnen & Alltag', desc: 'Wohnungssuche, Nachbarschaft, Einkaufen, Behördengänge.' },
  { emoji: '💼', title: 'Arbeit & Karriere', desc: 'Bewerbungsgespräche, Büroalltag, Networking auf Deutsch.' },
  { emoji: '🏥', title: 'Gesundheit & Bürokratie', desc: 'Arztbesuche, Versicherungen, Formulare verstehen.' },
  { emoji: '🎭', title: 'Kultur & Gesellschaft', desc: 'Deutsche Mentalität, Feiertage, Umgangsformen.' },
  { emoji: '🚆', title: 'Mobilität & Freizeit', desc: 'ÖPNV, Reisen, Sport und Freizeitgestaltung.' },
  { emoji: '👨‍👩‍👧', title: 'Familie & Schule', desc: 'Kita, Schulsystem, Elterngespräche, Familienalltag.' },
];

const features = [
  { title: 'Freies Sprechen auf Deutsch', desc: 'Kein Lehrbuch-Deutsch – echte Gespräche über echte Themen.' },
  { title: 'Alltagsthemen aus Deutschland', desc: 'Direkt anwendbar im deutschen Alltag.' },
  { title: 'Kultur, Bürokratie, Gesellschaft', desc: 'Du verstehst nicht nur die Sprache, sondern auch das Land.' },
  { title: 'Praxisnahe Situationen üben', desc: 'Rollenspiele, Diskussionen und Szenarien aus dem echten Leben.' },
];

export default function KonversationPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-sm text-white/60 mb-6 reveal-up">
              <Link href="/kurse" className="hover:text-white transition-colors">Kurse</Link>
              <span>/</span>
              <span className="text-white/90 font-medium">Konversation</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  <span className="w-8 h-px bg-accent" />
                  Konversationskurse
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  Konversation &<br />
                  <span className="text-accent">Leben in DE</span>
                </h1>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  Sprich von Anfang an. Lerne echtes Alltagsdeutsch und verstehe, wie das Leben in Deutschland wirklich aussieht: Kultur, Bürokratie, Gesellschaft. Für alle Niveaus geeignet.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-4 py-2 rounded-full text-sm font-bold bg-accent/20 text-accent border border-accent/30">Alle Niveaus</span>
                  <span className="px-4 py-2 rounded-full text-sm font-bold bg-white/10 text-white border border-white/20">Praxisnah</span>
                  <span className="px-4 py-2 rounded-full text-sm font-bold bg-white/10 text-white border border-white/20">Live-Unterricht</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/kontakt" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white font-bold rounded-full hover:bg-amber-600 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-accent/30">
                    Kurs anfragen
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link href="/preise" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:border-white hover:bg-white/10 transition-all duration-300">
                    Preise ansehen
                  </Link>
                </div>
              </div>
              <div className="reveal-right">
                <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-2xl">
                  <AppImage src="/assets/images/Videocall2.png" alt="Gruppe von Erwachsenen im Online-Videocall" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">Themen im Kurs</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Wir behandeln die Themen, die im deutschen Alltag wirklich wichtig sind.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {topics?.map((topic) => (
                <div key={topic?.title} className="reveal-up bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                  <div className="text-3xl mb-3">{topic?.emoji}</div>
                  <h3 className="text-base font-bold text-foreground mb-2">{topic?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{topic?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-8">Was dich erwartet</h2>
                <ul className="space-y-5">
                  {features?.map((f) => (
                    <li key={f?.title} className="flex items-start gap-4">
                      <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      </span>
                      <div>
                        <p className="text-sm font-bold text-foreground">{f?.title}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{f?.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reveal-right">
                <div className="relative h-[360px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/15 border border-border">
                  <AppImage src="/assets/images/Videocall.png" alt="Vier Erwachsene im Videocall" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                </div>
              </div>
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
