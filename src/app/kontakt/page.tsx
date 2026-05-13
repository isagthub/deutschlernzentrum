import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from './components/ContactForm';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export const metadata: Metadata = {
  title: 'Kontakt | Deutschlernzentrum',
  description: 'Kontaktiere uns für Fragen zu unseren Deutschkursen. Wir helfen dir gerne weiter.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/kontakt`,
  },
  openGraph: {
    title: 'Kontakt | Deutschlernzentrum',
    description: 'Kontaktiere uns für Fragen zu unseren Deutschkursen.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/kontakt`,
    type: 'website',
    images: [
      {
        url: '/assets/images/Videocall.png',
        width: 1200,
        height: 630,
        alt: 'Videocall mit Deutschlehrerin',
      },
    ],
  },
};

// This file intentionally left as a placeholder.
// The contact page is served from /Kontakt via next.config.mjs rewrite.
export const kontaktPlaceholder = true;
