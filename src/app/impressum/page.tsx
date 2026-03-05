import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, Heading } from '../../components/ui';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Werbeagentur GmbH - Angaben gemäß § 5 TMG',
};

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-soft p-6 md:p-8">
      <h2 className="font-heading text-h3 text-primary mb-4">{title}</h2>
      <div className="text-body-md text-neutral-600 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

export default function ImpressumPage() {
  return (
    <Section className="py-16 md:py-20 bg-neutral-50 min-h-screen">
      <Container className="max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <Heading as="h1" size="h1" align="center" className="mb-4">
            Impressum
          </Heading>
          <p className="text-body-lg text-neutral-600">
            Angaben gemäß § 5 TMG
          </p>
        </div>

        {/* Content Cards */}
        <div className="space-y-6">
          {/* Company Info */}
          <div className="opacity-0 animate-fade-in-up animation-delay-100">
            <InfoCard title="Anbieter">
              <p className="font-semibold text-primary">Werbeagentur GmbH</p>
              <p>Musterstraße 123</p>
              <p>10115 Berlin</p>
              <p>Deutschland</p>
            </InfoCard>
          </div>

          {/* Contact */}
          <div className="opacity-0 animate-fade-in-up animation-delay-200">
            <InfoCard title="Kontakt">
              <p>
                <span className="font-medium text-neutral-700">Telefon:</span>{' '}
                +49 (0) 30 123 456 78
              </p>
              <p>
                <span className="font-medium text-neutral-700">E-Mail:</span>{' '}
                <Link 
                  href="mailto:info@werbeagentur.de" 
                  className="text-secondary hover:text-secondary-600 underline transition-colors"
                >
                  info@werbeagentur.de
                </Link>
              </p>
            </InfoCard>
          </div>

          {/* Representation */}
          <div className="opacity-0 animate-fade-in-up animation-delay-300">
            <InfoCard title="Vertretungsberechtigte">
              <p>
                <span className="font-medium text-neutral-700">Geschäftsführer:</span>{' '}
                Max Mustermann
              </p>
            </InfoCard>
          </div>

          {/* Registry */}
          <div className="opacity-0 animate-fade-in-up animation-delay-400">
            <InfoCard title="Registereintrag">
              <p>
                <span className="font-medium text-neutral-700">Registergericht:</span>{' '}
                Amtsgericht Berlin-Charlottenburg
              </p>
              <p>
                <span className="font-medium text-neutral-700">Registernummer:</span>{' '}
                HRB 12345 B
              </p>
            </InfoCard>
          </div>

          {/* Tax IDs */}
          <div className="opacity-0 animate-fade-in-up animation-delay-500">
            <InfoCard title="Umsatzsteuer">
              <p>
                <span className="font-medium text-neutral-700">USt-IdNr.:</span>{' '}
                DE123456789
              </p>
            </InfoCard>
          </div>

          {/* Editorial Responsibility */}
          <div className="opacity-0 animate-fade-in-up animation-delay-600">
            <InfoCard title="Verantwortlich für den Inhalt">
              <p>Max Mustermann</p>
              <p>Musterstraße 123</p>
              <p>10115 Berlin</p>
            </InfoCard>
          </div>

          {/* Dispute Resolution */}
          <div className="opacity-0 animate-fade-in-up animation-delay-700">
            <InfoCard title="Streitschlichtung">
              <p>
                Die Europäische Kommission stellt eine Plattform zur 
                Online-Streitbeilegung (OS) bereit:{' '}
                <Link 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary-600 underline transition-colors"
                >
                  https://ec.europa.eu/consumers/odr/
                </Link>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren 
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </InfoCard>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center opacity-0 animate-fade-in-up animation-delay-800">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary-600 font-medium transition-colors"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </Container>
    </Section>
  );
}
