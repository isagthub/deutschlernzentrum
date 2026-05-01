import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/app/components/WhatsAppButton';

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="pt-28 md:pt-36 pb-12 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/30 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3">
              Impressum
            </h1>
            <p className="text-white/60 text-lg">Rechtliche Informationen zu Deutschlernzentrum</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-border shadow-sm overflow-hidden">

              {/* Angaben gem. § 5 TMG */}
              <div className="p-8 md:p-12 border-b border-border">
                <h2 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent rounded-full" />
                  Angaben gemäß § 5 TMG
                </h2>
                <address className="not-italic text-foreground leading-relaxed space-y-1">
                  <p className="font-semibold text-base">Deutschlernzentrum</p>
                  <p>Isabella Willeke</p>
                  <p>Donaustr. 28</p>
                  <p>71083 Herrenberg</p>
                </address>
                <div className="mt-5 space-y-2 text-sm text-foreground">
                  <p><span className="font-semibold">Steuernummer:</span> 56487/39188</p>
                </div>
              </div>

              {/* Kontakt */}
              <div className="p-8 md:p-12 border-b border-border">
                <h2 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent rounded-full" />
                  Kontakt
                </h2>
                <div className="space-y-3 text-sm text-foreground">
                  <p>
                    <span className="font-semibold">E-Mail:</span>{' '}
                    <a href="mailto:isabella.willeke@hotmail.com" className="text-primary hover:text-accent transition-colors hover-underline">
                      isabella.willeke@hotmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Telefon:</span>{' '}
                    <a href="tel:+4915175034355" className="text-primary hover:text-accent transition-colors hover-underline">
                      015175034355
                    </a>
                  </p>
                </div>
              </div>

              {/* Inhaltlich Verantwortliche */}
              <div className="p-8 md:p-12 border-b border-border">
                <h2 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent rounded-full" />
                  Inhaltlich Verantwortliche gem. § 18 Abs. 2 MStV
                </h2>
                <p className="text-sm text-foreground">
                  Isabella Willeke (Kontakt s. o.)
                </p>
              </div>

              {/* Haftung für Inhalte */}
              <div className="p-8 md:p-12 border-b border-border">
                <h2 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent rounded-full" />
                  Haftung für Inhalte
                </h2>
                <div className="text-sm text-foreground leading-relaxed space-y-3">
                  <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
                  <p>Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>
                  <p>Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                </div>
              </div>

              {/* Haftung für Links */}
              <div className="p-8 md:p-12 border-b border-border">
                <h2 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent rounded-full" />
                  Haftung für Links
                </h2>
                <div className="text-sm text-foreground leading-relaxed space-y-3">
                  <p>Unsere Website kann Links zu externen Webseiten Dritter enthalten. Auf deren Inhalte haben wir keinen Einfluss. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                  <p>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                </div>
              </div>

              {/* Urheberrecht */}
              <div className="p-8 md:p-12 border-b border-border">
                <h2 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent rounded-full" />
                  Urheberrecht
                </h2>
                <div className="text-sm text-foreground leading-relaxed space-y-3">
                  <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin.</p>
                  <p>Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Die Betreiber der Seiten sind bemüht, stets die Urheberrechte anderer zu beachten bzw. auf selbst erstellte sowie lizenzfreie Werke zurückzugreifen.</p>
                  <p>Bei hier verwendetem Bildmaterial handelt es sich unserer Kenntnis nach um lizenzfreie, jedoch urheberrechtlich geschützte Daten. Sollten wir insofern falsch informiert sein und unbeabsichtigt gegen urheber- oder lizenzrechtliche Bestimmungen verstoßen, genügt ein entsprechend verifizierbarer Hinweis, um uns zur sofortigen Löschung des genutzten Bildmaterials zu veranlassen.</p>
                  <p>Alle innerhalb unseres Internetangebots genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind.</p>
                  <p>Im Übrigen unterliegt die gesamte Gestaltung dieser Webseiten unserem Urheberrecht und/oder anderen Schutzrechten. Alle Rechte auf Nutzung, weitere Veröffentlichung in gedruckter, elektronischer oder sonstiger Form bleiben vorbehalten. Jede Vervielfältigung, Verbreitung oder Nutzung für kommerzielle Zwecke ist untersagt.</p>
                </div>
              </div>

              {/* Datenschutz */}
              <div id="datenschutz" className="p-8 md:p-12 border-b border-border scroll-mt-24">
                <h2 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent rounded-full" />
                  Datenschutz
                </h2>
                <div className="text-sm text-foreground leading-relaxed space-y-3">
                  <p>Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies soweit möglich stets auf freiwilliger Basis. Alle Daten werden sorgfältig behandelt und nicht weitergegeben.</p>
                  <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                  <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</p>
                </div>
              </div>

              {/* Salvatorische Klausel */}
              <div className="p-8 md:p-12">
                <h2 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-accent rounded-full" />
                  Salvatorische Klausel
                </h2>
                <div className="text-sm text-foreground leading-relaxed space-y-3">
                  <p>Vorstehende Bedingungen sind als Teil des Internetangebots zu betrachten, von dem aus auf diese Seite verwiesen wurde. Sollten einzelne Formulierungen unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.</p>
                </div>

                {/* Back link */}
                <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Stand: April 2026 · Deutschlernzentrum, Isabella Willeke
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-primary/20"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    Zurück zur Startseite
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}