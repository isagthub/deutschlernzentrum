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
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollRevealInit />
    </>
  );
}