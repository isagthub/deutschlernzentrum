'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  courseInterest: string;
  message: string;
  consent: boolean;
}

const courseOptions = [
  { value: '', label: 'Bitte wählen...' },
  { value: 'sprachkurs-a2', label: 'Sprachkurs A2' },
  { value: 'sprachkurs-b1', label: 'Sprachkurs B1' },
  { value: 'sprachkurs-b2', label: 'Sprachkurs B2' },
  { value: 'sprachkurs-c1', label: 'Sprachkurs C1' },
  { value: 'konversation', label: 'Konversationskurs' },
  { value: 'einzelkurs', label: 'Einzelkurs (privat)' },
  { value: 'beratung', label: 'Erstberatung / allgemeine Frage' },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    courseInterest: '',
    message: '',
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) newErrors.name = 'Bitte gib deinen Namen ein.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Bitte gib eine gültige E-Mail-Adresse ein.';
    }
    if (!form.message.trim()) newErrors.message = 'Bitte schreib uns eine kurze Nachricht.';
    if (!form.consent) newErrors.consent = 'Bitte stimme der Datenverarbeitung zu.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const courseLabel = courseOptions.find((o) => o.value === form.courseInterest)?.label || 'Allgemein';
    const subject = encodeURIComponent(`Kursanfrage: ${courseLabel} – ${form.name}`);
    const body = encodeURIComponent(
      `Hallo,\n\nich interessiere mich für einen Kurs und würde mich über eine Rückmeldung freuen.\n\nName: ${form.name}\nE-Mail: ${form.email}\nTelefon: ${form.phone || 'nicht angegeben'}\nKursinteresse: ${courseLabel}\n\nNachricht:\n${form.message}\n\n---\nDatenschutz-Einwilligung: Ja`
    );
    window.open(`mailto:kontakt@deutschlernzentrum.de?subject=${subject}&body=${body}`, '_self');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm">
        <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />
        <div className="p-10 flex flex-col items-center text-center gap-6">
          <div className="relative">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-primary mb-2">E-Mail-Programm geöffnet!</h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Deine Nachricht ist vorausgefüllt. Schick sie einfach ab — wir melden uns bei dir, {form.name}!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
            <a
              href="https://wa.me/4915175034355"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white font-semibold rounded-2xl hover:bg-green-600 transition-colors text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: '', email: '', phone: '', courseInterest: '', message: '', consent: false });
              }}
              className="flex-1 px-5 py-3 bg-muted text-foreground font-semibold rounded-2xl hover:bg-muted/80 transition-colors text-sm border border-border"
            >
              Neue Anfrage
            </button>
          </div>
        </div>
      </div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3.5 bg-background border rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 ${
      errors[field]
        ? 'border-red-400 bg-red-50/40 focus:ring-red-300'
        : 'border-border hover:border-primary/40'
    }`;

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm">
      <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="px-8 md:px-10 pt-8 pb-6 border-b border-border/60">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-primary mb-1">Kursanfrage senden</h2>
            <p className="text-sm text-muted-foreground">
              Füll das Formular aus — wir melden uns innerhalb von 24 Stunden.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-green-700">Online</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="px-8 md:px-10 py-8 flex flex-col gap-5">

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold">1</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Deine Kontaktdaten</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Dein vollständiger Name"
            className={inputClass('name')}
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              {errors.name}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">
              E-Mail <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="deine@email.de"
              className={inputClass('email')}
              autoComplete="email"
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1.5">
              Telefon <span className="text-muted-foreground font-normal text-xs">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+49 ..."
              className={inputClass('phone')}
              autoComplete="tel"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold">2</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Deine Anfrage</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div>
          <label htmlFor="courseInterest" className="block text-sm font-semibold text-foreground mb-1.5">
            Kursinteresse
          </label>
          <div className="relative">
            <select
              id="courseInterest"
              name="courseInterest"
              value={form.courseInterest}
              onChange={handleChange}
              className={`${inputClass('courseInterest')} cursor-pointer appearance-none pr-10`}
            >
              {courseOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">
            Nachricht <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Erzähl uns etwas über dein aktuelles Deutschniveau, deine Ziele oder Fragen..."
            rows={5}
            className={`${inputClass('message')} resize-none`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              {errors.message}
            </p>
          )}
        </div>

        <div className={`flex items-start gap-3 p-4 rounded-2xl border transition-colors ${errors.consent ? 'border-red-300 bg-red-50/40' : 'border-border bg-muted/20 hover:bg-muted/40'}`}>
          <div className="relative flex-shrink-0 mt-0.5">
            <input id="consent" name="consent" type="checkbox" checked={form.consent} onChange={handleChange} className="sr-only" />
            <button
              type="button"
              onClick={() => {
                setForm((prev) => ({ ...prev, consent: !prev.consent }));
                if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
              }}
              aria-checked={form.consent}
              role="checkbox"
              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${form.consent ? 'bg-primary border-primary' : 'bg-white border-border hover:border-primary'}`}
            >
              {form.consent && (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              )}
            </button>
          </div>
          <label
            htmlFor="consent"
            className="text-sm text-foreground leading-relaxed cursor-pointer"
            onClick={() => {
              setForm((prev) => ({ ...prev, consent: !prev.consent }));
              if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
            }}
          >
            Ich bin mit der Verarbeitung meiner Eingaben zum Zwecke der Anfragebearbeitung einverstanden.{' '}
            <a href="/impressum#datenschutz" className="text-primary hover:underline text-xs">Datenschutz</a>
          </label>
        </div>
        {errors.consent && (
          <p className="-mt-3 text-xs text-red-600 flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {errors.consent}
          </p>
        )}

        <button
          type="submit"
          className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 text-base mt-1"
        >
          Anfrage senden
          <span className="w-8 h-8 bg-white/15 rounded-full flex items-center justify-center group-hover:bg-white/25 transition-colors">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </button>

        <p className="text-center text-xs text-muted-foreground">
          Oder schreib uns direkt auf{' '}
          <a href="https://wa.me/4915175034355" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">
            WhatsApp
          </a>
          {' '}— schnelle Antwort garantiert.
        </p>
      </form>
    </div>
  );
}