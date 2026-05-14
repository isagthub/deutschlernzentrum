import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Deutschlernzentrum: Online Deutschkurse',
  description: 'Online Deutschkurse mit zertifizierten und muttersprachlichen Lehrkräften. Sprache + Kultur vereint. Kurse A2–C2, Prüfungsvorbereitung und Konversation. Deutsch lernen und ankommen.',
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  openGraph: {
    title: 'Deutschlernzentrum: Online Deutschkurse',
    description: 'Online Deutschkurse mit zertifizierten Lehrkräften. Sprache + Kultur vereint.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    siteName: 'Deutschlernzentrum',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/assets/images/Deutschlehrerin.png',
        width: 1200,
        height: 630,
        alt: 'Deutschlehrerin im Online-Unterricht',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deutschlernzentrum: Online Deutschkurse',
    description: 'Online Deutschkurse mit zertifizierten Lehrkräften. Sprache + Kultur vereint.',
    images: ['/assets/images/Deutschlehrerin.png'],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Deutschlernzentrum',
    url: baseUrl,
    logo: `${baseUrl}/assets/images/app_logo.png`,
    description: 'Online Deutschkurse mit zertifizierten und muttersprachlichen Lehrkräften.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Donaustr. 28',
      addressLocality: 'Herrenberg',
      postalCode: '71083',
      addressCountry: 'DE',
    },
  };

  return (
    <html lang="de" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fdeutschler2908back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.18" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body className={plusJakartaSans.className}>
        {children}
</body>
    </html>
  );
}