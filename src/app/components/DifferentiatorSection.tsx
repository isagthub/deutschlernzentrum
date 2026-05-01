import React from 'react';
import AppImage from '@/components/ui/AppImage';

const differentiators = [
{
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>,

  title: 'Nur Muttersprachler und Muttersprachlerinnen',
  desc: 'Alle Lehrkräfte sind deutsch-muttersprachlich und als Sprachlehrer:innen zertifiziert.'
},
{
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>,

  title: 'Sprache + Kultur',
  desc: 'Du lernst nicht nur Deutsch, sondern du verstehst auch, wie das Leben in Deutschland wirklich aussieht.'
},
{
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>,

  title: 'Von Stunde 1 auf Deutsch',
  desc: 'Aktives Sprechen. Alle Kurse laufen ausschließlich auf Deutsch.'
},
{
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>,

  title: 'Teilnahmezertifikat',
  desc: 'Nach Abschluss jedes GER-Levels erhältst du ein offizielles Teilnahmezertifikat von uns als Sprachschule.'
}];


export default function DifferentiatorSection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Atmospheric blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Image */}
          <div className="relative reveal-left">
            <div className="relative h-[380px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_16e3fe507-1768769062279.png"
                alt="Gruppe Erwachsener lernt gemeinsam in einem modernen Online-Kurs, helles Ambiente"
                fill
                className="object-cover" />

              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent pointer-events-none" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-white rounded-2xl p-5 shadow-xl border border-border w-52">
              <div className="text-3xl font-extrabold text-accent mb-1">100%</div>
              <div className="text-sm font-semibold text-foreground">Zertifizierte Lehrkräfte</div>
              <div className="text-xs text-muted-foreground mt-1">Alle Muttersprachler</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8">
            <div className="reveal-up">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-4">
                <span className="w-8 h-px bg-accent" />
                Unser Ansatz
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
                Nicht nur Deutsch lernen —<br />
                <span className="text-accent">ankommen.</span>
              </h2>
              <p className="mt-4 text-lg text-white/70 leading-relaxed max-w-md">
                Wir glauben, dass ein Deutschkurs mehr sein kann als Grammatik. Deshalb verbinden wir Sprachkompetenz mit echtem Kulturverständnis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger-children">
              {differentiators?.map((item) =>
              <div
                key={item?.title}
                className="reveal-up glass-panel rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 card-shine group">

                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-3 group-hover:bg-accent/30 transition-colors">
                    {item?.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item?.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{item?.desc}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}