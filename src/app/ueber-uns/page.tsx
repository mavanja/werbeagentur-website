'use client';

import { motion } from 'framer-motion';
import { Button, Container, Section, Heading, Subheading } from '../../components/ui';
import { 
  Lightbulb, 
  Target, 
  Users, 
  Sparkles,
  MessageCircle,
  TrendingUp,
  Clock,
  CheckCircle2
} from 'lucide-react';

// Team-Daten (Platzhalter)
const teamMembers = [
  {
    name: 'Anna Schmidt',
    role: 'Geschaeftsfuehrung & Strategie',
    bio: 'Mit ueber 15 Jahren Erfahrung in der Markenentwicklung fuehrt Anna das Team mit Leidenschaft und Vision.',
    funFact: 'Sammelt alte Werbeplakate aus den 60ern',
    image: '/team/placeholder-1.jpg',
  },
  {
    name: 'Max Mueller',
    role: 'Creative Director',
    bio: 'Max verwandelt Ideen in visuelle Meisterwerke und hat bereits fuer internationale Marken gearbeitet.',
    funFact: 'Kann jedes Logo aus dem Gedaechtnis zeichnen',
    image: '/team/placeholder-2.jpg',
  },
  {
    name: 'Julia Weber',
    role: 'Head of Digital',
    bio: 'Julia verbindet kreative Konzepte mit datengetriebenen Strategien fuer maximale Wirkung.',
    funFact: 'Hat ihren eigenen Podcast ueber Design-Trends',
    image: '/team/placeholder-3.jpg',
  },
  {
    name: 'Thomas Bauer',
    role: 'Senior Developer',
    bio: 'Thomas entwickelt performante Webloesungen und sorgt dafuer, dass alles reibungslos laeuft.',
    funFact: 'Programmiert nebenbei Indie-Spiele',
    image: '/team/placeholder-4.jpg',
  },
  {
    name: 'Sarah Fischer',
    role: 'Account Management',
    bio: 'Sarah ist die Bruecke zwischen Kunden und Kreativteam und stellt sicher, dass jedes Projekt glaenzt.',
    funFact: 'Spricht fuenf Sprachen fliessend',
    image: '/team/placeholder-5.jpg',
  },
  {
    name: 'David Hoffmann',
    role: 'Motion Designer',
    bio: 'David haucht Marken Leben ein — mit Animationen, die begeistern und Geschichten erzaehlen.',
    funFact: 'War frueher professioneller Skateboarder',
    image: '/team/placeholder-6.jpg',
  },
];

// Werte der Agentur
const values = [
  {
    icon: Lightbulb,
    title: 'Kreativitaet',
    description: 'Wir denken weiter, brechen Konventionen und finden Loesungen, die ueberraschen und begeistern.',
  },
  {
    icon: Target,
    title: 'Ergebnisorientierung',
    description: 'Schoenes Design ist gut — Design das wirkt ist besser. Wir messen unseren Erfolg an Ihren Ergebnissen.',
  },
  {
    icon: Users,
    title: 'Partnerschaftlichkeit',
    description: 'Wir arbeiten mit Ihnen, nicht fuer Sie. Echter Dialog und Vertrauen sind die Basis jeder Zusammenarbeit.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'Neue Technologien, neue Moeglichkeiten. Wir bleiben neugierig und bringen frische Ansaetze in jedes Projekt.',
  },
];

