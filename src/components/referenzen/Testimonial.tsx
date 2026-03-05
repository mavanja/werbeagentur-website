"use client";

import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Decorative Quote */}
      <div className="absolute -top-6 -left-4 text-accent/20 font-heading text-[120px] leading-none select-none">
        &ldquo;
      </div>
      
      <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 lg:p-12">
        <p className="font-body text-xl lg:text-2xl text-white/90 leading-relaxed italic mb-8">
          &ldquo;{quote}&rdquo;
        </p>
        
        <footer className="flex items-center gap-4">
          {/* Avatar Placeholder */}
          <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center">
            <span className="text-white font-heading text-xl font-bold">
              {author.charAt(0)}
            </span>
          </div>
          
          <div>
            <cite className="not-italic font-heading text-white font-semibold block">
              {author}
            </cite>
            <span className="text-white/60 text-sm">
              {role}
            </span>
          </div>
        </footer>
      </div>
    </motion.blockquote>
  );
}
