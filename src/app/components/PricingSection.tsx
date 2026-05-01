import React from 'react';
import Link from 'next/link';

const pricingPlans = [
  {
    id: 'single',
    name: 'Einzelkurs',
    tagline: 'Für dich und deine Begleitung',
    price: '45',
    unit: '/ Kurseinheit (45Min)',
    highlight: false,
    badge: null,
    description: 'Du buchst einen Platz und darfst bis zu 2 weitere Personen kostenlos mitbringen.',
    features: [
      'Du + 2 Begleitpersonen inklusive',
      'Live-Unterricht mit Lehrkraft',
      'Flexibler Termin',
      'Offizielles Teilnahmezertifikat nach Levelabschluss',
      'So viele Stunden wie du brauchst, keine Mindestanzahl'
    ],
    cta: 'Einzelkurs buchen',
    ctaHref: '/contact',
  },
  {
    id: 'group',
    name: 'Gruppenkurs',
    tagline: 'Gemeinsam lernen, günstiger',
    price: '15',
    unit: '/ Person / Kurseinheit (45Min)',
    highlight: true,
    badge: 'Beliebt',
    description: 'Lerne in einer kleinen Gruppe von 3–5 Teilnehmenden für maximale Interaktion.',
    features: [
      '3–5 Teilnehmende pro Kurs',
      'Intensiver Austausch im Team',
      'Live-Unterricht mit Lehrkraft',
      'Offizielles Zertifikat nach Level',
      'ein Kurs, eine Niveaustufe'
    ],
    cta: 'Gruppenkurs anfragen',
    ctaHref: '/contact',
  },
];

export default function PricingSection() {
  return (
    <section id="preise" className="py-20 bg-muted/40 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
            <span className="w-8 h-px bg-accent" />
            Preise
            <span className="w-8 h-px bg-accent" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            Transparente Preise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Keine versteckten Kosten. Kein langer Vertrag. Einfach anfangen.
          </p>
        </div>

        {/* BENTO GRID AUDIT: 2 pricing cards
            Row 1: [col-1: SingleCard cs-1] [col-2: GroupCard cs-1]
            Placed 2/2 cards ✓ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {pricingPlans?.map((plan) => (
            <div
              key={plan?.id}
              className={`reveal-up flex flex-col rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 card-shine ${
                plan?.highlight
                  ? 'bg-primary border-primary shadow-2xl shadow-primary/30 relative overflow-hidden'
                  : 'bg-white border-border shadow-md'
              }`}
            >
              {plan?.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-amber-400 to-accent" />
              )}

              {plan?.badge && (
                <div className="absolute top-5 right-5 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                  {plan?.badge}
                </div>
              )}

              <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan?.highlight ? 'text-accent' : 'text-muted-foreground'}`}>
                {plan?.name}
              </div>
              <div className={`text-sm mb-6 ${plan?.highlight ? 'text-white/70' : 'text-muted-foreground'}`}>
                {plan?.tagline}
              </div>

              {/* Price */}
              <div className="flex items-end gap-2 mb-2">
                <span className={`text-6xl font-extrabold tracking-tighter ${plan?.highlight ? 'text-white' : 'text-primary'}`}>
                  {plan?.price}€
                </span>
              </div>
              <div className={`text-sm mb-6 ${plan?.highlight ? 'text-white/60' : 'text-muted-foreground'}`}>
                {plan?.unit}
              </div>

              <p className={`text-sm mb-7 leading-relaxed ${plan?.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                {plan?.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan?.features?.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan?.highlight ? 'bg-accent/30' : 'bg-primary/10'
                    }`}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={plan?.highlight ? 'var(--accent)' : 'var(--primary)'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </span>
                    <span className={plan?.highlight ? 'text-white/90' : 'text-foreground'}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan?.ctaHref}
                className={`inline-flex items-center justify-center gap-2 px-6 py-4 font-bold rounded-2xl transition-all duration-300 hover:-translate-y-0.5 text-sm ${
                  plan?.highlight
                    ? 'bg-accent text-white hover:bg-amber-600 shadow-md shadow-accent/30'
                    : 'bg-primary text-white hover:bg-secondary shadow-md shadow-primary/20'
                }`}
              >
                {plan?.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-muted-foreground mt-8 reveal-up">
          Alle Preise inkl. Kursmaterial. Fragen? Schreib uns auf{' '}
          <a href="https://wa.me/4915175034355" className="text-primary font-semibold hover:text-accent transition-colors">
            WhatsApp
          </a>{' '}
          oder per{' '}
          <a href="mailto:kontakt@deutschlernzentrum.de" className="text-primary font-semibold hover:text-accent transition-colors">
            E-Mail
          </a>
          .
        </p>
      </div>
    </section>
  );
}