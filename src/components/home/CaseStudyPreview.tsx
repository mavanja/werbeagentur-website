"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    id: "techstart",
    title: "TechStart Rebranding",
    client: "TechStart GmbH",
    category: "Branding",
    description:
      "Komplettes Rebranding fuer ein B2B SaaS-Startup. Von der Markenidentitaet bis zur neuen Website.",
    results: ["+200% Brand Awareness", "95% Kundenzufriedenheit"],
    imageUrl: "/images/cases/techstart-preview.jpg",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    href: "/referenzen/techstart",
  },
  {
    id: "greenlife",
    title: "GreenLife Kampagne",
    client: "GreenLife Bio",
    category: "Performance Marketing",
    description:
      "Erfolgreiche Product-Launch-Kampagne mit Social Media und Influencer Marketing.",
    results: ["+340% Conversions", "4.2x ROAS"],
    imageUrl: "/images/cases/greenlife-preview.jpg",
    gradient: "from-emerald-600 via-green-600 to-teal-600",
    href: "/referenzen/greenlife",
  },
];

export function CaseStudyPreview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-primary relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Referenzen
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Ausgewaehlte{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                Projekte
              </span>
            </h2>
          </div>
          <a
            href="/referenzen"
            className="group mt-6 lg:mt-0 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            Alle Projekte ansehen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.a
              key={study.id}
              href={study.href}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Placeholder Gradient (replace with actual images) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-80`}
                />
                {/* Uncomment when images are available:
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                */}

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <span>Case Study ansehen</span>
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-white/50 text-sm">{study.client}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-accent transition-colors">
                  {study.title}
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="flex flex-wrap gap-3">
                  {study.results.map((result) => (
                    <span
                      key={result}
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 text-accent px-4 py-2 text-sm font-semibold"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
