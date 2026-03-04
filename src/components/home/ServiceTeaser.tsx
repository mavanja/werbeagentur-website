"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, TrendingUp, Globe, Megaphone, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "branding",
    title: "Branding & Design",
    description:
      "Wir entwickeln einzigartige Markenidentitaeten, die im Gedaechtnis bleiben. Von Logo bis Styleguide.",
    icon: Palette,
    color: "from-rose-500 to-pink-600",
    href: "/leistungen/branding",
  },
  {
    id: "performance",
    title: "Performance Marketing",
    description:
      "Datengetriebene Kampagnen auf Google, Meta und LinkedIn. Messbare Ergebnisse, maximaler ROI.",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-600",
    href: "/leistungen/performance",
  },
  {
    id: "web",
    title: "Web & Digital",
    description:
      "Moderne Websites und Web-Apps, die begeistern. Responsive, schnell, conversion-optimiert.",
    icon: Globe,
    color: "from-blue-500 to-indigo-600",
    href: "/leistungen/web",
  },
  {
    id: "content",
    title: "Content & Social",
    description:
      "Authentische Inhalte fuer alle Kanaele. Von der Strategie bis zur taeglichen Betreuung.",
    icon: Megaphone,
    color: "from-amber-500 to-orange-600",
    href: "/leistungen/content",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function ServiceTeaser() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-surface-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern" />

      <div className="container-wide relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Unsere Leistungen
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Alles fuer Ihren{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
              Erfolg
            </span>
          </h2>
          <p className="text-lg text-primary/60 max-w-2xl mx-auto text-balance">
            Von der ersten Idee bis zur fertigen Kampagne — wir begleiten Sie
            auf dem gesamten Weg.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                href={service.href}
                variants={cardVariants}
                className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-6 h-6 text-primary/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <p className="text-primary/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Border Accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 lg:mt-16"
        >
          <a
            href="/leistungen"
            className="btn-secondary"
          >
            Alle Leistungen entdecken
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
