import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import DifferentiatorSection from '@/app/components/DifferentiatorSection';
import CoursesSection from '@/app/components/CoursesSection';
import PricingSection from '@/app/components/PricingSection';
import TrustSection from '@/app/components/TrustSection';
import CtaSection from '@/app/components/CtaSection';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DifferentiatorSection />
        <CoursesSection />
        <PricingSection />
        <TrustSection />
        <CtaSection />
<section className="py-16 border-t border-border">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="text-2xl font-bold mb-4">
      Online Deutsch lernen mit dem Deutschlernzentrum
    </h2>

    <p className="text-muted-foreground leading-relaxed">
      Das Deutschlernzentrum bietet Online Deutschkurse für dein Niveau A2-C1.
      Wir helfen dir bei der Vorbereitung auf Goethe-Zertifikate,
      Telc-Prüfungen und dem sicheren Deutschsprechen im Alltag.
    </p>
  </div>
</section>
      
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollRevealInit />
    </>
  );
}