import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CoursesSection from '@/app/components/CoursesSection';
import CtaSection from '@/app/components/CtaSection';

export const metadata = {
  title: 'Kurse | Deutschlernzentrum',
  description: 'Entdecke unsere Deutsch-Sprachkurse und Konversationskurse für alle Niveaus – A2 bis C1. Online, live und praxisnah.',
};

export default function KursePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <CoursesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
