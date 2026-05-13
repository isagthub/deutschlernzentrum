import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Deutschlernzentrum',
  description: 'Häufig gestellte Fragen zu unseren Deutschkursen, Preisen, Lehrkräften und dem Unterricht.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/faq`,
  },
  openGraph: {
    title: 'FAQ | Deutschlernzentrum',
    description: 'Häufig gestellte Fragen zu unseren Deutschkursen und Preisen.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/faq`,
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
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}