// Arbeitsweise
const worksteps = [
  {
    icon: MessageCircle,
    title: 'Zuhoeren & Verstehen',
    description: 'Jedes Projekt beginnt mit einem tiefen Verstaendnis Ihrer Ziele, Ihrer Marke und Ihrer Zielgruppe.',
  },
  {
    icon: TrendingUp,
    title: 'Strategie entwickeln',
    description: 'Auf Basis von Daten und Erfahrung erarbeiten wir einen massgeschneiderten Ansatz.',
  },
  {
    icon: Sparkles,
    title: 'Kreativ umsetzen',
    description: 'Unser Kreativteam verwandelt die Strategie in wirkungsvolle visuelle und textliche Loesungen.',
  },
  {
    icon: Clock,
    title: 'Agil iterieren',
    description: 'Wir arbeiten in kurzen Zyklen, testen frueh und optimieren kontinuierlich.',
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Page Header */}
      <Section padding="xl" background="gradient" className="relative">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Subheading align="center" className="mb-4">
                Ueber uns
              </Subheading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Heading as="h1" size="display-lg" align="center" className="mb-6">
                Menschen mit{' '}
                <span className="text-gradient">Leidenschaft</span>{' '}
                fuer Marken
              </Heading>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-body-lg text-neutral-600 max-w-2xl mx-auto"
            >
              Seit 2010 gestalten wir Marken, die bleiben. Mit Herzblut, Handwerk und einem unerschuetterlichen Glauben daran, dass gute Kommunikation die Welt veraendert.
            </motion.p>
          </div>
        </Container>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      </Section>

      {/* Agentur-Story Section */}
      <Section padding="lg" background="light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image/Visual Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-50" />
                <div className="relative z-10 text-center p-8">
                  <div className="text-8xl mb-4">🚀</div>
                  <p className="font-heading font-bold text-h3 text-primary">Seit 2010</p>
                  <p className="text-neutral-600">Ideen, die wirken</p>
                </div>
                {/* Decorative floating elements */}
                <motion.div 
                  className="absolute top-8 right-8 w-16 h-16 bg-secondary/20 rounded-full"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div 
                  className="absolute bottom-12 left-8 w-12 h-12 bg-accent/30 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Story Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Subheading className="mb-4">Unsere Geschichte</Subheading>
              <Heading as="h2" size="h1" className="mb-6">
                Was 2010 in einer WG begann...
              </Heading>
              
              <div className="space-y-4 text-body-md text-neutral-600">
                <p>
                  ...ist heute eine der kreativsten Agenturen der Region. Anna und Max gruendeten die Agentur mit einer einfachen Ueberzeugung: Gute Werbung muss nicht laut sein — sie muss relevant sein.
                </p>
                <p>
                  Was mit Freelance-Projekten und endlosen Nachtschichten begann, ist zu einem Team von 20 Kreativen gewachsen. Menschen, die brennen. Fuer Design, fuer Marken, fuer die Herausforderung, Unternehmen auf das naechste Level zu heben.
                </p>
                <p className="font-semibold text-primary">
                  Unsere Vision: Marken schaffen, die Menschen beruehren und Unternehmen voranbringen.
                </p>
                <p>
                  Unsere Mission: Jedes Projekt mit der gleichen Leidenschaft angehen — egal ob Startup oder Konzern. Denn wir glauben, dass jede Marke es verdient, gehoert zu werden.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Werte Section */}
      <Section padding="lg">
        <Container>
          <div className="text-center mb-16">
            <Subheading align="center" className="mb-4">
              Wofuer wir stehen
            </Subheading>
            <Heading as="h2" size="h1" align="center" className="mb-4">
              Unsere Werte
            </Heading>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Diese Prinzipien leiten uns bei jedem Projekt — von der ersten Idee bis zur finalen Umsetzung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card card-hover p-8 flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-h3 text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-body-md">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section padding="lg" background="light">
        <Container>
          <div className="text-center mb-16">
            <Subheading align="center" className="mb-4">
              Das Team
            </Subheading>
            <Heading as="h2" size="h1" align="center" className="mb-4">
              Die Koepfe hinter den Ideen
            </Heading>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Kreative, Strategen, Techies — vereint durch die Leidenschaft fuer grossartige Arbeit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card overflow-hidden">
                  {/* Photo Area */}
                  <div className="aspect-[4/5] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 relative overflow-hidden">
                    {/* Placeholder Avatar */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center">
                        <span className="font-heading font-bold text-4xl text-primary/60">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Hover Overlay with Fun Fact */}
                    <div className="absolute inset-0 bg-primary/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center">
                        <p className="text-white/60 text-overline uppercase mb-2">Fun Fact</p>
                        <p className="text-white font-heading font-medium">
                          {member.funFact}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Info Area */}
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-h4 text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-medium text-body-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-neutral-600 text-body-sm">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Arbeitsweise Section */}
      <Section padding="lg" background="dots">
        <Container>
          <div className="text-center mb-16">
            <Subheading align="center" className="mb-4">
              So arbeiten wir
            </Subheading>
            <Heading as="h2" size="h1" align="center" className="mb-4">
              Unser Ansatz
            </Heading>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Agil, datengetrieben, partnerschaftlich. Wir passen uns an — aber nie an unsere Qualitaetsansprueche.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {worksteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center"
              >
                {/* Step Number */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-full bg-white shadow-soft flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white font-heading font-bold text-sm flex items-center justify-center">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="font-heading font-semibold text-h4 text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-body-md">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 card-elevated p-8 md:p-12 bg-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-primary mb-1">Transparente Kommunikation</h4>
                  <p className="text-neutral-600 text-body-sm">Regelmaessige Updates, klare Deadlines, keine Ueberraschungen.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-primary mb-1">Feste Ansprechpartner</h4>
                  <p className="text-neutral-600 text-body-sm">Ein dedizierter Account Manager fuer Ihr Projekt.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading font-semibold text-primary mb-1">Messbare Ergebnisse</h4>
                  <p className="text-neutral-600 text-body-sm">KPIs definieren, tracken, optimieren — gemeinsam.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="lg">
        <Container size="narrow">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-elevated p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5" />
            <div className="relative z-10">
              <Subheading align="center" className="mb-4">
                Neugierig geworden?
              </Subheading>
              <Heading as="h2" size="h1" align="center" className="mb-6">
                Lernen Sie uns kennen
              </Heading>
              <p className="text-body-lg text-neutral-600 mb-8 max-w-xl mx-auto">
                Ob grosses Projekt oder kleine Frage — wir freuen uns auf den Austausch. Lassen Sie uns gemeinsam herausfinden, wie wir Ihre Marke voranbringen koennen.
              </p>
              <Button variant="primary" size="lg">
                Beratung anfragen
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
