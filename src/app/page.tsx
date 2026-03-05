'use client';

import { motion } from 'framer-motion';
import { Button, Container, Section, Heading, Subheading } from '../components/ui';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section padding="xl" background="gradient" className="relative">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Subheading align="center" className="mb-4">
                Willkommen bei Ihrer Werbeagentur
              </Subheading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Heading as="h1" size="display-lg" align="center" className="mb-6">
                Kreativ. Strategisch.{' '}
                <span className="text-gradient">Wirksam.</span>
              </Heading>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-body-lg text-neutral-600 mb-10 max-w-2xl mx-auto"
            >
              Wir kreieren Marken, die begeistern, und Kampagnen, die wirken. 
              Von der Strategie bis zur Umsetzung – alles aus einer Hand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button variant="primary" size="lg">
                Projekt starten
              </Button>
              <Button variant="secondary" size="lg">
                Leistungen entdecken
              </Button>
            </motion.div>
          </div>
        </Container>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      </Section>

      {/* Features Section */}
      <Section padding="lg" background="light">
        <Container>
          <div className="text-center mb-16">
            <Subheading align="center" className="mb-4">
              Unsere Expertise
            </Subheading>
            <Heading as="h2" size="h1" align="center" className="mb-4">
              Was uns auszeichnet
            </Heading>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Über 10 Jahre Erfahrung in der Entwicklung erfolgreicher Marken und Kampagnen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Branding & Design',
                description: 'Einzigartige Markenidentitäten, die Ihre Werte verkörpern und Kunden begeistern.',
              },
              {
                icon: '🚀',
                title: 'Performance Marketing',
                description: 'Datengetriebene Kampagnen, die messbare Ergebnisse und ROI liefern.',
              },
              {
                icon: '💻',
                title: 'Webentwicklung',
                description: 'Moderne Websites und Web-Apps, die begeistern und konvertieren.',
              },
              {
                icon: '📱',
                title: 'Social Media',
                description: 'Strategische Präsenz auf allen relevanten Plattformen für maximale Reichweite.',
              },
              {
                icon: '📊',
                title: 'Analytics & Reporting',
                description: 'Transparente Einblicke in die Performance aller Maßnahmen.',
              },
              {
                icon: '💡',
                title: 'Strategieberatung',
                description: 'Fundierte Beratung für nachhaltiges Markenwachstum.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card card-hover p-8"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-heading font-semibold text-h3 text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 text-body-md">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" background="dots">
        <Container size="narrow">
          <div className="card-elevated p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5" />
            <div className="relative z-10">
              <Subheading align="center" className="mb-4">
                Bereit für den nächsten Schritt?
              </Subheading>
              <Heading as="h2" size="h1" align="center" className="mb-6">
                Lassen Sie uns sprechen
              </Heading>
              <p className="text-body-lg text-neutral-600 mb-8 max-w-xl mx-auto">
                Erzählen Sie uns von Ihrem Projekt. Gemeinsam finden wir die beste Lösung für Ihre Ziele.
              </p>
              <Button variant="primary" size="lg">
                Beratung anfragen
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Button Showcase (Demo) */}
      <Section padding="lg" className="bg-neutral-100">
        <Container>
          <div className="text-center mb-12">
            <Subheading align="center" className="mb-4">
              Design System
            </Subheading>
            <Heading as="h2" size="h2" align="center">
              Button Varianten
            </Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primary Buttons */}
            <div className="card p-8">
              <h3 className="font-heading font-semibold text-h4 mb-6">Primary</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="md">Medium</Button>
                <Button variant="primary" size="lg">Large</Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div className="card p-8">
              <h3 className="font-heading font-semibold text-h4 mb-6">Secondary</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="sm">Small</Button>
                <Button variant="secondary" size="md">Medium</Button>
                <Button variant="secondary" size="lg">Large</Button>
              </div>
            </div>

            {/* Ghost Buttons */}
            <div className="card p-8">
              <h3 className="font-heading font-semibold text-h4 mb-6">Ghost</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="ghost" size="sm">Small</Button>
                <Button variant="ghost" size="md">Medium</Button>
                <Button variant="ghost" size="lg">Large</Button>
              </div>
            </div>

            {/* Accent Buttons */}
            <div className="card p-8">
              <h3 className="font-heading font-semibold text-h4 mb-6">Accent</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="accent" size="sm">Small</Button>
                <Button variant="accent" size="md">Medium</Button>
                <Button variant="accent" size="lg">Large</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
