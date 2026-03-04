"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone, MessageCircle } from "lucide-react";

export function CtaSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-surface-50 relative overflow-hidden"
    >
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-primary via-primary-700 to-primary-900 rounded-[2.5rem] overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 border border-white/10 mb-8">
                  <MessageCircle className="w-4 h-4" />
                  Kostenlose Erstberatung
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Bereit fuer Ihr naechstes{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
                  Projekt?
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-white/70 mb-10 text-balance"
              >
                Lassen Sie uns gemeinsam Ihre Vision verwirklichen. In einem
                unverbindlichen Gespraech finden wir heraus, wie wir Ihnen am
                besten helfen koennen.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <a
                  href="/kontakt"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-10 py-5 text-lg font-semibold text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-glow hover:-translate-y-1"
                >
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-white/60"
              >
                <a
                  href="mailto:info@werbeagentur.de"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@werbeagentur.de</span>
                </a>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
                <a
                  href="tel:+4912345678900"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+49 123 456 789 00</span>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
