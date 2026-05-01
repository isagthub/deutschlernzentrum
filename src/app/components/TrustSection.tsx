import React from 'react';
import AppImage from '@/components/ui/AppImage';

const trustItems = [
{
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>,

  title: 'Kleine Gruppen',
  desc: 'Maximal 5 Teilnehmende — du bekommst echte Aufmerksamkeit.'
},
{
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>,

  title: '100% Online',
  desc: 'Live-Unterricht von überall — kein Pendeln, kein Stress.'
},
{
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>,

  title: 'GER-Zertifikat',
  desc: 'Offizielles Teilnahmezertifikat nach jedem Level.'
},
{
  icon:
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>,

  title: 'Geprüfte Qualität',
  desc: 'Zertifizierte Lehrkräfte mit pädagogischer Ausbildung.'
}];


export default function TrustSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Split layout: left text/stats, right image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Left */}
          <div className="flex flex-col gap-8 reveal-left">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
                <span className="w-8 h-px bg-accent" />
                Warum Deutschlernzentrum
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight text-balance">
                Erstklassige Lehrkräfte.<br />
                <span className="text-accent">Echter Fortschritt.</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-lg">
                Unser Team besteht ausschließlich aus deutsch-muttersprachlichen Lehrkräften, die alle als Sprachlehrer zertifiziert sind und Erfahrung mit Erwachsenen haben.
              </p>
            </div>

            {/* Trust grid: 4 items */}
            {/* BENTO GRID AUDIT: 4 trust items
                 Row 1: [col-1: item1 cs-1] [col-2: item2 cs-1]
                 Row 2: [col-1: item3 cs-1] [col-2: item4 cs-1]
                 Placed 4/4 ✓ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
              {trustItems?.map((item) =>
              <div
                key={item?.title}
                className="reveal-up flex gap-4 p-5 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">

                  <div className="w-11 h-11 bg-primary/8 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    {item?.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">{item?.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item?.desc}</p>
                  </div>
                </div>
              )}
            </div>

            {/* GER note */}
            <div className="flex items-start gap-3 p-4 bg-accent/8 border border-accent/20 rounded-2xl">
              <svg className="text-accent flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-sm text-foreground">
                <strong>Alle Kurse folgen dem GER</strong> (Gemeinsamer Europäischer Referenzrahmen für Sprachen). Nach jedem Level erhältst du ein offizielles Teilnahmezertifikat.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative reveal-right">
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/15 border border-border">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_18490395e-1777573896224.png"
                alt="Zertifizierte Deutschlehrerin erklärt freundlich und professionell vor einem Laptop in einem hellen Büro"
                fill
                className="object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none" />
            </div>

            {/* Floating cert card */}
            <div className="absolute -bottom-5 -left-4 md:-left-8 bg-white rounded-2xl p-4 shadow-xl border border-border w-56 float-gentle">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-accent/15 rounded-xl flex items-center justify-center text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Zertifiziert</div>
                  <div className="text-xs text-muted-foreground">nach GER-Standard</div>
                </div>
              </div>
              <div className="flex gap-1 mt-2">
                {['A2', 'B1', 'B2', 'C1']?.map((l) =>
                <span key={l} className="flex-1 text-center py-1 bg-primary/8 text-primary text-xs font-bold rounded-lg">
                    {l}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}