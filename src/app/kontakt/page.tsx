'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Phone, MapPin, Calendar, CheckCircle, ArrowRight, Send } from 'lucide-react';
import {
  Button,
  Container,
  Section,
  Heading,
  Subheading,
  Input,
  Textarea,
  Select,
  Checkbox,
  Accordion,
} from '../../components/ui';
import { contactSchema, serviceOptions, type ContactFormData } from '../../lib/validations/contact';

const faqItems = [
  {
    question: 'Was kostet eine Zusammenarbeit?',
    answer: (
      <>
        Die Kosten hängen vom Umfang Ihres Projekts ab. Ein Branding-Projekt startet ab 3.000€, 
        eine Website ab 5.000€. Nach unserem Erstgespräch erstellen wir Ihnen ein individuelles 
        Angebot — transparent und ohne versteckte Kosten.
      </>
    ),
  },
  {
    question: 'Wie lange dauert ein Projekt?',
    answer: (
      <>
        Die Projektdauer variiert je nach Umfang: Ein Branding-Projekt dauert typischerweise 
        4-6 Wochen, eine komplette Website 6-10 Wochen. Im Kick-off definieren wir gemeinsam 
        realistische Meilensteine und halten Sie kontinuierlich auf dem Laufenden.
      </>
    ),
  },
  {
    question: 'Wie läuft die Zusammenarbeit ab?',
    answer: (
      <>
        Unser Prozess ist klar strukturiert: <strong>Erstgespräch</strong> → <strong>Angebot</strong> → 
        <strong>Kick-off</strong> → <strong>Konzept & Design</strong> → <strong>Umsetzung</strong> → 
        <strong>Feedback-Runden</strong> → <strong>Launch</strong>. Sie haben jederzeit einen 
        direkten Ansprechpartner und volle Transparenz über den Projektfortschritt.
      </>
    ),
  },
  {
    question: 'Arbeiten Sie auch mit kleinen Unternehmen?',
    answer: (
      <>
        Absolut! Wir arbeiten mit Unternehmen jeder Größe — von ambitionierten Startups bis hin 
        zum etablierten Mittelstand. Für uns zählt die Vision, nicht die Unternehmensgröße. 
        Viele unserer langfristigen Partner haben als kleine Teams begonnen.
      </>
    ),
  },
  {
    question: 'Was passiert nach dem Erstkontakt?',
    answer: (
      <>
        Innerhalb von 48 Stunden melden wir uns bei Ihnen, um ein <strong>kostenloses 
        Erstgespräch</strong> (ca. 30 Minuten) zu vereinbaren. Dort lernen wir Ihre Ziele kennen, 
        besprechen erste Ideen und klären offene Fragen — unverbindlich und ohne Druck.
      </>
    ),
  },
];

