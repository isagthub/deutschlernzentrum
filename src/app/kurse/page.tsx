import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CtaSection from '@/app/components/CtaSection';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import AppImage from '@/components/ui/AppImage';

export const metadata = {
  title: 'Kurse | Deutschlernzentrum',
  description: 'Entdecke unsere Deutsch-Sprachkurse: Sprachkurse A2–C1, Konversationskurse und Prüfungsvorbereitung für Telc und Goethe.',
};

const courses = [
  {
    href: '/kurse/a2-c1',
    image: '/assets/images/Frau-Laptop.png',
    alt: 'Frau lernt Deutsch am Laptop',
    badge: 'Klassische Sprachkurse',
    badgeColor: 'bg-white/95 text-primary',
    title: 'Sprachkurse A2–C1',
    description:
      'Strukturierter Sprachunterricht nach dem Gemeinsamen Europäischen Referenzrahmen. Grammatik, Wortschatz und Aussprache – von Anfang an auf Deutsch.',
    tags: ['A2', 'B1', 'B2', 'C1'],
    tagStyle: 'bg-primary/10 text-primary',
    cta: 'Mehr erfahren',
    cardStyle: 'bg-white border-border',
    titleStyle: 'text-primary',
    descStyle: 'text-muted-foreground',
    ctaStyle: 'bg-primary text-white hover:bg-secondary shadow-primary/20',
  },
  {
    href: '/kurse/konversation',
    image: '/assets/images/Videocall2.png',
    alt: 'Gruppe von Erwachsenen im Online-Videocall',
    badge: 'Konversationskurse',
    badgeColor: 'bg-accent text-white',
    title: 'Konversation & Leben in DE',
    description:
      'Sprich von Anfang an. Lerne echtes Alltagsdeutsch und verstehe, wie das Leben in Deutschland wirklich aussieht: Kultur, Bürokratie, Gesellschaft.',
    tags: ['Alle Niveaus', 'Praxisnah'],
    tagStyle: 'bg-white/10 text-white border border-white/20',
    cta: 'Mehr erfahren',
    cardStyle: 'bg-primary border-primary/20',
    titleStyle: 'text-white',
    descStyle: 'text-white/70',
    ctaStyle: 'bg-accent text-white hover:bg-amber-600 shadow-accent/30',
  },
  {
    href: '/kurse/prufungsvorbereitung',
    image: '/assets/images/Qualitaetskontrolle.png',
    alt: 'Lernende bereiten sich auf eine Deutschprüfung vor',
    badge: 'Prüfungsvorbereitung',
    badgeColor: 'bg-white/95 text-accent',
    title: 'Prüfungsvorbereitung',
    description:
      'Gezielte Vorbereitung auf Telc- und Goethe-Zertifikatsprüfungen. Wir trainieren Prüfungsformat, Strategien und Sprachkompetenz für deinen Erfolg.',
    tags: ['Telc', 'Goethe', 'B1–C1'],
    tagStyle: 'bg-accent/10 text-accent',
    cta: 'Mehr erfahren',
    cardStyle: 'bg-white border-border',
    titleStyle: 'text-primary',
    descStyle: 'text-muted-foreground',
    ctaStyle: 'bg-accent text-white hover:bg-amber-600 shadow-accent/30',
  },
];

export default function KursePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Page Hero */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl reveal-up">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
                <span className="w-8 h-px bg-accent" />
                Unsere Kurse
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-tight mb-6">
                Drei Wege,<br />
                <span className="text-accent">ein Ziel.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ob strukturiertes Sprachtraining, lebendige Konversation oder gezielte Prüfungsvorbereitung – wir haben den richtigen Kurs für dich.
              </p>
            </div>
          </div>
        </section>

        {/* Course Cards */}
        <section className="pb-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {courses?.map((course, i) => (
                <div
                  key={course?.href}
                  className={`reveal-up flex flex-col rounded-3xl overflow-hidden border shadow-lg hover:shadow-xl transition-shadow duration-500 group card-shine ${course?.cardStyle}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <AppImage
                      src={course?.image}
                      alt={course?.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
                    <div className="absolute bottom-4 left-5">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full ${course?.badgeColor}`}>
                        {course?.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <h2 className={`text-2xl font-extrabold mb-3 ${course?.titleStyle}`}>{course?.title}</h2>
                    <p className={`text-sm leading-relaxed mb-5 flex-1 ${course?.descStyle}`}>{course?.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {course?.tags?.map((tag) => (
                        <span key={tag} className={`px-3 py-1 rounded-full text-xs font-bold ${course?.tagStyle}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={course?.href}
                      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold rounded-2xl transition-all duration-300 hover:-translate-y-0.5 shadow-md text-sm ${course?.ctaStyle}`}
                    >
                      {course?.cta}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
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
