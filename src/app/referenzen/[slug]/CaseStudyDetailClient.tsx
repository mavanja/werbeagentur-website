"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CaseStudy } from "@/types";
import { ResultsShowcase, Testimonial, CTASection } from "@/components/referenzen";

interface Props {
  caseStudy: CaseStudy;
}

export function CaseStudyDetailClient({ caseStudy }: Props) {
  return (
    <main className="min-h-screen bg-neutral-light">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(233,69,96,0.2),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary-light/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link 
              href="/referenzen" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Zurueck zu allen Referenzen
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {/* Service Labels */}
              <div className="flex flex-wrap gap-2 mb-6">
                {caseStudy.serviceLabels.map((label) => (
                  <span 
                    key={label}
                    className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-accent/20 text-accent rounded-full"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <h1 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {caseStudy.title}
              </h1>
              
              <p className="text-white/60 text-lg mb-6">
                {caseStudy.client} · {caseStudy.industry}
              </p>
              
              <p className="text-white/80 text-lg leading-relaxed">
                {caseStudy.shortDescription}
              </p>
            </motion.div>

            {/* Cover Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary-light/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 font-heading text-8xl font-bold">
                  {caseStudy.client.charAt(0)}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="font-heading text-2xl font-bold text-primary">
                  Die Herausforderung
                </h2>
              </div>
              <p className="text-neutral-dark/70 text-lg leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="font-heading text-2xl font-bold text-primary">
                  Unsere Loesung
                </h2>
              </div>
              <p className="text-neutral-dark/70 text-lg leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase bg-accent/10 text-accent rounded-full mb-4">
              Ergebnisse
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary">
              Messbare Resultate
            </h2>
          </motion.div>

          <ResultsShowcase results={caseStudy.results} />
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <Testimonial 
              quote={caseStudy.testimonial.quote}
              author={caseStudy.testimonial.author}
              role={caseStudy.testimonial.role}
            />
          </div>
        </section>
      )}

      {/* Gallery Placeholder */}
      {caseStudy.galleryImages && caseStudy.galleryImages.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-2xl font-bold text-primary mb-10 text-center"
            >
              Projekt-Impressionen
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.galleryImages.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center"
                >
                  <span className="text-primary/30 font-heading text-xl">
                    Bild {index + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </main>
  );
}
