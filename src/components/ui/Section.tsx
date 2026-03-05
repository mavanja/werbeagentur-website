'use client';

import { type ReactNode, type HTMLAttributes, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type SectionBackground = 'transparent' | 'light' | 'dark' | 'gradient' | 'dots' | 'grid';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  padding?: SectionPadding;
  background?: SectionBackground;
  animate?: boolean;
  animationDelay?: number;
}

const paddingClasses: Record<SectionPadding, string> = {
  none: '',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16 lg:py-20',
  lg: 'py-16 md:py-24 lg:py-32',
  xl: 'py-24 md:py-32 lg:py-40',
};

const backgroundClasses: Record<SectionBackground, string> = {
  transparent: '',
  light: 'bg-neutral-50',
  dark: 'bg-primary text-white',
  gradient: 'gradient-mesh',
  dots: 'dot-pattern',
  grid: 'grid-lines',
};

/**
 * Section Component
 * 
 * A semantic section wrapper with:
 * - Consistent vertical padding (responsive)
 * - Background variants
 * - Optional scroll-triggered animations
 */
export function Section({
  children,
  padding = 'lg',
  background = 'transparent',
  animate = true,
  animationDelay = 0,
  className = '',
  ...props
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const content = (
    <section
      ref={ref}
      className={`
        relative overflow-hidden
        ${paddingClasses[padding]}
        ${backgroundClasses[background]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {children}
    </section>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: animationDelay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {content}
    </motion.div>
  );
}
