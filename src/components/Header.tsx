'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Kurse', href: '/#kurse' },
  { label: 'Preise', href: '/#preise' },
  { label: 'Kontakt', href: '/contact' },
  { label: 'Impressum', href: '/impressum' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Deutschlernzentrum Startseite">
              <AppLogo
                size={36}
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className={`font-bold text-lg tracking-tight transition-colors duration-300 hidden sm:block ${
                  scrolled ? 'text-primary' : 'text-primary'
                }`}
              >
                Deutschlernzentrum
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover-underline ${
                    scrolled
                      ? 'text-foreground hover:text-primary hover:bg-muted'
                      : 'text-primary hover:text-accent hover:bg-white/20'
                  }`}
                >
                  {link?.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-secondary transition-all duration-300 hover:scale-105 shadow-md shadow-primary/20"
              >
                Jetzt anmelden
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={menuOpen}
              className={`md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full transition-all duration-300 ${
                scrolled ? 'bg-muted hover:bg-border' : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <span
                className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                  scrolled ? 'bg-foreground' : 'bg-primary'
                } ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                  scrolled ? 'bg-foreground' : 'bg-primary'
                } ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                  scrolled ? 'bg-foreground' : 'bg-primary'
                } ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 mobile-menu-overlay bg-white/95 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-10">
          <nav className="flex flex-col gap-2">
            {navLinks?.map((link, i) => (
              <Link
                key={link?.href}
                href={link?.href}
                onClick={handleNavClick}
                className={`flex items-center px-4 py-4 text-xl font-semibold text-foreground hover:text-primary hover:bg-muted rounded-xl transition-all duration-300 border-b border-border/50 ${
                  menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {link?.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Link
              href="/contact"
              onClick={handleNavClick}
              className="block w-full text-center px-6 py-4 bg-primary text-white text-base font-bold rounded-2xl hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/30"
            >
              Jetzt anmelden
            </Link>
          </div>
          <div className="mt-auto">
            <a
              href="https://wa.me/4915175034355"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 bg-green-50 border border-green-200 rounded-xl text-green-700 font-medium text-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp: +49 151 75034355
            </a>
          </div>
        </div>
      </div>
    </>
  );
}