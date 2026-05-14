import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaSection from '@/app/components/CtaSection';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export const metadata: Metadata = {
  title: 'Preise | Deutschlernzentrum',
  description: 'Transparente Preise für Einzel- und Gruppenkurse. Keine versteckten Kosten, kein langer Vertrag.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/preise`,
  },
  openGraph: {
    title: 'Preise | Deutschlernzentrum',
    description: 'Transparente Preise für Einzel- und Gruppenkurse.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/preise`,
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

const pricingPlans = [
  {
    id: 'single',
    name: 'Einzelkurs',
    tagline: 'Für dich und deine Begleitung',
    price: '45',
    unit: '/ Kurseinheit (45 Min)',
    highlight: false,
    badge: null,
    description: 'Du buchst einen Platz und darfst bis zu 2 weitere Personen kostenlos mitbringen.',
    features: [
      'Du + 2 Begleitpersonen inklusive',
      'Kostenfreies Kennlerntreffen mit Ersteinschätzung deines Niveaus',
      'Live-Unterricht mit Lehrkraft',
      'Flexibler Termin',
      'Offizielles Teilnahmezertifikat nach Levelabschluss',
      'Keine Mindestanzahl an Stunden',
    ],
    cta: 'Einzelkurs anfragen',
    ctaHref: '/kontakt',
  },
  {
    id: 'group',
    name: 'Gruppenkurs',
    tagline: 'Gemeinsam lernen, günstiger',
    price: '15',
    unit: '/ Person / Kurseinheit (45 Min)',
    highlight: false,
    badge: null,
    description: 'Lerne in einer kleinen Gruppe von 3–5 Teilnehmenden für maximale Interaktion.',
    features: [
      '3–5 Teilnehmende pro Kurs',
      'Intensiver Austausch im Team',
      'Live-Unterricht mit Lehrkraft',
      'Offizielles Zertifikat nach Level',
      'Ein Kurs, eine Niveaustufe',
    ],
    cta: 'Gruppenkurs anfragen',
    ctaHref: '/kontakt',
  },
];

const faqs = [
  { q: 'Gibt es eine Mindestanzahl an Stunden?', a: 'Nein. Du buchst so viele Stunden, wie du brauchst – ohne Mindestanzahl oder Vertragsbindung.' },
  { q: 'Was ist im Preis enthalten?', a: 'Alle Preise beinhaltenden online Unterricht mit einer zertifizierten Lehrkraft und das Teilnahmezertifikat nach Levelabschluss.' },
  { q: 'Kann ich Kurse kombinieren?', a: 'Ja. Du kannst z. B. einen Sprachkurs mit einem Konversationskurs kombinieren. Sprich uns einfach an.' },
  { q: 'Wie bezahle ich?', a: 'Die Zahlungsmodalitäten besprechen wir individuell nach deiner Kursanfrage.' },
];

export default function PreisePage() {
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
                Preise
                <span className="w-8 h-px bg-accent" />
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight mb-6">
                Transparente Preise
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Keine versteckten Kosten. Kein langer Vertrag. Einfach anfangen.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {pricingPlans?.map((plan) => (
                <div
                  key={plan?.id}
                  className="reveal-up flex flex-col rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 card-shine relative bg-white border-border shadow-md"
                >
                  <div className="text-xs font-bold uppercase tracking-widest mb-2 text-muted-foreground">
                    {plan?.name}
                  </div>
                  <div className="text-sm mb-6 text-muted-foreground">
                    {plan?.tagline}
                  </div>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-6xl font-extrabold tracking-tighter text-primary">
                      {plan?.price}€
                    </span>
                  </div>
                  <div className="text-sm mb-6 text-muted-foreground">
                    {plan?.unit}
                  </div>
                  <p className="text-sm mb-7 leading-relaxed text-muted-foreground">
                    {plan?.description}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan?.features?.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-primary/10">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        </span>
                        <span className="text-foreground">{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan?.ctaHref}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-2xl transition-all duration-300 hover:-translate-y-0.5 text-sm bg-primary text-white hover:bg-secondary shadow-md shadow-primary/20"
                  >
                    {plan?.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8 reveal-up">
              Fragen? Schreib uns auf{' '}
              <a href="https://wa.me/4915175034355" className="text-primary font-semibold hover:text-accent transition-colors">WhatsApp</a>{' '}
              oder per{' '}
              <a href="mailto:kontakt@deutschlernzentrum.de" className="text-primary font-semibold hover:text-accent transition-colors">E-Mail</a>.
            </p>
          </div>
        </section>

        {/* FAQ teaser */}
        <section className="py-16 bg-muted/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-primary mb-8 reveal-up">Häufige Fragen zu den Preisen</h2>
            <div className="space-y-4 stagger-children">
              {faqs?.map((faq) => (
                <div key={faq?.q} className="reveal-up bg-white rounded-2xl p-6 border border-border shadow-sm">
                  <p className="text-sm font-bold text-foreground mb-2">{faq?.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq?.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center reveal-up">
              <Link href="/faq" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors text-sm">
                Alle FAQs ansehen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
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
