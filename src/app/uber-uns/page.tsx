import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';
import AppImage from '@/components/ui/AppImage';

export const metadata: Metadata = {
  title: 'Über uns | Deutschlernzentrum',
  description: 'Lern Isabella kennen – Gründerin des Deutschlernzentrums, zertifiziert vom Goethe-Institut, seit 2018 leidenschaftliche Deutschlehrerin. Erfahre, wofür wir stehen.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/uber-uns`,
  },
  openGraph: {
    title: 'Über uns | Deutschlernzentrum',
    description: 'Isabella und das Deutschlernzentrum – persönlich, zertifiziert, mit echtem Anspruch.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/uber-uns`,
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
                  Hallo, ich bin Isabella.<br />
                  <span className="text-accent">Und das ist meine Geschichte.</span>
                </h1>
                <p className="text-lg text-white/75 leading-relaxed">
                  Ich unterrichte Deutsch als Fremdsprache seit 2018 – mit Herzblut, mit Methode und mit dem festen Glauben, dass jeder Mensch eine Sprache lernen kann, wenn er die richtige Begleitung hat.
                </p>
              </div>
              <div className="reveal-right">
                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                  <AppImage
                    src="/assets/images/Deutschlehrerin.png"
                    alt="Isabella, Gründerin des Deutschlernzentrums, beim Online-Unterricht"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                      <span className="text-lg">🎓</span>
                      <span className="text-sm font-semibold text-primary">Goethe-Institut zertifiziert</span>
                    </div>
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
              <div className="lg:col-span-7 reveal-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight mb-6">
                  Warum ich das Deutschlernzentrum gegründet habe
                </h2>
                <div className="space-y-5 text-foreground/80 leading-relaxed text-base">
                  <p>
                    Als ich 2018 anfing, Deutsch als Fremdsprache zu unterrichten, fiel mir schnell auf, wie groß der Unterschied zwischen gutem und schlechtem Sprachunterricht wirklich ist. Viele meiner Schülerinnen und Schüler hatten bereits Kurse besucht – und trotzdem kaum sprechen können. Nicht weil sie kein Talent hatten, sondern weil der Unterricht sie nicht dort abgeholt hatte, wo sie standen.
                  </p>
                  <p>
                    Das wollte ich anders machen. Ich habe mich vom <strong className="text-primary">Goethe-Institut</strong> zertifizieren lassen – nicht nur, weil es der anerkannte Standard ist, sondern weil ich selbst verstehen wollte, was exzellenter Deutschunterricht bedeutet. Seitdem unterrichte ich nach didaktischen Prinzipien, die wirklich funktionieren: kommunikativ, strukturiert, auf den Menschen zugeschnitten.
                  </p>
                  <p>
                    Das Deutschlernzentrum ist aus diesem Anspruch entstanden. Ich wollte einen Ort schaffen – auch wenn er digital ist –, an dem Lernen nicht nach Schema F abläuft. Einen Ort, an dem Lehrkräfte wirklich qualifiziert sind, an dem Lernende ernst genommen werden und an dem Deutsch nicht als Hürde, sondern als Schlüssel erlebt wird.
                  </p>
                  <p>
                    Heute begleite ich Menschen aus aller Welt auf ihrem Weg zur deutschen Sprache: Fachkräfte, die in Deutschland arbeiten möchten. Pflegepersonal, das im Berufsalltag sicher kommunizieren muss. Menschen, die einfach Deutsch sprechen wollen – fließend, selbstbewusst, korrekt.
                  </p>
                  <p className="font-medium text-foreground">
                    Ich freue mich, dass du hier bist. Und ich freue mich darauf, auch dich auf diesem Weg zu begleiten.
                  </p>
                  <p className="text-primary font-semibold">– Isabella, Gründerin des Deutschlernzentrums</p>
                </div>
              </div>

              {/* Sidebar facts */}
              <div className="lg:col-span-5 reveal-right">
                <div className="bg-muted/50 rounded-3xl p-8 border border-border space-y-6">
                  <h3 className="text-lg font-extrabold text-primary">Auf einen Blick</h3>
                  <ul className="space-y-4">
                    {[
                      { label: 'Unterrichtet seit', value: '2018' },
                      { label: 'Zertifizierung', value: 'Goethe-Institut' },
                      { label: 'Unterrichtsformat', value: '100 % online, live' },
                      { label: 'Niveaustufen', value: 'A2 bis C1' },
                      { label: 'Kursarten', value: 'Sprachkurs, Konversation, Prüfungsvorbereitung' },
                      { label: 'Prüfungen', value: 'Goethe-Institut & telc' },
                    ].map((item) => (
                      <li key={item.label} className="flex flex-col gap-0.5 pb-4 border-b border-border last:border-0 last:pb-0">
                        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{item.label}</span>
                        <span className="text-sm font-semibold text-foreground">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 bg-accent/10 rounded-3xl p-6 border border-accent/20">
                  <p className="text-sm text-foreground/80 leading-relaxed italic">
                    „Sprache ist mehr als Grammatik. Sie ist Zugang – zu Menschen, zu Chancen, zu einem neuen Leben. Genau das möchte ich meinen Schülerinnen und Schülern geben."
                  </p>
                  <p className="mt-3 text-sm font-semibold text-primary">– Isabella</p>
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
                Was eine gute Sprachschule können muss
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
              Schreib uns – wir finden gemeinsam den Kurs, der zu dir passt. Unverbindlich und persönlich.
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
