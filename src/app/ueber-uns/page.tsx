import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import AppImage from '@/components/ui/AppImage';

export const metadata: Metadata = {
  title: 'Über uns | Deutschlernzentrum',
  description: 'Lern Isabella kennen. Gründerin des Deutschlernzentrums, zertifiziert vom Goethe-Institut, seit 2018 leidenschaftliche Deutschlehrerin. Erfahre, wofür wir stehen.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/ueber-uns`,
  },
  openGraph: {
    title: 'Über uns | Deutschlernzentrum',
    description: 'Isabella und das Deutschlernzentrum – persönlich, zertifiziert, mit echtem Anspruch.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/ueber-uns`,
    type: 'website',
    images: [
      {
        url: '/assets/images/Deutschlehrerin.png',
        width: 1200,
        height: 630,
        alt: 'Isabella, Gründerin des Deutschlernzentrums',
      },
    ],
  },
};

const standards = [
  {
    icon: '🎓',
    title: 'Zertifizierte Qualität',
    desc: 'Alle Lehrkräfte sind vom Goethe-Institut oder einer gleichwertigen Institution zertifiziert. Kein Unterricht ohne nachgewiesene Qualifikation.',
  },
  {
    icon: '🗣️',
    title: 'Echte Kommunikation',
    desc: 'Deutsch lernt man nicht durch Vokabellisten, sondern durch echte Gespräche. Unser Unterricht ist von Anfang an kommunikativ und alltagsnah.',
  },
  {
    icon: '🎯',
    title: 'Klare Lernziele',
    desc: 'Jede Unterrichtseinheit hat ein konkretes Ziel. Wir arbeiten strukturiert auf Prüfungen, Berufsalltag oder freie Konversation hin – je nach Bedarf.',
  },
  {
    icon: '🤝',
    title: 'Persönliche Begleitung',
    desc: 'Wir kennen unsere Lernenden beim Namen. Kein anonymer Massenunterricht – sondern echte Beziehungen, die das Lernen leichter machen.',
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">

        {/* Hero – Isabella intro */}
        <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal-left">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
                  <span className="w-8 h-px bg-accent" />
                  Über uns
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  Hallo! Ich bin Isabella, Gründerin des Deutschlernzentrums.
                </h1>
                <p className="text-lg text-white/75 leading-relaxed">
                  Ich unterrichte Deutsch als Fremdsprache seit 2018 – mit Herzblut, mit Methode und mit dem festen Glauben, dass jeder Mensch eine Sprache lernen kann, wenn er die richtige Begleitung hat.
                </p>
              </div>
              <div className="reveal-right">
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <AppImage
                    src="/assets/images/Profilbild_ohne-hintergrund-1778676103513.png"
                    alt="Isabella, Gründerin des Deutschlernzentrums"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Isabella's story */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Main text */}
              <div className="lg:col-span-8 reveal-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-6">
                  Hallo, ich bin Isabella, die Gründerin des Deutschlernzentrums.
                </h2>
                <div className="space-y-5 text-foreground/80 leading-relaxed text-base">
                  <p>
                    Ich habe mich dafür entschieden, ausschließlich online Kurse anzubieten. Das ermöglicht unseren Lernenden, von überall auf der Welt an unseren Kursen teilzunehmen – ohne Pendelstress und ohne geografische Einschränkungen. Wir sind überzeugt: Jemand, der in Bangalore arbeitet, in New York studiert oder in Jakarta lebt und Deutsch lernen möchte, soll dieselbe Qualität erhalten können wie jemand in Berlin oder Wien.
                  </p>
                  <p>
                    Der Online-Unterricht erlaubt uns, wirklich individuell zu arbeiten und die Unterrichtszeiten flexibel an Berufs- und Lebensalltag anzupassen und gerade deshalb eine echte persönliche Verbindung aufzubauen.
                  </p>
                  <p>
                    Das Deutschlernzentrum ist aus diesem Anspruch entstanden. Ich wollte einen digitalen Raum schaffen, in dem Schüler und Schülerinnen im Zentrum stehen und der Unterricht komplett an die Bedürfnisse angepasst wird. Einen Ort, an dem die Lehrkräfte wirklich qualifiziert sind und an dem das Deutschlernen als Schlüssel zum Leben in Deutschland gesehen wird.
                  </p>
                  <p>
                    Heute begleiten wir Menschen aus aller Welt auf ihrem Weg zur deutschen Sprache, in die deutsche Kultur und nach Deutschland. Und das tun wir mit sehr viel Herzblut.
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="lg:col-span-4 reveal-right">
                <div className="sticky top-28 flex flex-col gap-6">
                  <div className="bg-accent/10 rounded-3xl p-6 border border-accent/20">
                    <p className="text-sm text-foreground/80 leading-relaxed italic">
                      „Sprache ist mehr als Grammatik. Sie ist ein Zugang zu Menschen, zu Chancen und zu einem neuen Leben. Genau das möchte ich meinen Schülerinnen und Schülern geben."
                    </p>
                    <p className="mt-3 text-sm font-semibold text-primary">– Isabella</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our standards */}
        <section className="py-20 bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 reveal-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight">
                Was eine gute Sprachschule können soll
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                Das sind die Maßstäbe, an denen wir uns messen lassen – und an denen wir uns selbst messen.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 stagger-children">
              {standards.map((s) => (
                <div
                  key={s.title}
                  className="reveal-up bg-white rounded-2xl p-7 border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex gap-5 items-start"
                >
                  <div className="text-3xl flex-shrink-0 mt-0.5">{s.icon}</div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1.5">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-4">
              Bereit, Deutsch zu lernen?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Schreib uns! Wir finden gemeinsam den Kurs, der zu dir passt. Unverbindlich und persönlich.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-primary/20"
              >
                Jetzt Kontakt aufnehmen
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a
                href="/kurse"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-muted text-primary font-bold rounded-2xl hover:bg-border transition-all duration-300 hover:-translate-y-0.5"
              >
                Kurse entdecken
              </a>
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
