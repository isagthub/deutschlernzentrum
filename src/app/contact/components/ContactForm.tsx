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

    // Build mailto link — backend integration point
    const subject = encodeURIComponent(`Kursanfrage: ${form.courseInterest || 'Allgemein'} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nE-Mail: ${form.email}\nTelefon: ${form.phone || 'nicht angegeben'}\nKursinteresse: ${form.courseInterest || 'nicht angegeben'}\n\nNachricht:\n${form.message}\n\n---\nDatenschutz-Einwilligung: Ja`
    );
    window.location.href = `mailto:kontakt@deutschlernzentrum.de?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-10 border border-border shadow-md flex flex-col items-center text-center gap-6 reveal-up">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-extrabold text-primary mb-2">Anfrage gesendet!</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vielen Dank, {form.name}! Wir haben deine Anfrage erhalten und melden uns in Kürze bei dir. Für schnelle Rückmeldung schreib uns auf{' '}
            <a href="https://wa.me/4915175034355" className="text-green-600 font-semibold hover:underline">WhatsApp</a>.
          </p>
        </div>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', courseInterest: '', message: '', consent: false }); }}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-secondary transition-colors text-sm"
        >
          Neue Anfrage senden
        </button>
      </div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3.5 bg-muted/50 border rounded-xl text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 ${
      errors[field] ? 'border-red-400 bg-red-50/50' : 'border-border hover:border-primary/40'
    }`;

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-md reveal-up">
      <h2 className="text-2xl font-extrabold text-primary mb-2">Kursanfrage senden</h2>
      <p className="text-muted-foreground text-sm mb-8">
        Füll das Formular aus — wir melden uns innerhalb von 24 Stunden.
      </p>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {/* Name */}
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
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>

        {/* Email + Phone row */}
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
            {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
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

        {/* Course interest */}
        <div>
          <label htmlFor="courseInterest" className="block text-sm font-semibold text-foreground mb-1.5">
            Kursinteresse
          </label>
          <select
            id="courseInterest"
            name="courseInterest"
            value={form.courseInterest}
            onChange={handleChange}
            className={`${inputClass('courseInterest')} cursor-pointer`}
          >
            {courseOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Message */}
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
          {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
        </div>

        {/* GDPR Consent checkbox */}
        <div className={`flex items-start gap-3 p-4 rounded-xl border transition-colors ${errors.consent ? 'border-red-300 bg-red-50/50' : 'border-border bg-muted/30'}`}>
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={form.consent}
              onChange={handleChange}
              className="sr-only"
            />
            <button
              type="button"
              onClick={() => {
                setForm((prev) => ({ ...prev, consent: !prev.consent }));
                if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
              }}
              aria-checked={form.consent}
              role="checkbox"
              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                form.consent
                  ? 'bg-primary border-primary' :'bg-white border-border hover:border-primary'
              }`}
            >
              {form.consent && (
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              )}
            </button>
          </div>
          <label htmlFor="consent" className="text-sm text-foreground leading-relaxed cursor-pointer" onClick={() => {
            setForm((prev) => ({ ...prev, consent: !prev.consent }));
            if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
          }}>
            Ich bin mit der Verarbeitung meiner Eingaben zum Zwecke der Anfragebearbeitung einverstanden.{' '}
            <span className="text-muted-foreground text-xs">
              (Weitere Infos im{' '}
              <a href="/impressum#datenschutz" className="text-primary hover:underline">
                Impressum/Datenschutz
              </a>
              )
            </span>
          </label>
        </div>
        {errors.consent && <p className="-mt-3 text-xs text-red-600">{errors.consent}</p>}

        {/* Submit */}
        <button
          type="submit"
          className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-2xl hover:bg-secondary transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 text-base"
        >
          Anfrage senden
          <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </button>

        <p className="text-xs text-muted-foreground text-center">
          Deine Daten werden nicht weitergegeben und ausschließlich zur Bearbeitung deiner Anfrage verwendet.
        </p>
      </form>
    </div>
  );
}