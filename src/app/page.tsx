import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import DifferentiatorSection from '@/app/components/DifferentiatorSection';
import TrustSection from '@/app/components/TrustSection';
import CtaSection from '@/app/components/CtaSection';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export const metadata: Metadata = {
  title: 'Deutschlernzentrum: Online Deutschkurse',
  description: 'Online Deutschkurse mit zertifizierten und muttersprachlichen Lehrkräften. Sprache + Kultur vereint. Kurse A2–C1, Prüfungsvorbereitung und Konversation. Deutsch lernen und ankommen.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  openGraph: {
    title: 'Deutschlernzentrum: Online Deutschkurse',
    description: 'Online Deutschkurse mit zertifizierten Lehrkräften. Sprache + Kultur vereint.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
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

const courseTeaser = [
  {
    href: '/kurse/a2-c1',
    title: 'Sprachkurse A2–C1',
    desc: 'Strukturierter Unterricht nach GER – Grammatik, Wortschatz, Aussprache.',
    tags: ['A2', 'B1', 'B2', 'C1'],
    tagStyle: 'bg-primary/10 text-primary',
    style: 'bg-white border-border',
    titleStyle: 'text-primary',
  },
  {
    href: '/kurse/konversation',
    title: 'Konversation & Leben in DE',
    desc: 'Echtes Alltagsdeutsch – Kultur, Bürokratie, Gesellschaft.',
    tags: ['Alle Niveaus', 'Praxisnah'],
    tagStyle: 'bg-accent/10 text-accent',
    style: 'bg-primary border-primary/20',
    titleStyle: 'text-white',
    descStyle: 'text-white/70',
  },
  {
    href: '/kurse/prufungsvorbereitung',
    title: 'Prüfungsvorbereitung',
    desc: 'Gezielte Vorbereitung auf Telc- und Goethe-Zertifikatssprüfungen.',
    tags: ['Telc', 'Goethe'],
    tagStyle: 'bg-amber-100 text-amber-800',
    style: 'bg-white border-border',
    titleStyle: 'text-primary',
  },
];

export default function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Deutschlernzentrum: Online Deutschkurse',
    description: 'Online Deutschkurse mit zertifizierten und muttersprachlichen Lehrkräften.',
    url: baseUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Deutschlernzentrum',
      url: baseUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Header />
      <main>
        <HeroSection />
        <DifferentiatorSection />

        {/* Course Teaser Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal-up">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
                <span className="w-8 h-px bg-accent" />
                Unsere Kurse
                <span className="w-8 h-px bg-accent" />
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight text-balance">
                Drei Kurswege, ein Ziel
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Sprachkurse, Konversation oder Prüfungsvorbereitung – wir haben den richtigen Kurs für dich.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-children">
              {courseTeaser?.map((course) => (
                <Link
                  key={course?.href}
                  href={course?.href}
                  className={`reveal-up group flex flex-col rounded-3xl p-7 border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 card-shine ${course?.style}`}
                >
                  <h3 className={`text-xl font-extrabold mb-3 ${course?.titleStyle}`}>{course?.title}</h3>
                  <p className={`text-sm leading-relaxed mb-5 flex-1 ${course?.descStyle ?? 'text-muted-foreground'}`}>{course?.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {course?.tags?.map((tag) => (
                      <span key={tag} className={`px-3 py-1 rounded-full text-xs font-bold ${course?.tagStyle}`}>{tag}</span>
                    ))}
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${course?.titleStyle} group-hover:gap-2.5`}>
                    Mehr erfahren
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10 reveal-up">
              <Link href="/kurse" className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-white text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300 text-sm">
                Alle Kurse ansehen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        <TrustSection />
        <CtaSection />

        <section className="py-16 border-t border-border">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">
              Online Deutsch lernen mit dem Deutschlernzentrum
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Das Deutschlernzentrum bietet Online Deutschkurse für dein Niveau A2–C1.
              Wir helfen dir bei der Vorbereitung auf Goethe-Zertifikate,
              Telc-Prüfungen und dem sicheren Deutschsprechen im Alltag.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollRevealInit />
    </>
  );
}