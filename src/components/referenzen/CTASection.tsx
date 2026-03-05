"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-light to-accent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative max-w-4xl mx-auto px-6 py-20 lg:py-28 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-heading text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Aehnliche Ergebnisse fuer<br />Ihr Unternehmen?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/80 text-lg lg:text-xl mb-10 max-w-2xl mx-auto"
        >
          Lassen Sie uns gemeinsam herausfinden, wie wir Ihre Marke staerken und messbares Wachstum erzielen koennen.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-accent font-heading font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Kostenloses Erstgespraech
          </Link>
          
          <Link
            href="/leistungen"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-heading font-semibold rounded-full border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Unsere Leistungen
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
