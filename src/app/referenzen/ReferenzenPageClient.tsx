"use client";

import { motion } from "framer-motion";
import { CaseStudyCard, CTASection } from "@/components/referenzen";
import { caseStudies } from "@/data/case-studies";

export function ReferenzenPageClient() {
  return (
    <main className="min-h-screen bg-neutral-light">
      {/* Page Header */}
      <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(233,69,96,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_50%)]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 text-xs font-medium tracking-widest uppercase bg-accent/20 text-accent rounded-full mb-6">
              Case Studies
            </span>
            
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Unsere Referenzen
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed">
              Echte Ergebnisse fuer echte Unternehmen. Entdecken Sie, wie wir unseren Kunden geholfen haben, ihre Ziele zu uebertreffen — mit messbaren Resultaten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard 
                key={caseStudy.id} 
                caseStudy={caseStudy} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
