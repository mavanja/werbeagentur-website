"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-700 to-primary-900">
        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-light/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-light/30 rounded-full blur-3xl" />
        </div>
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-32 right-20 w-20 h-20 border border-white/10 rounded-2xl"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-16 w-12 h-12 bg-accent/20 rounded-full"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-32 w-8 h-8 bg-white/5 rounded-lg"
        animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Content */}
      <div className="container-wide relative z-10">
        <motion.div
          className="max-w-4xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Werbeagentur in Ihrer Region
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-8"
          >
            Kreativ.{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-600">
                Strategisch.
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent/20 -skew-x-12" />
            </span>
            <br />
            Wirksam.
          </motion.h1>

          {/* Sub-Headline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl text-white/70 leading-relaxed mb-12 max-w-2xl text-balance"
          >
            Wir entwickeln Marken, die begeistern. Von der Strategie ueber das Design 
            bis zur Umsetzung — alles aus einer Hand.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-glow hover:-translate-y-0.5"
            >
              Beratung anfragen
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
              </span>
              Showreel ansehen
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 pt-12 border-t border-white/10 grid grid-cols-3 gap-8 max-w-xl"
          >
            {[
              { value: "150+", label: "Projekte" },
              { value: "50+", label: "Kunden" },
              { value: "12", label: "Jahre Erfahrung" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-white/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-white/70"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
