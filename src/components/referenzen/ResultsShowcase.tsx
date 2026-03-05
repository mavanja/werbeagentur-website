"use client";

import { motion } from "framer-motion";
import { CaseStudyResult } from "@/types";

interface ResultsShowcaseProps {
  results: CaseStudyResult[];
}

export function ResultsShowcase({ results }: ResultsShowcaseProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
      {results.map((result, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50" />
          
          <div className="relative bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 text-center hover:border-accent/30 transition-colors duration-300">
            {/* Metric Value */}
            <div className="mb-3">
              <span className="font-heading text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                {result.metric}
              </span>
            </div>
            
            {/* Metric Label */}
            <h4 className="font-heading text-lg font-semibold text-primary mb-2">
              {result.value}
            </h4>
            
            {/* Description */}
            {result.description && (
              <p className="text-sm text-neutral-dark/60">
                {result.description}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
