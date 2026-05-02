'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const heroWords = ['Deutsch', 'lernen.'];
const heroWords2 = ['In', 'Deutschland'];
const heroWords3 = ['ankommen.'];

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (parallaxRef?.current) {
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.12}px)`;
      }
      if (cardRef?.current) {
        cardRef.current.style.transform = `translateY(${scrollY * -0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Atmospheric background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 md:pt-36 pb-16 flex-1 flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end flex-1">

          {/* Left: Typography */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Badge */}
            <div className="reveal-up inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">
                100% Online · Live-Unterricht
              </span>
            </div>

            {/* Headline */}
            <h1 className="flex flex-col gap-1">
              <span className="is-visible flex flex-wrap gap-3">
                {heroWords?.map((word, i) =>
                <span
                  key={word}
                  className="char-reveal text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter text-primary leading-none"
                  style={{ transitionDelay: `${i * 0.08}s` }}>

                    {word}
                  </span>
                )}
              </span>
              <span className="is-visible flex flex-wrap gap-3">
                {heroWords2?.map((word, i) =>
                <span
                  key={word}
                  className="char-reveal text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-none"
                  style={{
                    transitionDelay: `${(heroWords?.length + i) * 0.08}s`,
                    color: i === 1 ? 'var(--accent)' : 'var(--primary)'
                  }}>

                    {word}
                  </span>
                )}
              </span>
              <span className="is-visible flex flex-wrap gap-3">
                {heroWords3?.map((word, i) =>
                <span
                  key={word}
                  className="char-reveal text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter text-primary leading-none"
                  style={{ transitionDelay: `${(heroWords?.length + heroWords2?.length + i) * 0.08}s` }}>

                    {word}
                  </span>
                )}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="reveal-up delay-500 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
              Live-Kurse mit zertifizierten muttersprachlichen Lehrkräften. Sprache und Kultur vereint in deinem Deutschkurs.
            </p>

            {/* CTAs */}
            <div className="reveal-up delay-600 flex flex-wrap gap-4 items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-secondary transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40">

                <span>Kurs buchen</span>
                <span className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <a
                href="https://wa.me/4915175034355"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-border bg-white text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1 shadow-sm">

                <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Stats row */}
            <div className="reveal-up delay-700 flex flex-wrap gap-6 pt-4 border-t border-border">
              {[
              { value: 'A2–C1', label: 'GER-Niveaus' },
              { value: '100%', label: 'Muttersprachler:innen' },
              { value: 'Live', label: 'Unterricht online' }]?.
              map((stat) =>
              <div key={stat?.label} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-primary">{stat?.value}</span>
                  <span className="text-xs text-muted-foreground font-medium">{stat?.label}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Image with parallax */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative w-full h-[420px] md:h-[520px] lg:h-[580px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border">
              {/* Parallax image */}
              <div
                ref={parallaxRef}
                className="absolute inset-0 w-full h-[120%] -top-[10%] parallax-container">

                <AppImage
                  src="/assets/images/Videocall.png"
                  alt="4 Erwachsene im Videocall"
                  fill
                  className="object-cover"
                  priority />

              </div>
              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent pointer-events-none" />

              {/* Floating card */}
              <div
                ref={cardRef}
                className="absolute bottom-6 left-5 right-5 glass-panel-light rounded-2xl p-4 shadow-xl border border-white/60 float-gentle">

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">Nächster Kursstart</p>
                    <p className="text-sm font-bold text-foreground">flexibler Kursstart möglich</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Offen
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground font-medium">nach Absprache - frag uns!</span>
                </div>
              </div>
            </div>

            {/* Certificate badge */}
            <div className="absolute -top-4 -right-4 hidden lg:flex items-center gap-2 bg-accent text-white px-4 py-2.5 rounded-2xl shadow-lg shadow-accent/30 rotate-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
              <span className="text-xs font-bold">Zertifikat inklusive</span>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Mehr entdecken</span>
        <div className="w-5 h-8 border-2 border-muted-foreground rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-muted-foreground rounded-full animate-bounce" />
        </div>
      </div>
    </section>);

}