"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  { name: "TechCorp", logo: "/images/logos/techcorp.svg" },
  { name: "GreenLife", logo: "/images/logos/greenlife.svg" },
  { name: "MediaPro", logo: "/images/logos/mediapro.svg" },
  { name: "FinanceHub", logo: "/images/logos/financehub.svg" },
  { name: "HealthPlus", logo: "/images/logos/healthplus.svg" },
  { name: "EduSmart", logo: "/images/logos/edusmart.svg" },
];

const stats = [
  { value: "150+", label: "Erfolgreich abgeschlossene Projekte" },
  { value: "50+", label: "Zufriedene Kunden" },
  { value: "12", label: "Jahre Markterfahrung" },
  { value: "98%", label: "Kundenzufriedenheit" },
];

export function TrustBar() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="section-padding bg-surface-100/50">
      <div className="container-wide">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary/40 text-sm uppercase tracking-wider font-medium">
            Vertrauen von fuehrenden Unternehmen
          </span>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center mb-20"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group"
            >
              {/* Placeholder for client logos - replace with actual Image components */}
              <div className="w-24 h-12 flex items-center justify-center opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                <span className="text-primary font-semibold text-lg tracking-tight">
                  {client.name}
                </span>
              </div>
              {/* Uncomment when logos are available:
              <Image
                src={client.logo}
                alt={client.name}
                width={96}
                height={48}
                className="opacity-40 group-hover:opacity-70 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
              */}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-soft p-10 lg:p-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center lg:border-r lg:last:border-r-0 border-primary/10"
              >
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-primary/50 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
