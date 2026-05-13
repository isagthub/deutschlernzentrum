'use client';

import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    const revealClasses = ['.reveal-up', '.reveal-blur', '.reveal-left', '.reveal-right'];
    const allElements: Element[] = [];

    revealClasses.forEach((cls) => {
      document.querySelectorAll(cls).forEach((el) => allElements.push(el));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    allElements.forEach((el) => observer.observe(el));

    // Trigger elements already in viewport
    allElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('is-visible');
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}