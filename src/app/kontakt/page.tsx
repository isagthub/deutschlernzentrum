import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from './components/ContactForm';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export const metadata: Metadata = {
  title: 'Kontakt | Deutschlernzentrum',
  description: 'Kontaktiere uns für Fragen zu unseren Deutschkursen. Wir helfen dir gerne weiter.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/kontakt`,
  },
  openGraph: {
    title: 'Kontakt | Deutschlernzentrum',
    description: 'Kontaktiere uns für Fragen zu unseren Deutschkursen.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/kontakt`,
    type: 'website',
    images: [
      {
        url: '/assets/images/Videocall.png',
        width: 1200,
        height: 630,
        alt: 'Videocall mit Deutschlehrerin',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">

        {/* ── Hero ─────────────────────────────────────────────── */}
         <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/40 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[90px] pointer-events-none" />
          {/* Dot grid */}
          <div
           
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end gap-10 pb-16">
              {/* Left: headline */}
              <div className="flex-1 max-w-2xl reveal-up">
                <a
                  href="/"
                  className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-sm font-medium mb-8 group"
                >
                  <svg className="group-hover:-translate-x-0.5 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                  Zurück zur Startseite
                </a>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/20 border border-accent/30 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-bold text-accent uppercase tracking-widest">Kontakt</span>
       </div>
       

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5">
                  Schreib uns!<br />
                  <span className="gold-scan-text">Wir freuen uns</span><br />
                  auf dich.
                </h1>
                <p className="text-lg text-white/65 leading-relaxed max-w-lg">
                  Fragen zum Kurs, zum Niveau oder zum Ablauf? Wir antworten persönlich — meist innerhalb von 24 Stunden.
                </p>
              </div>

              {/* Right: quick stats */}
              <div className="flex gap-4 lg:gap-6 pb-2 reveal-right">
                {[
                  { value: '< 24h', label: 'Antwortzeit' },
                  { value: '100%', label: 'Persönlich' },
                  { value: 'Gratis', label: 'Erstberatung' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center text-center px-5 py-4 bg-white/8 border border-white/12 rounded-2xl backdrop-blur-sm min-w-[90px]">
                    <span className="text-2xl font-extrabold text-white">{stat.value}</span>
                    <span className="text-xs text-white/55 mt-1 font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wave divider */}
          <div className="relative z-10 -mb-px">
            <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: 56 }}>
              <path d="M0 56 C360 0 1080 0 1440 56 L1440 56 L0 56 Z" fill="var(--background)" />
            </svg>
          </div>
        </section>

        {/* ── Main content ─────────────────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

              {/* ── Contact Form (7 cols) ── */}
              <div className="lg:col-span-7 reveal-up">
                <ContactForm />
              </div>

              {/* ── Sidebar (5 cols) ── */}
              <aside className="lg:col-span-5 flex flex-col gap-5">

                {/* Direct contact card */}
                <div className="bg-white rounded-3xl p-7 border border-border shadow-sm reveal-right">
                  <h2 className="text-base font-bold text-primary mb-5 flex items-center gap-2">
                    <span className="w-6 h-6 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                      </svg>
                    </span>
                    Direkter Kontakt
                  </h2>

                  <div className="space-y-4">
                    {/* Email */}
                    <a
                      href="mailto:kontakt@deutschlernzentrum.de"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-muted/40 hover:bg-primary/5 border border-transparent hover:border-primary/15 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-0.5">E-Mail</div>
                        <div className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                          kontakt@deutschlernzentrum.de
                        </div>
                      </div>
                      <svg className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/4915175034355"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 hover:bg-green-100 border border-green-100 hover:border-green-200 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-green-600/70 mb-0.5">WhatsApp</div>
                        <div className="text-sm font-semibold text-green-800">+49 151 75034355</div>
                      </div>
                      <svg className="ml-auto flex-shrink-0 text-green-500 group-hover:translate-x-0.5 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* What to expect */}
                <div className="bg-primary rounded-3xl p-7 text-white reveal-right delay-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                  <h3 className="text-base font-bold mb-5 relative z-10">Was dich erwartet</h3>
                  <ul className="space-y-4 relative z-10">
                    {[
                      { icon: '/icons/Uhr.svg', text: 'Antwort innerhalb von 24 Stunden' },
                      { icon: '🎯', text: 'Persönliche Kursempfehlung für dein Niveau' },
                      { icon: '💬', text: 'Kostenlose Erstberatung ohne Verpflichtung' },
                      { icon: '🌍', text: 'Unterricht 100 % online – von überall' },
                    ].map((item) => (
                      <li key={item.text} className="flex items-start gap-3">
                        <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                        <span className="text-sm text-white/80 leading-snug">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ teaser */}
                <a
                  href="/faq"
                  className="reveal-right delay-200 flex items-center gap-4 p-5 bg-accent/8 border border-accent/20 rounded-2xl hover:bg-accent/12 hover:border-accent/35 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/25 transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-foreground">Häufige Fragen</div>
                    <div className="text-xs text-muted-foreground mt-0.5">Vielleicht ist deine Frage schon beantwortet</div>
                  </div>
                  <svg className="flex-shrink-0 text-accent group-hover:translate-x-0.5 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>

              </aside>
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
