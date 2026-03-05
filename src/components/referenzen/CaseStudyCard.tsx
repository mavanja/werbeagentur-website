"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CaseStudy } from "@/types";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

export function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      <Link href={`/referenzen/${caseStudy.slug}`} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-primary/5 aspect-[4/3]">
          {/* Placeholder Image */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-primary/30 font-heading text-6xl font-bold">
              {caseStudy.client.charAt(0)}
            </span>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="text-white font-heading text-lg tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              Case Study ansehen →
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {/* Industry Badge */}
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-accent/10 text-accent rounded-full">
            {caseStudy.industry}
          </span>

          {/* Client & Title */}
          <h3 className="font-heading text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
            {caseStudy.title}
          </h3>
          
          <p className="text-sm text-neutral-dark/70 font-medium">
            {caseStudy.client}
          </p>

          {/* Short Description */}
          <p className="text-neutral-dark/60 text-sm leading-relaxed line-clamp-2">
            {caseStudy.shortDescription}
          </p>

          {/* Key Metric Teaser */}
          {caseStudy.results[0] && (
            <div className="pt-4 border-t border-primary/10">
              <span className="text-accent font-heading text-2xl font-bold">
                {caseStudy.results[0].metric}
              </span>
              <span className="ml-2 text-sm text-neutral-dark/60">
                {caseStudy.results[0].value}
              </span>
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
