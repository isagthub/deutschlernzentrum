import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Left: Logo + tagline */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2.5">
              <AppLogo size={32} />
              <span className="font-bold text-base text-primary tracking-tight">
                Deutschlernzentrum
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Deutsch  lernen. In  Deutschland ankommen.
            </p>
            <a
              href="https://wa.me/+4915175034355"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-green-700 font-medium hover:text-green-800 transition-colors mt-1"
              aria-label="WhatsApp Kontakt"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +49 151 75034355
            </a>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Navigation</span>
              <Link href="/#kurse" className="text-sm text-foreground hover:text-primary transition-colors font-medium hover-underline">Kurse</Link>
              <Link href="/#preise" className="text-sm text-foreground hover:text-primary transition-colors font-medium hover-underline">Preise</Link>
              <Link href="/contact" className="text-sm text-foreground hover:text-primary transition-colors font-medium hover-underline">Kontakt</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">Rechtliches</span>
              <Link href="/impressum" className="text-sm text-foreground hover:text-primary transition-colors font-medium hover-underline">Impressum</Link>
              <a href="mailto:kontakt@deutschlernzentrum.de" className="text-sm text-foreground hover:text-primary transition-colors font-medium hover-underline">kontakt@deutschlernzentrum.de</a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-muted-foreground">
            © {year} Deutschlernzentrum · Isabella Willeke
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
            <span className="text-border">·</span>
            <Link href="/impressum#datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}