export default function KontaktPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: undefined,
      message: '',
      privacy: undefined as unknown as true,
      honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Ein Fehler ist aufgetreten');
      }

      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten'
      );
    }
  };

  return (
    <>
      {/* Hero Section */}
      <Section padding="lg" background="gradient" className="relative">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Subheading align="center" className="mb-4">
                Ihr nächster Schritt
              </Subheading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Heading as="h1" size="display-lg" align="center" className="mb-6">
                Lassen Sie uns{' '}
                <span className="text-gradient">sprechen</span>
              </Heading>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-body-lg text-neutral-600 max-w-2xl mx-auto"
            >
              Erzählen Sie uns von Ihrem Projekt. Gemeinsam entwickeln wir eine Strategie, 
              die Ihre Marke nach vorne bringt — kreativ, durchdacht und messbar erfolgreich.
            </motion.p>
          </div>
        </Container>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      </Section>

      {/* Contact Form Section */}
      <Section padding="lg" background="light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="card-elevated p-6 sm:p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-green-600" />
                      </motion.div>
                      <Heading as="h2" size="h2" align="center" className="mb-4">
                        Vielen Dank!
                      </Heading>
                      <p className="text-body-lg text-neutral-600 mb-8 max-w-md mx-auto">
                        Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 
                        24 Stunden bei Ihnen.
                      </p>
                      <Button
                        variant="secondary"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Weitere Nachricht senden
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      {/* Honeypot field */}
                      <div className="hidden" aria-hidden="true">
                        <input
                          type="text"
                          {...register('honeypot')}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      {/* Name */}
                      <Input
                        label="Name"
                        placeholder="Ihr vollständiger Name"
                        required
                        {...register('name')}
                        error={errors.name?.message}
                      />

                      {/* Email */}
                      <Input
                        label="E-Mail"
                        type="email"
                        placeholder="ihre@email.de"
                        required
                        {...register('email')}
                        error={errors.email?.message}
                      />

                      {/* Phone & Company Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Input
                          label="Telefon"
                          type="tel"
                          placeholder="+49 123 456789"
                          {...register('phone')}
                          error={errors.phone?.message}
                        />
                        <Input
                          label="Unternehmen"
                          placeholder="Firmenname"
                          {...register('company')}
                          error={errors.company?.message}
                        />
                      </div>

                      {/* Service Select */}
                      <Select
                        label="Leistung"
                        placeholder="Wofür interessieren Sie sich?"
                        required
                        options={serviceOptions.map((opt) => ({
                          value: opt.value,
                          label: opt.label,
                        }))}
                        {...register('service')}
                        error={errors.service?.message}
                      />

                      {/* Message */}
                      <Textarea
                        label="Ihre Nachricht"
                        placeholder="Erzählen Sie uns von Ihrem Projekt, Ihren Zielen und Herausforderungen..."
                        required
                        rows={5}
                        {...register('message')}
                        error={errors.message?.message}
                      />

                      {/* Privacy Checkbox */}
                      <Checkbox
                        label={
                          <>
                            Ich akzeptiere die{' '}
                            <a
                              href="/datenschutz"
                              className="text-secondary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Datenschutzerklärung
                            </a>
                            {' '}*
                          </>
                        }
                        {...register('privacy')}
                        error={errors.privacy?.message}
                      />

                      {/* Submit Error */}
                      {submitError && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-body-sm"
                        >
                          {submitError}
                        </motion.div>
                      )}

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        fullWidth
                        isLoading={isSubmitting}
                        rightIcon={<Send className="w-5 h-5" />}
                      >
                        Nachricht senden
                      </Button>

                      <p className="text-body-sm text-neutral-500 text-center">
                        Wir antworten in der Regel innerhalb von 24 Stunden.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Sidebar Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="card-elevated p-6 sm:p-8 lg:sticky lg:top-24">
                <h3 className="font-heading font-semibold text-h3 text-primary mb-6">
                  Direkt erreichen
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <a
                    href="mailto:hello@werbeagentur.de"
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-heading font-medium text-body-sm text-neutral-500 mb-0.5">
                        E-Mail
                      </p>
                      <p className="font-heading font-semibold text-primary group-hover:text-secondary transition-colors">
                        hello@werbeagentur.de
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+493012345678"
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-heading font-medium text-body-sm text-neutral-500 mb-0.5">
                        Telefon
                      </p>
                      <p className="font-heading font-semibold text-primary group-hover:text-secondary transition-colors">
                        +49 30 12345678
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-heading font-medium text-body-sm text-neutral-500 mb-0.5">
                        Adresse
                      </p>
                      <p className="font-heading font-semibold text-primary">
                        Musterstraße 123
                        <br />
                        10115 Berlin
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-8 border-neutral-200" />

                {/* Calendar CTA */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-secondary" />
                    <p className="font-heading font-medium text-body-md text-neutral-700">
                      Oder direkt einen Termin buchen
                    </p>
                  </div>
                  <Button
                    variant="secondary"
                    fullWidth
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    onClick={() => {
                      // TODO: Integrate Calendly
                      window.open('https://calendly.com', '_blank');
                    }}
                  >
                    Termin vereinbaren
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section padding="lg" background="transparent">
        <Container size="narrow">
          <div className="text-center mb-12">
            <Subheading align="center" className="mb-4">
              Noch Fragen?
            </Subheading>
            <Heading as="h2" size="h1" align="center" className="mb-4">
              Häufige Fragen
            </Heading>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die wichtigsten Fragen zur Zusammenarbeit.
            </p>
          </div>

          <Accordion items={faqItems} defaultOpenIndex={0} />
        </Container>
      </Section>

      {/* Final CTA Section */}
      <Section padding="lg" background="dots">
        <Container size="narrow">
          <div className="card-elevated p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5" />
            <div className="relative z-10">
              <Subheading align="center" className="mb-4">
                Kein Formular-Typ?
              </Subheading>
              <Heading as="h2" size="h2" align="center" className="mb-6">
                Rufen Sie uns einfach an
              </Heading>
              <p className="text-body-lg text-neutral-600 mb-8 max-w-xl mx-auto">
                Manchmal ist ein kurzes Telefonat der schnellste Weg. 
                Wir freuen uns auf Ihren Anruf!
              </p>
              <Button
                variant="primary"
                size="lg"
                leftIcon={<Phone className="w-5 h-5" />}
                onClick={() => window.location.href = 'tel:+493012345678'}
              >
                +49 30 12345678
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
