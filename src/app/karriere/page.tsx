import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import AppImage from '@/components/ui/AppImage';

export const metadata: Metadata = {
  title: 'Karriere | Deutschlernzentrum',
  description: 'Muttersprachliche und zertifizierte Sprachlehrkräfte können sich gerne initiativ beim Deutschlernzentrum bewerben.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/karriere`,
  },
  openGraph: {
    title: 'Karriere | Deutschlernzentrum',
    description: 'Wir suchen muttersprachliche und zertifizierte Sprachlehrkräfte.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/karriere`,
    type: 'website',
    images: [
      {
        url: '/assets/images/Deutschlehrerin.png',
        width: 1200,
        height: 630,
        alt: 'Deutschlehrerin im Online-Unterricht',
      },
    ],
  },
};

const values = [
  { icon: '🌍', title: 'Muttersprachlich', desc: 'Wir arbeiten ausschließlich mit Lehrkräften, die Deutsch auf muttersprachlichem Niveau beherrschen.' },
  { icon: '🎓', title: 'Zertifiziert', desc: 'Alle Lehrkräfte sind als Sprachlehrkräfte zertifiziert.' },
  { icon: '💻', title: '100% Online', desc: 'Unterrichte von überall, flexibel und ortsunabhängig.' },
  { icon: '❤️', title: 'Mit Leidenschaft', desc: 'Wir suchen Menschen, die Spaß daran haben, unsere deutsche Sprache und Kultur zu vermitteln.' },
];

export default function KarrierePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  <span className="w-8 h-px bg-accent" />
                  Karriere
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  Unterrichte mit uns.<br />
                  <span className="text-accent">Mach den Unterschied.</span>
                </h1>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  Du findest dich in unserer Beschreibung und unseren Anforderungen wieder? Dann freuen wir uns auf deine Initiativbewerbung! Wir sind stetig auf der Suche nach Lehrern und Lehrerinnen, die unser Team erweitern und die Sprache und Kultur mit Leidenschaft vermitteln wollen.
                </p>
                <a
                  href="mailto:kontakt@deutschlernzentrum.de?subject=Initiativbewerbung%20Lehrkraft"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white font-bold rounded-full hover:bg-amber-600 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-accent/30"
                >
                  Jetzt bewerben
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
              <div className="reveal-right">
                <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-2xl">
                  <AppImage src="/assets/images/Deutschlehrerin.png" alt="Zertifizierte Deutschlehrerin unterrichtet online" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we look for */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">Was wir suchen</h2>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                Wir suchen Lehrkräfte, die unsere Werte teilen und Deutsch mit Begeisterung unterrichten.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
              {values?.map((v) => (
                <div key={v?.title} className="reveal-up bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 text-center">
                  <div className="text-4xl mb-4">{v?.icon}</div>
                  <h3 className="text-base font-bold text-foreground mb-2">{v?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application section */}
        <section className="py-20 bg-muted/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="reveal-up bg-white rounded-3xl p-10 border border-border shadow-lg">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h2 className="text-2xl font-extrabold text-primary mb-4">Initiativbewerbung</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Muttersprachliche und zertifizierte Sprachlehrkräfte können sich jederzeit initiativ bei uns bewerben. Schick uns einfach eine kurze Vorstellung und deinen Lebenslauf per E-Mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kontakt@deutschlernzentrum.de?subject=Initiativbewerbung%20Lehrkraft"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-primary/20"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  kontakt@deutschlernzentrum.de
                </a>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Bitte nenne in deiner Bewerbung deine Qualifikationen, Erfahrungen und Verfügbarkeit.
              </p>
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
