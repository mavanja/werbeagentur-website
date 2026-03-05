import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, Heading } from '../../components/ui';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Werbeagentur GmbH - Informationen zur Verarbeitung Ihrer personenbezogenen Daten',
};

const tocItems = [
  { id: 'verantwortlicher', label: '1. Verantwortlicher' },
  { id: 'erhebung', label: '2. Erhebung personenbezogener Daten' },
  { id: 'cookies', label: '3. Cookies' },
  { id: 'kontaktformular', label: '4. Kontaktformular' },
  { id: 'newsletter', label: '5. Newsletter' },
  { id: 'rechte', label: '6. Ihre Rechte' },
  { id: 'aenderungen', label: '7. Änderungen' },
];

interface ContentSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function ContentSection({ id, title, children }: ContentSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 bg-white rounded-xl shadow-soft p-6 md:p-8">
      <h2 className="font-heading text-h3 text-primary mb-4">{title}</h2>
      <div className="text-body-md text-neutral-600 leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

function TableOfContents() {
  return (
    <>
      {/* Mobile TOC */}
      <details className="lg:hidden mb-8 bg-white rounded-xl p-4 shadow-soft">
        <summary className="font-heading font-semibold cursor-pointer text-primary">
          Inhalt anzeigen
        </summary>
        <nav className="mt-4 space-y-2">
          {tocItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-body-sm text-neutral-500 hover:text-secondary transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </details>

      {/* Desktop TOC */}
      <nav className="hidden lg:block sticky top-24 w-64 flex-shrink-0">
        <div className="bg-white rounded-xl shadow-soft p-6">
          <h3 className="font-heading font-semibold text-primary mb-4">Inhalt</h3>
          <ul className="space-y-2">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block text-body-sm text-neutral-500 hover:text-secondary transition-colors py-1"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default function DatenschutzPage() {
  return (
    <Section className="py-16 md:py-20 bg-neutral-50 min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto opacity-0 animate-fade-in-up">
          <Heading as="h1" size="h1" align="center" className="mb-4">
            Datenschutzerklärung
          </Heading>
          <p className="text-body-lg text-neutral-600">
            Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO
          </p>
        </div>

        {/* Content with TOC */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* TOC Sidebar (Desktop: left side) */}
          <TableOfContents />

          {/* Main Content */}
          <div className="flex-1 max-w-3xl space-y-6">
            {/* 1. Verantwortlicher */}
            <div className="opacity-0 animate-fade-in-up animation-delay-100">
              <ContentSection id="verantwortlicher" title="1. Verantwortlicher">
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) 
                  und anderer nationaler Datenschutzgesetze sowie sonstiger 
                  datenschutzrechtlicher Bestimmungen ist:
                </p>
                <div className="bg-neutral-50 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-primary">Werbeagentur GmbH</p>
                  <p>Musterstraße 123</p>
                  <p>10115 Berlin</p>
                  <p className="mt-2">
                    E-Mail:{' '}
                    <Link 
                      href="mailto:datenschutz@werbeagentur.de"
                      className="text-secondary hover:text-secondary-600 underline"
                    >
                      datenschutz@werbeagentur.de
                    </Link>
                  </p>
                </div>
              </ContentSection>
            </div>

            {/* 2. Erhebung personenbezogener Daten */}
            <div className="opacity-0 animate-fade-in-up animation-delay-200">
              <ContentSection id="erhebung" title="2. Erhebung personenbezogener Daten">
                <h3 className="font-heading font-semibold text-primary text-h4 mt-2">
                  2.1 Informatorische Nutzung der Website
                </h3>
                <p>
                  Bei der rein informatorischen Nutzung unserer Website erheben wir 
                  nur die personenbezogenen Daten, die Ihr Browser automatisch an 
                  unseren Server übermittelt. Diese Informationen werden temporär 
                  in einem sogenannten Logfile gespeichert:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>IP-Adresse des anfragenden Rechners</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Website, von der der Zugriff erfolgt (Referrer-URL)</li>
                  <li>Verwendeter Browser und Betriebssystem</li>
                </ul>
                <p className="mt-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 
                  Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der 
                  Gewährleistung eines störungsfreien Betriebs unserer Website.
                </p>

                <h3 className="font-heading font-semibold text-primary text-h4 mt-6">
                  2.2 Speicherdauer
                </h3>
                <p>
                  Die vorgenannten Daten werden nach 30 Tagen automatisch gelöscht.
                </p>
              </ContentSection>
            </div>

            {/* 3. Cookies */}
            <div className="opacity-0 animate-fade-in-up animation-delay-300">
              <ContentSection id="cookies" title="3. Cookies">
                <p>
                  Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, 
                  die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies richten 
                  keinen Schaden an und enthalten keine Viren.
                </p>

                <h3 className="font-heading font-semibold text-primary text-h4 mt-6">
                  3.1 Notwendige Cookies
                </h3>
                <p>
                  Wir verwenden technisch notwendige Cookies, um Ihnen die 
                  Grundfunktionen unserer Website bereitzustellen. Diese Cookies 
                  werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet.
                </p>

                <h3 className="font-heading font-semibold text-primary text-h4 mt-6">
                  3.2 Cookie-Einstellungen
                </h3>
                <p>
                  Bei Ihrem ersten Besuch auf unserer Website werden Sie über den 
                  Einsatz von Cookies informiert und können Ihre Einwilligung 
                  erteilen oder ablehnen. Ihre Entscheidung wird in Ihrem Browser 
                  gespeichert.
                </p>
                <p className="mt-2">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen 
                  von Cookies informiert werden und einzeln über deren Annahme 
                  entscheiden oder die Annahme generell ausschließen.
                </p>
              </ContentSection>
            </div>

            {/* 4. Kontaktformular */}
            <div className="opacity-0 animate-fade-in-up animation-delay-400">
              <ContentSection id="kontaktformular" title="4. Kontaktformular">
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden 
                  Ihre Angaben aus dem Formular inklusive der von Ihnen dort 
                  angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für 
                  den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b 
                  DSGVO (Vertragsanbahnung) oder Art. 6 Abs. 1 lit. f DSGVO 
                  (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
                </p>
                <p>
                  Die Daten werden gelöscht, sobald der Zweck der Speicherung 
                  entfällt, spätestens jedoch nach 3 Jahren.
                </p>
              </ContentSection>
            </div>

            {/* 5. Newsletter */}
            <div className="opacity-0 animate-fade-in-up animation-delay-500">
              <ContentSection id="newsletter" title="5. Newsletter">
                <p>
                  Mit Ihrer Einwilligung können Sie unseren Newsletter abonnieren, 
                  mit dem wir Sie über aktuelle Projekte und Neuigkeiten informieren.
                </p>
                <p>
                  Für die Anmeldung zu unserem Newsletter verwenden wir das 
                  sogenannte Double-Opt-In-Verfahren. Nach Ihrer Anmeldung erhalten 
                  Sie eine E-Mail, in der Sie um Bestätigung Ihrer Anmeldung gebeten 
                  werden.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a 
                  DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen, indem 
                  Sie den Abmeldelink in jedem Newsletter nutzen.
                </p>
              </ContentSection>
            </div>

            {/* 6. Ihre Rechte */}
            <div className="opacity-0 animate-fade-in-up animation-delay-600">
              <ContentSection id="rechte" title="6. Ihre Rechte">
                <p>
                  Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie 
                  betreffenden personenbezogenen Daten:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>
                    <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können 
                    Auskunft über Ihre von uns verarbeiteten personenbezogenen 
                    Daten verlangen.
                  </li>
                  <li>
                    <strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie können 
                    die Berichtigung unrichtiger oder die Vervollständigung Ihrer 
                    gespeicherten Daten verlangen.
                  </li>
                  <li>
                    <strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie können die 
                    Löschung Ihrer gespeicherten Daten verlangen, soweit nicht die 
                    Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung, 
                    zur Erfüllung einer rechtlichen Verpflichtung oder aus Gründen 
                    des öffentlichen Interesses erforderlich ist.
                  </li>
                  <li>
                    <strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Sie können 
                    die Einschränkung der Verarbeitung Ihrer Daten verlangen.
                  </li>
                  <li>
                    <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können 
                    der Verarbeitung Ihrer Daten widersprechen.
                  </li>
                  <li>
                    <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können 
                    verlangen, dass wir Ihnen Ihre Daten in einem strukturierten, 
                    gängigen und maschinenlesbaren Format übermitteln.
                  </li>
                </ul>
                <p className="mt-4">
                  Darüber hinaus haben Sie das Recht, sich bei einer 
                  Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer 
                  personenbezogenen Daten durch uns zu beschweren.
                </p>
              </ContentSection>
            </div>

            {/* 7. Änderungen */}
            <div className="opacity-0 animate-fade-in-up animation-delay-700">
              <ContentSection id="aenderungen" title="7. Änderungen dieser Datenschutzerklärung">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, 
                  damit sie stets den aktuellen rechtlichen Anforderungen entspricht 
                  oder um Änderungen unserer Leistungen in der Datenschutzerklärung 
                  umzusetzen.
                </p>
                <p className="mt-4 text-body-sm text-neutral-500">
                  Stand: März 2026
                </p>
              </ContentSection>
            </div>
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
